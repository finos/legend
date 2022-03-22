##TFSTATE variables
variable "bucket_name" {
  description = "tfstate backend bucket Name"
  type        = string
  default     = "tfstate-legend-bucket"
}

variable "bucket_sse_algorithm" {
  type        = string
  description = "Encryption algorithm to use on the S3 bucket. Currently only AES256 is supported"
  default     = "AES256"
}

variable "assume_policy_by" {
  type        = string
  description = "A map that allows you to specify additional AWS principles that will be added to the backend roles assume role policy"
  default     = "role/Admin"
}

variable "aws_region_tfbackend" {
  type        = string
  description = "AWS Region of the S3 bucket to store terraform backend"
  default     = "us-west-2"
}