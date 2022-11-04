import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';

import { aws_servicediscovery as service } from 'aws-cdk-lib';
import { Construct } from 'constructs';

interface EcsStackProps extends cdk.StackProps {
    vpc: ec2.Vpc;
};
  
export class EcsStack extends cdk.Stack {
    public legendCluster: ecs.Cluster;
    public legendNamespace: service.PrivateDnsNamespace;
    constructor(scope: Construct, id: string, props: EcsStackProps) {
        super(scope, id, props);
        const legendEcsCluster = new ecs.Cluster(this, 'legendEcsCluster', {
            vpc: props.vpc
        });
        const legendNamespace = new service.PrivateDnsNamespace(this, 'legendNamespace', {
            name: "legend",
            vpc: props.vpc,
          });
        this.legendCluster = legendEcsCluster;
        this.legendNamespace = legendNamespace;
    };
};