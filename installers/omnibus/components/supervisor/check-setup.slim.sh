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

	if grep -q "$status_supervisor_components" <<< "FATAL"; then
		error=1
		break
	fi

	# Check health-check endpoints of the components
	status_engine=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_ENGINE_PORT/api/server/v1/info)
	status_sdlc=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_SDLC_PORT/api/info)
	status_studio=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_STUDIO_PORT/studio)
	if [[ $status_engine -eq 200 ]] && [[ $status_sdlc -eq 200 ]] && [[ $status_studio -eq 200 ]]; then
		if [[ "$LEGEND_OMNIBUS_CONFIG_SDLC_MODE" = "gitlab-pat" ]]; then
			authenticated=$(curl --header "legend-omnibus-pat: $LEGEND_OMNIBUS_CONFIG_GITLAB_PAT" --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_SDLC_PORT/api/currentUser)
			if [[ $authenticated -eq 200 ]]; then
				break
			else
				echo -e "\e[31mLegend SDLC with remote Gitlab instance with Personal Access Token: Authentication check failed!\e[0m"
				error=1
				break
			fi
		else
			break
		fi
	elif [[ $status_engine -ge 300 ]] || [[ $status_sdlc -ge 300 ]] || [[ $status_studio -ge 300 ]]; then
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
echo -e "(DEV) Supervisor: \e[32mhttp://localhost:$LEGEND_OMNIBUS_NGINX_PORT/sd\e[0m (user: $LEGEND_OMNIBUS_SUPERVISOR_USERNAME, password: $LEGEND_OMNIBUS_SUPERVISOR_PASSWORD)"
echo -e "(DEV) Directory Viewer: \e[32mhttp://localhost:$LEGEND_OMNIBUS_NGINX_PORT/dir\e[0m"

if [[ "$LEGEND_OMNIBUS_CONFIG_SDLC_MODE" = "gitlab-pat" ]]; then
	echo -e "Gitlab: \e[32mhttps://gitlab.com\e[0m (access token: $LEGEND_OMNIBUS_CONFIG_GITLAB_PAT)"
elif [[ "$LEGEND_OMNIBUS_CONFIG_SDLC_MODE" = "gitlab-oauth" ]]; then
	echo -e "Gitlab: \e[32mhttps://gitlab.com\e[0m (OAuth)"
fi
echo -e "Legend SDLC: \e[32mhttp://localhost:$LEGEND_OMNIBUS_NGINX_PORT/sdlc\e[0m"
echo -e "Legend Engine: \e[32mhttp://localhost:$LEGEND_OMNIBUS_NGINX_PORT/engine\e[0m"
echo -e "Legend Studio: \e[32mhttp://localhost:$LEGEND_OMNIBUS_NGINX_PORT/studio\e[0m"
echo -e "\nTo start using Legend, launch Studio at: \e[32mhttp://localhost:$LEGEND_OMNIBUS_NGINX_PORT/studio/\e[0m\e[0m"
cat > /.omnibus-status.json <<-END
{
  "status": "SUCCEEDED"
}
END
