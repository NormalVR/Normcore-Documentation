import { themes as prismThemes } from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Normcore Documenation',
  tagline: 'Seamless multiplayer for Unity.',

  // Set the production url of your site here
  url: 'https://normcore.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/NormalVR/Normcore-Documentation/tree/main/',
          routeBasePath: '/' // Serve docs from the root
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'https://normcore.io/normcore-social-static.png',
    navbar: {
      title: 'Normcore',
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://normcore.io/',
          label: 'normcore.io',
          position: 'right',
        },
        {
          href: 'https://normcore.io/dashboard',
          label: 'Go to dashboard',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Normal',
          items: [
            {
              label: 'Normcore',
              href: 'https://normcore.io',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://forum.normcore.io/',
            },
            {
              label: 'Discord',
              href: 'https://normcore.io/discord',
            },
          ],
        },
      ],
      copyright: `Copyright © 2016 - ${new Date().getFullYear()} Normal`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The appID and API Key are public and safe to commit
      appId: '7ZPSJL46ID',
      apiKey: '252d9ff81c85e4bc2e0288c4c1187552',
      indexName: 'normcore_documentation',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
