output "id" {
  value = "${aws_vpc.vpc.id}"
}

output "cidr" {
  value = "${aws_vpc.vpc.cidr_block}"
}

output "public_subnet1_id" {
  value = "${aws_subnet.public_subnet1.id}"
}

output "private_subnet1_id" {
  value = "${aws_subnet.private_subnet1.id}"
}

output "bastion_public_ip" {
  value = "${aws_instance.bastion.public_ip}"
}

output "bastion_private_ip" {
  value = "${aws_instance.bastion.private_ip}"
}