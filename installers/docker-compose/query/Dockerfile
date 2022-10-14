FROM finos/legend-query:snapshot
ARG GITLAB_APP_ID
ARG GITLAB_APP_SECRET
ARG GITLAB_HOST
ARG ENGINE_HOST
ARG ENGINE_PORT
ARG STUDIO_HOST
ARG STUDIO_PORT
ARG QUERY_HOST
ARG QUERY_PORT
ARG DEPOT_HOST
ARG DEPOT_PORT
ARG MONGODB_URI
ARG MONGODB_NAME
ARG MONGO_SESSION_ENABLED

RUN mkdir -p /config
COPY config/uiConfig.json /config/uiConfig.json
COPY config/httpConfig.json /config/httpConfig.json

RUN sed -i 's~${GITLAB_APP_ID}~'$GITLAB_APP_ID'~g' /config/*
RUN sed -i 's~${GITLAB_APP_SECRET}~'$GITLAB_APP_SECRET'~g' /config/*
RUN sed -i 's~${GITLAB_HOST}~'$GITLAB_HOST'~g' /config/*
RUN sed -i 's~${MONGODB_URI}~'$MONGODB_URI'~g' /config/*
RUN sed -i 's~${MONGODB_NAME}~'$MONGODB_NAME'~g' /config/*
RUN sed -i 's~${MONGO_SESSION_ENABLED}~'$MONGO_SESSION_ENABLED'~g' /config/*
RUN sed -i 's~${QUERY_HOST}~'$QUERY_HOST'~g' /config/*
RUN sed -i 's~${QUERY_PORT}~'$QUERY_PORT'~g' /config/*
RUN sed -i 's~${ENGINE_HOST}~'$ENGINE_HOST'~g' /config/*
RUN sed -i 's~${ENGINE_PORT}~'$ENGINE_PORT'~g' /config/*
RUN sed -i 's~${STUDIO_HOST}~'$STUDIO_HOST'~g' /config/*
RUN sed -i 's~${STUDIO_PORT}~'$STUDIO_PORT'~g' /config/*
RUN sed -i 's~${DEPOT_HOST}~'$DEPOT_HOST'~g' /config/*
RUN sed -i 's~${DEPOT_PORT}~'$DEPOT_PORT'~g' /config/*
