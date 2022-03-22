data "aws_eks_cluster" "selected" {
  count      = var.k8s_cluster_type == "eks" ? 1 : 0
  name       = var.eks_cluster_name
  depends_on = [module.eks]
}

data "tls_certificate" "example" {
  url = data.aws_eks_cluster.selected[0].identity[0].oidc[0].issuer
}

data "aws_iam_policy_document" "eks_oidc_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    effect  = "Allow"
    condition {
      test      = "StringEquals"
      variable  = "${replace(data.aws_eks_cluster.selected[0].identity[0].oidc[0].issuer, "https://", "")}:sub"
      values    = [
        "system:serviceaccount:${var.k8s_namespace}:aws-load-balancer-controller"
      ]
    }
    principals {
      identifiers = ["arn:aws:iam::${data.aws_caller_identity.current.account_id}:oidc-provider/${replace(data.aws_eks_cluster.selected[0].identity[0].oidc[0].issuer, "https://", "")}"]
      type        = "Federated"
    }
  }
}

resource "aws_iam_role" "this" {
  name        = substr("${var.aws_resource_name_prefix}${var.eks_cluster_name}-aws-load-balancer-controller", 0, 64)
  description = "Permissions required by the Kubernetes AWS Load Balancer controller to do its job."
  assume_role_policy = data.aws_iam_policy_document.eks_oidc_assume_role_policy.json
}

resource "aws_iam_role_policy_attachment" "this" {
  policy_arn = resource.aws_iam_policy.albpolicy.arn
  role       = aws_iam_role.this.name
  depends_on = [resource.aws_iam_policy.albpolicy]
}

resource "kubernetes_service_account" "this" {
  # automount_service_account_token = true
  metadata {
    name        = "aws-load-balancer-controller"
    namespace   = var.k8s_namespace
    annotations = {
      # This annotation is only used when running on EKS which can
      # use IAM roles for service accounts.
      "eks.amazonaws.com/role-arn" = aws_iam_role.this.arn
    }
    labels = {
      "app.kubernetes.io/name"       = "aws-load-balancer-controller"
      "app.kubernetes.io/component"  = "controller"
      "app.kubernetes.io/managed-by" = "terraform"
    }
  }
  depends_on = [resource.aws_iam_role.this]
}

resource "kubernetes_cluster_role" "this" {
  metadata {
    name = "aws-load-balancer-controller"

    labels = {
      "app.kubernetes.io/name"       = "aws-load-balancer-controller"
      "app.kubernetes.io/managed-by" = "terraform"
    }
  }

  rule {
    api_groups = [
      "",
      "extensions",
    ]

    resources  = [
      "configmaps",
      "endpoints",
      "events",
      "ingresses",
      "ingresses/status",
      "services",
    ]

    verbs      = [
      "create",
      "get",
      "list",
      "update",
      "watch",
      "patch",
    ]
  }

  rule {
    api_groups = [
      "",
      "extensions",
    ]

    resources  = [
      "nodes",
      "pods",
      "secrets",
      "services",
      "namespaces",
    ]

    verbs      = [
      "get",
      "list",
      "watch",
    ]
  }
}

resource "kubernetes_cluster_role_binding" "this" {
  metadata {
    name   = "aws-load-balancer-controller"
    labels = {
      "app.kubernetes.io/name"       = "aws-load-balancer-controller"
      "app.kubernetes.io/managed-by" = "terraform"
    }
  }

  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = kubernetes_cluster_role.this.metadata[0].name
  }

  subject {
    api_group = ""
    kind      = "ServiceAccount"
    name      = kubernetes_service_account.this.metadata[0].name
    namespace = kubernetes_service_account.this.metadata[0].namespace
  }
}