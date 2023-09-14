package org.finos.legend.construct;

import java.util.List;
import java.util.Map;

import software.amazon.awscdk.CustomResource;
import software.amazon.awscdk.services.cognito.IUserPool;
import software.amazon.awscdk.services.iam.Effect;
import software.amazon.awscdk.services.iam.PolicyDocument;
import software.amazon.awscdk.services.iam.PolicyStatement;
import software.amazon.awscdk.services.iam.Role;
import software.amazon.awscdk.services.iam.ServicePrincipal;
import software.amazon.awscdk.services.lambda.Code;
import software.amazon.awscdk.services.lambda.Function;
import software.amazon.awscdk.services.lambda.Runtime;
import software.constructs.Construct;

public class CognitoUser extends Construct {

        public CognitoUser(final Construct scope, final String id, final CognitoUserProps cognitoUserProps) {
                super(scope, id);

                Role createCognitoUserRole = Role.Builder.create(scope, id + "CreateCognitoUserRole")
                                .assumedBy(new ServicePrincipal("lambda.amazonaws.com"))
                                .inlinePolicies(Map.of("CognitoStatements", PolicyDocument.Builder.create()
                                                .statements(List.of(PolicyStatement.Builder.create()
                                                                .effect(Effect.ALLOW)
                                                                .actions(List.of("cognito-idp:AdminCreateUser",
                                                                                "cognito-idp:AdminDeleteUser"))
                                                                .resources(List.of("*")).build(),
                                                                PolicyStatement.Builder.create()
                                                                                .effect(Effect.ALLOW)
                                                                                .actions(List.of("logs:CreateLogGroup",
                                                                                                "logs:CreateLogStream",
                                                                                                "logs:PutLogEvents"))
                                                                                .resources(List.of("*")).build()))
                                                .build()))
                                .build();

                Function createCognitoUserFunction = Function.Builder.create(scope, id + "CreateCognitoUserFunction")
                                .role(createCognitoUserRole)
                                .runtime(Runtime.PYTHON_3_9)
                                .code(Code.fromInline("""
                                                import logging
                                                import boto3
                                                import cfnresponse

                                                logger = logging.getLogger()
                                                logger.setLevel(logging.INFO)

                                                def handler(event, context):
                                                        logger.info('CustomResource Event {}'.format(event))

                                                        userPoolId=event['ResourceProperties']['UserPoolId']
                                                        username=event['ResourceProperties']['Username']
                                                        temporaryPassword=event['ResourceProperties']['TemporaryPassword']

                                                        try:
                                                                client = boto3.client('cognito-idp')

                                                                if event['RequestType'] == 'Create':
                                                                        logger.info('Creating User')

                                                                        client.admin_create_user(
                                                                                UserPoolId=userPoolId,
                                                                                Username=username,
                                                                                TemporaryPassword=temporaryPassword,
                                                                                MessageAction='SUPPRESS'
                                                                        )
                                                                elif event['RequestType'] == 'Delete':
                                                                        logger.info('Deleting User')

                                                                        client.admin_delete_user(
                                                                                UserPoolId=userPoolId,
                                                                                Username=username
                                                                        )

                                                                cfnresponse.send(event, context, cfnresponse.SUCCESS, {}, 'CreateCognitoUserResource-{}'.format(username))
                                                        except Exception as e:
                                                                logger.error(e)
                                                                cfnresponse.send(event, context, cfnresponse.FAILED, {}, 'CreateCognitoUserResource-{}'.format(username))
                                                """))
                                .handler("index.handler")
                                .build();

                CustomResource createCognitoUserResource = CustomResource.Builder
                                .create(scope, id + "CreateCognitoUserResource")
                                .serviceToken(createCognitoUserFunction.getFunctionArn())
                                .properties(Map.of(
                                                "UserPoolId",
                                                cognitoUserProps.getUserPool().getUserPoolId(),
                                                "Username", cognitoUserProps.getUsername(),
                                                "TemporaryPassword", cognitoUserProps.getPassword()))
                                .build();

                Role forcePasswordCognitoUserRole = Role.Builder.create(scope, id + "ForcePasswordCognitoUserRole")
                                .assumedBy(new ServicePrincipal("lambda.amazonaws.com"))
                                .inlinePolicies(Map.of("CognitoStatements", PolicyDocument.Builder.create()
                                                .statements(List.of(PolicyStatement.Builder.create()
                                                                .effect(Effect.ALLOW)
                                                                .actions(List.of("cognito-idp:AdminSetUserPassword"))
                                                                .resources(List.of("*")).build(),
                                                                PolicyStatement.Builder.create()
                                                                                .effect(Effect.ALLOW)
                                                                                .actions(List.of("logs:CreateLogGroup",
                                                                                                "logs:CreateLogStream",
                                                                                                "logs:PutLogEvents"))
                                                                                .resources(List.of("*")).build()))
                                                .build()))
                                .build();

                Function forcePasswordCognitoUserFunction = Function.Builder
                                .create(scope, id + "ForcePasswordCognitoUserFunction")
                                .role(forcePasswordCognitoUserRole)
                                .runtime(Runtime.PYTHON_3_9)
                                .code(Code.fromInline("""
                                                import logging
                                                import boto3
                                                import cfnresponse

                                                logger = logging.getLogger()
                                                logger.setLevel(logging.INFO)

                                                def handler(event, context):
                                                        logger.info('CustomResource Event {}'.format(event))

                                                        userPoolId=event['ResourceProperties']['UserPoolId']
                                                        username=event['ResourceProperties']['Username']
                                                        password=event['ResourceProperties']['Password']

                                                        try:
                                                                client = boto3.client('cognito-idp')

                                                                if event['RequestType'] == 'Create':
                                                                        logger.info('Setting User Password')

                                                                        client.admin_set_user_password(
                                                                                UserPoolId=userPoolId,
                                                                                Username=username,
                                                                                Password=password,
                                                                                Permanent=True
                                                                        )

                                                                cfnresponse.send(event, context, cfnresponse.SUCCESS, {}, 'ForcePasswordCognitoUserResource-{}'.format(username))
                                                        except Exception as e:
                                                                logger.error(e)
                                                                cfnresponse.send(event, context, cfnresponse.FAILED, {}, 'ForcePasswordCognitoUserResource-{}'.format(username))
                                                """))
                                .handler("index.handler")
                                .build();

                CustomResource forcePasswordCognitoUserResource = CustomResource.Builder
                                .create(scope, id + "ForcePasswordCognitoUserResource")
                                .serviceToken(forcePasswordCognitoUserFunction.getFunctionArn())
                                .properties(Map.of(
                                                "UserPoolId",
                                                cognitoUserProps.getUserPool().getUserPoolId(),
                                                "Username", cognitoUserProps.getUsername(),
                                                "Password", cognitoUserProps.getPassword()))
                                .build();

                forcePasswordCognitoUserResource.getNode().addDependency(createCognitoUserResource);
        }

        public static final class Builder {

                public static Builder create(final Construct scope, final String id) {
                        return new Builder(scope, id);
                }

                private final Construct scope;
                private final String id;
                private final CognitoUserProps cognitoUserProps;

                private Builder(final Construct scope, final String id) {
                        this.scope = scope;
                        this.id = id;
                        this.cognitoUserProps = new CognitoUserProps();
                }

                public Builder userPool(final IUserPool userPool) {
                        this.cognitoUserProps.setUserPool(userPool);
                        return this;
                }

                public Builder username(final String username) {
                        this.cognitoUserProps.setUsername(username);
                        return this;
                }

                public Builder password(final String password) {
                        this.cognitoUserProps.setPassword(password);
                        return this;
                }

                public CognitoUser build() {
                        return new CognitoUser(scope, id, cognitoUserProps);
                }
        }
}
