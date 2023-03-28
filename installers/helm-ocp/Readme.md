# Helm Chart for Legend with remote instance of Gitlab

This Guide contains Instructions to deploy Legend Studio on OCP(Openshift Container Platform) using helm chart. \
**Note: It's a slightly modified helm chart based on helm chart from [here](https://github.com/finos/legend-integration-helm/tree/main/charts/legend/1.0.0)** \
Requirements:
- Have access to an Openshift Container Platform Cluster
- oc CLI installed
- Have a cluster-admin privileges
- gitlab account at gitlab.com

1. Connect to openshift cluster
```shell
# Using user and password
 oc login -u youruser -p yourpassword --server=https://ocpServerDns:6443

# Using access token(service account's one or temporary token from OCP Web Console):
oc login --token=sha256~xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx --server=https://ocpServerDns:6443
```

2. Create a new project
```shell
oc new-project legend
```

3. Add `anyuid` SecurityContextConstraint to serviceAccount `default` on that project
```shell
oc adm policy add-scc-to-user anyuid -z default
```

4. Get Cluster ingress Domain and compose a host name for legend using it:
```shell
export CLUSTER_DOMAIN=$(oc get route -n openshift-console console -ojsonpath='{.status.ingress[0].host}' | awk -F . '{$1="";print $0}' | tr ' ' '.' | sed -E 's/^.//g')
export LEGEND_HOST_DOMAIN=legend-legend.$CLUSTER_DOMAIN
# See the domain calculated for LEGEND HOST:
echo $LEGEND_HOST_DOMAIN

```

5. Gitlab OAuth config setup

If you don't already have a Gitlab OAuth application, first, enter gitlab.com with your credentials, navigate to `User Settings > Applications` and create an application with the following parameters:

- Name: Legend Demo
- Redirect URI:
```
http://$LEGEND_HOST_DOMAIN/engine/callback
http://$LEGEND_HOST_DOMAIN/sdlc/api/auth/callback
http://$LEGEND_HOST_DOMAIN/sdlc/api/pac4j/login/callback
http://$LEGEND_HOST_DOMAIN/studio/log.in/callback
```
- Enable the "Confidential" check box
- Enable these scopes: openid, profile, api
- Click on "Save Application"
- Copy aside OAuth Client Id + Oauth Secret(for overriding GITLAB_OAUTH_CLIENT_ID + GITLAB_OAUTH_SECRET in values.yaml using helm install --set flag)

6. Install helm chart
```
helm install legend -f values-ocp.yaml . --set env.LEGEND_HOST="$LEGEND_HOST_DOMAIN" \
                                              --set env.GITLAB_OAUTH_CLIENT_ID="clientIdGoesHere"   \
                                              --set env.GITLAB_OAUTH_SECRET="clientOAuthSecretGoesHere"      \
                                              --namespace legend                    \
```
7. Wait until pods are in running/ready state
```
oc get pods -n legend -w
```

8. Browse to http://$LEGEND_HOST_DOMAIN/studio, and make sure legend studio is opened:
```shell
xdg-open http://$LEGEND_HOST_DOMAIN/studio
```



