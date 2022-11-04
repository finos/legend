import * as cdk from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { aws_servicediscovery as service } from 'aws-cdk-lib';

import { Construct } from 'constructs';

export interface MongoDbStackProps extends cdk.StackProps {
    ecsCluster: ecs.Cluster,
    mongoDbPort: number,
    legendNamespace: service.PrivateDnsNamespace,
};

export class MongoDbStack extends cdk.Stack{
    public service: ecs.FargateService;
    constructor(scope: Construct, id: string, props: MongoDbStackProps) {
        super(scope, id, props);
        const legendMongoTaskDefinition = new ecs.FargateTaskDefinition(this, 'legendMongo', {
            cpu: 512,
            memoryLimitMiB: 1024,
        });
        const legendMongoContainer = legendMongoTaskDefinition.addContainer('legendMongo', {
            image: ecs.ContainerImage.fromRegistry('mongo:4.2'),
            environment: {
                "MONGO_INITDB_ROOT_USERNAME": "admin",
                "MONGO_INITDB_ROOT_PASSWORD": "password"
            },
            logging: ecs.LogDrivers.awsLogs({
                streamPrefix: "legend-mongodb",
            }),
        });
        legendMongoContainer.addPortMappings({
            containerPort: props.mongoDbPort,
            protocol: ecs.Protocol.TCP,
        });
      
        const legendMongoFargateService = new ecs.FargateService(this, 'legendMongoService', {
            cluster: props.ecsCluster,
            taskDefinition: legendMongoTaskDefinition,
            cloudMapOptions: {
                cloudMapNamespace: props.legendNamespace,
                name: "legend-mongodb",
                containerPort: props.mongoDbPort,
            },
            serviceName: "legend-mongodb",
        });
        const legendMongoConnections = legendMongoFargateService.connections;
        this.service = legendMongoFargateService;
    };
};