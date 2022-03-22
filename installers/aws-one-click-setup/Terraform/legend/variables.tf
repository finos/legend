variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "instance_count" {
  description = "Number of instances to provision"
  type        = number
  default     = 2
}

## EKS Cluster

variable "eks_module_version" {
  description = "TF EKS Module Version"
  type        = string
  default     = "18.2.3"
}

variable "eks_cluster_version" {
  description = "AWS EKS Cluster Version"
  type        = string
  default     = "1.21"
}

variable "eks_cluster_name" {
  description = "AWS EKS Cluster Name"
  type        = string
  default     = "legendeks"
}

variable "cluster_endpoint_private" {
  description = "EKS Cluster endpoint private access"
  type        = bool
  default     = true
}

variable "cluster_endpoint_public" {
  description = "EKS Cluster endpoint public access"
  type        = bool
  default     = true
}

variable "create_launch_template" {
  description = "Needed to enable pre_userdata field on node. pre_userdata is where we pass commands to install ssm agent on the node"
  type        = bool
  default     = true
}

variable "enable_ssm" {
  description = "flag to decide whether to enable ssm or not"
  type        = bool
  default     = true
}

variable "pre_userdata" {
  description = "variable if you would like to pass any userdata"
  type        = string
  default     = ""
}

## VPC

variable "vpc_name" {
  description = "VPC for the Legend app"
  type        = string
  default     = "legend-eks-vpc"
}

variable "vpc_cidr" {
  description = "VPC CIDR block"
  type        = string
  default     = "10.0.0.0/16"

}

variable "public_subnet_count" {
  description = "Number of public subnets."
  type        = number
  default     = 2
}

variable "private_subnet_count" {
  description = "Number of private subnets."
  type        = number
  default     = 2
}

variable "priv_cidr_newbits" {
  description = "number of additional bits with which to extend the cidr prefix"
  type        = number
  default     = 4
}

variable "pub_cidr_newbits" {
  description = "number of additional bits with which to extend the cidr prefix"
  type        = number
  default     = 3
}

variable "private_network_acls" {
  description         = "Private Network ACLs"
  type                = map(list(object({
    rule_number = string
    rule_action = string
    from_port = string
    to_port = string
    protocol = string
    cidr_block = string
  })))
  default             = {
    private_inbound    = [
      {
        rule_number   = 100
        rule_action   = "deny"
        from_port     = 22
        to_port       = 22
        protocol      = "tcp"
        cidr_block    = "0.0.0.0/0"
      },
      # {
      #   rule_number   = 110
      #   rule_action   = "allow"
      #   from_port     = 0
      #   to_port       = 0
      #   protocol      = "tcp"
      #   cidr_block    = "172.20.0.0/16"
      # },
    ]
    private_outbound   = [
      {
        rule_number   = 100
        rule_action   = "deny"
        from_port     = 22
        to_port       = 22
        protocol      = "tcp"
        cidr_block    = "0.0.0.0/0"
      },
      # {
      #   rule_number   = 110
      #   rule_action   = "allow"
      #   from_port     = 0
      #   to_port       = 0
      #   protocol      = "tcp"
      #   cidr_block    = "172.20.0.0/16"
      # },
    ]
  }
}


## NODE GROUP
variable "nodegroup_desired_capacity" {
  description = "EKS cluster node_group desired capacity"
  type        = number
  default     = 1
}

variable "nodegroup_min_capacity" {
  description = "EKS cluster node_group min capacity"
  type        = number
  default     = 1
}

variable "nodegroup_max_capacity" {
  description = "EKS cluster node_group max capacity"
  type        = number
  default     = 5
}

variable "nodegroup_max_unavailable_percentage" {
  description = "Desired max percentage of unavailable worker nodes during node group update"
  type        = number
  default     = 50
}

variable "ec2_instance_type" {
  description = "AWS EC2 instance type"
  type        = string
  default     = "t3.large"
}

variable "ec2_capacity_type" {
  description = "AWS EC2 instance type"
  type        = string
  default     = "ON_DEMAND"
}

variable "ami_type_node" {
  description = "AWS EC2 instance node ami type"
  type        = string
  default     = "AL2_x86_64"
}

variable "node_disk_size" {
  description = "AWS EC2 instance node disk size"
  type        = number
  default     = 100
}

variable "legend_modules" {
  description = "VPC CIDR block"
  type        = set(string)
  default     = ["studio", "engine", "sdlc"]

}


## ENV Variables
variable "GITLAB_OAUTH_CLIENT_ID" {
  description = "gitlab auth id"
  type        = string
}

variable "GITLAB_OAUTH_SECRET" {
  description = "gitlab auth secret"
  type        = string
}


## AWS Load Balancer Ingress controller

variable "awslb_controller" {
  description = "AWS Load balancer Ingress Controller for Legend EKS cluster"
  type        = string
  default     = ""
}

variable "awslb_controller_repo" {
  description = "Helm chart repo for AWS Load balancer ingress controller"
  type        = string
  default     = "https://aws.github.io/eks-charts"

}

variable "awslb_controller_helm_chart_name" {
  description = "AWS load balancer ingress controller helm chart name"
  type        = string
  default     = "aws-load-balancer-controller"
}

variable "awslb_ingressclass" {
  description = "AWS load balancer ingress class ALB through terraform"
  type        = string
  default     = "alb"
}

variable "awslb_name" {
  description = "AWS load balancer name"
  type        = string
  default     = "legend-alb"
}

variable "awslb_namespace" {
  description = "AWS load balancer ingress controller namespace"
  type        = string
  default     = "legend"
}

variable "logLevel" {
  description = "AWS load balancer ingress controller logLevel"
  type        = string
  default     = "info"
}

variable "k8s_namespace" {
  description = "Namespace for k8 components for ingress controller"
  type        = string
  default     = "kube-system"
}

variable "k8s_cluster_type" {
  description = "Kubernetes cluster type"
  type        = string
  default     = "eks"
}

variable "aws_resource_name_prefix" {
  description = "A string to prefix any AWS resources created. This does not apply to K8s resources"
  type        = string
  default     = "k8s-"
}

variable "webhookBindPort" {
  description = "Kubernetes webhook bind port"
  type        = number
  default     = 9443
}

## cert-manager
variable "cert_manager_version" {
  description = "cert manager version"
  type        = string
  default     = "v1.7.0"
}