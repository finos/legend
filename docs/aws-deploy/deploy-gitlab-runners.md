---
id: deploy-gitlab-runners
sidebar_label: Deploy GitLab Runners
title: Deploy GitLab Runners
---

Choose which EKS cluster to use with the `kubectl` command:
```
aws eks --region us-east-1 update-kubeconfig --name $CLUSTER_NAME
```

Now run the following commands:
```
kubectl create namespace alloy-gitlab
cd gitlab
helm install --namespace alloy-gitlab gitlab-runner -f values.yml gitlab/gitlab-runner
```

Visit https://gitlab.alloy.finos.org/admin/runners and you should see your runner listed.