---
title: UnreliableProperty<T>
layout: Reference
category: API Reference
class_name: UnreliableProperty<T>
class_summary: An UnreliableProperty writes and reads primitives and structs on the unreliable channel. The local value is not guaranteed to be in sync with the server value, and does not resend on packet loss, but is more bandwidth efficient.
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
  - name: SetRedundantWritesEnabled
    definition: void SetRedundantWritesEnabled(bool value)
  - name: WriteLength
    definition: int WriteLength(StreamContext context)
  - name: Write
    definition: bool Write(WriteStream stream, StreamContext context)
  - name: Read
    definition: bool Read(ReadStream stream, StreamContext context)
  - name: ReadValue
    definition: bool ReadValue(ReadStream stream, StreamContext context)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
