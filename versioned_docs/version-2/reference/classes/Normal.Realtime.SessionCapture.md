---
title: SessionCapture
layout: Reference
category: API Reference
class_name: SessionCapture
class_members:
- name: Properties
  members:
  - name: mode
    definition: Mode mode { get; }
  - name: recording
    definition: bool recording { get; }
  - name: playing
    definition: bool playing { get; }
- name: Methods
  members:
  - name: StartRecording
    definition: void StartRecording(int clientID, double startTimestamp, byte[] data)
  - name: StopRecording
    definition: void StopRecording()
  - name: WriteDeltaUpdate
    definition: void WriteDeltaUpdate(double timestamp, int sender, byte[] data, int dataLength, bool reliable, uint updateID, bool incoming)
  - name: StartPlayback
    definition: byte[] StartPlayback()
  - name: StopPlayback
    definition: void StopPlayback()
  - name: PlaybackTick
    definition: void PlaybackTick(double deltaTime)
  - name: ReadDeltaUpdate
    definition: DeltaUpdate ReadDeltaUpdate()

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
