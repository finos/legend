import * as cdk from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as ecr from 'aws-cdk-lib/aws-ecr';

import { aws_servicediscovery as service } from 'aws-cdk-lib';
import { Construct } from 'constructs';


export enum ContainerHost {
  DockerHub,
  ECR,
};

interface LegendServiceStackProps extends cdk.StackProps {
    cluster: ecs.Cluster,
    containerHost: ContainerHost,
    containerImage: string,
    cpu: number,
    memoryLimitMiB: number,
    environment: {[key: string]:string},
    serviceTag: string,
    port: number,
    namespace: service.PrivateDnsNamespace,
    loadBalancer: elbv2.ApplicationLoadBalancer,
    healthCheckPath: string,
    vpc: ec2.Vpc,
    certificate: acm.Certificate,
};

export class LegendServiceStack extends cdk.Stack {
    public taskDefinition: ecs.FargateTaskDefinition;
    public service: ecs.FargateService;
    constructor(scope: Construct, id: string, props: LegendServiceStackProps) {
      super(scope, id, props);
      var containerImage: ecs.ContainerImage;
      const securityGroup = new ec2.SecurityGroup(this, props.serviceTag + '-sg', {
        vpc: props.vpc
      })
      const taskDefinition = new ecs.FargateTaskDefinition(this, props.serviceTag + '-taskDef', {
        cpu: props.cpu,
        memoryLimitMiB: props.memoryLimitMiB,
      });
      if (props.containerHost == ContainerHost.DockerHub) {
        containerImage = ecs.ContainerImage.fromRegistry(props.containerImage);
      } else {
        const splitImage = props.containerImage.split(':');
        containerImage = ecs.ContainerImage.fromEcrRepository(ecr.Repository.fromRepositoryName(this, 'legendStudioEcrRepository', splitImage[0]), splitImage[1]);
      }
      const container = taskDefinition.addContainer(props.serviceTag + '-container', {
        image: containerImage,
        environment: props.environment,
        logging: ecs.LogDrivers.awsLogs({
          streamPrefix: "legend-" + props.serviceTag,
        }),
      });
      container.addPortMappings({
        containerPort: props.port,
        protocol: ecs.Protocol.TCP,
      });
      
      const service = new ecs.FargateService(this, props.serviceTag + '-service', {
        cluster: props.cluster,
        taskDefinition: taskDefinition,
        cloudMapOptions: {
          cloudMapNamespace: props.namespace,
          name: "legend-" + props.serviceTag,
          containerPort: props.port,
        },
        serviceName: "legend-" + props.serviceTag,
        securityGroups: [
          securityGroup,
        ],
      });
      
      const legendListener = props.loadBalancer.addListener(props.serviceTag + '-listener', {
        port: props.port,
        protocol: elbv2.ApplicationProtocol.HTTPS,
      });
      legendListener.addCertificates('legendListenerCertificate', [props.certificate]);

      service.registerLoadBalancerTargets(
        {
          containerName: props.serviceTag + '-container',
          containerPort: props.port,
          newTargetGroupId: 'ECS',
          listener: ecs.ListenerConfig.applicationListener(legendListener, {
            protocol: elbv2.ApplicationProtocol.HTTP,
            healthCheck: {
              enabled: true,
              path: props.healthCheckPath,
              healthyHttpCodes: "200,401"
            },
          }),
        },
      );
      this.taskDefinition = taskDefinition;
      this.service = service;

    }
  };