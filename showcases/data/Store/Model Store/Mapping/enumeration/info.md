---
title: Enumeration
description: Example Mapping using Enum and Enum Mapping
development: true
---
This showcase displays building a mapping from a database where one of the elements is an enum, utilizing enum mapping syntax. 

Components needed for Example Enum Mapping:
* Source Models [Physical Model]  : `showcase::stores::TradeDB`
* Source Models [Logical Model]   : `showcase::model::Trade`
                                  : `showcase::model::Order`
* Connection                      : `showcase::connections::EntityConnection`
* Service                         : `showcase::services::ServicePropEqStaticEnumVal`
                                  : `showcase::services::ServicePropEqVarEnumVal`
                                  : `showcase::services::ServiceVarInStaticEnumVal`
