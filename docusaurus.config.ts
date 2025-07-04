import { themes as prismThemes } from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Normcore Documenation',
  tagline: 'Seamless multiplayer for Unity.',
  favicon: '/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.normcore.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
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
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid'
  ],
  clientModules: [
    './src/js/custom-code-blocks.js',
    //'./src/js/widget-bot.js', // Switched to kapa.ai widget, but leaving this in case we ever want to switch back.
  ],
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
    image: 'https://docs.normcore.io/img/normcore-social-static.png',
    navbar: {
      title: 'Normcore.',
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://normcore.io/',
          label: 'normcore.io',
          position: 'right',
          className: "navbar__item navbar__link custom_nav_time",
        },
        {
          label: 'Download',
          href: 'https://dashboard.normcore.io/download',
          position: 'right',
          className: 'navbar__item navbar__link custom_nav_time download_button',
        },
        {
          href: 'https://dashboard.normcore.io/',
          label: 'Dashboard',
          position: 'right',
          className: "navbar__item navbar__link custom_nav_time dash_button",
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'Normal',
        src: '/img/normal-logo.svg',
        href: 'https://normcore.io/',
        width: 70,
        height: 21,
      },
      copyright: `Copyright © 2016 - ${new Date().getFullYear()} Normal`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['csharp', 'bash', 'docker'],
    },
    algolia: {
      // The appID and API Key are public and safe to commit
      appId: 'KV7NQMMVI2',
      apiKey: '283f6935e9c28994beaf202d7bb8b928',
      indexName: 'normcore_documentation',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      "data-website-id": "98f0b19f-8f9a-4e5b-816f-4de1217a7bc6",
      "data-project-name": "Normcore",
      "data-project-color": "#000000",
      "data-project-logo": "https://docs.normcore.io/img/normal-logo-square.png",
      "data-modal-disclaimer": "This is a custom LLM with access to all Normcore documentation.",
      "data-modal-example-questions":"What is Normcore?,How do I connect to a room?,Can I sync a Rigidbody?,How expensive is Normcore?",
      "data-user-analytics-fingerprint-enabled": "true",
      async: true,
    },
  ],
};

export default config;
