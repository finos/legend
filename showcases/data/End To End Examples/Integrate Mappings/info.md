---
title: Integrate Mappings
description: How to integrate your mapping with another group's model without tying yourself to their underlying physical implementation or specific mapping.
---

In this example, the producer of the LegalEntityMapping has released a mapping of LegalEntity. The consumers have created their own mapping (TradeMapping) which they would like to join against the producer mapping for legal entity.

In order to prevent unnecessarily tying their model to the implementation details of the producer's mapping, they include the producer's dataspace in TradeMapping. Including a dataspace, rather than a mapping, creates a layer of abstraction that protects both parties from unnecessary difficulty when a producer needs to migrate users onto a new mapping. Instead, the dataspace's underlying default mapping is always included behind-the-scenes by the compiler.

The consumer then defines a XStore Association between their trade class and the default class mapping ID of the Legal Entity class (com_entity_LegalEntity), which is derived from the package address of the target class. This cross store join allows the consumer to tie their mapping to the target class without explicitly defining the SQL joins occurring behind the scenes. The TradeDB and EntityDB can exist independently as packageable elements without hard-coded dependencies on one another.

The consumer then defines the locality of the stores within the runtime, by co-locating them underneath the same connection. With this language, the compiler can immediately understand whether to treat the XStore Associations between mappings as truly Cross-Store or Local. If a consumer's runtime only has a single connection, they can leverage a SingleConnectionRuntime to inform the platform that all stores underneath the listed mappings of this runtime are co-located.

Finally, when setting up their service or function, the consumer can leverage the test data provided by the producers in their dataspace. For a service, the consumer can place the data underneath the appropriate connection. For a function, the consumer will need to list it underneath the dataspace reference with the displayed syntax. Similar to other functionality, this level of abstraction keeps the consumer from tying their code to the implementation details of the producer store.