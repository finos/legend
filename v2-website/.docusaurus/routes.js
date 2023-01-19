import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'aff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '471'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'e97'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fd8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'f31'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1ac'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'de7'),
    exact: true
  },
  {
    path: '/releases',
    component: ComponentCreator('/releases', '676'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '6c1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd48'),
    routes: [
      {
        path: '/docs/case-studies/legend-case-studies',
        component: ComponentCreator('/docs/case-studies/legend-case-studies', 'a8c'),
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
        path: '/docs/concepts/data-modeling-concepts',
        component: ComponentCreator('/docs/concepts/data-modeling-concepts', '942'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/concepts/legend-concepts',
        component: ComponentCreator('/docs/concepts/legend-concepts', '63e'),
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
        component: ComponentCreator('/docs/overview/architecture', '3e6'),
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
        component: ComponentCreator('/docs/overview/use-cases', 'b0b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/bindings',
        component: ComponentCreator('/docs/reference/bindings', '68b'),
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
        path: '/docs/sdlc/project-structure',
        component: ComponentCreator('/docs/sdlc/project-structure', '7f5'),
        exact: true
      },
      {
        path: '/docs/showcases/LogicalModellingBasic',
        component: ComponentCreator('/docs/showcases/LogicalModellingBasic', 'cff'),
        exact: true
      },
      {
        path: '/docs/tour',
        component: ComponentCreator('/docs/tour', 'ae2'),
        exact: true
      },
      {
        path: '/docs/tutorials/query-tutorial',
        component: ComponentCreator('/docs/tutorials/query-tutorial', '898'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-tutorial',
        component: ComponentCreator('/docs/tutorials/studio-tutorial', '785'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '65c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
