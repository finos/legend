terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  region  = var.aws_region_tfbackend
}

resource "aws_s3_bucket" "backend" {
   bucket = "${data.aws_caller_identity.current.account_id}-${var.bucket_name}"
   acl = "private"
   versioning {
      enabled = true
   }
   tags = {
     Name = var.bucket_name
     Environment = "Test"
   }
   server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = var.bucket_sse_algorithm
      }
    }
  }
}

resource "aws_s3_bucket_public_access_block" "backend" {
  bucket = aws_s3_bucket.backend.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}