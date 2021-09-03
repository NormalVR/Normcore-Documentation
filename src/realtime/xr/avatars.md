---
layout: docs
title: Avatars
---
# Avatars

Normcore comes with a set of built-in scripts that can be used to create XR avatars quickly. We highly recommend starting with the [XR Avatars and Voice Chat](../../guides/xr-avatars-and-voice-chat) guide. This page serves as a reference for the included classes.

## RealtimeAvatarManager
RealtimeAvatarManager is a component that lives in the scene on the same game object as your **Realtime** instance. It is responsible for instantiating an avatar prefab to represent the local player as well as keeping track of avatars that were instantiated for other players in the same room.

If the component is enabled and realtime is connected to a room, an avatar prefab represented by the `localAvatarPrefab` property will be instantiated to represent the local client. This prefab needs to include a `RealtimeAvatar` component on the root in order to function correctly.

If you would like to use a different avatar prefab for different clients, this property can be changed at runtime from your own scripts.

In addition to managing the local player prefab instance, RealtimeAvatarManager keeps track of all avatars in the room via the `localAvatar` and `avatars` properties. The latter is a dictionary of all `RealtimeAvatar` components stored under the `clientID` that the avatar belongs to. This can be useful for determining how many players are currently in a multiplayer space.

If you would like to be notified of when players join and leave, RealtimeAvatarManager includes two events: `avatarCreated` and `avatarDestroyed`, which can be used like so:

```csharp
using UnityEngine;
using Normal.Realtime;

public class MyAvatarManager : MonoBehaviour {
    private RealtimeAvatarManager _manager;

    private void Awake() {
        _manager = GetComponent<RealtimeAvatarManager>();
        _manager.avatarCreated += AvatarCreated;
        _manager.avatarCreated += AvatarDestroyed;
    }

    private void AvatarCreated(RealtimeAvatarManager avatarManager, RealtimeAvatar avatar, bool isLocalAvatar) {
        // Avatar created!
    }

    private void AvatarDestroyed(RealtimeAvatarManager avatarManager, RealtimeAvatar avatar, bool isLocalAvatar) {
        // Avatar destroyed!
    }
}
```

## RealtimeAvatar
All avatar prefabs that are used with RealtimeAvatarManager need to include a **RealtimeAvatar** component on the root of the prefab.

The RealtimeAvatar component is responsible for synchronizing the head + hands positions and active states.

When it's first instantiated, RealtimeAvatar is given a set of transforms to track for the root of the prefab, the head, and the hands from RealtimeAvatarManager's `localPlayer` field, which is set in the editor inspector.

## Modifying RealtimeAvatar scripts
The source code to RealtimeAvatarManager and RealtimeAvatar are included with Normcore and serve as examples of how to implement an avatar management system in Normcore. While they cover the common case, larger XR apps may want to introduce extra functionality.

Unity's UPM package manager will not let projects modify RealtimeAvatarManager or RealtimeAvatar, so if you would like to modify them (and we encourage you to do so), we recommend copying all ReatimeAvatar classes into your project under a new namespace. From there you will be able to make any changes required for your project.
