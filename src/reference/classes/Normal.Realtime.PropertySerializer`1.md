---
title: PropertySerializer<T>
layout: Reference
category: API Reference
class_name: PropertySerializer<T>
class_summary: Serializer for a Realtime property that automatically creates and writes the header.
class_remarks: ''
class_members:
- name: Fields
  members:
  - name: serializer
    definition: public ISerializer<T> serializer
  - name: header
    definition: public PropertyHeader header
- name: Methods
  members:
  - name: Length
    definition: int Length(T value)
  - name: Write
    definition: void Write(WriteStream& stream, T value)
  - name: Read
    definition: void Read(ReadStream& stream, T& value)

---
