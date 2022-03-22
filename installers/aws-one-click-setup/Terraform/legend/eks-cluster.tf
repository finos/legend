locals {
  ssm_userdata = <<-EOT
  #!/bin/bash
  set -o errexit
  set -o pipefail
  set -o nounset

  yum install -y amazon-ssm-agent
  systemctl enable amazon-ssm-agent
  systemctl start amazon-ssm-agent
  EOT
  pre_userdata       = var.enable_ssm ? chomp("${local.ssm_userdata}\n${var.pre_userdata}") : var.pre_userdata
}

module "eks" {
  
  source                          = "terraform-aws-modules/eks/aws"
  cluster_name                    = var.eks_cluster_name
  cluster_version                 = var.eks_cluster_version
  cluster_endpoint_private_access = var.cluster_endpoint_private
  cluster_endpoint_public_access  = var.cluster_endpoint_public

  tags = {
    Environment = "training"
    GithubRepo  = "terraform-aws-eks"
    GithubOrg   = "terraform-aws-modules"
  }

  vpc_id      = module.vpc.vpc_id
  subnet_ids  = module.vpc.private_subnets

  enable_irsa = true

  cluster_security_group_additional_rules = {
    egress_nodes_ephemeral_ports_tcp = {
      description                = "To node 1025-65535"
      protocol                   = "tcp"
      from_port                  = 1025
      to_port                    = 65535
      type                       = "egress"
      source_node_security_group = true
    }
  }

  eks_managed_node_group_defaults = {
    ami_type                = var.ami_type_node
    disk_size               = var.node_disk_size
    create_launch_template  = var.create_launch_template
    pre_userdata            = var.create_launch_template ? local.pre_userdata : ""
  }

  eks_managed_node_groups = {
    group1 = {
      create_security_group = true
      desired_capacity      = var.nodegroup_desired_capacity
      max_capacity          = var.nodegroup_max_capacity
      min_capacity          = var.nodegroup_min_capacity
      instance_types        = [var.ec2_instance_type]
      capacity_type         = var.ec2_capacity_type
      update_config         = {
        max_unavailable_percentage = var.nodegroup_max_unavailable_percentage
      }
      security_group_rules = {
        k8s_readiness_check = {
          description                   = "Extend node sg rules to allow traffic on 6060-8080 ports to vpc cidr for readiness check"
          protocol                      = "TCP"
          from_port                     = 6060
          to_port                       = 8080
          type                          = "ingress"
          source_cluster_security_group = true
        }
        ingress_9443 = {
          description = "Extend node sg rules to allow traffic on 9443 port for ALB Ingress"
          protocol    = "TCP"
          from_port   = 9440
          to_port     = 9445
          type        = "ingress"
          source_cluster_security_group = true
        }
      }
    }
    group2 = {
      create_security_group = true
      desired_capacity      = var.nodegroup_desired_capacity
      max_capacity          = var.nodegroup_max_capacity
      min_capacity          = var.nodegroup_min_capacity
      instance_types        = [var.ec2_instance_type]
      capacity_type         = var.ec2_capacity_type
      update_config         = {
        max_unavailable_percentage = var.nodegroup_max_unavailable_percentage
      }
      security_group_rules = {
        k8s_readiness_check = {
          description                   = "Extend node sg rules to allow traffic on 6060-8080 ports to vpc cidr for readiness check"
          protocol                      = "TCP"
          from_port                     = 6060
          to_port                       = 8080
          type                          = "ingress"
          source_cluster_security_group = true
        }
        ingress_9443 = {
          description = "Extend node sg rules to allow traffic on 9443 port for ALB Ingress"
          protocol    = "TCP"
          from_port   = 9440
          to_port     = 9445
          type        = "ingress"
          source_cluster_security_group = true
        }
      } 
    }
    group3 = {
      create_security_group = true
      desired_capacity      = var.nodegroup_desired_capacity
      max_capacity          = var.nodegroup_max_capacity
      min_capacity          = var.nodegroup_min_capacity
      instance_types        = [var.ec2_instance_type]
      capacity_type         = var.ec2_capacity_type
      update_config         = {
        max_unavailable_percentage = var.nodegroup_max_unavailable_percentage
      }
      security_group_rules = {
        k8s_readiness_check = {
          description                   = "Extend node sg rules to allow traffic on 6060-8080 ports to vpc cidr for readiness check"
          protocol                      = "TCP"
          from_port                     = 6060
          to_port                       = 8080
          type                          = "ingress"
          source_cluster_security_group = true
        }
        ingress_9443 = {
          description = "Extend node sg rules to allow traffic on 9443 port for ALB Ingress"
          protocol    = "TCP"
          from_port   = 9440
          to_port     = 9445
          type        = "ingress"
          source_cluster_security_group = true
        }
      } 
    }
  }
  iam_role_additional_policies = ["arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"]
  
  # Extend node security group rules
  node_security_group_additional_rules = {
    ingress_self_all = {
      description = "Node to node all ports/protocols"
      protocol    = "-1"
      from_port   = 0
      to_port     = 0
      type        = "ingress"
      self        = true
    }
    egress_9443 = {
      description = "Extend node sg rules to allow traffic on 9443 port for ALB Ingress"
      protocol    = "TCP"
      from_port   = 9443
      to_port     = 9443
      type        = "egress"
      cidr_blocks = ["0.0.0.0/0"]
    }
    egress_all = {
      description      = "Node all egress"
      protocol         = "-1"
      from_port        = 0
      to_port          = 0
      type             = "egress"
      cidr_blocks      = ["0.0.0.0/0"]
    }
  }
}

data "aws_eks_cluster" "cluster" {
  name = module.eks.cluster_id
}

data "aws_eks_cluster_auth" "cluster" {
  name = module.eks.cluster_id
}