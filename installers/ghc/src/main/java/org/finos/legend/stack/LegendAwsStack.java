package org.finos.legend.stack;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import software.amazon.awscdk.CfnOutput;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;
import software.amazon.awscdk.services.apigatewayv2.CfnIntegration;
import software.amazon.awscdk.services.apigatewayv2.CfnRoute;
import software.amazon.awscdk.services.apigatewayv2.CfnVpcLink;
import software.amazon.awscdk.services.apigatewayv2.alpha.HttpApi;
import software.amazon.awscdk.services.ec2.Vpc;
import software.amazon.awscdk.services.ecs.Cluster;
import software.amazon.awscdk.services.ecs.ContainerImage;
import software.amazon.awscdk.services.ecs.patterns.ApplicationLoadBalancedFargateService;
import software.amazon.awscdk.services.ecs.patterns.ApplicationLoadBalancedTaskImageOptions;
import software.constructs.Construct;

public class LegendAwsStack extends Stack {
        public LegendAwsStack(final Construct scope, final String id) {
                this(scope, id, null);
        }

        public LegendAwsStack(final Construct scope, final String id, final StackProps props) {
                super(scope, id, props);

                Vpc vpc = Vpc.Builder
                                .create(this, "LegendAwsVpc")
                                .maxAzs(3)
                                .restrictDefaultSecurityGroup(false)
                                .build();

                HttpApi httpApi = HttpApi.Builder.create(this, "LegendAwsHttpApi")
                                .createDefaultStage(true)
                                .build();

                CfnVpcLink link = CfnVpcLink.Builder.create(this, "LegendAwsVpcLink")
                                .name("legend")
                                .subnetIds(vpc.getPrivateSubnets().stream().map(subnet -> subnet.getSubnetId())
                                                .collect(Collectors.toList()))
                                .build();

                Map<String, String> environment = new HashMap<>();
                environment.put("LEGEND_OMNIBUS_NGINX_PORT", "80");

                Cluster cluster = Cluster.Builder
                                .create(this, "LegendAwsCluster")
                                .vpc(vpc)
                                .build();

                ApplicationLoadBalancedFargateService service = ApplicationLoadBalancedFargateService.Builder
                                .create(this, "LegendAwsService")
                                .assignPublicIp(false)
                                .cluster(cluster)
                                .cpu(2048)
                                .desiredCount(1)
                                .taskImageOptions(
                                                ApplicationLoadBalancedTaskImageOptions
                                                                .builder()
                                                                .image(ContainerImage.fromRegistry(
                                                                                "dockerizeduser/legend-box2:latest"))
                                                                .environment(environment)
                                                                .build())
                                .memoryLimitMiB(4096)
                                .publicLoadBalancer(false)
                                .build();

                CfnIntegration integration = CfnIntegration.Builder.create(this, "LegendAwsIntegration")
                                .apiId(httpApi.getApiId())
                                .connectionId(link.getRef())
                                .connectionType("VPC_LINK")
                                .integrationMethod("ANY")
                                .integrationType("HTTP_PROXY")
                                .integrationUri(service.getListener().getListenerArn())
                                .payloadFormatVersion("1.0")
                                .build();

                CfnRoute.Builder.create(this, "LegendAwsRoute")
                                .apiId(httpApi.getApiId())
                                .routeKey("ANY /{proxy+}")
                                .target("integrations/" + integration.getRef())
                                .build();

                CfnOutput.Builder.create(this, "StudioUrl")
                                .value(httpApi.getUrl() + "studio/")
                                .build();
        }
}
