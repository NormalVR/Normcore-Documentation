---
layout: docs
title: Voice Chat
---
# Voice Chat

Normcore includes high-quality low-latency voice chat that's accessible via a single component: **RealtimeAvatarVoice**.

RealtimeAvatarVoice works on any [realtime prefab](../#prefabs) as long as the RealtimeView component has an owner.

Upon instantiation, RealtimeAvatarVoice uses the ownership of the RealtimeView to determine if it should be sending audio for this prefab or receiving audio to play back.

If the component is owned locally, a microphone stream is created, and if it is owned by a remote client, an **AudioOutput** component is created in order to play back audio.

By default RealtimeAvatarVoice will create an **AudioSource** component, however, if you would like to set custom spatialization settings, create an AudioSource manually. RealtimeAvatarVoice will detect and use this instance instead.

RealtimeAvatarVoice includes a `mute` property. If `RealtimeAvatarVoice` represents a local player, this property will stop sending audio, effectively muting this player for everyone in the room. However if RealtimeAvatarVoice represents a remote player, it will mute their audio stream only for the local client.

RealtimeAvatarVoice also includes a `voiceVolume` property. This is a read-only value between 0-1 that reflects that audio level the last time it was sampled for playback. This can be useful for animating the mouth of an avatar to match a player's speech.

### AudioPreprocessor
RealtimeAvatarVoice includes an AudioPreprocessor that automatically sets the gain for the microphone, filters out background noise, reverb, and echo cancellation.

In most cases the default settings are correct, however, if you would like to make changes, the source code to RealtimeAvatarVoice is included and [can be forked](./avatars#forking).

It's worth noting that most platforms default to using hardware echo cancellation that is supplied by the operation system and so the AudioPreprocessor's echo cancellation functionality is not required.
