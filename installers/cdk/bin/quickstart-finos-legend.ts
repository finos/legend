#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';


import { Construct } from 'constructs';
import { VpcStack } from '../lib/vpc-stack';
import { EcsStack } from '../lib/ecs-stack';
import { StorageStack } from '../lib/storage-stack';
import { MongoDbStack } from '../lib/mongo-stack';
import { ContainerHost, LegendServiceStack } from '../lib/legend-service-stack';

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

class LegendApp extends Construct{

  validateEnv(name: string, value: string)
  {
    if (value == undefined)
    {
      throw new Error("Parameter '" + name + "' has not been defined in the cdk context/env");
    }

    if (value.trim().length == 0)
    {
      throw new Error("Parameter '" + name + "' is an empty string in the cdk context/env");
    }
  }

  constructor(scope: cdk.App, id: string){
    super(scope, id);
    const legendEnginePort = 6060;
    const legendSdlcPort = 7070;
    const legendStudioPort = 443;
    const mongoDbPort = 27017;

    const providedDomainName = this.node.tryGetContext('domainName');
    const gitlabAppId = this.node.tryGetContext('gitlabAppId');
    const gitlabAppSecret = this.node.tryGetContext('gitlabAppSecret');

    this.validateEnv("domainName", providedDomainName);
    this.validateEnv("gitlabAppId", gitlabAppId);
    this.validateEnv("gitlabAppSecret", gitlabAppSecret);
  
    const legendStorageStack = new StorageStack(this, 'storage-stack', {
      env: env,
    });
    const legendVpcStack = new VpcStack(this, 'vpc-stack', {
      env: env,
      gitlabAppId: gitlabAppId,
      gitlabAppSecret: gitlabAppSecret,
      mongoDbPort: mongoDbPort,
      legendEnginePort: legendEnginePort,
      legendSdlcPort: legendSdlcPort,
      legendStudioPort: legendStudioPort,
      storageBucket: legendStorageStack.configBucket,
      domainName: providedDomainName,
    });
    
    const legendEcsStack = new EcsStack(this, 'ecs-stack', {
      env: env,
      vpc: legendVpcStack.legendVpc,
    });

    const legendMongoStack = new MongoDbStack(this, 'mongo-stack', {
      env: env,
      ecsCluster: legendEcsStack.legendCluster,
      legendNamespace: legendEcsStack.legendNamespace,
      mongoDbPort: mongoDbPort,
    });
    const mongoConnections = legendMongoStack.service.connections;

    
    const legendEngineStack = new LegendServiceStack(this, 'engine-stack', {
      env: env,
      cpu: 512,
      memoryLimitMiB: 2048,
      cluster: legendEcsStack.legendCluster,
      serviceTag: 'engine',
      environment: legendVpcStack.legendFargateEnvironment,
      loadBalancer: legendVpcStack.legendLoadBalancer,
      containerHost: ContainerHost.DockerHub,
      containerImage: 'finos/legend-engine-server:snapshot',
      port: legendEnginePort,
      namespace: legendEcsStack.legendNamespace,
      healthCheckPath: '/api/server/v1/info',
      vpc: legendVpcStack.legendVpc,
      certificate: legendVpcStack.legendCertificate,
    });
    const legendEngineConnections = legendEngineStack.service.connections;

    mongoConnections.allowFrom(legendEngineConnections, ec2.Port.tcp(mongoDbPort))

    const legendSdlcStack = new LegendServiceStack(this, 'sdlc-stack', {
      env: env,
      cpu: 512,
      memoryLimitMiB: 2048,
      cluster: legendEcsStack.legendCluster,
      serviceTag: 'sdlc',
      environment: legendVpcStack.legendFargateEnvironment,
      loadBalancer: legendVpcStack.legendLoadBalancer,
      containerHost: ContainerHost.DockerHub,
      containerImage: 'finos/legend-sdlc-server:snapshot',
      port: legendSdlcPort,
      namespace: legendEcsStack.legendNamespace,
      healthCheckPath: '/api/info',
      vpc: legendVpcStack.legendVpc,
      certificate: legendVpcStack.legendCertificate,
    });
    const legendSdlcConnections = legendSdlcStack.service.connections;
    mongoConnections.allowFrom(legendSdlcConnections, ec2.Port.tcp(mongoDbPort));
    legendEngineConnections.allowFrom(legendSdlcConnections, ec2.Port.tcp(legendEnginePort));

    
    const legendStudioStack = new LegendServiceStack(this, 'studio-stack', {
      env: env,
      cpu: 512,
      memoryLimitMiB: 2048,
      cluster: legendEcsStack.legendCluster,
      serviceTag: 'studio',
      environment: legendVpcStack.legendFargateEnvironment,
      loadBalancer: legendVpcStack.legendLoadBalancer,
      containerHost: ContainerHost.ECR,
      containerImage: 'legend-studio-repo:latest',
      port: legendStudioPort,
      namespace: legendEcsStack.legendNamespace,
      healthCheckPath: '/studio/config.json',
      vpc: legendVpcStack.legendVpc,
      certificate: legendVpcStack.legendCertificate,
    });
    const legendStudioConnections = legendStudioStack.service.connections;
    mongoConnections.allowFrom(legendStudioConnections, ec2.Port.tcp(mongoDbPort));
    
  };
};

const app = new cdk.App();
new LegendApp(app, 'dev');