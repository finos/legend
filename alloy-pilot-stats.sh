#!/bin/bash

# This script is used by Alloy Pilot Maintainers to extract the number of activities across all modeling projects
#
# To know more about the audit events, checkout https://gitlab.alloy.finos.org/admin/audit_logs
#
# To run the script, you need to have a GitLab token to invoke APIs
# Run: GITLAB_TOKEN="<your token here> ./alloy-pilot-stats.sh"
EVENTS_AFTER="2020-03-01T00:00:00.000Z"

# ALLOY_EVENTS=`curl -s --header "PRIVATE-TOKEN: $GITLAB_TOKEN" "https://gitlab.alloy.finos.org/api/v4/groups/40/audit_events?created_after=2020-03-01T12:00:00.000Z&per_page=100" | jq '. | length'`

SCRATCH_EVENTS=`curl -s --header "PRIVATE-TOKEN: $GITLAB_TOKEN" "https://gitlab.alloy.finos.org/api/v4/audit_events?entity_type=Project&entity_id=33&created_after=$EVENTS_AFTER&per_page=100" | jq '. | length'`

CDM_EVENTS=`curl -s --header "PRIVATE-TOKEN: $GITLAB_TOKEN" "https://gitlab.alloy.finos.org/api/v4/audit_events?entity_type=Project&entity_id=34&created_after=$EVENTS_AFTER&per_page=100" | jq '. | length'`

CML_EVENTS=`curl -s --header "PRIVATE-TOKEN: $GITLAB_TOKEN" "https://gitlab.alloy.finos.org/api/v4/audit_events?entity_type=Project&entity_id=36&created_after=$EVENTS_AFTER&per_page=100" | jq '. | length'`

# echo "Alloy events: $ALLOY_EVENTS"
echo "Scratch events: $SCRATCH_EVENTS"
echo "CDM events: $CDM_EVENTS"
echo "CMLRefData events: $CML_EVENTS"
