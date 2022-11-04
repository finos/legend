import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as ecr from 'aws-cdk-lib/aws-ecr';

import { Construct } from 'constructs';

export class StorageStack extends cdk.Stack{
    public configBucket: s3.Bucket;
    constructor(scope: Construct, id: string, props: cdk.StackProps) {
        super(scope, id, props);
            
        const legendConfigurationBucket = new s3.Bucket(this, 'legendConfiguration', {
            publicReadAccess: true,
        });
        const legendStudioEcrRepository = ecr.Repository.fromRepositoryName(this, 'legendStudioEcrRepository', 'legend-studio-repo');
        this.configBucket = legendConfigurationBucket;
    };
};