---
title: ReliableProperty<T>
layout: Reference
category: API Reference
class_name: ReliableProperty<T>
class_summary: A ReliableProperty writes and reads primitives and structs on the reliable channel.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: value
    definition: T value { get; set; }
  - name: dirty
    definition: bool dirty { get; }
    summary: True if the property has local changes.
- name: Methods
  members:
  - name: WriteLength
    definition: int WriteLength(StreamContext context)
  - name: Write
    definition: bool Write(WriteStream stream, StreamContext context)
  - name: Read
    definition: bool Read(ReadStream stream, StreamContext context)
  - name: Confirm
    definition: void Confirm(uint updateID)
    summary: Confirm an update ID.
    parameters:
    - name: updateID
      description: ''
  - name: UnsubscribeCallback
    definition: void UnsubscribeCallback()
    summary: Unsubscribe the inflight notification. The local value will remain unchanged.

---
