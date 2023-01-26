import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', '6cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '10e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '2d5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '975'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', '270'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', 'd26'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', 'a58'),
    exact: true
  },
  {
    path: '/releases/',
    component: ComponentCreator('/releases/', '8fa'),
    exact: true
  },
  {
    path: '/search/',
    component: ComponentCreator('/search/', '27a'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'ef4'),
    routes: [
      {
        path: '/docs/case-studies/legend-case-studies/',
        component: ComponentCreator('/docs/case-studies/legend-case-studies/', '53f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/community/contribute-to-legend/',
        component: ComponentCreator('/docs/community/contribute-to-legend/', '95d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/community/get-help-from-community/',
        component: ComponentCreator('/docs/community/get-help-from-community/', '934'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/community/legend-media/',
        component: ComponentCreator('/docs/community/legend-media/', '83a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/community/legend-roadmap/',
        component: ComponentCreator('/docs/community/legend-roadmap/', '1b7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/community/terms-of-service/',
        component: ComponentCreator('/docs/community/terms-of-service/', 'd29'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/concepts/data-modeling-concepts/',
        component: ComponentCreator('/docs/concepts/data-modeling-concepts/', 'c7e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/concepts/legend-concepts/',
        component: ComponentCreator('/docs/concepts/legend-concepts/', 'b55'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/getting-started/installation-guide/',
        component: ComponentCreator('/docs/getting-started/installation-guide/', 'cff'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/getting-started/introduction-to-legend/',
        component: ComponentCreator('/docs/getting-started/introduction-to-legend/', '5f7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/overview/architecture/',
        component: ComponentCreator('/docs/overview/architecture/', '173'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/overview/legend-overview/',
        component: ComponentCreator('/docs/overview/legend-overview/', 'c36'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/overview/use-cases/',
        component: ComponentCreator('/docs/overview/use-cases/', '62a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/bindings/',
        component: ComponentCreator('/docs/reference/bindings/', '496'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/legend-language/',
        component: ComponentCreator('/docs/reference/legend-language/', '93d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/query-protocol/',
        component: ComponentCreator('/docs/reference/query-protocol/', 'fa8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/released-functions/',
        component: ComponentCreator('/docs/reference/released-functions/', '44d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/stores/',
        component: ComponentCreator('/docs/reference/stores/', '438'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/reference/upcoming-functions/',
        component: ComponentCreator('/docs/reference/upcoming-functions/', 'be4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/release/release-2021-10-18/',
        component: ComponentCreator('/docs/release/release-2021-10-18/', '3a1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/release/release-2022-04-26/',
        component: ComponentCreator('/docs/release/release-2022-04-26/', '0e0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/release/release-2022-05-05/',
        component: ComponentCreator('/docs/release/release-2022-05-05/', '96f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/sdlc/project-structure/',
        component: ComponentCreator('/docs/sdlc/project-structure/', 'd5a'),
        exact: true
      },
      {
        path: '/docs/showcases/LogicalModellingBasic/',
        component: ComponentCreator('/docs/showcases/LogicalModellingBasic/', 'b40'),
        exact: true
      },
      {
        path: '/docs/tour/',
        component: ComponentCreator('/docs/tour/', '657'),
        exact: true
      },
      {
        path: '/docs/tutorials/query-tutorial/',
        component: ComponentCreator('/docs/tutorials/query-tutorial/', '278'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/studio-tutorial/',
        component: ComponentCreator('/docs/tutorials/studio-tutorial/', '2c8'),
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
