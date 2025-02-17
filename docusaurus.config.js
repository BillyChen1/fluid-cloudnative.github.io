// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fluid',
  tagline: 'Fluid, elastic data abstraction and acceleration for BigData/AI applications in cloud.',
  favicon: 'img/fluid-icon-color.png',

  // Set the production url of your site here
  url: 'https://fluid-cloudnative.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fluid-cloudnative', // Usually your GitHub org/user name.
  projectName: 'fluid-cloudnative.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['public', 'static'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
          lastVersion: undefined,
          routeBasePath: 'docs',
          versions: {
            current: {
              label: `Latest 🚧`
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/',
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        include: ['**/*.md'],
        sidebarPath: './sidebars-community.js',
      },
    ]
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        appId: 'LFPGLLH528',
        apiKey: 'c541d93163af12d221cc7aab896e48f8',
        indexName: 'fluid-cloudnativeio'
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Fluid',
          src: 'img/fluid-horizontal-color.png',
          srcDark: 'img/fluid-horizontal-white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { 
            to: '/blog', 
            label: 'Blog',
            position: 'left'
          },
		      {
            to: "community/committee",
            sidebarId: 'communitySidebar',
            position: 'left',
            label: 'Community',
            activeBasePath: 'community'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/fluid-cloudnative/fluid',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'CNCF Slack (#fluid channel)',
                href: 'https://app.slack.com/client/T08PSQ7BQ/C02ADG209SP',
              },
              {
                label: 'DingTalk (GroupID: 32850151)',
                href: '/community/meeting_schedule',
              },
              {
                label: 'Meeting',
                href: '/community/meeting_schedule',
              },
              {
                label: 'WeChat',
                href: 'https://github.com/fluid-cloudnative/fluid/blob/master/README.md#community',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fluid-cloudnative/fluid',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Fluid Authors. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our Trademark Usage page: 
        https://www.linuxfoundation.org/trademark-usage`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
