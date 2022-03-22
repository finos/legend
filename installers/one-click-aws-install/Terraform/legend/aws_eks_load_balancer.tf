data "aws_vpc" "selected" {
  id = data.aws_eks_cluster.selected[0].vpc_config[0].vpc_id
}

resource "helm_release" "legend-alb-controller" {
  name       = "aws-load-balancer-controller"
  repository = var.awslb_controller_repo
  chart      = var.awslb_controller_helm_chart_name
  namespace  = var.k8s_namespace
  values = [
    yamlencode({
      "clusterName" : var.eks_cluster_name,
      "serviceAccount" : {
        "create" : (var.k8s_cluster_type != "eks"),
        "name" : (var.k8s_cluster_type == "eks") ? kubernetes_service_account.this.metadata[0].name : null
      },
      "region" : data.aws_region.current.name,
      "vpcId" : data.aws_vpc.selected.id,
      "keepTLSSecret": true,
      "ingressClass": "alb",
      "webhookBindPort": var.webhookBindPort,
      "enableCertManager": true
  })]
  depends_on  = [module.eks, resource.kubernetes_service_account.this, resource.helm_release.cm]

}