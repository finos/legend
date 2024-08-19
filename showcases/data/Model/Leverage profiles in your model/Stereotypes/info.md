---
title: Leverage profiles in your model > Stereotypes
description: This an example that shows how to use stereotypes in your data model
---

This showcase show how stereotypes can be used in the data model. Stereotypes can be defined at both class level and property level. Stereotypes are used to add additional metadata to your models.
You can choose from the various types of stereotypes based on your use case. In this example, 'doc' stereotype is used to mark the class as deprecated. In addition, the 'integerType' stereotype is used on the 'age' field to specify that it expects an Interger and not Long.
For more details, refer https://legend.finos.org/docs/tutorials/studio-profile#stereotype.

For more custom use cases, you can create your own profile with custom stereotypes. Here we have create the Profile `showcase::model::CustomProfile` with a stereotype of `custom`.
We use this custom profile in the `introduction` derived property of Animal. 