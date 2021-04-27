---
title: RealtimeView
layout: Reference
category: API Reference
class_name: RealtimeView
class_description: ''
class_properties:
- name: isChildView
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1a8e234fb4ca331dd8f9700760d0f97040
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.RealtimeView.isChildView
- name: isOwnedByWorld
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1a1dc77d571c0408bf9b718f26b60be3c8
  brief_description: A boolean that indicates if this RealtimeView has no owner.
  detailed_description: ''
  description: "A boolean that indicates if this RealtimeView has no owner.\n\n"
  definition: bool Normal.Realtime.RealtimeView.isOwnedByWorld
- name: isOwnedLocally
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1ac188397e1ad7f67a750b4f6ffcda76b8
  brief_description: A boolean that indicates whether this RealtimeView is owned by
    the local client.
  detailed_description: ''
  description: "A boolean that indicates whether this RealtimeView is owned by the
    local client.\n\n"
  definition: bool Normal.Realtime.RealtimeView.isOwnedLocally
- name: isRootPrefabView
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1a32e807f27f89b58d1ce9ac9463d49c8c
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.RealtimeView.isRootPrefabView
- name: isRootSceneView
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1ab84c2701d411e23d7cef641e137d6aea
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.RealtimeView.isRootSceneView
- name: lifetimeFlags
  type: uint
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1aad1fdde503ff047b9b7f055b8995a4c0
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: uint Normal.Realtime.RealtimeView.lifetimeFlags
- name: model
  type: RealtimeViewModel
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1ac0a5d505387aeb5a87f5ecd784705411
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: RealtimeViewModel Normal.Realtime.RealtimeView.model
- name: ownerID
  type: int
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1a797272ca0abe12cf813c36bdd4ce6828
  brief_description: An integer that represents the current clientID that owns this
    RealtimeView. -1 if it has no owner.
  detailed_description: ''
  description: "An integer that represents the current clientID that owns this RealtimeView.
    -1 if it has no owner.\n\n"
  definition: int Normal.Realtime.RealtimeView.ownerID
- name: realtime
  type: Realtime
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1ae065be2f5c296d367f23c42b6ae51b15
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: Realtime Normal.Realtime.RealtimeView.realtime
- name: sceneViewUUID
  type: byte[]
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1a3483d43807c539c949c43352fd254acd
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: byte [] Normal.Realtime.RealtimeView.sceneViewUUID
class_events: []
class_methods:
- name: ClearOwnership
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1a8ef40ce47cc0b354a7050cdfdca1dd54
  brief_description: Clears ownership of the RealtimeView (if it’s owned by the local
    client, or preventOwnershipTransfer is false).
  detailed_description: ''
  description: "Clears ownership of the RealtimeView (if it’s owned by the local client,
    or preventOwnershipTransfer is false).\n\n"
  definition: void Normal.Realtime.RealtimeView.ClearOwnership
  return_type: void
  args_string: "()"
  arguments: []
- name: RequestOwnership
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_view_1a9760f4dc8202d684337a099b666925fb
  brief_description: Requests ownership of the RealtimeView.
  detailed_description: ''
  description: "Requests ownership of the RealtimeView.\n\n"
  definition: void Normal.Realtime.RealtimeView.RequestOwnership
  return_type: void
  args_string: "()"
  arguments: []
class_enums: []
---

# RealtimeView

RealtimeViews are used to link a RealtimeComponent and its model to the datastore. When a prefab is instantiated, RealtimeView creates a model for each RealtimeComponent on the prefab and puts it into the datastore. Then when the prefab is instantiated on other clients, RealtimeView will connect the model in the datastore with its respective RealtimeComponent on the prefab.

## Editor Interface

The Inspector in Unity looks something like this:

![](./assets/realtimeview.png "The RealtimeView inspector in Unity, with the Advanced Settings expanded.")

### Components

The components section lists all RealtimeComponents on this game object and their component ID. If you’ve made a custom model, you’ll recognize this as the property ID on a model. Each component is assigned a unique ID by RealtimeView. That ID is used to identify this component when communicating with other clients. It’s also used when restoring prefabs that have been marked persistent. It’s very important that these IDs are unique and that they do not get re-used by different components.

### Child Views

The child views section works similarly to the Components section. Any RealtimeViews that are children of this view will show up here. All data that’s stored in RealtimeComponents on child views will be added to this view when it’s put in the datastore.

In general you should never need to manually assign unique view IDs. Normcore will automatically assign them, and will deprecate them when you remove a child view. If you move a child view back, it will auto-detect and re-assign the old ID to prevent bugs with loading persistent data from the datastore.

### Scene View UUID

The Scene View UUID property will only appear on RealtimeViews that are in the scene. This is a globally unique identifier that is used to synchronize this view’s model in the datastore. When two clients first connect to a room, they use this identifier to ensure that both instances of the same RealtimeView share the same model.

### Ownership

Every RealtimeView has a permissions model that’s enforced by the server. If this view is owned by a particular client, other clients are unable to change any permissions on the view, its components, or child views and their components.

There are two buttons for Requesting and Clearing ownership that will enable in play mode. There is also an API (described below) that offers more control over taking over ownership and when other clients are allowed to steal ownership at runtime.

### Advanced Settings

#### Realtime Instance

This property references the instance of Realtime that this RealtimeView should use to synchronize its model. Most apps will only have a single instance of Realtime in the scene, and RealtimeView will automatically populate this variable using that instance. However, if you plan to have multiple instances in the same scene, you may manually wire up which instance this RealtimeView should use here.

#### Ownership + Lifetime Flags

There are three properties here that are only applicable to RealtimeViews that exist in the scene (as opposed to RealtimeViews that are instantiated via a prefab).

**Owned by Creating Client:** A boolean that specifies whether Realtime should request ownership when this view is created, which can be useful for establishing a master client if needed.

**Prevent Ownership Takeover:** At runtime, clients can call RequestOwnership() on the RealtimeView to take over ownership of the model. You can use this checkbox to prevent that. When checked, only models that have no owner can be taken over. This is also a setting that you can change at runtime.

**Destroy When Owner Or Last Client Leaves:** A boolean that specifies whether to destroy this RealtimeView when its owner leaves the room, or if there is no owner, to destroy when the last client leaves.

The former case is great for things like avatars. If a player’s connection is lost, the server will take care of destroying this RealtimeView when the owner disconnects.

The latter case is great for resetting singleton state. If you have a RealtimeView that manages the state of your multiplayer game, such as who’s turn it is, and what level you’re on, you can choose to clear the model when the last client leaves. It will then be recreated by the first client to join in a new session.

Last, if you leave this unchecked, the object will persist between sessions. Let’s say you’re building a collaboration space with a whiteboard. You can leave this unchecked so that the state of your whiteboard is saved between sessions.

#### Reset View UUID

This button is only applicable to RealtimeViews that exist in the scene (as opposed to being created by instantiating a prefab).

Normcore is pretty good at automatically assigning Scene View UUIDs to each RealtimeView. However, it is possible to end up with a duplicate (for example if you save a copy of a scene and expect to additively load it at runtime).

If you end up in a scenario where there is a duplicate scene view UUID, you can use this button to tell Normcore to reset it. However, be careful! Once reset, this view will not be able to communicate with scene views that had the old ID. It will also not be able to retrieve persistent data stored under the previous scene view UUID.

#### Update Component & View IDs

Normcore will try to manage component and view IDs for you automatically. It does this to prevent using duplicate IDs and to prevent re-using an old ID. However, if you’ve deleted a RealtimeComponent or child view, saved your application, reopened and readded the component or child view, it will be unable to detect and re-assign the old ID.

Therefore, there are rare circumstances where you will need to manually set a component or view’s ID. To do that, click the Update Component & View IDs button. This will enable you to manually manage component and view IDs above.

Please note!: If you reuse a component ID with a different component, or you mix up a child view ID, your application may be unable to read persistent data stored by previous clients. Normcore will detect this at runtime and will automatically disconnect before it corrupts the datastore. Please use this feature at your own risk!
