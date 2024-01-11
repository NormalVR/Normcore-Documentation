---
title: ISerializer<T>
layout: Reference
category: API Reference
class_name: ISerializer<T>
class_summary: ISerializer{T} is able to serialize and deserialize a specific type.
class_remarks: ''
class_members:
- name: Methods
  members:
  - name: Length
    definition: int Length(T value)
    summary: Calculate the byte length of the value.
  - name: Write
    definition: void Write(WriteStream& stream, T value)
    summary: Serialize a value to the write stream.
  - name: Read
    definition: void Read(ReadStream& stream, T& value)
    summary: Deserialize and return a value from a read stream.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
