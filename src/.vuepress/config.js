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
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/pricing/',
        ]
      },
      {
        title: "Guides",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/guides/creating-a-player-controller',
          '/guides/upgrading-from-normcore-1-to-normcore-2',
          {
            title: 'Recipes',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/guides/recipes/timers-and-synchronized-playback',
              '/guides/recipes/using-addressables',
              '/guides/recipes/rpc-events',
            ],
          },
          {
            title: 'XR',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/guides/xr-avatars-and-voice-chat',
              '/guides/creating-a-multiplayer-drawing-app',
              '/guides/using-ar-as-a-spectator-view',
            ],
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
          '/architecture/common-questions',
        ]
      },
      {
        title: "Realtime API",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/realtime/',
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
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/room/',
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
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/normcore-private/',
          '/normcore-private/authoritative-servers',
          '/normcore-private/webhooks',
          '/normcore-private/on-premises/google-cloud-installation',
          '/normcore-private/common-questions',
        ]
      },
      {
        title: "Platforms",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/platforms/',
          '/platforms/webgl',
          '/platforms/common-questions',
        ]
      },
      {
        title: "Reference",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'Datastore', path: '/reference/classes/Normal.Realtime.Datastore' },
          { title: 'IRealtimeComponent', path: '/reference/classes/Normal.Realtime.IRealtimeComponent' },
          { title: 'IRealtimePrefabInstantiateDelegate', path: '/reference/classes/Normal.Realtime.IRealtimePrefabInstantiateDelegate' },
          { title: 'IRealtimePrefabLoadDelegate', path: '/reference/classes/Normal.Realtime.IRealtimePrefabLoadDelegate' },
          { title: 'MetaModel', path: '/reference/classes/Normal.Realtime.Serialization.MetaModel' },
          { title: 'NormcoreAppSettings', path: '/reference/classes/Normal.NormcoreAppSettings' },
          { title: 'NormcoreProjectSettings', path: '/reference/classes/Normal.NormcoreProjectSettings' },
          { title: 'PropertyChangeSet', path: '/reference/classes/Normal.Realtime.PropertyChangeSet' },
          { title: 'Realtime', path: '/reference/classes/Normal.Realtime.Realtime' },
          { title: 'RealtimeArray', path: '/reference/classes/Normal.Realtime.Serialization.RealtimeArray`1' },
          { title: 'RealtimeComponent', path: '/reference/classes/Normal.Realtime.RealtimeComponent`1' },
          { title: 'RealtimeDictionary', path: '/reference/classes/Normal.Realtime.Serialization.RealtimeDictionary`1' },
          { title: 'RealtimeExecutionOrder', path: '/reference/classes/Normal.Realtime.RealtimeExecutionOrder' },
          { title: 'RealtimeModel', path: '/reference/classes/Normal.Realtime.RealtimeModel' },
          { title: 'RealtimeModelEvent', path: '/reference/classes/Normal.Realtime.RealtimeModelEvent' },
          { title: 'RealtimePrefabMetadata', path: '/reference/classes/Normal.Realtime.RealtimePrefabMetadata' },
          { title: 'RealtimeSet', path: '/reference/classes/Normal.Realtime.Serialization.RealtimeSet`1' },
          { title: 'RealtimeTransform', path: '/reference/classes/Normal.Realtime.RealtimeTransform' },
          { title: 'RealtimeView', path: '/reference/classes/Normal.Realtime.RealtimeView' },
          { title: 'Room', path: '/reference/classes/Normal.Realtime.Room' },
          { title: 'StringKeyDictionary', path: '/reference/classes/Normal.Realtime.Collections.StringKeyDictionary`1' },
          { title: '[RealtimeModel]', path: '/reference/classes/RealtimeModelAttribute' },
          { title: '[RealtimeProperty]', path: '/reference/classes/RealtimePropertyAttribute' },
          { title: '[RealtimeCallback]', path: '/reference/classes/RealtimeCallbackAttribute' },
        ]
      },
    ],
    docsRepo: 'NormalVR/Normcore-Documentation',
    docsBranch: 'main',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit on GitHub'
  }
}
