locals {
  cluster_name      = var.eks_cluster_name
  azs               = data.aws_availability_zones.available.names
  private_subnets   = [
    for az in local.azs:
      cidrsubnet(var.vpc_cidr, var.priv_cidr_newbits, length(local.azs)-index(local.azs, az))
      if index(local.azs, az) < var.private_subnet_count
  ]
  public_subnets   = [
    for az in local.azs:
      cidrsubnet(var.vpc_cidr, var.pub_cidr_newbits, length(local.azs)-index(local.azs, az))
      if index(local.azs, az) < var.public_subnet_count
  ]
}

module "vpc" {
  source                            = "terraform-aws-modules/vpc/aws"
  name                              = var.vpc_name
  cidr                              = var.vpc_cidr
  azs                               = local.azs
  private_subnets                   = local.private_subnets
  public_subnets                    = local.public_subnets
  enable_nat_gateway                = true
  single_nat_gateway                = true
  enable_dns_hostnames              = true
  enable_dhcp_options               = true
  dhcp_options_domain_name_servers  = ["AmazonProvidedDNS"]

  tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
  }

  public_subnet_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
    "kubernetes.io/role/elb"                      = "1"
  }

  private_subnet_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
    "kubernetes.io/role/internal-elb"             = "1"
  }
}