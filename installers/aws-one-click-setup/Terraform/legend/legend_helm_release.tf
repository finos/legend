resource "kubernetes_namespace" "legend" {
  metadata {
    name = "legend"

    labels = {
      name  = "legend"
    }
  }
}

resource "helm_release" "legend" {
  name       = "legend"
  namespace  = "legend"
  repository = "../../helm"
  chart      = "legend"
  depends_on = [kubernetes_namespace.legend, resource.kubernetes_ingress.default_ingress] 

  values = [
    templatefile("../../helm/legend/values.yaml", {HOST_DNS="${resource.kubernetes_ingress.default_ingress.status.0.load_balancer.0.ingress.0.hostname}", GITLAB_OAUTH_CLIENT_ID="${var.GITLAB_OAUTH_CLIENT_ID}", GITLAB_OAUTH_SECRET="${var.GITLAB_OAUTH_SECRET}"})
  ]
}
