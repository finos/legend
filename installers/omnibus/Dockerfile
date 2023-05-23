# ---------------- Setup base ----------------

ARG LEGEND_OMNIBUS_ENGINE_IMAGE_NAME
ARG LEGEND_OMNIBUS_ENGINE_VERSION
ARG LEGEND_OMNIBUS_SDLC_IMAGE_NAME
ARG LEGEND_OMNIBUS_SDLC_VERSION
ARG LEGEND_OMNIBUS_STUDIO_IMAGE_NAME
ARG LEGEND_OMNIBUS_STUDIO_VERSION

FROM ${LEGEND_OMNIBUS_ENGINE_IMAGE_NAME}:${LEGEND_OMNIBUS_ENGINE_VERSION} AS engine-image
FROM ${LEGEND_OMNIBUS_SDLC_IMAGE_NAME}:${LEGEND_OMNIBUS_SDLC_VERSION} AS sdlc-image
FROM ${LEGEND_OMNIBUS_STUDIO_IMAGE_NAME}:${LEGEND_OMNIBUS_STUDIO_VERSION} AS studio-image

FROM eclipse-temurin:11.0.17_8-jdk-jammy
RUN apt-get update && apt-get install -y wget nano

# ---------------- Setup environment ----------------

ARG LEGEND_OMNIBUS_ENGINE_VERSION
ARG LEGEND_OMNIBUS_SDLC_VERSION

ARG LEGEND_OMNIBUS_GITLAB_PORT
ARG LEGEND_OMNIBUS_GITLAB_ROOT_USER
ARG LEGEND_OMNIBUS_GITLAB_ROOT_PASSWORD

ARG LEGEND_OMNIBUS_ENGINE_PORT
ARG LEGEND_OMNIBUS_ENGINE_TEMP_DB_PORT

ARG LEGEND_OMNIBUS_SDLC_PORT
ARG LEGEND_OMNIBUS_SDLC_ADMIN_PORT

ARG LEGEND_OMNIBUS_STUDIO_PORT

ARG LEGEND_OMNIBUS_NGINX_PORT

ARG LEGEND_OMNIBUS_SUPERVISOR_PORT
ARG LEGEND_OMNIBUS_SUPERVISOR_USERNAME
ARG LEGEND_OMNIBUS_SUPERVISOR_PASSWORD

ENV LEGEND_OMNIBUS_ENGINE_VERSION=${LEGEND_OMNIBUS_ENGINE_VERSION}
ENV LEGEND_OMNIBUS_SDLC_VERSION=${LEGEND_OMNIBUS_SDLC_VERSION}

ENV LEGEND_OMNIBUS_GITLAB_PORT=${LEGEND_OMNIBUS_GITLAB_PORT}
ENV LEGEND_OMNIBUS_GITLAB_ROOT_USER=${LEGEND_OMNIBUS_GITLAB_ROOT_USER}
ENV LEGEND_OMNIBUS_GITLAB_ROOT_PASSWORD=${LEGEND_OMNIBUS_GITLAB_ROOT_PASSWORD}

ENV LEGEND_OMNIBUS_ENGINE_PORT=${LEGEND_OMNIBUS_ENGINE_PORT}
ENV LEGEND_OMNIBUS_ENGINE_TEMP_DB_PORT=${LEGEND_OMNIBUS_ENGINE_TEMP_DB_PORT}

ENV LEGEND_OMNIBUS_SDLC_PORT=${LEGEND_OMNIBUS_SDLC_PORT}
ENV LEGEND_OMNIBUS_SDLC_ADMIN_PORT=${LEGEND_OMNIBUS_SDLC_ADMIN_PORT}

ENV LEGEND_OMNIBUS_STUDIO_PORT=${LEGEND_OMNIBUS_STUDIO_PORT}

ENV LEGEND_OMNIBUS_NGINX_PORT=${LEGEND_OMNIBUS_NGINX_PORT}

ENV LEGEND_OMNIBUS_SUPERVISOR_PORT=${LEGEND_OMNIBUS_SUPERVISOR_PORT}
ENV LEGEND_OMNIBUS_SUPERVISOR_USERNAME=${LEGEND_OMNIBUS_SUPERVISOR_USERNAME}
ENV LEGEND_OMNIBUS_SUPERVISOR_PASSWORD=${LEGEND_OMNIBUS_SUPERVISOR_PASSWORD}

# Create base ENV file for sharing variables between processes
RUN touch /.env

# ---------------- Setup nginx ----------------

ARG NGINX_DIR=/app/nginx
RUN mkdir -p $NGINX_DIR/logs
RUN apt-get update && apt-get install -y nginx
COPY nginx $NGINX_DIR
RUN chmod +x $NGINX_DIR/run-nginx.sh
EXPOSE ${LEGEND_OMNIBUS_NGINX_PORT}

# ---------------- Setup Gitlab ----------------
# See https://about.gitlab.com/install/#ubuntu

ARG GITLAB_DIR=/app/gitlab
RUN apt-get update && apt-get install -y curl openssh-server ca-certificates tzdata perl
RUN curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | bash
RUN GITLAB_ROOT_PASSWORD=${LEGEND_OMNIBUS_GITLAB_ROOT_PASSWORD} apt-get install gitlab-ee
COPY gitlab $GITLAB_DIR
RUN chmod +x $GITLAB_DIR/run-gitlab.sh
EXPOSE ${LEGEND_OMNIBUS_GITLAB_PORT}

# ---------------- Setup Legend Engine ----------------

ARG ENGINE_DIR=/app/engine
RUN mkdir -p $ENGINE_DIR/lib
RUN mkdir -p $ENGINE_DIR/logs
COPY --from=engine-image /app/bin/*.jar $ENGINE_DIR/lib/
COPY engine $ENGINE_DIR
RUN chmod +x $ENGINE_DIR/run-engine.sh
# manually include bouncy castle jars as they are excluded from engine-server shaded jar
RUN wget -P $ENGINE_DIR/lib https://repo1.maven.org/maven2/org/bouncycastle/bcprov-jdk15on/1.67/bcprov-jdk15on-1.67.jar
RUN wget -P $ENGINE_DIR/lib https://repo1.maven.org/maven2/org/bouncycastle/bcpkix-jdk15on/1.67/bcpkix-jdk15on-1.67.jar
EXPOSE ${LEGEND_OMNIBUS_ENGINE_PORT}

# ---------------- Setup Legend SDLC ----------------

ARG SDLC_DIR=/app/sdlc
RUN mkdir -p $SDLC_DIR/lib
RUN mkdir -p $SDLC_DIR/logs
COPY --from=sdlc-image /app/bin/*.jar $SDLC_DIR/lib/
COPY sdlc $SDLC_DIR
RUN chmod +x $SDLC_DIR/run-sdlc.sh
EXPOSE ${LEGEND_OMNIBUS_SDLC_PORT}

# ---------------- Setup Legend Studio ----------------

ARG STUDIO_DIR=/app/studio
RUN mkdir -p $STUDIO_DIR/lib
RUN mkdir -p $STUDIO_DIR/logs
COPY --from=studio-image /app/bin $STUDIO_DIR/
COPY studio $STUDIO_DIR
RUN chmod +x $STUDIO_DIR/run-studio.sh
EXPOSE ${LEGEND_OMNIBUS_STUDIO_PORT}

# ---------------- Setup Supervisor ----------------

ARG SUPERVISOR_DIR=/app/supervisor
RUN mkdir -p $SUPERVISOR_DIR
RUN apt-get update && apt-get install -y supervisor
COPY supervisor $SUPERVISOR_DIR
RUN chmod +x $SUPERVISOR_DIR/check-setup.sh
EXPOSE ${LEGEND_OMNIBUS_SUPERVISOR_PORT}

# ---------------- Run Omnibus ----------------
# NOTE: here we need to run Gitlab first to generate necessary OAuth application tokens
# and/or configure private access token, also due to the fact that it could take quite a while
# for Gitlab to boot, then we would run a setup checker script to ensure all components are ready
# before prompting user to start using the app

CMD /app/gitlab/run-gitlab.sh && \
  (/app/supervisor/check-setup.sh &) && \
  supervisord -c /app/supervisor/supervisor.conf
