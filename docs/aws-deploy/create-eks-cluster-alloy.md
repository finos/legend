---
id: create-eks-cluster-alloy
sidebar_label: Create EKS Cluster for Alloy
title: Create EKS Cluster for Alloy
---

## Configure MongoDB
Visit https://cloud.mongodb.com and create a new cluster, using default configurations and minimum specs. See the `AlloyOnFinos` cluster as example on https://cloud.mongodb.com/v2/5da5d29679358e19bf4d15fc#clusters

Configure IP whitelisting accessing `Network Access`, adding public IPs of the worker nodes, as soon as they are running, see below. **NOTE!** changes to the Kubernetes cluster may lead to node public IP changes, which need to be applied to this IP whitelist.

## Configure GitLab

Create an Application in GitLab, from the Admin area; use the following settings:

- Check `Trusted`
- Scopes: api, open_id, profile
- Callback URI
```
https://$HOST/foundry/log.in/callback
https://$HOST/sdlc/pac4j/login/callback
https://$HOST/sdlc/auth/callback
https://$HOST/exec/callback
https://$HOST/cube/callback
```

Currently, there are 2 hosts available (`$HOST`), `alloy.finos.org` or `cloud.alloy.finos.org`.

## Create EKS Cluster

This command should create the EKS cluster, consisting of 2 CloudFormation stack, one for the cluster itself, one for the node group `standard-workers`.

Make sure to create an EC2 keypair in AWS; in the following example it's called `alloy-finos`.

Currently, there are 2 clusters created (`$CLUSTER_NAME`), `AlloyClusterCLI` and `AlloyFinosCloud`.
```
export CLUSTER_NAME=<cluster name>
eksctl create cluster \
--name $CLUSTER_NAME \
--version 1.14 \
--ssh-access \
--ssh-public-key=alloy-finos \
--nodegroup-name standard-workers \
--node-type t3a.medium \
--nodes 3 \
--nodes-min 3 \
--nodes-max 3 \
--node-ami auto
```

To validate the stack after creation, run
```
eksctl utils describe-stacks --region=us-east-1 --name=$CLUSTER_NAME
```

Finally, update the k8s configuration in `/home/ec2-user/.kube/config`. This will specify which cluster to use for the `kubectl` command.
```
aws eks --region us-east-1 update-kubeconfig --name $CLUSTER_NAME
```

You can now run `kubectl` commands:
```
kubectl get svc
kubectl get nodes
```

## Configure cluster
```
# Create alloy namespace
kubectl 
# Install NGINX ingress
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml

# Install CNI metrics plugin
# Make sure to reset the MongoDB cloud instance network access
kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/v1.5/aws-k8s-cni.yaml
```

## Generate SSL certificates
```
kubectl create namespace cert-manager
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v0.11.0/cert-manager.yaml --validate=false
kubectl apply -f alloy-config/ingress
```

## Configure DNS
Get the hostname of the ingress by running:
```
kubectl get ingress -n alloy
```
Grab the address from the result and create a `CNAME` entry on your DNS configuration.

## Create the Alloy namespace
```
kubectl create namespace alloy
kubectl config set-context --current --namespace=alloy
```

## Security Groups
TODO

## Next

You can now [deploy Alloy](deploy-alloy) and [manage the EKS cluster](manage-eks-cluster)