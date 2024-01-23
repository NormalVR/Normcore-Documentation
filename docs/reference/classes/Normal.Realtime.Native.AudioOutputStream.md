---
title: AudioOutputStream
layout: Reference
category: API Reference
class_name: AudioOutputStream
class_members:
- name: Properties
  members:
  - name: nativePointerIsNull
    definition: bool nativePointerIsNull { get; }
- name: Methods
  members:
  - name: AudioOutputStreamMatchesIdentifier
    definition: bool AudioOutputStreamMatchesIdentifier(IntPtr nativeAudioOutputStreamIdentifier)
  - name: Dispose
    definition: void Dispose()
  - name: ClientID
    definition: int ClientID()
  - name: StreamID
    definition: int StreamID()
  - name: SampleRate
    definition: int SampleRate()
  - name: SetSampleRate
    definition: void SetSampleRate(int sampleRate)
  - name: Channels
    definition: int Channels()
  - name: IsOpen
    definition: bool IsOpen()
  - name: GetAudioData
    definition: bool GetAudioData(float[] audioData)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
