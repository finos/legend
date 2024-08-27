---
Title: Legend Model-to-Model Services & Hosting
Description: Example implementation of Legend Model-to-Model Services and Hosting
---

# Overview

Try out Legend Services! [Go to the guide!](https://legend.finos.org/docs/overview/legend-overview)

# Use Legend to Create Model-to-Model Mapping, Services, and Hosting

## Prerequisite

## Modeling
The first step of this implementation involves creating models.

For the purposes of this showcase (and for any model-to-model service), you will need to create two models: one source model and one target model.

By doing this, you are able to take in input data and transform this data from source to target.

In this example, our input data is stored in JSON format in `data::MyFirmData`.

Our JSON data is connected to via `mapping::FirmConnection`, and `mapping::FirmRuntime` uses the connection to map the data into the model.

Our source models are `model::Firm` and `model::Person`.

Our target models are `model::target::_Firm` and `model::target::_Person`

## Model-to-Model Service
Services contain three different components, as follows:
1. Function: uses a graphFetch query to select the properties of the target class that should be mapped and returned in the JSON response
   1a. In our example, our Function is located under `mapping::FirmService`
2. Mapping: a standard model-to-model mapping
   2a. In our example, our Mapping is located under `mapping::ModelToModelMapping`
3. Runtime: connection types are JsonModel, XmlModel, and FlatData.
   3a. In our example, our Runtime is a JsonModel, and is located under `mapping::FirmRuntime`