resource "time_sleep" "wait_30_seconds" {
  depends_on = [resource.helm_release.legend-alb-controller]
  create_duration = "30s"
}

resource "kubernetes_ingress" "default_ingress" {
  wait_for_load_balancer = true
  depends_on  = [resource.helm_release.legend-alb-controller, module.vpc, resource.aws_iam_policy.albpolicy, resource.aws_iam_role_policy_attachment.this]
  metadata {
    name        = "alb-ingress-default"
    namespace   = "kube-system"
    annotations = {
      "kubernetes.io/ingress.class": "alb",
      "alb.ingress.kubernetes.io/scheme": "internet-facing",
      "alb.ingress.kubernetes.io/target-type": "ip",
      "alb.ingress.kubernetes.io/load-balancer-name": "legend-alb",
      "alb.ingress.kubernetes.io/group.name": "testgrp1",
      "alb.ingress.kubernetes.io/group.order": "10",
      "alb.ingress.kubernetes.io/ignore-host-header": true,
      "alb.ingress.kubernetes.io/healthcheck-interval-seconds": 15,
      "alb.ingress.kubernetes.io/healthcheck-timeout-seconds": 30,
      "alb.ingress.kubernetes.io/actions.default": "{\"Type\":\"fixed-response\",\"FixedResponseConfig\":{\"ContentType\":\"application/json\",\"StatusCode\":\"403\",\"MessageBody\":\"{ \"code\" : 403, \"message\" : \"The requested URI is forbidden, please use the correct URI\"  }\"}}"
    }
  }

  spec {
    backend {
      service_name = "default-rule"
      service_port = "use-annotation"
    }
  }
}

