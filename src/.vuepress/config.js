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
          { title: 'What is Normcore?', path: '/test' },
          { title: 'Getting started', path: '/test' },
          { title: 'How Normcore works', path: '/test' },
          { title: 'Common questions', path: '/test' },
        ]
      },
      {
        title: "Pricing",
        path: '/test',
        collapsable: false,
        sidebarDepth: 2,
      },
      {
        title: "Guides",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'Creating a player controller', path: '/test' },
          { title: 'XR Avatars and Voice Chat', path: '/test' },
          { title: 'Creating a multiplayer drawing app', path: '/test' },
          { title: 'Using AR as a spectator view', path: '/test' },
          { title: 'Upgrading from Normcore 1 to Normcore 2', path: '/test' },
        ]
      },
      {
        title: "Architecture",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'Overview', path: '/test' },
          { title: 'Client', path: '/test' },
          { title: 'Server', path: '/test' },
          { title: 'Transport', path: '/test' },
        ]
      },
      {
        title: "Realtime API",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'Realtime', path: '/test' },
          { title: 'RealtimeView', path: '/test' },
          { title: 'RealtimeComponent', path: '/test' },
          { title: 'RealtimeTransform', path: '/test' },
          { title: 'Synchronizing Custom Data', path: '/test' },
          { title: 'Networked Physics', path: '/test' },
          { title: 'FAQ', path: '/test' },
        ]
      },
      {
        title: "Room + Datastore API",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'Room', path: '/test' },
          { title: 'Datastore', path: '/test' },
          { title: 'RealtimeModel', path: '/test' },
          { title: 'Collections', path: '/test' },
          { title: 'Ownership + Lifetime Flags', path: '/test' },
          { title: 'RPCs', path: '/test' },
          { title: 'FAQ', path: '/test' },
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
        title: "Servers",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'Architecture', path: '/test' },
          { title: 'Matcher', path: '/test' },
          { title: 'Clusters', path: '/test' },
          { title: 'Rooms', path: '/test' },
          { title: 'Authoritative Servers', path: '/test' },
          { title: 'Normcore Private', path: '/test' },
          { title: 'FAQ', path: '/test' },
        ]
      },
      {
        title: "Platforms",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'Native', path: '/test' },
          { title: 'WebGL', path: '/test' },
        ]
      },
      {
        title: "XR",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'Creating a XR avatar with voice chat', path: '/test' },
          { title: 'RealtimeAvatar + Manager', path: '/test' },
          { title: 'RealtimeAvatarVoice', path: '/test' },
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
