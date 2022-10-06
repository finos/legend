resource "aws_key_pair" "bastion_key" {
  key_name_prefix   = "bastion_public_key"
  public_key = "${var.bastion_public_key}"
}

data "local_file" "install_deps" {
  filename = "${path.module}/scripts/install-deps.sh"
}

data "template_file" "setup_host" {
  template = "${file("${path.module}/scripts/setup-host.sh.tpl")}"
  vars = {
    BASE64_INSTALL_DEPS = "${base64encode(data.local_file.install_deps.content)}"
  }
}

data "template_cloudinit_config" "dev_cloud_init" {
  gzip          = true
  base64_encode = true
  part {
    content_type = "text/x-shellscript"
    content      = "${data.template_file.setup_host.rendered}"
  }
}

resource "aws_instance" "bastion" {
  ami                         = "${data.aws_ami.amazonlinux2.id}"
  instance_type               = "t2.xlarge"
  associate_public_ip_address = true
  subnet_id                   = "${aws_subnet.public_subnet1.id}"
  vpc_security_group_ids      = ["${aws_security_group.bastion.id}"]
  key_name                    = "${aws_key_pair.bastion_key.key_name}"

  user_data_base64 = "${data.template_cloudinit_config.dev_cloud_init.rendered}"

  root_block_device {
	volume_size = 100
  }

  tags = "${merge(local.standard_tags, map("Name", "${var.app}-${var.region}-bastion"), map("Purpose", "Bastion"))}"
}

resource "aws_security_group" "bastion" {
  name   = "bastion"
  vpc_id = "${aws_vpc.vpc.id}"

  ingress {
    protocol    = "tcp"
    from_port   = 22
    to_port     = 22
    cidr_blocks = ["${var.inbound_ip1}"]
    description = "inbound ssh"
  }

  ingress {
    protocol    = "tcp"
    from_port   = 27017
    to_port     = 27017
    cidr_blocks = ["${var.inbound_ip1}"]
    description = "inbound mongo"
  }

  ingress {
    protocol    = "tcp"
    from_port   = 6443
    to_port     = 6443
    cidr_blocks = ["${var.inbound_ip1}"] 
    description = "inbound gitlab"
  }

  ingress {
    protocol    = "tcp"
    from_port   = 6300
    to_port     = 6300
    cidr_blocks = ["${var.inbound_ip1}"]
    description = "inbound engine"
  }

  ingress {
    protocol    = "tcp"
    from_port   = 6100
    to_port     = 6100
    cidr_blocks = ["${var.inbound_ip1}"]
    description = "inbound sdlc"
  }

  ingress {
    protocol    = "tcp"
    from_port   = 9000
    to_port     = 9000
    cidr_blocks = ["${var.inbound_ip1}"]
    description = "inbound studio"
  }

  egress {
    protocol    = -1
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = "${merge(local.standard_tags, map("Purpose", "Bastion"))}"
}
