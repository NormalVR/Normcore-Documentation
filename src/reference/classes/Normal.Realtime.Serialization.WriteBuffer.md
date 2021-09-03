---
title: WriteBuffer
layout: Reference
category: API Reference
class_name: WriteBuffer
class_members:
- name: Properties
  members:
  - name: bytesWritten
    definition: int bytesWritten { get; }
- name: Methods
  members:
  - name: GetBuffer
    definition: byte[] GetBuffer()
  - name: Reset
    definition: void Reset()
  - name: WriteByte
    definition: void WriteByte(byte value)
  - name: WriteBytes
    definition: void WriteBytes(byte[] value)
  - name: WriteBytes
    definition: void WriteBytes(byte[] value, int offset, int length)
  - name: WriteVarint32
    definition: void WriteVarint32(uint value)
  - name: WriteFloat
    definition: void WriteFloat(float value)
  - name: WriteDouble
    definition: void WriteDouble(double value)
  - name: WriteString
    definition: void WriteString(string value)
  - name: WriteString
    definition: void WriteString(string value, int lengthInBytes)

---
