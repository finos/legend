#!/bin/bash

# --------------------------------------------------------------------
# NOTE: must use `echo -e` to interpret the backslash escapes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No color
# --------------------------------------------------------------------

source /.env

error=0

rm -f /.omnibus-status.json
touch /.omnibus-status.json
cat > /.omnibus-status.json <<-END
{
  "status": "WAITING"
}
END


while :; do
	# Check status of Supervisor component processes
	status_supervisor_components=$(supervisorctl -c /app/supervisor/supervisor.conf status | awk '{print $2}')
	if grep -q "$status_supervisor_components" <<< "EXITED"; then
		error=1
		break
	fi

	if grep -q "$status_supervisor_components" <<< "FATAL"; then
		error=1
		break
	fi

	# Check health-check endpoints of the components
	status_engine=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_ENGINE_PORT/api/server/v1/info)
	status_sdlc=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_SDLC_PORT/api/info)
	status_sdlc_authenticated=$(curl --header "legend-omnibus-pat: $LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN" --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_SDLC_PORT/api/currentUser)
	status_pure_ide=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_PURE_IDE_PORT/ide)
	status_studio=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_STUDIO_PORT/studio)
	if [[ $status_engine -eq 200 ]] && [[ $status_sdlc -eq 200 ]] && [[ $status_sdlc_authenticated -eq 200 ]] && [[ $status_pure_ide -eq 200 ]] && [[ $status_studio -eq 200 ]]; then
		break
	elif [[ $status_engine -ge 300 ]] || [[ $status_sdlc -ge 300 ]] || [[ $status_sdlc_authenticated -ge 300 ]] || [[ $status_pure_ide -ge 300 ]] || [[ $status_studio -ge 300 ]]; then
		error=1
		break
	fi
	sleep 10
done

if [[ $error -eq 1 ]]; then
	echo -e "${RED}Some component(s) have failed to start. Please check logs for more details...${NC}"
	cat > /.omnibus-status.json <<-END
{
  "status": "FAILED"
}
END
	exit 1
fi

echo -e "\n${GREEN}All components have started successfully!${NC}"
echo -e "(DEV) Supervisor: ${GREEN}http://localhost:$LEGEND_OMNIBUS_NGINX_PORT/sd${NC} (user: $LEGEND_OMNIBUS_SUPERVISOR_USERNAME, password: $LEGEND_OMNIBUS_SUPERVISOR_PASSWORD)"
echo -e "(DEV) Directory Viewer: ${GREEN}http://localhost:$LEGEND_OMNIBUS_NGINX_PORT/dir${NC}"

if [[ ! -z "$LEGEND_OMNIBUS_CONFIG_REMOTE_GITLAB_PAT" ]]; then
	echo -e "Gitlab: ${GREEN}https://gitlab.com${NC} (access token: $LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN)"
else
	echo -e "Gitlab: ${GREEN}http://localhost:$LEGEND_OMNIBUS_NGINX_PORT/gitlab${NC} (user: $LEGEND_OMNIBUS_GITLAB_ROOT_USER, password: $LEGEND_OMNIBUS_GITLAB_ROOT_PASSWORD, access token: $LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN)"
fi
echo -e "Legend SDLC: ${GREEN}http://localhost:$LEGEND_OMNIBUS_NGINX_PORT/sdlc${NC}"
echo -e "Legend Engine: ${GREEN}http://localhost:$LEGEND_OMNIBUS_NGINX_PORT/engine${NC}"
echo -e "Legend Pure IDE: ${GREEN}http://localhost:$LEGEND_OMNIBUS_NGINX_PORT/ide${NC}"
echo -e "Legend Studio: ${GREEN}http://localhost:$LEGEND_OMNIBUS_NGINX_PORT/studio${NC}"
echo -e "\nTo start using Legend, launch Studio at: ${GREEN}http://localhost:$LEGEND_OMNIBUS_NGINX_PORT/studio/${NC}${NC}"
cat > /.omnibus-status.json <<-END
{
  "status": "SUCCEEDED"
}
END
