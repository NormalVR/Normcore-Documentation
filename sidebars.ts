import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  sidebar: [
    'readme',
    {
      type: 'category',
      label: 'Essentials',
      collapsible: false,
      items: [
        'essentials/what-is-normcore',
        'essentials/getting-started',
        'essentials/common-questions',
      ],
    },
    {
      type: 'category',
      label: 'Pricing',
      collapsible: false,
      items: [
        'pricing/readme'
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
      items: [
        'guides/creating-a-player-controller',
        'guides/upgrading-from-normcore-1-to-normcore-2',
        {
          type: 'category',
          label: 'Recipes',
          collapsible: false,
          items: [
            'guides/recipes/timers-and-synchronized-playback',
            'guides/recipes/using-addressables',
            'guides/recipes/rpc-events',
          ],
        },
        {
          type: 'category',
          label: 'XR',
          collapsible: false,
          items: [
            'guides/xr-avatars-and-voice-chat',
            'guides/creating-a-multiplayer-drawing-app',
            'guides/using-ar-as-a-spectator-view',
          ],
        }
      ]
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsible: false,
      items: [
        'architecture/client',
        'architecture/cloud',
        'architecture/transport',
        'architecture/firewalls',
        'architecture/common-questions',
      ]
    },
    {
      type: 'category',
      label: 'Realtime API',
      collapsible: false,
      items: [
        'realtime/readme',
        'realtime/realtime',
        'realtime/realtimeview',
        'realtime/realtimecomponent',
        'realtime/realtimetransform',
        'realtime/synchronizing-custom-data',
        'realtime/networked-physics',
        'realtime/common-questions',
        {
          type: 'category',
          label: 'XR',
          collapsible: false,
          items: [
            'realtime/xr/avatars',
            'realtime/xr/voicechat'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: "Room + Datastore API",
      collapsible: false,
      items: [
        'room/readme',
        'room/room',
        'room/datastore',
        'room/realtimemodel',
        'room/collections',
        'room/ownership-and-lifetime-flags',
        'room/common-questions',
      ]
    },
    {
      type: 'category',
      label: "Normcore Private",
      collapsible: false,
      items: [
        'normcore-private/readme',
        'normcore-private/authoritative-servers',
        'normcore-private/webhooks',
        'normcore-private/on-premises/google-cloud-installation',
        'normcore-private/common-questions',
      ]
    },
    {
      type: 'category',
      label: "Platforms",
      collapsible: false,
      items: [
        'platforms/readme',
        'platforms/webgl',
        'platforms/common-questions',
      ]
    },
    {
      type: 'category',
      label: "Reference",
      collapsible: true,
      items: [
        { type: 'doc', label: 'Datastore', id: 'reference/classes/Normal.Realtime.Datastore' },
        { type: 'doc', label: 'IRealtimeComponent', id: 'reference/classes/Normal.Realtime.IRealtimeComponent' },
        { type: 'doc', label: 'IRealtimePrefabInstantiateDelegate', id: 'reference/classes/Normal.Realtime.IRealtimePrefabInstantiateDelegate' },
        { type: 'doc', label: 'IRealtimePrefabLoadDelegate', id: 'reference/classes/Normal.Realtime.IRealtimePrefabLoadDelegate' },
        { type: 'doc', label: 'MetaModel', id: 'reference/classes/Normal.Realtime.Serialization.MetaModel' },
        { type: 'doc', label: 'NormcoreAppSettings', id: 'reference/classes/Normal.NormcoreAppSettings' },
        { type: 'doc', label: 'NormcoreProjectSettings', id: 'reference/classes/Normal.NormcoreProjectSettings' },
        { type: 'doc', label: 'PropertyChangeSet', id: 'reference/classes/Normal.Realtime.PropertyChangeSet' },
        { type: 'doc', label: 'Realtime', id: 'reference/classes/Normal.Realtime.Realtime' },
        { type: 'doc', label: 'RealtimeArray', id: 'reference/classes/Normal.Realtime.Serialization.RealtimeArray`1' },
        { type: 'doc', label: 'RealtimeComponent', id: 'reference/classes/Normal.Realtime.RealtimeComponent`1' },
        { type: 'doc', label: 'RealtimeDictionary', id: 'reference/classes/Normal.Realtime.Serialization.RealtimeDictionary`1' },
        { type: 'doc', label: 'RealtimeModel', id: 'reference/classes/Normal.Realtime.RealtimeModel' },
        { type: 'doc', label: 'RealtimeModelEvent', id: 'reference/classes/Normal.Realtime.RealtimeModelEvent' },
        { type: 'doc', label: 'RealtimePrefabMetadata', id: 'reference/classes/Normal.Realtime.RealtimePrefabMetadata' },
        { type: 'doc', label: 'RealtimeSet', id: 'reference/classes/Normal.Realtime.Serialization.RealtimeSet`1' },
        { type: 'doc', label: 'RealtimeTransform', id: 'reference/classes/Normal.Realtime.RealtimeTransform' },
        { type: 'doc', label: 'RealtimeView', id: 'reference/classes/Normal.Realtime.RealtimeView' },
        { type: 'doc', label: 'Room', id: 'reference/classes/Normal.Realtime.Room' },
        { type: 'doc', label: 'StringKeyDictionary', id: 'reference/classes/Normal.Realtime.Collections.StringKeyDictionary`1' },
        { type: 'doc', label: '[RealtimeModel]', id: 'reference/classes/RealtimeModelAttribute' },
        { type: 'doc', label: '[RealtimeProperty]', id: 'reference/classes/RealtimePropertyAttribute' },
        { type: 'doc', label: '[RealtimeCallback]', id: 'reference/classes/RealtimeCallbackAttribute' },
      ]
    },
  ],

  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
