#!/bin/bash

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

	# Check health-check endpoints of the components
	status_engine=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_ENGINE_PORT/api/server/v1/info)
	status_sdlc=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_SDLC_PORT/api/info)
	status_sdlc_authenticated=$(curl --header "legend-omnibus-pat: $LEGEND_OMNIBUS_GITLAB_PRIVATE_ACCESS_TOKEN" --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_SDLC_PORT/api/currentUser)
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
	echo -e "\e[31mSome component(s) have failed to start. Please check logs for more details...\e[0m"
	cat > /.omnibus-status.json <<-END
{
  "status": "FAILED"
}
END
	exit 1
fi

echo -e "\n\e[32mAll components have started successfully!\e[0m"
echo -e "Supervisor: \e[32mhttp://localhost:$LEGEND_OMNIBUS_SUPERVISOR_PORT\e[0m (user: $LEGEND_OMNIBUS_SUPERVISOR_USERNAME, password: $LEGEND_OMNIBUS_SUPERVISOR_PASSWORD)"
if [[ ! -z "$LEGEND_OMNIBUS_REMOTE_GITLAB_PAT" ]]; then
	echo -e "Gitlab: \e[32mhttps://gitlab.com\e[0m (pat: $LEGEND_OMNIBUS_GITLAB_PRIVATE_ACCESS_TOKEN)"
else
	echo -e "Gitlab: \e[32mhttp://localhost:$LEGEND_OMNIBUS_GITLAB_PORT\e[0m (user: $LEGEND_OMNIBUS_GITLAB_ROOT_USER, password: $LEGEND_OMNIBUS_GITLAB_ROOT_PASSWORD, pat: $LEGEND_OMNIBUS_GITLAB_PRIVATE_ACCESS_TOKEN)"
fi
echo -e "Legend Engine: \e[32mhttp://localhost:$LEGEND_OMNIBUS_ENGINE_PORT\e[0m"
echo -e "Legend SDLC: \e[32mhttp://localhost:$LEGEND_OMNIBUS_SDLC_PORT\e[0m"
echo -e "Legend Pure IDE: \e[32mhttp://localhost:$LEGEND_OMNIBUS_PURE_IDE_PORT/ide\e[0m"
echo -e "Legend Studio: \e[32mhttp://localhost:$LEGEND_OMNIBUS_STUDIO_PORT/studio\e[0m"
echo -e "\nTo start using Legend, launch Studio at: \e[32mhttp://localhost:$LEGEND_OMNIBUS_STUDIO_PORT/studio\e[0m\e[0m"
cat > /.omnibus-status.json <<-END
{
  "status": "SUCCEEDED"
}
END