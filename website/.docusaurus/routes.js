import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '513'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '89f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ff6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '66c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '0f9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a83'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '4ae'),
    exact: true
  },
  {
    path: '/releases',
    component: ComponentCreator('/releases', 'f4d'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'c6c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fe7'),
    routes: [
      {
        path: '/docs/community/case-studies',
        component: ComponentCreator('/docs/community/case-studies', 'c4d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/community/contribute-to-legend',
        component: ComponentCreator('/docs/community/contribute-to-legend', '7fa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/community/get-help-from-community',
        component: ComponentCreator('/docs/community/get-help-from-community', 'd27'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/community/legend-media',
        component: ComponentCreator('/docs/community/legend-media', '08d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/community/legend-roadmap',
        component: ComponentCreator('/docs/community/legend-roadmap', '835'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/community/terms-of-service',
        component: ComponentCreator('/docs/community/terms-of-service', '563'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/getting-started/installation-guide',
        component: ComponentCreator('/docs/getting-started/installation-guide', '85c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/getting-started/introduction-to-legend',
        component: ComponentCreator('/docs/getting-started/introduction-to-legend', 'fd6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/overview/architecture',
        component: ComponentCreator('/docs/overview/architecture', '95c'),
        exact: true
      },
      {
        path: '/docs/overview/data-modeling-concepts',
        component: ComponentCreator('/docs/overview/data-modeling-concepts', '518'),
        exact: true
      },
      {
        path: '/docs/overview/legend-concepts',
        component: ComponentCreator('/docs/overview/legend-concepts', 'd0a'),
        exact: true
      },
      {
        path: '/docs/overview/legend-features',
        component: ComponentCreator('/docs/overview/legend-features', '8b5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/overview/legend-glossary',
        component: ComponentCreator('/docs/overview/legend-glossary', '62d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/overview/legend-overview',
        component: ComponentCreator('/docs/overview/legend-overview', '88f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/overview/use-cases',
        component: ComponentCreator('/docs/overview/use-cases', '7c5'),
        exact: true
      },
      {
        path: '/docs/reference/bindings',
        component: ComponentCreator('/docs/reference/bindings', '68b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/external-format',
        component: ComponentCreator('/docs/reference/external-format', '5a1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/legend-language',
        component: ComponentCreator('/docs/reference/legend-language', '45a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/query-protocol',
        component: ComponentCreator('/docs/reference/query-protocol', '68e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/released-functions',
        component: ComponentCreator('/docs/reference/released-functions', 'd81'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/service-post-validations',
        component: ComponentCreator('/docs/reference/service-post-validations', 'd01'),
        exact: true
      },
      {
        path: '/docs/reference/stores',
        component: ComponentCreator('/docs/reference/stores', 'bff'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/upcoming-functions',
        component: ComponentCreator('/docs/reference/upcoming-functions', 'ceb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/release/release-2021-10-18',
        component: ComponentCreator('/docs/release/release-2021-10-18', '619'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/release/release-2022-04-26',
        component: ComponentCreator('/docs/release/release-2022-04-26', '856'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/release/release-2022-05-05',
        component: ComponentCreator('/docs/release/release-2022-05-05', 'd40'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/release/release-2022-06-23',
        component: ComponentCreator('/docs/release/release-2022-06-23', '493'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/release/release-2022-07-15',
        component: ComponentCreator('/docs/release/release-2022-07-15', 'db0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/release/release-2022-08-18',
        component: ComponentCreator('/docs/release/release-2022-08-18', '504'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/release/release-2022-10-25',
        component: ComponentCreator('/docs/release/release-2022-10-25', '7dd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/sdlc/project-structure',
        component: ComponentCreator('/docs/sdlc/project-structure', '7f5'),
        exact: true
      },
      {
        path: '/docs/showcases/showcase-projects',
        component: ComponentCreator('/docs/showcases/showcase-projects', '4b5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tour',
        component: ComponentCreator('/docs/tour', 'ae2'),
        exact: true
      },
      {
        path: '/docs/tutorials/graphql-tutorial',
        component: ComponentCreator('/docs/tutorials/graphql-tutorial', 'f30'),
        exact: true
      },
      {
        path: '/docs/tutorials/logicalmodeling-tutorial',
        component: ComponentCreator('/docs/tutorials/logicalmodeling-tutorial', '535'),
        exact: true
      },
      {
        path: '/docs/tutorials/query-builder',
        component: ComponentCreator('/docs/tutorials/query-builder', '850'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/query-dataspace',
        component: ComponentCreator('/docs/tutorials/query-dataspace', 'f17'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/query-execution-context',
        component: ComponentCreator('/docs/tutorials/query-execution-context', '4db'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/query-explorer',
        component: ComponentCreator('/docs/tutorials/query-explorer', 'aaa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/query-export',
        component: ComponentCreator('/docs/tutorials/query-export', '863'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/query-fetch-structure',
        component: ComponentCreator('/docs/tutorials/query-fetch-structure', '422'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/query-filter',
        component: ComponentCreator('/docs/tutorials/query-filter', 'c82'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/query-graphql',
        component: ComponentCreator('/docs/tutorials/query-graphql', 'ec8'),
        exact: true
      },
      {
        path: '/docs/tutorials/query-parameter',
        component: ComponentCreator('/docs/tutorials/query-parameter', '837'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/relationalmapping-tutorial',
        component: ComponentCreator('/docs/tutorials/relationalmapping-tutorial', '6d0'),
        exact: true
      },
      {
        path: '/docs/tutorials/serviceexecution-tutorial',
        component: ComponentCreator('/docs/tutorials/serviceexecution-tutorial', 'b0f'),
        exact: true
      },
      {
        path: '/docs/tutorials/services-connection',
        component: ComponentCreator('/docs/tutorials/services-connection', '30b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/services-runtime',
        component: ComponentCreator('/docs/tutorials/services-runtime', 'c6d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/services-service',
        component: ComponentCreator('/docs/tutorials/services-service', '071'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/servicestore-tutorial',
        component: ComponentCreator('/docs/tutorials/servicestore-tutorial', '010'),
        exact: true
      },
      {
        path: '/docs/tutorials/studio-association',
        component: ComponentCreator('/docs/tutorials/studio-association', '666'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-binding',
        component: ComponentCreator('/docs/tutorials/studio-binding', 'aba'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-class',
        component: ComponentCreator('/docs/tutorials/studio-class', '1d1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-diagram',
        component: ComponentCreator('/docs/tutorials/studio-diagram', '933'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-enumeration',
        component: ComponentCreator('/docs/tutorials/studio-enumeration', '21e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-file-generation',
        component: ComponentCreator('/docs/tutorials/studio-file-generation', '925'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-find-models',
        component: ComponentCreator('/docs/tutorials/studio-find-models', '509'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-flat-data-schema',
        component: ComponentCreator('/docs/tutorials/studio-flat-data-schema', '2e9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-function',
        component: ComponentCreator('/docs/tutorials/studio-function', 'e5f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-m2m-mapping',
        component: ComponentCreator('/docs/tutorials/studio-m2m-mapping', 'b0c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-manage-model-information',
        component: ComponentCreator('/docs/tutorials/studio-manage-model-information', 'f98'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-measure',
        component: ComponentCreator('/docs/tutorials/studio-measure', 'ce1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-package',
        component: ComponentCreator('/docs/tutorials/studio-package', 'e20'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-persistence',
        component: ComponentCreator('/docs/tutorials/studio-persistence', 'fd6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-profile',
        component: ComponentCreator('/docs/tutorials/studio-profile', '03e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-project-dependencies',
        component: ComponentCreator('/docs/tutorials/studio-project-dependencies', '48c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-relational-mapping',
        component: ComponentCreator('/docs/tutorials/studio-relational-mapping', 'd78'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-schemaset',
        component: ComponentCreator('/docs/tutorials/studio-schemaset', '9fc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-sdlc',
        component: ComponentCreator('/docs/tutorials/studio-sdlc', '706'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-servicestore',
        component: ComponentCreator('/docs/tutorials/studio-servicestore', 'c93'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-tests',
        component: ComponentCreator('/docs/tutorials/studio-tests', '4b3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-text',
        component: ComponentCreator('/docs/tutorials/studio-text', 'a98'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-tutorial',
        component: ComponentCreator('/docs/tutorials/studio-tutorial', 'e6c'),
        exact: true
      },
      {
        path: '/docs/tutorials/studio-workspace',
        component: ComponentCreator('/docs/tutorials/studio-workspace', '4d5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/user-journeys/build-data-model',
        component: ComponentCreator('/docs/user-journeys/build-data-model', '3d7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/user-journeys/connect-datasources',
        component: ComponentCreator('/docs/user-journeys/connect-datasources', '70a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/user-journeys/consume-model-artifacts',
        component: ComponentCreator('/docs/user-journeys/consume-model-artifacts', '540'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/user-journeys/create-apis',
        component: ComponentCreator('/docs/user-journeys/create-apis', '188'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/user-journeys/find',
        component: ComponentCreator('/docs/user-journeys/find', '8c6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/user-journeys/generate-model-schema',
        component: ComponentCreator('/docs/user-journeys/generate-model-schema', '5a6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/user-journeys/map-models',
        component: ComponentCreator('/docs/user-journeys/map-models', 'c4c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/user-journeys/publish-model-changes',
        component: ComponentCreator('/docs/user-journeys/publish-model-changes', 'b4c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/user-journeys/query-data',
        component: ComponentCreator('/docs/user-journeys/query-data', '6d4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/user-journeys/test-troubleshoot',
        component: ComponentCreator('/docs/user-journeys/test-troubleshoot', '701'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/user-journeys/visualize-modelled-data',
        component: ComponentCreator('/docs/user-journeys/visualize-modelled-data', 'a1a'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f5e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
