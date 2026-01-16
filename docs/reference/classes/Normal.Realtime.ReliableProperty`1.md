---
title: ReliableProperty<T>
layout: Reference
category: API Reference
class_name: ReliableProperty<T>
class_summary: A ReliableProperty writes and reads primitives and structs on the reliable channel.
class_remarks: ''
class_members:
- name: Events
  members:
  - name: onDidRevert
    definition: event OnDidRevertDelegate onDidRevert
    summary: Called when an anticipated change was rejected by the server, and the value has been reverted to the last value that was received from the server.
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
    definition: void Confirm(uint updateID, StreamContext& context)
    summary: Confirm an update as received by the server. This is _not_ an acknowledgement that the property value was accepted, only that the update is no longer inflight. If the property value was accepted, it is sent back to the local client in the preceding read.
    parameters:
    - name: updateID
      description: The ID of the update to confirm.
    - name: context
      description: The context of the current deserialization pass.
  - name: UnsubscribeCallback
    definition: void UnsubscribeCallback()
    summary: Unsubscribe the inflight notification. The local value will remain unchanged.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
