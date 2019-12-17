---
id: alloy-aws-deployment
sidebar_label: Alloy AWS deployment
title: Alloy AWS deployment
---

This document walks you through the deployment of Alloy using AWS services.

## Creating an Alloy deployer box
In order to initiate, configure and AWS resources, it is strongly advised to spinup an EC2 instance; all documentation below refers to this type of installation, although it would still be possible (though not recommended) to follow these steps by invoking commands from a local workstation.

Follow [docs on how to create a deployer box for Alloy](create-alloy-deployer-box).

## Create an EKS cluster
From the deployer box, follow the documented steps to setup the Alloy Kubernetes cluster, using AWS EKS; you will also need to configure MongoDB and GitLab endpoints, either on premise, or using hosted SaaS services, like [cloud.mongodb.com](cloud.mongodb.com) and [gitlab.com](gitlab.com).

## Deploy Alloy on K8S
When the Kubernetes cluster is ready, the Alloy manifests can be applied, [following the documented steps](deploy-alloy).

## Manage the Alloy K8S cluster
Check how to [manage the Alloy cluster](manage-eks-cluster) for maintenance and update operations.

## Install GitLab Runners
If you're using an on premise instance of GitLab, you will need to configure runners, in order to get access to some specific Alloy features (ie query and model mapping); [follow these docs to run GitLab Runners](deploy-gitlab-runners) on the existing EKS cluster.