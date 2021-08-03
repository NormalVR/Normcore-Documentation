---
title: ModelProperty<T>
layout: Reference
category: API Reference
class_name: ModelProperty<T>
class_summary: A ModelProperty writes and reads other Realtime models.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: value
    definition: T value { get; }
    summary: The property model.
- name: Methods
  members:
  - name: WriteLength
    definition: int WriteLength(StreamContext context)
  - name: Write
    definition: bool Write(WriteStream stream, StreamContext context)
  - name: Read
    definition: bool Read(ReadStream stream, StreamContext context)

---
