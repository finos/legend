# Finos Legend - One Click Setup on AWS

This repo contains all the resources to setup Legend on AWS cloud using EKS and helm charts leveraging Terraform (IaC). This install the following components:

* Studio
* Engine
* SDLC

The setup takes care of all the infrastructure to setup Legend. Updates to the application is also possible to maintain. All the values are defined to best options available, but if needed it can be customized.

Also, Provided is a sample Gitlab-CI.yml file which can be used to run the code in Gitlab-CI. The same can be run from different CI/CD tools like Github Actions, Jenkins etc.,

## Prerequisites:

1. Valid AWS Account
2. Gitlab.com account to create application for SDLC.

## Dependencies:
Legend module (image) versions which are pulled from Legend repository.

## Terraform, EKS, Helm chart Terraform files:

versions.tf     --  contains versions of the providers being used

kubernetes.tf   --  provider configuration

helm.tf         --  provider configuration

variables.tf    --  contains all the variable

outputs.tf      --  all the values you want to print/cross module reference

irsa.tf         --  setting up the service account for EKS

acm.tf          --  needed for redeployments.

vpc.tf          --  uses terraform vpc module to create vpc, cidr range, azs, subnets, nat gateway, 
                    enable_dhcp_options (true), enable_dns_hostnames (true), dhcp_options_domain_name_servers (["AmazonProvidedDNS"]) values needed
                    In order for the private hosted zone to properly route traffic to your API server, your VPC must have
                    "kubernetes.io/role/elb" = 1 tags are needed for enabling kubernetes loadbalancer deployments

eks-cluster.tf  --  uses terraform eks module to define cluster, node_groups, instance type, capacity, storage, subnets, vpc

default_ingress.tf  --  creates a default ingress to create an ALB and get the public dns name.

aws_iam_policy_alb.tf  --  aws alb ingress controller policy.

aws_eks_load_balancer.tf  --  aws alb ingress controller.

legend_helm_release.tf --  contains terraform helm_release resource, with helm repo and chart information. define helm application release params here. 
                    Refer helm documentation for that application.

tfstate_backend.tf -- cannot use variables, values have to hard coded (terraform limitation). contains the s3 bucket information for tfstate stored remotely. Bucket name has to be updated manually, it has to match the bucket name you used while creating Terraform backend resource [here](#steps-for-creating-terraform-backend).

terraform/tfbackend (folder) -- contains the configuration to setup terraform state backend resources. (one time activity per account, if shared across accounts then modify iam_policy.tf file).

helm/legend   --  contains all the code related to legend \
              --  values.yaml contains the versions of Legend components. If you need to use a different version, changes need to be done here.


## Steps for creating Terraform backend:

This step needs to be run first to ensure the TF state file stored in a S3 bucket in a different region. Default: us-west-2.

Note: If you are going to use CLI, you can create an user using: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html

1. Go to Terraform/tfbackend folder and Do\
   terraform init\
   terraform plan\
   terraform apply
   - Note: variable assume_policy_by assumes the admin role by default. If you are using a custom role which has all the permissions, please update the role in this variable.

2. After the Bucket is created, please update the bucket name in Terraform/legend/tfstate_backend.tf file where bucket name by default will be "${ACCOUNT-ID}-tfstate-legend-bucket". This is because of a limitation on  Terraform refered here. https://github.com/hashicorp/terraform/issues/13022

## Steps to install Legend from Commandline using Terraform locally:

1. Create an account in gitlab.com (if you do not have one already)
2. If you don't already have a Gitlab OAuth application, first, navigate to User Settings > Applications and create an application with the following parameters:
    Name: Legend Demo \
    Redirect URI: \
    http://aws.amazon.com/engine/callback \
    http://aws.amazon.com/sdlc/api/auth/callback \
    http://aws.amazon.com/sdlc/api/pac4j/login/callback \
    http://aws.amazon.com/studio/login/callback \
    Enable the "Confidential" check box \
    Enable these scopes: openid, profile, api \
    Finally, "Save Application" 
3. Create an environment variable (local or pipeline) TF_VAR_GITLAB_OAUTH_CLIENT_ID, set the value to "Application ID" value from step 2
4. Create an environment variable (local or pipeline) TF_VAR_GITLAB_OAUTH_SECRET, set the value to "Secret" value from step 2
5. Go to Terraform/legend folder and do\
   terraform init\
   terraform plan\
   terraform apply

   This step may take 20-30 minutes depending on your environment.

6. Once the cluster is created, go to gitlab.com and update the application redirect_uris with the legend service endpoints. Below are the uri's, replace the place holder string with application load balancer public endpoint, which can be obtained from terraform output values or AWS console (EC2 --> Load Balancers --> select your load balancer --> Description --> DNS Name). Example application load balancer public endpoint: legend-alb-XXXXXXXXX.us-east-1.elb.amazonaws.com
http://{loadbalancer-endpoint}/studio/log.in/callback
http://{loadbalancer-endpoint}/engine/callback
http://{loadbalancer-endpoint}/sdlc/api/auth/callback
http://{loadbalancer-endpoint}/sdlc/api/pac4j/login/callback


## Verification

Access legend studio ui using the http://{studio-loadbalancer-endoint}/studio. Wait for about 5 minutes for the LoadBalancer to be provisioned.
 - if prompted with gitlab.com screen, login with your gitlab.com credentials and authorize redirects.

## Steps to update Legend after install:

1. Go to Terraform/legend folder and run\
    terraform init\
    terraform plan\
    terraform apply

   Note: Please ensure you run terraform plan before you apply to observe the changes.

## Insfrastructure cleanup
NOTE: This will destroy all the Legend AWS infrastructure components, please be sure before you run this.
      There should be two separate destroy runs. First run the destroy for Terraform/legend and then for Terraform/tfbackend. But before running destroy for tfbackend, bucket must be emptied. The s3 bucket contains tf state files. Steps to delete objects from versioned bucket [here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeletingObjectVersions.html)

1. Go to Terraform/legend folder and do\
    terraform destroy

## Constraints
1. Current config exposes only HTTP. HTTPS will require a custom dns and generation of TLS certification (planned for future).
2. We are just using default credentials for the mongo db setup which can be updated on helm values or passing as variable.
