#This role has full access to every environment
resource "aws_iam_role" "backend-all" {
  name               = "terraform-backend"
  description        = "Allows access to all Terraform workspaces"
  assume_role_policy = data.aws_iam_policy_document.backend-assume-role-all.json
}

resource "aws_iam_role_policy" "backend-all" {
  name   = "terraform-backend"
  policy = data.aws_iam_policy_document.iam-role-policy.json
  role   = "terraform-backend"

  depends_on = [aws_iam_role.backend-all]
}