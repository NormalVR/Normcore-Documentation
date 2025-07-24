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
        'essentials/why-normcore',
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
        'guides/easysync',
        'guides/creating-a-player-controller',
        'guides/synchronizing-custom-data',
        'guides/upgrading-from-normcore-1-to-normcore-2',
        'guides/network-profiler',
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
        },
        {
          type: 'category',
          label: 'Meta',
          collapsible: false,
          items: [
            'guides/meta/meta-platform-prerequisites',
            'guides/meta/meta-avatars-setup',
            'guides/meta/meta-avatars-customization'
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
        'architecture/normal-scoped-registry',
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
        'realtime/realtimeanimator',
        'realtime/networked-physics',
        'realtime/prefab-pooling',
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
        'room/supported-primitives',
        'room/collections',
        'room/ownership-and-lifetime-flags',
        'room/room-server-options',
        'room/disconnect-events',
        'room/offline-mode',
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
        'normcore-private/server-plugins',
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
        { type: 'doc', label: 'DidChangeEvent', id: 'reference/classes/DidChangeEvent' },
        { type: 'doc', label: '[RealtimeCallback]', id: 'reference/classes/RealtimeCallbackAttribute' },
        { type: 'doc', label: '[Interpolate]', id: 'reference/classes/InterpolateAttribute' },
        { type: 'category', label: 'Interpolators', collapsible: true, items: [
          { type: 'doc', label: 'IInterpolator', id: 'reference/classes/Normal.Realtime.IInterpolator' },
          { type: 'doc', label: 'IInterpolator<T>', id: 'reference/classes/Normal.Realtime.IInterpolator`1' },
          { type: 'doc', label: 'BoolInterpolator', id: 'reference/classes/Normal.Realtime.BoolInterpolator' },
          { type: 'doc', label: 'ByteInterpolator', id: 'reference/classes/Normal.Realtime.ByteInterpolator' },
          { type: 'doc', label: 'ColorInterpolator', id: 'reference/classes/Normal.Realtime.ColorInterpolator' },
          { type: 'doc', label: 'DoubleInterpolator', id: 'reference/classes/Normal.Realtime.DoubleInterpolator' },
          { type: 'doc', label: 'FloatInterpolator', id: 'reference/classes/Normal.Realtime.FloatInterpolator' },
          { type: 'doc', label: 'IntInterpolator', id: 'reference/classes/Normal.Realtime.IntInterpolator' },
          { type: 'doc', label: 'InterpolationDelay', id: 'reference/classes/Normal.Realtime.InterpolationDelay' },
          { type: 'doc', label: 'InterpolatorResolver', id: 'reference/classes/Normal.Realtime.InterpolatorResolver' },
          { type: 'doc', label: 'LongInterpolator', id: 'reference/classes/Normal.Realtime.LongInterpolator' },
          { type: 'doc', label: 'QuaternionLinearInterpolator', id: 'reference/classes/Normal.Realtime.QuaternionLinearInterpolator' },
          { type: 'doc', label: 'QuaternionSphericalInterpolator', id: 'reference/classes/Normal.Realtime.QuaternionSphericalInterpolator' },
          { type: 'doc', label: 'SByteInterpolator', id: 'reference/classes/Normal.Realtime.SByteInterpolator' },
          { type: 'doc', label: 'Serialization.LongSerializer', id: 'reference/classes/Normal.Realtime.Serialization.LongSerializer' },
          { type: 'doc', label: 'Serialization.ULongSerializer', id: 'reference/classes/Normal.Realtime.Serialization.ULongSerializer' },
          { type: 'doc', label: 'ShortInterpolator', id: 'reference/classes/Normal.Realtime.ShortInterpolator' },
          { type: 'doc', label: 'UIntInterpolator', id: 'reference/classes/Normal.Realtime.UIntInterpolator' },
          { type: 'doc', label: 'ULongInterpolator', id: 'reference/classes/Normal.Realtime.ULongInterpolator' },
          { type: 'doc', label: 'UShortInterpolator', id: 'reference/classes/Normal.Realtime.UShortInterpolator' },
          { type: 'doc', label: 'Vector2Interpolator', id: 'reference/classes/Normal.Realtime.Vector2Interpolator' },
          { type: 'doc', label: 'Vector3Interpolator', id: 'reference/classes/Normal.Realtime.Vector3Interpolator' },
          { type: 'doc', label: 'Vector4Interpolator', id: 'reference/classes/Normal.Realtime.Vector4Interpolator' }
        ]}
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
