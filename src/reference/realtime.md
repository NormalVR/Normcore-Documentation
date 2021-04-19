---
title: Realtime
layout: Reference
category: API Reference
class_name: Realtime
class_description: ''
class_properties:
- name: clientID
  type: int
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1ad4f20a25a3898bf62204cbfff8b2cbeb
  brief_description: The ID of the local client on the server. If this client is not
    connected, this value will be -1.
  detailed_description: ''
  description: "The ID of the local client on the server. If this client is not connected,
    this value will be -1.\n\n"
  definition: int Normal.Realtime.Realtime.clientID
- name: connected
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a572811b0d1db2dd47cdca4e8d85d92f4
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.Realtime.connected
- name: connecting
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a38815b86e7a0eeaaa61596c5f4e6a25e
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.Realtime.connecting
- name: disconnected
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a307f8c460c1fed0388c12b900aaf323f
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.Realtime.disconnected
- name: instances
  type: HashSet<Realtime>
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a3a7e04e7664ab4aeee083a1b97c355f0
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: HashSet<Realtime> Normal.Realtime.Realtime.instances
- name: room
  type: Room
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a2dadb24f14c3a7b86be054927ef0b17c
  brief_description: A Room object that represents the data model for the room. This
    can be useful for getting the current room time that has been synchronized with
    the server. You can use this property to pass an instance of Room off to another
    instance of Realtime.
  detailed_description: ''
  description: "A Room object that represents the data model for the room. This can
    be useful for getting the current room time that has been synchronized with the
    server. You can use this property to pass an instance of Room off to another instance
    of Realtime.\n\n"
  definition: Room Normal.Realtime.Realtime.room
class_events:
- name: didConnectToRoom
  type: RealtimeEvent
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a2995fcb90219453824fab26a71530013
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: RealtimeEvent Normal.Realtime.Realtime.didConnectToRoom
- name: didDisconnectFromRoom
  type: RealtimeEvent
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a36a1a255c37c6d9b80f1631f2c7c2218
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: RealtimeEvent Normal.Realtime.Realtime.didDisconnectFromRoom
class_methods:
- name: Connect
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a098ba9e40a7ded0f532b9d8055cf5530
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.Realtime.Connect
  return_type: void
  args_string: "(string roomName, IModel roomModel=null)"
  arguments:
  - name: roomName
    type: string
  - name: roomModel
    type: IModel
    default: 'null'
- name: Destroy
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a02d34e00fe7a029a8d5972a1b53ce125
  brief_description: This method destroys a prefab in the scene that has been instantiated
    using Instantiate(). It will destroy the prefab locally as well as on all remote
    clients.
  detailed_description: "**gameObject:** The root of the prefab. Note: You cannot
    destroy a child game object of a prefab."
  description: |-
    This method destroys a prefab in the scene that has been instantiated using Instantiate(). It will destroy the prefab locally as well as on all remote clients.

    **gameObject:** The root of the prefab. Note: You cannot destroy a child game object of a prefab.
  definition: static void Normal.Realtime.Realtime.Destroy
  return_type: void
  args_string: "(GameObject gameObject)"
  arguments:
  - name: gameObject
    type: GameObject
- name: Destroy
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a5c288b9e4b5d8e1be7e7288a51185e9f
  brief_description: This method destroys a prefab in the scene that has been instantiated
    using Instantiate(). It will destroy the prefab locally as well as on all remote
    clients.
  detailed_description: "**realtimeView:** The RealtimeView at the root of the prefab.
    Note: You cannot destroy a child game object of a prefab."
  description: |-
    This method destroys a prefab in the scene that has been instantiated using Instantiate(). It will destroy the prefab locally as well as on all remote clients.

    **realtimeView:** The RealtimeView at the root of the prefab. Note: You cannot destroy a child game object of a prefab.
  definition: static void Normal.Realtime.Realtime.Destroy
  return_type: void
  args_string: "(RealtimeView realtimeView)"
  arguments:
  - name: realtimeView
    type: RealtimeView
- name: Disconnect
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1ab3a7cafabe3bd81f1d9e513f7aa46e4a
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.Realtime.Disconnect
  return_type: void
  args_string: "()"
  arguments: []
- name: Instantiate
  type: GameObject
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1ad0d3aec3d40ff65804845e97ca4752da
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: static GameObject Normal.Realtime.Realtime.Instantiate
  return_type: GameObject
  args_string: "(string prefabName, Realtime useInstance)"
  arguments:
  - name: prefabName
    type: string
  - name: useInstance
    type: Realtime
- name: Instantiate
  type: GameObject
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1ab4c2fd90fdc351753b45a728e917f4e1
  brief_description: Instantiates a prefab that has a RealtimeView at the root. Calling
    this method will lookup the prefab by name and instantiate it on all clients.
  detailed_description: |-
    **prefabName:** The name of the prefab. (Make sure this prefab is in a Resources folder)

    **ownedByClient:** A boolean that specifies whether this RealtimeView should automatically be owned by the creating client

    **preventOwnershipTakeover:** A boolean that specifies whether other clients can RequestOwnership() of the RealtimeView on the root of this prefab

    **destroyWhenOwnerOrLastClientLeaves:** A boolean that specifies whether to destroy this RealtimeView when its owner leaves the room, or if there is no owner, to destroy when the last client leaves.

    **useInstance:** This is an optional parameter that you can use to specify which instance of Realtime to instantiate this prefab with. If you only have a single Realtime instance in the scene, this will be filled in automatically.
  description: |-
    Instantiates a prefab that has a RealtimeView at the root. Calling this method will lookup the prefab by name and instantiate it on all clients.

    **prefabName:** The name of the prefab. (Make sure this prefab is in a Resources folder)

    **ownedByClient:** A boolean that specifies whether this RealtimeView should automatically be owned by the creating client

    **preventOwnershipTakeover:** A boolean that specifies whether other clients can RequestOwnership() of the RealtimeView on the root of this prefab

    **destroyWhenOwnerOrLastClientLeaves:** A boolean that specifies whether to destroy this RealtimeView when its owner leaves the room, or if there is no owner, to destroy when the last client leaves.

    **useInstance:** This is an optional parameter that you can use to specify which instance of Realtime to instantiate this prefab with. If you only have a single Realtime instance in the scene, this will be filled in automatically.
  definition: static GameObject Normal.Realtime.Realtime.Instantiate
  return_type: GameObject
  args_string: "(string prefabName, bool ownedByClient=true, bool preventOwnershipTakeover=false,
    bool destroyWhenOwnerOrLastClientLeaves=true, Realtime useInstance=null)"
  arguments:
  - name: prefabName
    type: string
  - name: ownedByClient
    type: bool
    default: 'true'
  - name: preventOwnershipTakeover
    type: bool
    default: 'false'
  - name: destroyWhenOwnerOrLastClientLeaves
    type: bool
    default: 'true'
  - name: useInstance
    type: Realtime
    default: 'null'
- name: Instantiate
  type: GameObject
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a6a18b90f59a148f3b6476da00ce7851f
  brief_description: Instantiates a prefab that has a RealtimeView at the root. Calling
    this method will lookup the prefab by name and instantiate it on all clients.
    This method will automatically set the position and rotation of the prefab. If
    a RealtimeTransform component is present on the root, it will request ownership
    so the position and rotation are synchronized to all clients.
  detailed_description: |-
    **prefabName:** The name of the prefab. (Make sure this prefab is in a Resources folder)

    **position:** The world position to use when instantiating a prefab.

    **rotation:** The world rotation to use when instantiating a prefab.

    **ownedByClient:** A boolean that specifies whether this RealtimeView should automatically be owned by the creating client

    **preventOwnershipTakeover:** A boolean that specifies whether other clients can RequestOwnership() of the RealtimeView on the root of this prefab

    **destroyWhenOwnerOrLastClientLeaves:** A boolean that specifies whether to destroy this RealtimeView when its owner leaves the room, or if there is no owner, to destroy when the last client leaves.

    **useInstance:** This is an optional parameter that you can use to specify which instance of Realtime to instantiate this prefab with. If you only have a single Realtime instance in the scene, this will be filled in automatically.
  description: |-
    Instantiates a prefab that has a RealtimeView at the root. Calling this method will lookup the prefab by name and instantiate it on all clients. This method will automatically set the position and rotation of the prefab. If a RealtimeTransform component is present on the root, it will request ownership so the position and rotation are synchronized to all clients.

    **prefabName:** The name of the prefab. (Make sure this prefab is in a Resources folder)

    **position:** The world position to use when instantiating a prefab.

    **rotation:** The world rotation to use when instantiating a prefab.

    **ownedByClient:** A boolean that specifies whether this RealtimeView should automatically be owned by the creating client

    **preventOwnershipTakeover:** A boolean that specifies whether other clients can RequestOwnership() of the RealtimeView on the root of this prefab

    **destroyWhenOwnerOrLastClientLeaves:** A boolean that specifies whether to destroy this RealtimeView when its owner leaves the room, or if there is no owner, to destroy when the last client leaves.

    **useInstance:** This is an optional parameter that you can use to specify which instance of Realtime to instantiate this prefab with. If you only have a single Realtime instance in the scene, this will be filled in automatically.
  definition: static GameObject Normal.Realtime.Realtime.Instantiate
  return_type: GameObject
  args_string: "(string prefabName, Vector3 position, Quaternion rotation, bool ownedByClient=true,
    bool preventOwnershipTakeover=false, bool destroyWhenOwnerOrLastClientLeaves=true,
    Realtime useInstance=null)"
  arguments:
  - name: prefabName
    type: string
  - name: position
    type: Vector3
  - name: rotation
    type: Quaternion
  - name: ownedByClient
    type: bool
    default: 'true'
  - name: preventOwnershipTakeover
    type: bool
    default: 'false'
  - name: destroyWhenOwnerOrLastClientLeaves
    type: bool
    default: 'true'
  - name: useInstance
    type: Realtime
    default: 'null'
- name: RealtimeEvent
  type: delegate void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_1a5a5ce46caa0507e470c680edb2db94a6
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: delegate void Normal.Realtime.Realtime.RealtimeEvent
  return_type: delegate void
  args_string: "(Realtime realtime)"
  arguments:
  - name: realtime
    type: Realtime
class_enums: []
---

# Realtime

Realtime is a component that manages your connection to a room, as well as any RealtimeViews that should be connected to the room’s datastore.

## Editor Interface

![](./assets/realtime.png "The Realtime inspector in Unity.")

**App Key:** This is a unique key used to track your apps usage. You can create one over on your [account dashboard](https://normcore.io/dashboard).

**Join Room On Start + Room Name:** If you would like Realtime to automatically connect to a room on Start, you can check this box and enter the room name here.

Note: Room names are namespaced to your App Key. Any room name used with a different App Key is considered a different room by the server.

**Debug Logging:** Our native plugin offers a more verbose logging mode. This can be useful when debugging low-level networking bugs. It’s rare that you will need to use this, but if you’re submitting a bug report to the Normal team, leave this turned on so we can properly diagnose the issue.

**Network Statistics:** The network statistics section shows you the current network statistics for the current connection. It includes things like packet loss %, bandwidth measurements, and the current room clock time.
