---
id: intro
title: Welcome to PURE/Alloy
sidebar_label: Introduction
---
![PURE/Alloy](assets/purealloy-logo.png)

PURE is a modeling language inspired in part by languages such as the Object Constraint Language (OCL) and UML. PURE also has many elements of a functional programming language. Goldman Sachs uses PURE to create and construct internal models for functions such as reporting and clearing. 

Alloy is a visual modeling environment and system that creates, maintains, and helps distribute models built in PURE. Alloy uses git, (fellow FINOS member) Gitlab, and standard source control concepts to manage changes to models. Alloy can also generate code in languages and formats such as SQL and JSON (and, internally to Goldman Sachs, SLANG) in order to import and update target systems & infrastructure w/ revised model definitions/extensions.

PURE and Alloy have been developed internally by Goldman Sachs and are in the process of being contributed to FINOS, the FinTech Open Source Foundation, to foster collaboration around object modeling, using the Alloy framework.

During the contribution process, https://alloy.finos.org will serve as pilot environment to demo feature and start gathering other FINOS members interest. After the pilot, https://alloy.finos.org will serve FINOS members to collaborate around object modeling, using gitlab.com/finos to host object definitions and enable cross-firm collaboration.

More info on https://www.finos.org/pure-alloy

## Pilot

PURE/Alloy is currently available via alloy.finos.org as pilot project, check https://finos.org/pure-alloy to know more.

For downtimes and other important notifications, the following lists will be notified: gs-alloy-dev@gs.com and purealloy@finos.org

## Requesting access

You can request access to the pilot via https://www.finos.org/pure-alloy

## Alloy high level architecture
![Alloy Process Diagram](https://github.com/finos-admin/alloy-config/raw/master/docs/alloy-process-diagram.png)

The plan is to distribute the platform both as Jars and Docker images.

Docker images would be the preferred channel and can therefore run on any platform using Docker - Kubernetes, OpenShift, ECS, DockerCloud, etc. If none of these are suitable, institutions can consume the platform as Jars which will run on any platform, although will require more configuration to set up.

All the microservices (Cube, Foundry, Exec, SDLC, others to come) include their own Jetty containers in the Jar, so don't need an external Container. They will need a reverse proxy (Contour/NGINX/HAProxy/similar) in front.