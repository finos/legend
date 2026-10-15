const fs = require("fs");
const path = require("path");
const pureHighlighter = require("../website/pureHighlighter");

// User guides kept with their application's code, in finos/legend-studio's
// docs/user-guide, which the website's workflows check out into
// website/external/legend-studio before they build. Each guide is a docs
// section of its own, its sidebar made from its folder. One that isn't there
// (e.g. a local build without the checkout) is left out.
const LEGEND_STUDIO_USER_GUIDES = path.resolve(
  __dirname,
  "external/legend-studio/docs/user-guide"
);
const USER_GUIDES = [
  { id: "cube", label: "Legend Cube", folder: "cube" },
]
  .map((guide) => ({
    ...guide,
    path: path.resolve(LEGEND_STUDIO_USER_GUIDES, guide.folder),
  }))
  .filter((guide) => {
    const found = fs.existsSync(guide.path);
    if (!found) {
      console.warn(`User guide "${guide.label}" not found at ${guide.path}: left out`);
    }
    return found;
  });

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
  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  onDuplicateRoutes: process.env.NODE_ENV === "production" ? "throw" : "warn",
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: "throw",
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
        routeBasePath: guide.id,
        // a page's own file in finos/legend-studio
        editUrl: ({ docPath }) =>
          `https://github.com/finos/legend-studio/edit/master/docs/user-guide/${guide.folder}/${docPath}`,
      },
    ]),
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
        ...USER_GUIDES.map((guide) => ({
          to: guide.id,
          label: guide.label,
          position: "right",
        })),
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
