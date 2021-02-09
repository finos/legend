data "aws_ami" "amazonlinux2" {
  most_recent = true

  owners = [
    "amazon" # Only official images
  ]

  filter {
    name   = "owner-alias"
    values = ["amazon"]
  }


  filter {
    name   = "name"
    values = ["amzn2-ami-hvm*"]
  }
}