
locals {
  standard_tags = {
    "App"    = "${var.app}"
    "Env"    = "${var.env}"
    "Region" = "${var.region}"
  }
}

resource "aws_vpc" "vpc" {
  cidr_block           = "${var.vpc_cidr}"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = "${local.standard_tags}"
}

resource "aws_subnet" "public_subnet1" {
  vpc_id                  = "${aws_vpc.vpc.id}"
  cidr_block              = "${var.public_subnet1_cidr}"
  availability_zone       = "${var.public_subnet1_az}"
  map_public_ip_on_launch = true
  tags                    = "${merge(local.standard_tags, map("Purpose", "Public subnet in ${var.public_subnet1_az}"))}"
}

resource "aws_subnet" "private_subnet1" {
  vpc_id                  = "${aws_vpc.vpc.id}"
  cidr_block              = "${var.private_subnet1_cidr}"
  availability_zone       = "${var.private_subnet1_az}"
  map_public_ip_on_launch = false
  tags                    = "${merge(local.standard_tags, map("Purpose", "Private subnet in ${var.private_subnet1_az}"))}"
}

resource "aws_eip" "eip" {
  vpc        = true
  depends_on = ["aws_internet_gateway.igw"]
}

resource "aws_nat_gateway" "nat" {
  allocation_id = "${aws_eip.eip.id}"
  subnet_id     = "${aws_subnet.public_subnet1.id}"
  depends_on    = ["aws_internet_gateway.igw"]
}

resource "aws_internet_gateway" "igw" {
  vpc_id = "${aws_vpc.vpc.id}"
  tags   = "${local.standard_tags}"
}

resource "aws_route_table" "public" {
  vpc_id = "${aws_vpc.vpc.id}"
  tags   = "${merge(local.standard_tags, map("Purpose", "Public route table"))}"
}

resource "aws_route" "internet" {
  route_table_id         = "${aws_route_table.public.id}"
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = "${aws_internet_gateway.igw.id}"
}

resource "aws_route_table" "private" {
  vpc_id = "${aws_vpc.vpc.id}"
  tags   = "${merge(local.standard_tags, map("Purpose", "Private route table"))}"
}

resource "aws_route_table_association" "public_subnet1" {
  subnet_id      = "${aws_subnet.public_subnet1.id}"
  route_table_id = "${aws_route_table.public.id}"
}

resource "aws_route" "private" {
  route_table_id         = "${aws_route_table.private.id}"
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = "${aws_nat_gateway.nat.id}"
}

resource "aws_route_table_association" "private_subnet1" {
  subnet_id      = "${aws_subnet.private_subnet1.id}"
  route_table_id = "${aws_route_table.public.id}"
}



