resource "kubernetes_namespace" "cm" {
  metadata {
    name = "cert-manager"
  }
}
resource "helm_release" "cm" {
  name             = "cm"
  namespace        = kubernetes_namespace.cm.metadata[0].name
  create_namespace = false
  chart            = "cert-manager"
  repository       = "https://charts.jetstack.io"
  version          = var.cert_manager_version
  values = [
    yamlencode({
        "global": {
            "podSecurityPolicy": {
                "enabled": true
                "useAppArmor": true
            }
        }
        "prometheus": {
            "enabled": false
        }
        "installCRDs": true
    })
  ]
}