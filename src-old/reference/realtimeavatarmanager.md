---
title: RealtimeAvatarManager
layout: Reference
category: API Reference
class_name: RealtimeAvatarManager
class_description: ''
class_properties:
- name: avatars
  type: Dictionary<int, RealtimeAvatar>
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_manager_1a8e68fdf67add6acb556c37aebfe86dc3
  brief_description: A dictionary of all RealtimeAvatar instances in the room organized
    by the clientID of each player.
  detailed_description: ''
  description: "A dictionary of all RealtimeAvatar instances in the room organized
    by the clientID of each player.\n\n"
  definition: Dictionary<int, RealtimeAvatar> Normal.Realtime.RealtimeAvatarManager.avatars
- name: localAvatar
  type: RealtimeAvatar
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_manager_1a03794ca8840151146f23ee5e4ea2a5b1
  brief_description: The RealtimeAvatar instance that was instantiated for the local
    player upon connecting to the room.
  detailed_description: ''
  description: "The RealtimeAvatar instance that was instantiated for the local player
    upon connecting to the room.\n\n"
  definition: RealtimeAvatar Normal.Realtime.RealtimeAvatarManager.localAvatar
- name: localAvatarPrefab
  type: GameObject
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_manager_1a38d33557d1a1b62710a6ffa765209cbb
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: GameObject Normal.Realtime.RealtimeAvatarManager.localAvatarPrefab
class_events:
- name: avatarCreated
  type: AvatarCreatedDestroyed
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_manager_1ad11f7c84133a2714dd1eb93e80ad4f03
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: AvatarCreatedDestroyed Normal.Realtime.RealtimeAvatarManager.avatarCreated
- name: avatarDestroyed
  type: AvatarCreatedDestroyed
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_manager_1a94987c86d82182b137e43a32ebe1cbd6
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: AvatarCreatedDestroyed Normal.Realtime.RealtimeAvatarManager.avatarDestroyed
class_methods:
- name: AvatarCreatedDestroyed
  type: delegate void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_manager_1a3ccc760312bc6e20a3f909ba287d638f
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: delegate void Normal.Realtime.RealtimeAvatarManager.AvatarCreatedDestroyed
  return_type: delegate void
  args_string: "(RealtimeAvatarManager avatarManager, RealtimeAvatar avatar, bool
    isLocalAvatar)"
  arguments:
  - name: avatarManager
    type: RealtimeAvatarManager
  - name: avatar
    type: RealtimeAvatar
  - name: isLocalAvatar
    type: bool
- name: CreateAvatarIfNeeded
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_manager_1acddcd05240563555592d2db9efdd8fed
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.RealtimeAvatarManager.CreateAvatarIfNeeded
  return_type: void
  args_string: "()"
  arguments: []
- name: DestroyAvatarIfNeeded
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_manager_1a4426a06709bebbed753e547697c66a1b
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.RealtimeAvatarManager.DestroyAvatarIfNeeded
  return_type: void
  args_string: "()"
  arguments: []
- name: GetRealtimeAvatarDeviceTypeForLocalPlayer
  type: RealtimeAvatar.DeviceType
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_manager_1ab436a71761d37b12f2fb1c0c63a4ae93
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: static RealtimeAvatar.DeviceType Normal.Realtime.RealtimeAvatarManager.GetRealtimeAvatarDeviceTypeForLocalPlayer
  return_type: RealtimeAvatar.DeviceType
  args_string: "()"
  arguments: []
class_enums: []
---

# RealtimeAvatarManager

RealtimeAvatarManager is a component that managers VR & AR avatars. It will automatically spawn a prefab for each player that joins a room. Avatar prefabs will automatically use Unity’s native XR APIs for getting the head & hand positions, however you can also specify your own transforms.

Note: This component must be on the same game object as Realtime.

## Editor Interface

![](./assets/realtimeavatarmanager.png "The Unity inspector for RealtimeAvatarManager.")

**Local Avatar Prefab:** The prefab to instantiate when the local player successfully connects to a room.

**Local Player:** The transforms to use to position the player prefab at runtime. If you leave any of these blank, the default Unity XR APIs will be used.
