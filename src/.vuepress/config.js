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
        collapsable: false,
        sidebarDepth: 1,
      },
      {
        title: "Essentials",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/essentials/what-is-normcore.md',
          '/essentials/getting-started.md',
          '/essentials/common-questions.md',
        ]
      },
      {
        title: "Pricing",
        path: '/pricing',
        collapsable: false,
        sidebarDepth: 2,
      },
      {
        title: "Guides",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/guides/creating-a-player-controller',
          '/guides/xr-avatars-and-voice-chat',
          '/guides/creating-a-multiplayer-drawing-app',
          '/guides/using-ar-as-a-spectator-view',
          '/guides/upgrading-from-normcore-1-to-normcore-2',
          {
            title: 'Recipes',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/guides/recipes/timers-and-playback',
            ]
          }
        ]
      },
      {
        title: "Architecture",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/architecture/client',
          '/architecture/cloud',
          '/architecture/transport',
        ]
      },
      {
        title: "Realtime API",
        path: '/realtime',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/realtime/realtime',
          '/realtime/realtimeview',
          '/realtime/realtimecomponent',
          '/realtime/realtimetransform',
          '/realtime/synchronizing-custom-data',
          '/realtime/networked-physics',
          '/realtime/common-questions',
          {
            title: 'XR',
            collapsable: false,
            children: [
              '/realtime/xr/avatars',
              '/realtime/xr/voicechat'
            ]
          }
        ]
      },
      {
        title: "Room + Datastore API",
        path: '/room',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/room/room',
          '/room/datastore',
          '/room/realtimemodel',
          '/room/collections',
          '/room/ownership-and-lifetime-flags',
          '/room/common-questions',
        ]
      },
      {
        title: "Media API",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'Coming Soon', collapsable: false },
        ]
      },
      {
        title: "Normcore Private",
        path: '/normcore-private',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/normcore-private/authoritative-servers',
          '/normcore-private/webhooks',
          '/normcore-private/on-premises/google-cloud-installation',
          '/normcore-private/common-questions',
        ]
      },
      {
        title: "Platforms",
        path: '/platforms',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/platforms/webgl',
          '/platforms/common-questions',
        ]
      },
      {
        title: "Reference",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'AudioSendStream', path: '/test' },
          { title: 'AudioReceiveStream', path: '/test' },
          { title: 'Datastore', path: '/test' },
          { title: 'IRealtimeComponent', path: '/test' },
          { title: 'Realtime', path: '/test' },
          { title: 'RealtimeView', path: '/test' },
          { title: 'RealtimeComponent', path: '/test' },
          { title: 'RealtimeTransform', path: '/test' },
          { title: 'Room', path: '/test' },
          { title: 'Serialization.RealtimeArray', path: '/test' },
          { title: 'Serialization.RealtimeDictionary', path: '/test' },
          { title: 'Serialization.RealtimeModel', path: '/test' },
          { title: 'Serialization.RealtimeSet', path: '/test' },
          { title: 'Serialization.SerializationContext', path: '/test' },
          { title: 'Serialization.StringKeyDictionary', path: '/test' },
        ]
      },
      // {
      //   title: 'Getting Started',
      //   path: '/getting-started',
      //   collapsable: true,
      //   sidebarDepth: 1,
      // },
      // {
      //   title: "Core Concepts",
      //   collapsable: false,
      //   sidebarDepth: 2,
      //   children: [
      //     '/core-concepts/how-normcore-works',
      //     '/core-concepts/synchronizing-custom-data',
      //     '/core-concepts/server-authority-ownership-and-lifetime-flags',
      //     '/core-concepts/networked-physics',
      //   ]
      // },
      // {
      //   title: "Guides",
      //   collapsable: false,
      //   sidebarDepth: 2,
      //   children: [
      //     '/guides/creating-a-player-controller',
      //     //'/guides/creating-a-soccer-game',
      //     '/guides/upgrading-from-normcore-1-to-normcore-2',
      //   ]
      // },
      // {
      //   title: "XR Guides",
      //   collapsable: false,
      //   sidebarDepth: 1,
      //   children: [
      //     '/xr-guides/xr-avatars-and-voice-chat',
      //     //'/xr-guides/teleporting',
      //     //'/xr-guides/throwing-objects',
      //     '/xr-guides/creating-a-multiplayer-drawing-app',
      //     '/xr-guides/using-ar-as-a-spectator-view',
      //   ]
      // },
      // {
      //   title: 'Reference',
      //   path: '/reference/',
      //   collapsable: false,
      //   sidebarDepth: 0,
      //   children: [
      //     '/reference/realtime',
      //     '/reference/realtimeavatar',
      //     '/reference/realtimeavatarmanager',
      //     '/reference/realtimeavatarvoice',
      //     '/reference/realtimetransform',
      //     '/reference/realtimeview',
      //     '/reference/room',
      //     '/reference/audiooutput',
      //     '/reference/native-audiooutputstream',
      //     '/reference/native-audioinputstream',
      //     '/reference/serialization-realtimearray',
      //     '/reference/serialization-realtimedictionary',
      //     '/reference/serialization-realtimeset'
      //   ]
      // },
      // {
      //   title: "Normcore Private",
      //   //path: '/normcore-private/',
      //   collapsable: false,
      //   sidebarDepth: 0,
      //   children: [
      //     {
      //       title: "Cloud",
      //       collapsable: false,
      //       sidebarDepth: 1,
      //       children: [
      //         '/normcore-private/cloud-architecture',
      //         '/normcore-private/webhooks',
      //         '/normcore-private/on-premises/google-cloud-installation',
      //       ]
      //     },
      //     // {
      //     //   title: "Standalone",
      //     //   collapsable: false,
      //     //   sidebarDepth: 1,
      //     //   children: [
      //     //     '/normcore-private/on-premises/standalone',
      //     //   ]
      //     // },
      //   ]
      // },
    ]
  }
}
