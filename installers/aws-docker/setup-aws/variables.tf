variable "app" {
}

variable "env" {
}

variable "region" {
}

variable "vpc_cidr" {

}

variable "public_subnet1_az" {
}

variable "public_subnet1_cidr" {
}

variable "private_subnet1_az" {
}

variable "private_subnet1_cidr" {
}

variable "bastion_public_key" {

}

variable "inbound_ip1" {
   description = "IP of the machine from which connections will be allowed to the Legend infra in AWS"
}
