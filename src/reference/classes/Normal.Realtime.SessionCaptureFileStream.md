---
title: SessionCaptureFileStream
layout: Reference
category: API Reference
class_name: SessionCaptureFileStream
class_summary: ''
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: filePath
    definition: filePath
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: mode
    definition: mode
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: writing
    definition: writing
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: reading
    definition: reading
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: startTimestamp
    definition: startTimestamp
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: clientID
    definition: clientID
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
  - name: Dispose
    definition: void Dispose()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteHeader
    definition: void WriteHeader(int clientID, double startTimestamp, byte[] data)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Flush
    definition: void Flush()
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
  - name: ReadHeader
    definition: byte[] ReadHeader()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: PeekNextUpdateDeltaTimestamp
    definition: bool PeekNextUpdateDeltaTimestamp(Double& deltaTimestamp)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadDeltaUpdate
    definition: bool ReadDeltaUpdate(double playbackTime, Double& timestamp, Int32& sender, Byte[]& data, Boolean& reliable, UInt32& updateID, Boolean& incoming)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: SkipToTime
    definition: void SkipToTime(double playbackTime)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
