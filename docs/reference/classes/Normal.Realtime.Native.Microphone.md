---
title: Microphone
layout: Reference
category: API Reference
class_name: Microphone
class_members:
- name: Static Methods
  members:
  - name: PlatformSupported
    definition: bool PlatformSupported()
- name: Methods
  members:
  - name: Dispose
    definition: void Dispose()
  - name: Start
    definition: bool Start()
  - name: Stop
    definition: void Stop()
  - name: SampleRate
    definition: int SampleRate()
  - name: Channels
    definition: int Channels()
  - name: GetAudioData
    definition: bool GetAudioData(float[] audioData)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
