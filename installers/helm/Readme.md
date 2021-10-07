# Helm Chart for Legend with remote instance of Gitlab

This repo contains helm chart to deploy Legend Studio.

Requirements:
- CNCF Kubernetes Cluster (RKE2/K3s/RKE)

1. Clone Helm Chart Repo
```
git clone --depth 1 https://github.com/naeemarsalan/legend
```

2. Gitlab OAuth config setup

If you don't already have a Gitlab OAuth application, first, navigate to `User Settings > Applications` and create an application with the following parameters:

- Name: Legend Demo
- Redirect URI:
```
http://{HOST IP}.nip.io/callback
http://{HOST IP}.nip.io/api/auth/callback
http://{HOST IP}.nip.io/api/pac4j/login/callback
http://{HOST IP}.nip.io/studio/log.in/callback
```
- Enable the "Confidential" check box
- Enable these scopes: openid, profile, api
- Finally, "Save Application"

3. Install helm chart
```
helm install legend ./legend/installers/helm/ --set env.LEGEND_HOST="{HOST IP}.nip.io" \
                                              --set env.GITLAB_OAUTH_CLIENT_ID=""   \
                                              --set env.GITLAB_OAUTH_SECRET=""      \
                                              --namespace legend                    \
                                              --create-namespace
```
3. Check pods are in running/ready state
```
kubectl get pods -n legend
```

4. Browse to http://{HOST IP}.nip.io/studio

## SSL Enable
Same steps as 2. but with https callback url:
- Redirect URI:
```
https://{HOST IP}.nip.io/callback
https://{HOST IP}.nip.io/api/auth/callback
https://{HOST IP}.nip.io/api/pac4j/login/callback
https://{HOST IP}.nip.io/studio/log.in/callback
```

Create Ingress TLS Secret
```
kubectl create secret tls tls-legend --cert=fullchain.pem  --key=key.pem
```

Install helm chart
```
helm install legend ./legend/installers/helm/ --set env.LEGEND_HOST="{DNS Hostname}" \
                                              --set env.GITLAB_OAUTH_CLIENT_ID="" \
                                              --set env.GITLAB_OAUTH_SECRET=""    \
                                              --set env.HTTP_MODE="https"         \
                                              --set env.TLS_SECRET="tls-legend"   \
                                              --namespace legend                  \
                                              --create-namespace
```

Browse to https://{HOST IP}.nip.io/studio