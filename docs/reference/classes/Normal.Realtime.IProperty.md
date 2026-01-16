---
title: IProperty
layout: Reference
category: API Reference
class_name: IProperty
class_summary: A property that can be read and written to a stream.
class_remarks: ''
class_members:
- name: Methods
  members:
  - name: WriteLength
    definition: int WriteLength(StreamContext context)
    summary: Return the length of the property for a given context.
  - name: Write
    definition: bool Write(WriteStream stream, StreamContext context)
    summary: Write the property to the stream, if needed. Returns true if the property was written.
    returns: True if the property was written.
    parameters:
    - name: stream
      description: The stream to write to.
    - name: context
      description: The context to write in.
  - name: Read
    definition: bool Read(ReadStream stream, StreamContext context)
    summary: Read the property from the stream. Returns true if the property changed.
    returns: True if the property changed.
    parameters:
    - name: stream
      description: The stream to read from.
    - name: context
      description: The context to read in.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
