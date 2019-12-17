/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const users = require('./data/users.json');

const siteConfig = {
  title: 'PURE/Alloy', // Title for your website. THIS CHANGES THE TITLE TAGS FOR THE WEBSITE (LOOK IN BROWSER TAB AT TOP)
  tagline: 'Language and visual platform to generate models for the financial services industry', //THIS CHANGES THE TITLE TAGS FOR THE WEBSITE (LOOK IN BROWSER TAB AT TOP)
  cname: 'purealloy.finos.org',
  url: 'https://purealloy.finos.org/',
  baseUrl: '/',
  // For publishing to GitHub pages
  projectName: 'purealloy',
  organizationName: 'finos',
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'overview/intro', label: 'What is PURE/Alloy'},
    {doc: 'overview/user-guide', label: 'User Guide'},
    {doc: 'overview/why-purealloy', label: 'Why PURE/Alloy'}
  ],

  twitterUsername: 'finosfoundation',

  // If you have users set above, you add it here:
  users,

  /* TODO - path to images for header/footer */
  // headerIcon: 'img/todo.svg',   /* change to program/project icon logo */
  // footerIcon: 'img/todo.svg',  /* change to program/project icon + wordmark logo */
  favicon: 'img/favicon/favicon.ico',  /* change to program/project favicon logo .ico */

  /* Colors for website */
  colors: {
    primaryColor: '#0086bf', /* This changes the top FINOS banner & all links - DO NOT CHANGE */
    secondaryColor: '#0033A0' /* This does net change anything - but keep as the project / program main color */
  
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} PURE/Alloy`,  /* CHANGE THIS TO PROJECT / PROGRAM NAME */

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  wrapPagesHTML: true,
  docsSideNavCollapsible: true,

  // TODO - Open Graph and Twitter card images.
  // ogImage: 'assets/todo-logo.png', /* change to program/project icon + wordmark logo */
  // twitterImage: 'assets/todo-logo.png', /* change to program/project icon + wordmark logo */

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/finos-admin/purealloy'
};

module.exports = siteConfig;
