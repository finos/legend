package org.finos.legend.stack;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.finos.legend.construct.CognitoUser;

import software.amazon.awscdk.CfnOutput;
import software.amazon.awscdk.CfnParameter;
import software.amazon.awscdk.RemovalPolicy;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;
import software.amazon.awscdk.services.apigatewayv2.CfnIntegration;
import software.amazon.awscdk.services.apigatewayv2.CfnRoute;
import software.amazon.awscdk.services.apigatewayv2.CfnVpcLink;
import software.amazon.awscdk.services.apigatewayv2.alpha.HttpApi;
import software.amazon.awscdk.services.cognito.AuthFlow;
import software.amazon.awscdk.services.cognito.CognitoDomainOptions;
import software.amazon.awscdk.services.cognito.OAuthFlows;
import software.amazon.awscdk.services.cognito.OAuthSettings;
import software.amazon.awscdk.services.cognito.PasswordPolicy;
import software.amazon.awscdk.services.cognito.UserPool;
import software.amazon.awscdk.services.cognito.UserPoolClient;
import software.amazon.awscdk.services.cognito.UserPoolDomain;
import software.amazon.awscdk.services.ec2.Vpc;
import software.amazon.awscdk.services.ecs.Cluster;
import software.amazon.awscdk.services.ecs.ContainerImage;
import software.amazon.awscdk.services.ecs.patterns.ApplicationLoadBalancedFargateService;
import software.amazon.awscdk.services.ecs.patterns.ApplicationLoadBalancedTaskImageOptions;
import software.constructs.Construct;

public class LegendAwsStackWithAuth extends Stack {
        public LegendAwsStackWithAuth(final Construct scope, final String id) {
                this(scope, id, null);
        }

        public LegendAwsStackWithAuth(final Construct scope, final String id, final StackProps props) {
                super(scope, id, props);

                CfnParameter cognitoDomainPrefix = CfnParameter.Builder.create(this, "CognitoDomainPrefix")
                                .description("A globally unique value for the cognito domain name prefix. Example: legend-test-123")
                                .type("String")
                                .build();

                CfnParameter adminPassword = CfnParameter.Builder.create(this, "AdminPassword")
                                .description("The password of the default user (Must be between 6 and 99 characters)")
                                .type("String")
                                .build();

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

                UserPool userPool = UserPool.Builder.create(this, "LegendAwsUserPool")
                                .passwordPolicy(
                                                PasswordPolicy.builder().minLength(6).requireDigits(false)
                                                                .requireLowercase(false).requireSymbols(false)
                                                                .requireUppercase(false).build())
                                .removalPolicy(RemovalPolicy.DESTROY)
                                .build();

                UserPoolDomain.Builder.create(this, "LegendAwsUserPoolDomain")
                                .userPool(userPool)
                                .cognitoDomain(CognitoDomainOptions.builder()
                                                .domainPrefix(cognitoDomainPrefix.getValueAsString())
                                                .build())
                                .build();

                UserPoolClient userPoolClient = UserPoolClient.Builder.create(this, "LegendAwsUserPoolClient")
                                .userPool(userPool)
                                .generateSecret(true)
                                .authFlows(AuthFlow.builder()
                                                .userPassword(true)
                                                .build())
                                .oAuth(OAuthSettings.builder()
                                                .callbackUrls(List.of(httpApi.getUrl() + "studio/"))
                                                .flows(OAuthFlows.builder().implicitCodeGrant(true).build()).build())
                                .build();

                CognitoUser.Builder.create(this, "LegendAwsCognitoUser")
                                .userPool(userPool)
                                .username("admin")
                                .password(adminPassword.getValueAsString())
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

                CfnOutput.Builder.create(this, "UserPoolLoginUrl")
                                .value(
                                                String.format("https://%s.auth.%s.amazoncognito.com/oauth2/authorize?redirect_uri=%s&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&client_id=%s",
                                                                cognitoDomainPrefix.getValueAsString(),
                                                                userPool.getStack().getRegion(),
                                                                httpApi.getUrl() + "studio/",
                                                                userPoolClient.getUserPoolClientId()))
                                .build();

                CfnOutput.Builder.create(this, "UserPoolDiscoveryUrl")
                                .value(String.format(
                                                "https://cognito-idp.%s.amazonaws.com/%s/.well-known/openid-configuration",
                                                userPool.getStack().getRegion(), userPool.getUserPoolId()))
                                .build();

                CfnOutput.Builder.create(this, "UserPoolClientId")
                                .value(userPoolClient.getUserPoolClientId())
                                .build();

                CfnOutput.Builder.create(this, "StudioUrl")
                                .value(httpApi.getUrl() + "studio/")
                                .build();
        }
}
