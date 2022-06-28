// See https://docusaurus.io/docs/site-config for all the possible
const pureHighlighter = require("./pureHighlighter");

const siteConfig = {
  title: "Legend",
  tagline:
    "Language and visual platform to generate models for the financial services industry",
  cname: "legend.finos.org",
  gaTrackingId: "UA-89349362-7",
  url: "https://legend.finos.org",
  baseUrl: "/",
  projectName: "legend",
  organizationName: "finos",
  headerLinks: [
    { doc: "overview/legend-overview", label: "Docs" },
    {
      href: "https://legend.finos.org/releases",
      label: "Releases",
      external: true,
    },
  ],

  twitterUsername: "finosfoundation",
  headerIcon: "img/legend.svg",
  favicon: "img/favicon/favicon.ico",

  colors: {
    primaryColor: "#ffa7c4",
    secondaryColor: "white",
  },

  copyright: `Copyright © ${new Date().getFullYear()} Legend`,

  highlight: {
    theme: "tomorrow-night-blue",
    hljs: function (hljsEngine) {
      hljsEngine.registerLanguage("legend", pureHighlighter);
    },
  },

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,500,700,900|Source+Code+Pro:400,500,700,900&display=swap",
  ],

  scripts: ["https://buttons.github.io/buttons.js"],

  onPageNav: "separate",
  cleanUrl: true,

  wrapPagesHTML: true,
  docsSideNavCollapsible: true,

  repoUrl: "https://github.com/finos/legend",
};

module.exports = siteConfig;
