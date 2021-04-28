# Overview

This RFC describes the architecture/implementation of Legend features/components for the following :
* Generating artifacts from the Legend models
* Distribution of generated artifacts
* Legend model dependency management between projects

# High Level Architecture / Implementation

## Artifact Generation / Maven Project Object Model Generation 

Various artifacts can be generated from the Legend model. These include serialized entities, service execution jars etc.

Legend SDLC which manages the Gitlab project behind a Legend SDLC project, creates a Maven Project Object Model(POM) in the Gitlab project. This POM is configured with various Maven plugins that generate different artifacts.

__Note__ : This feature only generates the Maven POM. It does not actually "build" the project by invoking Maven.

## Artifact Generation / Running Maven Builds

Running a Maven build using the generated Maven POM varies from one Legend installation to the other. For e.g Legend installations might want to specify the versions of Java to be used and where the Java binary should be sourced from. 

To help with these installation specific customizations, Legend SDLC provides a ```ProjectStructureExtensionProvider```. This extension provider allows Legend installations to customize the Gitlab project managed by Legend SDLC. For example, the extension provider can create a Gitlab ```gitlab-ci.yml``` that invokes the Maven build.

## Artifact Generation / Publishing generated artifacts 

Similar to running the Maven build, Legend installations can use the extension provider to publish artifacts. For e.g the extension provider can be used to publish the generated artifacts to a Maven repository. 

## Artifact Consumption 

Generated artifacts can be consumed in various forms. For e.g applications can be coded against the generated service execution jars. Another example is where the entities of a project's model are used in another model.

Artifacts that are published to a Maven repository can be consumed via the normal Maven dependency resolution mechanism.

## Artifact Consumption / Legend Metadata Server

There is a special case of artifact consumption where a project's model entities can be consumed as a dependency in another project.

An example use case is when an industry standard open source model is maintained by an upstream organization (e.g FINOS) and other downstream organizations want to consume and use this model in their own Legend models.

__Note__ : These dependencies need not necessarily span organizations. They can be used to build dependencies between multiple projects that belong to the same organization as well.

Legend Studio can be used to define project dependencies. Legend Studio sources the dependency information from the Legend Metadata Server.

## Legend Metadata Server 

Legend Metadata Server is a Legend component that manages a index of Legend models and their entities. It exposes read/write APIs by which this index can be read and updated.

# Open Questions/Considerations

* Legend Metadata Server - The model index is persisted to durable storage. Do we have an abstraction to allow users to plugin their own storage. e.g MongoDb vs S3 etc 
* Legend Metadata Server - What is the authentication and authorization scheme ? especially for the use case of sharing models across organizations 
* Legend SDLC Server -  How do we want to manage uniqueness of Legend SDLC project identifiers ?
* Legend SDLC Server - Do we need to do anything with managing uniqueness of Maven GAVs ?


