---
title: RealtimeAvatarVoice
layout: Reference
category: API Reference
class_name: RealtimeAvatarVoice
class_description: ''
class_properties:
- name: model
  type: RealtimeAvatarVoiceModel
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_voice_1a225fe0dfaa329eeb9717c3b6cdcefe91
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: RealtimeAvatarVoiceModel Normal.Realtime.RealtimeAvatarVoice.model
- name: mute
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_voice_1a8c10b1d4573454f08fc8a22a2d85ba24
  brief_description: A boolean that represents whether or not the current stream is
    muted. If the component is streaming the local microphone, it will stop sending
    microphones samples to the server. If it is playing back a remote audio stream,
    it will stop playing audio through the AudioSource component.
  detailed_description: ''
  description: "A boolean that represents whether or not the current stream is muted.
    If the component is streaming the local microphone, it will stop sending microphones
    samples to the server. If it is playing back a remote audio stream, it will stop
    playing audio through the AudioSource component.\n\n"
  definition: bool Normal.Realtime.RealtimeAvatarVoice.mute
- name: voiceVolume
  type: float
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_avatar_voice_1aed7cee47ef16eec5fa2ca163b366911b
  brief_description: The current normalized volume level of the voice stream. If the
    component is streaming the local microphone, this is the current audio level of
    the microphone. Otherwise it is the current audio level of the AudioSource component.
    This property is commonly used to animate the mouth of an avatar in VR or AR.
  detailed_description: ''
  description: "The current normalized volume level of the voice stream. If the component
    is streaming the local microphone, this is the current audio level of the microphone.
    Otherwise it is the current audio level of the AudioSource component. This property
    is commonly used to animate the mouth of an avatar in VR or AR.\n\n"
  definition: float Normal.Realtime.RealtimeAvatarVoice.voiceVolume
class_events: []
class_methods: []
class_enums: []
---

# RealtimeAvatarVoice

RealtimeAvatarVoice is a component that creates a voice stream in Normcore. If the RealtimeView that this component is attached to is owned by the local client, it will create the audio stream and connect it to the local microphone. If it’s owned by a remote client, it will automatically create an AudioSource to play the audio stream through.

## Editor Interface

![](./assets/realtimeavatarvoice.png "The Unity inspector for the RealtimeAvatarVoice component.")

**Audio Mixer Group:** The audio mixer group to use for the AudioSource that is created by RealtimeAvatarVoice
