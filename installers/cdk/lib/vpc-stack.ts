import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3_deployment from 'aws-cdk-lib/aws-s3-deployment';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';

import { Construct } from 'constructs';


export interface VpcStackProps extends cdk.StackProps{
    mongoDbPort: number,
    legendStudioPort: number,
    legendSdlcPort: number,
    legendEnginePort: number,
    gitlabAppId: string,
    gitlabAppSecret: string,
    storageBucket: s3.Bucket,
    domainName: string,
};

export class VpcStack extends cdk.Stack {
    public legendVpc: ec2.Vpc;
    public legendLoadBalancer: elbv2.ApplicationLoadBalancer;
    public legendUiConfigUrl: string;
    public legendHttpConfigUrl: string;
    public legendFargateEnvironment: {[key: string]:string};
    public loadBalancerDnsName: string;
    public legendCertificate: acm.Certificate;
    constructor(scope: Construct, id: string, props: VpcStackProps) {
        super (scope, id, props);

        const legendVpc = new ec2.Vpc(this, 'legendVpc', {
            enableDnsHostnames: true,
            enableDnsSupport: true,
            subnetConfiguration: [
                {
                    name: 'legend-public',
                    subnetType: ec2.SubnetType.PUBLIC,
                    mapPublicIpOnLaunch: true,
                },
                {
                    name: 'legend-private',
                    subnetType: ec2.SubnetType.PRIVATE_WITH_NAT,
                },
            ],
        });
        const legendLoadBalancer = new elbv2.ApplicationLoadBalancer(this, 'legendLoadBalancer', {
            vpc: legendVpc,
            internetFacing: true,
            loadBalancerName: 'legend-' + id,
        });
        this.legendVpc = legendVpc;
        this.legendLoadBalancer = legendLoadBalancer;
        
        const hostedZone = route53.HostedZone.fromLookup(this, 'hostedZone', {
            domainName: props.domainName,
        });

        const legendRecord = new route53.CnameRecord(this, 'legendRecord', {
            recordName: 'legend',
            zone: hostedZone,
            domainName: legendLoadBalancer.loadBalancerDnsName,
        });

        this.loadBalancerDnsName = legendRecord.domainName;

        const legendCertificate = new acm.Certificate(this, 'legendCertificate', {
            domainName: legendRecord.domainName,
            validation: acm.CertificateValidation.fromDns(hostedZone),
        });

        this.legendCertificate = legendCertificate;
        const legendConfigurationDeployment = new s3_deployment.BucketDeployment(this, 'uiConfig.json', {
            sources: [
                s3_deployment.Source.jsonData('config/httpConfig.json', {
                    "pac4j": {
                        "callbackPrefix": "/studio/log.in",
                        "bypassPaths": ["/studio/admin/healthcheck"],
                        "mongoUri": "mongodb://admin:password@legend-mongodb.legend:" + props.mongoDbPort,
                        "mongoDb": "legend",
                        "clients": [
                            {
                                "org.finos.legend.server.pac4j.gitlab.GitlabClient": {
                                    "name": "gitlab",
                                    "clientId": props.gitlabAppId,
                                    "secret": props.gitlabAppSecret,
                                    "discoveryUri": "https://gitlab.com/.well-known/openid-configuration",
                                    "scope": "openid profile api"
                                }
                            }
                        ],
                        "mongoSession": {
                            "enabled": true,
                            "collection": "userSessions"
                        }
                    },
                    "html5Router": true,
                    "routerExemptPaths": [
                        "/editor.worker.js",
                        "/json.worker.js",
                        "/editor.worker.js.map",
                        "/json.worker.js.map",
                        "/version.json",
                        "/config.json",
                        "/favicon.ico",
                        "/static"
                    ],
                    "localAssetPaths": {
                        "/studio/config.json" : "/config/uiConfig.json"
                    },
                    "uiPath": "/studio",
                    "server": {
                        "type": "simple",
                        "applicationContextPath": "/",
                        "adminContextPath": "/studio/admin",
                        "connector": {
                            "type": "http",
                            "port": props.legendStudioPort,
                        }
                    },
                    "logging": {
                        "level": "INFO",
                        "loggers" : {
                            "root": { "level": "INFO"},
                            "org.pac4j": { "level": "INFO"}
                        },
                        "appenders": [
                            {
                                "type": "console"
                            },
                        ],
                    },
                }),
                s3_deployment.Source.jsonData('config/uiConfig.json', {
                    "appName": "studio",
                    "env": "prod",
                    "sdlc": {
                        "url": "https://" + legendRecord.domainName + ":" + props.legendSdlcPort + "/api"
                    },
                    "engine": {
                        "url": "https://" + legendRecord.domainName + ":" + props.legendEnginePort + "/api"
                    },
                    "depot": {
                        "url": "http://localhost:9090",
                    },
                    "extensions": {
                        "core": {
                            "TEMPORARY__disableSDLCProjectCreation": false,
                            "TEMPORARY__disableServiceRegistration": true
                        }
                    }
                })
            ],
            destinationBucket: props.storageBucket,
        });
        
        this.legendUiConfigUrl = props.storageBucket.urlForObject('config/uiConfig.json');
        this.legendHttpConfigUrl = props.storageBucket.urlForObject('config/httpConfig.json');

        const legendFargateEnvironment = {
            "CONFIGURATION_URL_UICONFIG": props.storageBucket.urlForObject('config/uiConfig.json'),
            "CONFIGURATION_URL_HTTPCONFIG": props.storageBucket.urlForObject('config/httpConfig.json'),
            "MONGODB_URI": "mongodb://admin:password@legend-mongodb.legend:" + props.mongoDbPort,
            "MONGODB_USERNAME": "admin",
            "MONGODB_PASSWORD": "password",
            "MONGODB_PORT": props.mongoDbPort.toString(),
            "MONGODB_NAME": "legend",
            "MONGO_SESSION_ENABLED": "true",
            "GITLAB_HOST": "gitlab.com",
            "GITLAB_APP_ID": props.gitlabAppId,
            "GITLAB_APP_SECRET": props.gitlabAppSecret,
            "SDLC_PORT": props.legendSdlcPort.toString(),
            "SDLC_ADMIN_PORT": "7071",
            "SDLC_PROJECT_TAG": "legend",
            "SDLC_REDIRECT_URI": "https://"+ legendRecord.domainName + ":" + props.legendSdlcPort + "/api/auth/callback",
            "SDLC_MAVEN_VERSION": "0.91.1",
            "ENGINE_MAVEN_VERSION": "3.15.3",
            "ENGINE_PORT": props.legendEnginePort.toString(),
            "METADATA_PURE_HOST": "localhost",
            "METADATA_PURE_PORT": "8090",
            "METADATA_ALLOY_HOST": "localhost",
            "METADATA_ALLOY_PORT": "8090",
            "TEMP_DB_PORT": "9092",
        };
        this.legendFargateEnvironment = legendFargateEnvironment;

        new cdk.CfnOutput(this, 'legendCallbackBlock', {
            value: "\n" +
              "https://" + legendRecord.domainName + ":" + props.legendEnginePort + "/callback" + "\n" +
              "https://" + legendRecord.domainName + ":" + props.legendSdlcPort + "/api/callback" + "\n" +
              "https://" + legendRecord.domainName + ":" + props.legendSdlcPort + "/api/pac4j/login/callback" + "\n" +
              "https://" + legendRecord.domainName + ":" + props.legendStudioPort + "/studio/log.in/callback" + "\n",
            description: "Block of callback URLs for GitLab application",
        });

    };
};