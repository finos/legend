locals {
  app    = "legend-integration"
  env    = "dev"
  region = "us-east-1"

  standard_tags = {
    "App"    = "${local.app}"
    "Env"    = "${local.env}"
    "Region" = "${local.region}"
  }
}
provider "aws" {
  region = "${local.region}"
}

module "legend-demo-vpc" {
  source = "./.."
  app    = "${local.app}"
  env    = "${local.env}"
  region = "${local.region}"

  vpc_cidr = "172.16.0.0/17"

  public_subnet1_az   = "${local.region}a"
  public_subnet1_cidr = "172.16.44.0/24"

  private_subnet1_az   = "${local.region}b"
  private_subnet1_cidr = "172.16.48.0/24"

  inbound_ip1 = "__FIXME__" 

  bastion_public_key = "ssh-rsa __FIXME__"
}

