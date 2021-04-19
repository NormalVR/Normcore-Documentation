const path = require('path')

module.exports = {
  // Core
  title: 'Normcore.',
  description: 'Documentation and Reference',
  base: '/documentation/',
  dest: '../dist/static/documentation',
  head: [
    ['script', { src: '/customCodeBlocks.js' }]
  ],

  // Add support for html5 video embedding
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-html5-embed'), {
        html5embed: {
          useImageSyntax: true,
          useLinkSyntax: false
        }
      })
    }
  },
  
  // Theme
  themeConfig: {
    nav: [
      { text: 'normcore.io', link: 'https://normcore.io' },
      { text: 'Go to dashboard', link: 'https://normcore.io/dashboard' },
    ],
    smoothScroll: true,
    sidebar: [
      {
        title: 'Home',
        path: '/',
        collapsable: true,
        sidebarDepth: 1,
      },
      {
        title: 'Getting Started',
        path: '/getting-started',
        collapsable: true,
        sidebarDepth: 1,
      },
      {
        title: "Core Concepts",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/core-concepts/how-normcore-works',
          '/core-concepts/synchronizing-custom-data',
          '/core-concepts/server-authority-ownership-and-lifetime-flags',
          '/core-concepts/networked-physics',
        ]
      },
      {
        title: "Guides",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/guides/creating-a-player-controller',
          //'/guides/creating-a-soccer-game',
          '/guides/upgrading-from-normcore-1-to-normcore-2',
        ]
      },
      {
        title: "XR Guides",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/xr-guides/xr-avatars-and-voice-chat',
          //'/xr-guides/teleporting',
          //'/xr-guides/throwing-objects',
          '/xr-guides/creating-a-multiplayer-drawing-app',
          '/xr-guides/using-ar-as-a-spectator-view',
        ]
      },
      {
        title: 'Reference',
        path: '/reference/',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/reference/realtime',
          '/reference/realtimeavatar',
          '/reference/realtimeavatarmanager',
          '/reference/realtimeavatarvoice',
          '/reference/realtimetransform',
          '/reference/realtimeview',
          '/reference/room',
          '/reference/audiooutput',
          '/reference/native-audiooutputstream',
          '/reference/native-audioinputstream',
          '/reference/serialization-realtimearray',
          '/reference/serialization-realtimedictionary',
          '/reference/serialization-realtimeset'
        ]
      },
      {
        title: "Normcore Private",
        //path: '/normcore-private/',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          {
            title: "Cloud",
            collapsable: false,
            sidebarDepth: 1,
            children: [
              '/normcore-private/cloud-architecture',
              '/normcore-private/webhooks',
              '/normcore-private/on-premises/google-cloud-installation',
            ]
          },
          // {
          //   title: "Standalone",
          //   collapsable: false,
          //   sidebarDepth: 1,
          //   children: [
          //     '/normcore-private/on-premises/standalone',
          //   ]
          // },
        ]
      },
    ]
  }
}
