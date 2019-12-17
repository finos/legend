---
id: manage-eks-cluster
sidebar_label: Manage EKS Cluster
title: Manage EKS Cluster
---

## Update cluster configuration
```
cd ~/alloy-config
kubectl config set-context --current --namespace=alloy
CONTAINERS="cube execution foundry sdlc"
for CONTAINER in $CONTAINERS
do
    kubectl delete configmap $CONTAINER
    kubectl create configmap $CONTAINER --from-file=$CONTAINER/config
    kubectl rollout restart deploy/$CONTAINER
done
```

## Scale up/out cluster
To scale out:
```
aws autoscaling describe-auto-scaling-groups | grep AutoScalingGroupName
aws autoscaling update-auto-scaling-group --auto-scaling-group-name $GROUP_NAME --desired-capacity $NR_NODES
```

To scale up, follow the [AWS docs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/updating.stacks.walkthrough.html#update.walkthrough.instance.type)