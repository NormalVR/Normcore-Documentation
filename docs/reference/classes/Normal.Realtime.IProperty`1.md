---
title: IProperty<T>
layout: Reference
category: API Reference
class_name: IProperty<T>
class_members:
- name: Properties
  members:
  - name: value
    definition: T value { get; }
    summary: The property value.
- name: Methods
  members:
  - name: WriteLength
    definition: int WriteLength(StreamContext context)
    summary: Return the length of the property for a given context.
  - name: Write
    definition: bool Write(WriteStream stream, StreamContext context)
    summary: Write the property to the stream, if needed. Returns true if the property was written.
  - name: Read
    definition: bool Read(ReadStream stream, StreamContext context)
    summary: Read the property from the stream. Returns true if the property changed.

---
