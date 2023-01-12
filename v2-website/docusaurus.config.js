const pureHighlighter = require("../v2-website/pureHighlighter");

module.exports = {
  title: "Legend",
  tagline:
    "Language and visual platform to generate models for the financial services industry",
  url: "https://legend.finos.org",
  baseUrl: "/",
  organizationName: "finos",
  projectName: "legend",
  scripts: ["https://buttons.github.io/buttons.js"],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,500,700,900|Source+Code+Pro:400,500,700,900&display=swap",
  ],
  favicon: "img/favicon/favicon.ico",
  customFields: {
    wrapPagesHTML: true,
    repoUrl: "https://github.com/finos/legend",
    highlight: {
      theme: "tomorrow-night-blue",
      hljs: function (hljsEngine) {
        hljsEngine.registerLanguage("legend", pureHighlighter);
      },
    },
  },
  onBrokenLinks: "log",

  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          //svp
          breadcrumbs: false /* hide collapsed nav bar header because we only have 1 parent now which is Getting Started*/,
          sidebarPath: "../v2-website/sidebars.json",
        },
        blog: {},
        theme: {
          customCss: "./src/css/customTheme.css",
        },
        googleAnalytics: {
          trackingID: "UA-89349362-7",
        },
      },
    ],
  ],
  plugins: [],

  themeConfig: {
    // prism: {
    //   theme: require("prism-react-renderer/themes/github"),
    // },
    algolia: {
      // The application ID provided by Algolia
      appId: "X69JR631XX",

      // Public API key: it is safe to commit it
      apiKey: "86ec4b2b02b99254ba236724fe4fef6b",

      indexName: "legend-finos",

      // Optional: see doc section below
      contextualSearch: false,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: "external\\.com|domain\\.com",
      // Optional: Algolia search parameters
      // searchParameters: {},
      searchPagePath: "search",
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
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
        {
          to: "releases",
          label: "Releases",
          position: "right",
        },
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
