data "aws_iam_policy_document" "iam-role-policy" {
  statement {
    actions   = ["s3:ListBucket"]
    resources = ["arn:aws:s3:::${resource.aws_s3_bucket.backend.id}"]
  }

  statement {
    actions   = ["s3:GetObject", "s3:PutObject"]
    resources = ["arn:aws:s3:::${resource.aws_s3_bucket.backend.id}/*"]
  }
}

data "aws_iam_policy_document" "backend-assume-role-all" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "AWS"
      identifiers = [
        "arn:aws:iam::${data.aws_caller_identity.current.account_id}:${var.assume_policy_by}",
      ]
    }
  }
}