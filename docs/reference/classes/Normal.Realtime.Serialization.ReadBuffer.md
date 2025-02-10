---
title: ReadBuffer
layout: Reference
category: API Reference
class_name: ReadBuffer
class_members:
- name: Properties
  members:
  - name: bytesRead
    definition: int bytesRead { get; }
- name: Methods
  members:
  - name: SetBuffer
    definition: void SetBuffer(byte[] buffer)
  - name: Reset
    definition: void Reset()
  - name: ReadByte
    definition: byte ReadByte()
  - name: ReadBytes
    definition: void ReadBytes(byte[] buffer, int offset, int length)
  - name: ReadVarint32
    definition: uint ReadVarint32()
  - name: ReadVarint64
    definition: ulong ReadVarint64()
  - name: SkipVarint32
    definition: void SkipVarint32()
  - name: SkipVarint64
    definition: void SkipVarint64()
  - name: ReadFloat
    definition: float ReadFloat()
  - name: ReadDouble
    definition: double ReadDouble()
  - name: SkipFloat
    definition: void SkipFloat()
  - name: SkipDouble
    definition: void SkipDouble()
  - name: ReadString
    definition: string ReadString(int lengthInBytes)
  - name: SkipBytes
    definition: void SkipBytes(int length)
  - name: Copy
    definition: ReadBuffer Copy()
  - name: ToString
    definition: string ToString()

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
