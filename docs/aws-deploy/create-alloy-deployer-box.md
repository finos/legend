---
id: create-alloy-deployer-box
sidebar_label: Create Alloy Deployer box
title: Create Alloy Deployer box
---

Follow these steps to configure an AWS box to run all Kubernetes deployment steps. Below are also documented AWS configurations needed to run Alloy on EKS.

## AWS configuration
- Create an IAM user called `alloy-deployer`
- Configure AWS programmatic access, on behalf of AWS user `alloy-deployer`
- Check user permissions via AWS IAM and make sure that following permissions are assigned: `AmazonEKSClusterPolicy`, `AmazonEKSWorkerNodePolicy`, `AmazonEC2ContainerRegistryFullAccess`, `AmazonEKSServicePolicy`
- Edit the default VPC security group and add an inbound rule from all sources on port `TCP 27017`

## Install yum packages
```
sudo wget -r --no-parent -A 'epel-release-*.rpm' http://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/
sudo rpm -Uvh dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-*.rpm
sudo yum-config-manager --enable epel*

echo -e "[mongodb-org-3.6] \nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.6/x86_64/\ngpgcheck=1 \nenabled=1 \ngpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc" | sudo tee /etc/yum.repos.d/mongodb-org-3.6.repo

sudo yum -y install docker git certbot python2-certbot-apache mongodb-org-shell
```

## Install Docker and Kubernetes
```
sudo usermod -aG docker ec2-user
# If this fails, logout and login again as ec2-user
sudo service docker restart

# Install kubectl cli
curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl
chmod +x kubectl
sudo mv kubectl /usr/bin

# Install aws-iam-authenticator
curl -o aws-iam-authenticator https://amazon-eks.s3-us-west-2.amazonaws.com/1.14.6/2019-08-22/bin/linux/amd64/aws-iam-authenticator
chmod +x aws-iam-authenticator
sudo mv aws-iam-authenticator /usr/bin

# Follow https://github.com/kubernetes-sigs/aws-iam-authenticator/issues/174#issuecomment-450651720
# and https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html
# aws-iam-authenticator verify -t k8s-aws-v1.really_long_token -i Alloy

# Configure AWS access - use ID and secret from AWS IAM alloy-deployer user
aws configure
```

## Checkout Alloy configuration
```
cd ~
git clone https://maoo:7f57d01c459f6b9975f5785e97eabf1a33df0ba4@github.com/finos-admin/alloy-config.git
```
Use `git branch -l` and `git checkout -b` to use the right branch.

## Next

You can now [create and EKS cluster for Alloy](create-eks-cluster-alloy)