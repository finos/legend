# Overview 

This guide uses Terraform to deploy a set of infrastructure in AWS. 

# Pre-requisites

* An AWS account 
* AWS account's access key id and secret access key

# Infrastructure Security 
__This guide follows basic security controls such as use of a AWS VPC etc.__

__However, it is not hardened for production use.__

# Install

## 1/ Generate SSH key
The install procedure involves logging into the AWS EC2 box via SSH and running a set of scripts. 

SSH login requires an SSH key pair. Create a key pair and add the public key to ```validate/main.tf```. See ```bastion_public_key = "ssh-rsa __FIXME__"```.

See the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) for generating keypairs.

Also, for security reasons, we limit inbound network access to the EC2 box from a single IP. 

Add the public IP (of the form xxx.xx.xx.xxx/32) of the host from which you will be accessing Legend components to ```validate/main.tf```. See ```inbound_ip1 = "__FIXME__"```.

If you do not have a host with a permanent static IP, you can get the IP address assigned by your ISP by using a site like https://whatismyipaddress.com/. 

## 2/ Run Terraform 

```
$ export AWS_ACCESS_KEY_ID="your access key"
$ export AWS_SECRET_ACCESS_KEY="your secret key"
$ export AWS_DEFAULT_REGION="us-east-1"

$ cd validate 
$ terraform plan
$ terraform apply
```
## 3/ Login

Once the Terraform apply is complete, you can login to the box as follows.

```
ssh -i <path to to the SSH private key> ec2-user<ec2 host name>
```
where ```<ec2 host name>``` can be obtained from the AWS web console/CLI.
