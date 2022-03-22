terraform {
  backend "s3" {
    bucket         = "{$ADD_YOUR_AWS_ACCOUND_ID-HERE}-tfstate-legend-bucket"
# Example: 
#   bucket         = "123456789012-tfstate-legend-bucket"
    key            = "legend-platform"
    region         = "us-west-2"
    encrypt        = true
  }
}