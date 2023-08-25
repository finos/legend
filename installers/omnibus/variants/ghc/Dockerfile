# ---------------- Setup base ----------------

ARG LEGEND_OMNIBUS_IMAGE_VERSION
ARG LEGEND_OMNIBUS_ENGINE_VERSION
ARG LEGEND_OMNIBUS_SDLC_VERSION
ARG LEGEND_OMNIBUS_SDLC_FS_VERSION
ARG LEGEND_OMNIBUS_STUDIO_VERSION

FROM finos/legend-engine-server:${LEGEND_OMNIBUS_ENGINE_VERSION} AS engine-image
FROM finos/legend-sdlc-server:${LEGEND_OMNIBUS_SDLC_VERSION} AS sdlc-image
FROM finos/legend-studio:${LEGEND_OMNIBUS_STUDIO_VERSION} AS studio-image
FROM finos/legend-sdlc-server-fs:${LEGEND_OMNIBUS_SDLC_FS_VERSION} AS sdlc-fs-image

FROM eclipse-temurin:11.0.19_7-jdk-jammy
RUN apt-get update && apt-get install -y wget nano

# ---------------- Setup environment ----------------

ARG LEGEND_OMNIBUS_IMAGE_VERSION

ENV LEGEND_OMNIBUS_IMAGE_VERSION=${LEGEND_OMNIBUS_IMAGE_VERSION}

# Supervisor
ARG LEGEND_OMNIBUS_SUPERVISOR_PORT
ARG LEGEND_OMNIBUS_SUPERVISOR_USERNAME
ARG LEGEND_OMNIBUS_SUPERVISOR_PASSWORD
ARG LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT

ENV LEGEND_OMNIBUS_SUPERVISOR_PORT=${LEGEND_OMNIBUS_SUPERVISOR_PORT}
ENV LEGEND_OMNIBUS_SUPERVISOR_USERNAME=${LEGEND_OMNIBUS_SUPERVISOR_USERNAME}
ENV LEGEND_OMNIBUS_SUPERVISOR_PASSWORD=${LEGEND_OMNIBUS_SUPERVISOR_PASSWORD}
ENV LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT=${LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT}

# Nginx
ARG LEGEND_OMNIBUS_NGINX_PORT

ENV LEGEND_OMNIBUS_NGINX_PORT=${LEGEND_OMNIBUS_NGINX_PORT}

# Legend Engine
ARG LEGEND_OMNIBUS_ENGINE_VERSION
ARG LEGEND_OMNIBUS_ENGINE_PORT
ARG LEGEND_OMNIBUS_ENGINE_TEMP_DB_PORT

ENV LEGEND_OMNIBUS_ENGINE_VERSION=${LEGEND_OMNIBUS_ENGINE_VERSION}
ENV LEGEND_OMNIBUS_ENGINE_PORT=${LEGEND_OMNIBUS_ENGINE_PORT}
ENV LEGEND_OMNIBUS_ENGINE_TEMP_DB_PORT=${LEGEND_OMNIBUS_ENGINE_TEMP_DB_PORT}

# Legend SDLC
ARG LEGEND_OMNIBUS_SDLC_VERSION
ARG LEGEND_OMNIBUS_SDLC_PORT
ARG LEGEND_OMNIBUS_SDLC_ADMIN_PORT

ENV LEGEND_OMNIBUS_SDLC_VERSION=${LEGEND_OMNIBUS_SDLC_VERSION}
ENV LEGEND_OMNIBUS_SDLC_PORT=${LEGEND_OMNIBUS_SDLC_PORT}
ENV LEGEND_OMNIBUS_SDLC_ADMIN_PORT=${LEGEND_OMNIBUS_SDLC_ADMIN_PORT}

# Legend SDLC FS
ARG LEGEND_OMNIBUS_SDLC_FS_VERSION
ARG LEGEND_OMNIBUS_SDLC_FS_ROOT_DIR

ENV LEGEND_OMNIBUS_SDLC_FS_VERSION=${LEGEND_OMNIBUS_SDLC_FS_VERSION}
ENV LEGEND_OMNIBUS_SDLC_FS_ROOT_DIR=${LEGEND_OMNIBUS_SDLC_FS_ROOT_DIR}

# Legend Studio
ARG LEGEND_OMNIBUS_STUDIO_VERSION
ARG LEGEND_OMNIBUS_STUDIO_PORT

ENV LEGEND_OMNIBUS_STUDIO_VERSION=${LEGEND_OMNIBUS_STUDIO_VERSION}
ENV LEGEND_OMNIBUS_STUDIO_PORT=${LEGEND_OMNIBUS_STUDIO_PORT}

# Create base ENV file for sharing variables between processes
RUN touch /.env

# Create an empty .dockerenv file as this is used by runners such as `podman`
# to detect if the process is running in a Docker container
# See https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/3552
# See https://github.com/containers/podman/issues/648
# See https://github.com/containers/podman/issues/11836
RUN touch /.dockerenv

# ---------------- Setup Nginx ----------------

ARG NGINX_DIR=/app/nginx
RUN mkdir -p $NGINX_DIR/logs
RUN apt-get update && apt-get install -y nginx
COPY components/nginx $NGINX_DIR
RUN chmod +x $NGINX_DIR/run-nginx.ghc.sh
EXPOSE ${LEGEND_OMNIBUS_NGINX_PORT}

# ---------------- Setup Legend Engine ----------------

ARG ENGINE_DIR=/app/engine
RUN mkdir -p $ENGINE_DIR/lib
RUN mkdir -p $ENGINE_DIR/logs
COPY --from=engine-image /app/bin/*.jar $ENGINE_DIR/lib/
COPY components/engine $ENGINE_DIR
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
COPY components/sdlc $SDLC_DIR
RUN chmod +x $SDLC_DIR/run-sdlc.ghc.sh
EXPOSE ${LEGEND_OMNIBUS_SDLC_PORT}

# ---------------- Setup Legend SDLC FS -------------

ARG SDLC_FS_DIR=/app/sdlc-fs
RUN mkdir -p $SDLC_FS_DIR/lib
RUN mkdir -p $SDLC_FS_DIR/logs
COPY --from=sdlc-fs-image /app/bin/*.jar $SDLC_FS_DIR/lib
COPY components/sdlc/showcase/Legend $LEGEND_OMNIBUS_SDLC_FS_ROOT_DIR
RUN apt-get update && apt-get install -y git

# ---------------- Setup Legend Studio ----------------

ARG STUDIO_DIR=/app/studio
RUN mkdir -p $STUDIO_DIR/lib
RUN mkdir -p $STUDIO_DIR/logs
COPY --from=studio-image /app/bin $STUDIO_DIR/
COPY components/studio $STUDIO_DIR
RUN chmod +x $STUDIO_DIR/run-studio.ghc.sh
EXPOSE ${LEGEND_OMNIBUS_STUDIO_PORT}

# ---------------- Setup Supervisor ----------------

ARG SUPERVISOR_DIR=/app/supervisor
RUN mkdir -p $SUPERVISOR_DIR
RUN apt-get update && apt-get install -y supervisor python3
COPY components/supervisor $SUPERVISOR_DIR
RUN chmod +x $SUPERVISOR_DIR/check-setup.ghc.sh
EXPOSE ${LEGEND_OMNIBUS_SUPERVISOR_PORT}

RUN chmod +x $SUPERVISOR_DIR/run-directory-server.sh
EXPOSE ${LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT}

# ---------------- Reporting ----------------

RUN chmod +x $SUPERVISOR_DIR/report-build-info.ghc.sh
RUN $SUPERVISOR_DIR/report-build-info.ghc.sh

# ---------------- Run Omnibus ----------------

CMD (/app/supervisor/check-setup.ghc.sh &) && \
  supervisord -c /app/supervisor/supervisor.ghc.conf
