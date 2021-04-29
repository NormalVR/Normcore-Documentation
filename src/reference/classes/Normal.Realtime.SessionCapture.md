---
title: SessionCapture
layout: Reference
category: API Reference
class_name: SessionCapture
class_summary: ''
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: mode
    definition: mode
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: recording
    definition: recording
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: playing
    definition: playing
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Methods
  members:
  - name: Finalize
    definition: void Finalize()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: StartRecording
    definition: void StartRecording(int clientID, double startTimestamp, byte[] data)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: StopRecording
    definition: void StopRecording()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteDeltaUpdate
    definition: void WriteDeltaUpdate(double timestamp, int sender, byte[] data, int dataLength, bool reliable, uint updateID, bool incoming)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: StartPlayback
    definition: byte[] StartPlayback()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: StopPlayback
    definition: void StopPlayback()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: PlaybackTick
    definition: void PlaybackTick(double deltaTime)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadDeltaUpdate
    definition: DeltaUpdate ReadDeltaUpdate()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
