FROM gitlab/gitlab-ce:latest
ARG CONFIG_DIR="/etc/gitlab"
ENV GITLAB_POST_RECONFIGURE_SCRIPT="bash ${CONFIG_DIR}/config.sh"
COPY config.sh ${CONFIG_DIR}/


