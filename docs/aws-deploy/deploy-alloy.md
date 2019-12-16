---
id: deploy-alloy
sidebar_label: Deploy Alloy
title: Deploy Alloy
---

Check if docker is properly running, using `docker ps`; if not logout and login back in the box; to lo into ECR docker registry, run
`$(aws ecr get-login --no-include-email --region us-east-1)`

Choose which EKS cluster to use with the `kubectl` command:
```
aws eks --region us-east-1 update-kubeconfig --name $CLUSTER_NAME
```

Also make sure to use the `alloy` namespace as default one:
```
kubectl config set-context --current --namespace=alloy
```

**TODO** - uploading new images and deploying are separate processes, define 2 different sections in this page.

## Download Alloy images
Run `~/alloy-config/sfx-download.sh`; if will populate `~/alloy-incoming` folder.

## Deploy Kubernetes manifests

### Cube
```
docker load -i ~/alloy-incoming/qubits_alloy-cube.tar.gz
IMAGE_VERSION=`docker images | grep qubits/alloy-cube | head -1 | awk '{print $2}'`
docker tag qubits/alloy-cube:$IMAGE_VERSION 730743682544.dkr.ecr.us-east-1.amazonaws.com/alloy:cube-$IMAGE_VERSION
docker push 730743682544.dkr.ecr.us-east-1.amazonaws.com/alloy:cube-$IMAGE_VERSION
kubectl delete configmap cube -n alloy
kubectl create configmap cube --from-file=cube/config -n alloy
kubectl apply -f cube/k8s
```

### Execution
```
docker load -i ~/alloy-incoming/qubits_alloy-exec.tar.gz
IMAGE_VERSION=`docker images | grep bracej/alloy-execution | head -1 | awk '{print $2}'`
docker tag bracej/alloy-execution:$IMAGE_VERSION 730743682544.dkr.ecr.us-east-1.amazonaws.com/alloy:execution-$IMAGE_VERSION
docker push 730743682544.dkr.ecr.us-east-1.amazonaws.com/alloy:execution-$IMAGE_VERSION
cd ~/alloy-config/execution
kubectl delete configmap execution -n alloy
kubectl create configmap execution --from-file=execution/config -n alloy
kubectl apply -f execution/k8s
```

### Foundry
```
docker load -i ~/alloy-incoming/qubits_alloy-foundry.tar.gz
IMAGE_VERSION=`docker images | grep qubits/alloy-foundry | head -1 | awk '{print $2}'`
docker tag qubits/alloy-foundry:$IMAGE_VERSION 730743682544.dkr.ecr.us-east-1.amazonaws.com/alloy:foundry-$IMAGE_VERSION
docker push 730743682544.dkr.ecr.us-east-1.amazonaws.com/alloy:foundry-$IMAGE_VERSION
kubectl delete configmap foundry -n alloy
kubectl create configmap foundry --from-file=foundry/config -n alloy
kubectl apply -f foundry/k8s
```

Make sure letsencrypt issuer is ready `kubectl describe clusterissuer letsencrypt`.

### SDLC
```
docker load -i ~/alloy-incoming/bracej_alloy-sdlc.tar.gz
IMAGE_VERSION=`docker images | grep bracej/alloy-sdlc | head -1 | awk '{print $2}'`
docker tag bracej/alloy-sdlc:$IMAGE_VERSION 730743682544.dkr.ecr.us-east-1.amazonaws.com/alloy:sdlc-$IMAGE_VERSION
docker push 730743682544.dkr.ecr.us-east-1.amazonaws.com/alloy:sdlc-$IMAGE_VERSION
kubectl delete configmap sdlc -n alloy
kubectl create configmap sdlc --from-file=sdlc/config -n alloy
kubectl apply -f sdlc/k8s
```
## Test
```
kubectl get pods -n alloy
kubectl describe pod $POD_NAME
kubectl get nodes
```

## Next
You can now [follow the user guide](user-guide) and start enjoying PURE/Alloy!