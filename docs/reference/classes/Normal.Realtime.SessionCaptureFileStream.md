---
title: SessionCaptureFileStream
layout: Reference
category: API Reference
class_name: SessionCaptureFileStream
class_members:
- name: Properties
  members:
  - name: filePath
    definition: string filePath { get; }
  - name: mode
    definition: Mode mode { get; }
  - name: writing
    definition: bool writing { get; }
  - name: reading
    definition: bool reading { get; }
  - name: startTimestamp
    definition: double startTimestamp { get; }
  - name: clientID
    definition: int clientID { get; }
- name: Methods
  members:
  - name: Dispose
    definition: void Dispose()
  - name: WriteHeader
    definition: void WriteHeader(int clientID, double startTimestamp, byte[] data)
  - name: Flush
    definition: void Flush()
  - name: WriteDeltaUpdate
    definition: void WriteDeltaUpdate(double timestamp, int sender, byte[] data, int dataLength, bool reliable, uint updateID, bool incoming)
  - name: ReadHeader
    definition: byte[] ReadHeader()
  - name: PeekNextUpdateDeltaTimestamp
    definition: bool PeekNextUpdateDeltaTimestamp(Double& deltaTimestamp)
  - name: ReadDeltaUpdate
    definition: bool ReadDeltaUpdate(double playbackTime, Double& timestamp, Int32& sender, Byte[]& data, Boolean& reliable, UInt32& updateID, Boolean& incoming)
  - name: SkipToTime
    definition: void SkipToTime(double playbackTime)

---
