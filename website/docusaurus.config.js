const fs = require("fs");
const path = require("path");
const pureHighlighter = require("../website/pureHighlighter");

// User guides kept with their application's code, in finos/legend-studio's
// docs/user-guide, which the website's workflows check out into
// website/external/legend-studio before they build. Each guide is a docs
// section of its own at /guides/<id>, its sidebar made from its folder. One
// that isn't there (e.g. a local build without the checkout) is left out.
const LEGEND_STUDIO_USER_GUIDES = path.resolve(
  __dirname,
  "external/legend-studio/docs/user-guide"
);
const ALL_USER_GUIDES = [
  { id: "studio", label: "Legend Studio", folder: "studio" },
  { id: "query", label: "Legend Query", folder: "query" },
  { id: "cube", label: "Legend Cube", folder: "cube" },
].map((guide) => ({
  ...guide,
  path: path.resolve(LEGEND_STUDIO_USER_GUIDES, guide.folder),
  routeBasePath: `guides/${guide.id}`,
}));
const USER_GUIDES = ALL_USER_GUIDES.filter((guide) => {
  const found = fs.existsSync(guide.path);
  if (!found) {
    console.warn(`User guide "${guide.label}" not found at ${guide.path}: left out`);
  }
  return found;
});
// The docs link to the guides, so without all of them a broken link can't be
// told from a missing guide: such a build only warns
const BROKEN_LINKS =
  USER_GUIDES.length === ALL_USER_GUIDES.length ? "throw" : "warn";

// Addresses that pages had before they moved or were folded into another
const REDIRECTS = [
  ["/docs/overview/legend-features", "/docs/overview/legend-glossary"],
  ["/docs/overview/data-modeling-concepts", "/docs/overview/legend-glossary"],
  ["/docs/overview/architecture", "/docs/overview/legend-overview"],
  ["/docs/overview/use-cases", "/docs/overview/legend-overview"],
  ["/docs/tour", "/docs/overview/legend-overview"],
  ["/docs/sdlc/project-structure", "/docs/tutorials/studio-sdlc"],
  ["/docs/tutorials/studio-tutorial", "/guides/studio/start-screen#create-a-workspace"],
  ["/docs/tutorials/logicalmodeling-tutorial", "/guides/studio/modeling#classes"],
  ["/docs/tutorials/relationalmapping-tutorial", "/guides/studio/connect"],
  ["/docs/tutorials/serviceexecution-tutorial", "/docs/tutorials/services-service"],
  ["/docs/tutorials/servicestore-tutorial", "/docs/tutorials/studio-servicestore"],
  ["/docs/tutorials/graphql-tutorial", "/docs/reference/query-protocol"],
  ["/docs/tutorials/query-graphql", "/docs/reference/query-protocol"],
  ["/docs/tutorials/query-tutorial", "/docs/tutorials/query-builder"],
  // Studio tutorials the Legend Studio guide replaced, to the part of it that
  // covers them
  ["/docs/tutorials/studio-workspace", "/guides/studio/start-screen#create-a-workspace"],
  ["/docs/tutorials/studio-package", "/guides/studio/modeling#create-an-element"],
  ["/docs/tutorials/studio-manage-model-information", "/guides/studio/modeling"],
  ["/docs/tutorials/studio-class", "/guides/studio/modeling#classes"],
  ["/docs/tutorials/studio-enumeration", "/guides/studio/modeling#enumerations"],
  ["/docs/tutorials/studio-association", "/guides/studio/modeling#associations"],
  ["/docs/tutorials/studio-profile", "/guides/studio/modeling#profiles"],
  ["/docs/tutorials/studio-diagram", "/guides/studio/modeling#diagrams"],
  ["/docs/tutorials/studio-relational-mapping", "/guides/studio/connect"],
  ["/docs/tutorials/services-connection", "/guides/studio/connect#a-connection"],
  ["/docs/tutorials/services-runtime", "/guides/studio/connect#a-runtime"],
  ["/docs/tutorials/studio-mapping-test", "/guides/studio/tests#a-mappings-tests"],
  // Query tutorials the Legend Query guide replaced
  ["/docs/tutorials/query-dataspace", "/guides/query/data-space#pick-a-data-space"],
  ["/docs/tutorials/query-execution-context", "/guides/query/data-space#pick-a-data-space"],
  ["/docs/tutorials/query-explorer", "/guides/query/query-editor"],
  ["/docs/tutorials/query-export", "/guides/query/query-editor#results"],
  ["/docs/tutorials/query-fetch-structure", "/guides/query/query-editor"],
  ["/docs/tutorials/query-filter", "/guides/query/query-editor"],
  ["/docs/tutorials/query-parameter", "/guides/query/query-editor#parameters-and-constants"],
].map(([from, to]) => ({ from, to }));

module.exports = {
  title: "Legend",
  tagline:
    "Language and visual platform to generate models for the financial services industry",
  url: "https://legend.finos.org/",
  baseUrl: "/",
  organizationName: "finos",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  projectName: "legend",
  scripts: ["https://buttons.github.io/buttons.js"],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,500,700,900|Source+Code+Pro:400,500,700,900&display=swap",
  ],
  favicon: "img/favicon/favicon.ico",
  customFields: {
    wrapPagesHTML: true,
    repoUrl: "https://github.com/finos/legend/",
    highlight: {
      theme: "tomorrow-night-blue",
      hljs: function (hljsEngine) {
        hljsEngine.registerLanguage("legend", pureHighlighter);
      },
    },
  },
  // a broken link or anchor fails the build, so it never reaches the site
  onBrokenLinks: BROKEN_LINKS,
  onBrokenAnchors: BROKEN_LINKS,
  onDuplicateRoutes: process.env.NODE_ENV === "production" ? "throw" : "warn",
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: BROKEN_LINKS,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          //svp
          breadcrumbs: false /* hide collapsed nav bar header because we only have 1 parent now which is Getting Started*/,
          sidebarPath: "../website/sidebars.json",
        },
        blog: {},
        theme: {
          customCss: "./src/css/customTheme.css",
        },
        gtag: {
          trackingID: 'G-B6ZG606WLL',
          anonymizeIP: true,
        },
      },
    ],
  ],
  plugins: [
    ...USER_GUIDES.map((guide) => [
      "@docusaurus/plugin-content-docs",
      {
        id: guide.id,
        path: guide.path,
        routeBasePath: guide.routeBasePath,
        // a page's own file in finos/legend-studio
        editUrl: ({ docPath }) =>
          `https://github.com/finos/legend-studio/edit/master/docs/user-guide/${guide.folder}/${docPath}`,
      },
    ]),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: REDIRECTS,
        // the guides were at /<id> before /guides/<id>
        createRedirects: (existingPath) => {
          const guide = USER_GUIDES.find(
            ({ routeBasePath }) =>
              existingPath === `/${routeBasePath}` ||
              existingPath.startsWith(`/${routeBasePath}/`)
          );
          return guide
            ? existingPath.replace(`/${guide.routeBasePath}`, `/${guide.id}`)
            : undefined;
        },
      },
    ],
  ],
  themeConfig: {
    // prism: {
    //   theme: require("prism-react-renderer/themes/github"),
    // },
    algolia: {
      // The application ID provided by Algolia
      appId: "X69JR631XX",
      apiKey: "622bf47b15a74089a06eed2d241f265a",
      indexName: "legend-finos-test",
      contextualSearch: true,
      searchPagePath: "search",
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        src: "img/legend.svg",
      },
      items: [
        {
          to: "docs/overview/legend-overview",
          label: "Docs",
          position: "right",
        },
        ...(USER_GUIDES.length
          ? [
              {
                type: "dropdown",
                label: "Guides",
                position: "right",
                items: USER_GUIDES.map((guide) => ({
                  to: guide.routeBasePath,
                  label: guide.label,
                })),
              },
            ]
          : []),
      ],
    },

    footer: {
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              to: "https://twitter.com/finosfoundation",
            },
            {
              label: "Privacy Policy",
              to: "https://www.finos.org/privacy-policy",
            },
          ],
        },
      ],
      logo: {
        alt: "FINOS",
        src: "https://legend.finos.org/img/finos_wordmark.svg",
        href: "https://www.finos.org",
      },
    },
  },
};
