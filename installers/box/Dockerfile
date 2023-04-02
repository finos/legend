FROM eclipse-temurin:11.0.17_8-jdk-jammy

RUN apt-get update && apt-get install -y wget
RUN apt-get update && apt-get install supervisor -y
RUN apt-get update && apt-get install nano -y
RUN apt-get update && apt-get install nginx -y
RUN apt-get update && apt-get install nginx -y

## Variables 

ARG D_MONGO_HOME=/app/mongo
ARG D_ENGINE_HOME=/app/engine
ARG D_NGINX_HOME=/app/nginx
ARG D_SDLC_HOME=/app/sdlc
ARG D_DEPOT_HOME=/app/depot
ARG D_STUDIO_HOME=/app/studio
ARG D_QUERY_HOME=/app/query

## Setup mongo 

RUN apt-get install libcurl4 openssl liblzma5

RUN mkdir -p $D_MONGO_HOME
RUN wget -P $D_MONGO_HOME https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu2204-6.0.5.tgz
RUN cd $D_MONGO_HOME && tar -xzf mongodb-linux-x86_64-ubuntu2204-6.0.5.tgz

RUN mkdir -p $D_MONGO_HOME/data
RUN mkdir -p $D_MONGO_HOME/logs

COPY mongo/run-mongo.sh $D_MONGO_HOME

## Setup nginx 

RUN mkdir -p $D_NGINX_HOME/logs

## Setup engine 

RUN mkdir -p $D_ENGINE_HOME/lib
RUN mkdir -p $D_ENGINE_HOME/logs

COPY --from=finos/legend-engine-server:4.4.2 /app/bin/*.jar $D_ENGINE_HOME/lib/
COPY engine/run-engine.sh $D_ENGINE_HOME

# manually include bouncy castle jars as they are excluded from engine-server shaded jar
RUN wget -P $D_ENGINE_HOME/lib https://repo1.maven.org/maven2/org/bouncycastle/bcprov-jdk15on/1.67/bcprov-jdk15on-1.67.jar
RUN wget -P $D_ENGINE_HOME/lib https://repo1.maven.org/maven2/org/bouncycastle/bcpkix-jdk15on/1.67/bcpkix-jdk15on-1.67.jar

## Setup sdlc 

RUN mkdir -p $D_SDLC_HOME/lib
RUN mkdir -p $D_SDLC_HOME/logs

COPY --from=finos/legend-sdlc-server:0.121.1 /app/bin/*.jar $D_SDLC_HOME/lib/
COPY sdlc/run-sdlc.sh $D_SDLC_HOME

## Setup studio 

RUN mkdir -p $D_STUDIO_HOME/lib
RUN mkdir -p $D_STUDIO_HOME/logs

COPY --from=finos/legend-studio:9.6.0 /app/bin $D_STUDIO_HOME/
COPY studio/run-studio.sh $D_STUDIO_HOME

## Setup supervisord

RUN mkdir -p /app/supervisord
COPY supervisord/supervisord.conf /app/supervisord

## Run supervisord

CMD ["supervisord", "-c", "/app/supervisord/supervisord.conf"]

