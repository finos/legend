#!/bin/bash

error=0

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
	status_studio=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost:$LEGEND_OMNIBUS_STUDIO_PORT/studio)
	if [[ $status_engine -eq 200 ]] && [[ $status_sdlc -eq 200 ]] && [[ $status_studio -eq 200 ]]; then
		break
	elif [[ $status_engine -ge 300 ]] || [[ $status_sdlc -ge 300 ]] || [[ $status_studio -ge 300 ]]; then
		error=1
		break
	fi
	sleep 10
done

if [[ $error -eq 1 ]]; then
	echo -e "\e[31mSome component(s) have failed to start. Please check logs for more details...\e[0m"
	exit 1
fi

echo -e "\e[32mAll components have started successfully!\e[0m"
echo -e "Supervisor: \e[32mhttp://localhost:$LEGEND_OMNIBUS_SUPERVISOR_PORT\e[0m (user: $LEGEND_OMNIBUS_SUPERVISOR_USERNAME, password: $LEGEND_OMNIBUS_SUPERVISOR_PASSWORD)"
echo -e "Gitlab: \e[32mhttp://localhost:$LEGEND_OMNIBUS_GITLAB_PORT\e[0m (user: $LEGEND_OMNIBUS_GITLAB_ROOT_USER, password: $LEGEND_OMNIBUS_GITLAB_ROOT_PASSWORD)"
echo -e "Legend Engine: \e[32mhttp://localhost:$LEGEND_OMNIBUS_ENGINE_PORT\e[0m"
echo -e "Legend SDLC: \e[32mhttp://localhost:$LEGEND_OMNIBUS_SDLC_PORT\e[0m"
echo -e "Legend Studio: \e[32mhttp://localhost:$LEGEND_OMNIBUS_STUDIO_PORT/studio\e[0m"
echo -e "\nTo start using Legend, launch Studio at: \e[32mhttp://localhost:$LEGEND_OMNIBUS_STUDIO_PORT/studio\e[0m\e[0m"
