/* 
*  Get current users identity
*  Use the account id as the arn will point to the assumed role for deployment
*/
data "aws_caller_identity" "current" {}

# Get all availability zones the account has access to
data "aws_availability_zones" "available" {}

# Get current region
data "aws_region" "current" {}