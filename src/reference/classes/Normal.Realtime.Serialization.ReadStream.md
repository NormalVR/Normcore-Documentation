---
title: ReadStream
layout: Reference
category: API Reference
class_name: ReadStream
class_members:
- name: Static Methods
  members:
  - name: ConvertUIntToNegativeOneInt
    definition: int ConvertUIntToNegativeOneInt(uint value)
  - name: Vector2FromBytes
    definition: Vector2 Vector2FromBytes(byte[] buffer, int offset = 0)
  - name: Vector3FromBytes
    definition: Vector3 Vector3FromBytes(byte[] buffer, int offset = 0)
  - name: QuaternionFromBytes
    definition: Quaternion QuaternionFromBytes(byte[] buffer, int offset = 0)
  - name: ColorFromBytes
    definition: Color ColorFromBytes(byte[] buffer, int offset = 0)
  - name: BytesToFloat
    definition: float BytesToFloat(byte[] buffer, Int32& offset)
- name: Fields
  members:
  - name: recursionLevelLimit
    definition: public uint recursionLevelLimit
- name: Methods
  members:
  - name: DeserializeModel
    definition: void DeserializeModel(IStreamReader model, StreamContext context)
  - name: ReadNextPropertyID
    definition: bool ReadNextPropertyID(UInt32& propertyID)
  - name: ReadNextPropertyID
    definition: bool ReadNextPropertyID(UInt32& propertyID, WireType& wireType)
  - name: ReadNull
    definition: void ReadNull()
  - name: ReadBool
    definition: bool ReadBool()
  - name: ReadByte
    definition: byte ReadByte()
  - name: ReadSByte
    definition: sbyte ReadSByte()
  - name: ReadUShort
    definition: ushort ReadUShort()
  - name: ReadShort
    definition: short ReadShort()
  - name: ReadUInt
    definition: uint ReadUInt()
  - name: ReadInt
    definition: int ReadInt()
  - name: ReadVarint32
    definition: uint ReadVarint32()
  - name: ReadFloat
    definition: float ReadFloat()
  - name: ReadDouble
    definition: double ReadDouble()
  - name: ReadBytes
    definition: byte[] ReadBytes()
  - name: ReadBytes
    definition: int ReadBytes(byte[] buffer, int offset, int maxLength)
  - name: ReadString
    definition: string ReadString()
  - name: ReadModel
    definition: void ReadModel(IStreamReader value, StreamContext context, bool didForceWriteFullModel = false)
  - name: ReadModelAsReadBuffer
    definition: ReadBuffer ReadModelAsReadBuffer()
  - name: ReadCollectionTypeID
    definition: uint ReadCollectionTypeID()
  - name: ReadCollection
    definition: void ReadCollection(IStreamReader value, StreamContext context, bool didForceWriteFullModel = false)
  - name: SkipProperty
    definition: void SkipProperty()
  - name: StartLengthDelimitedStruct
    definition: void StartLengthDelimitedStruct()
  - name: ReadStructFloat
    definition: float ReadStructFloat()
  - name: FinishLengthDelimitedStruct
    definition: void FinishLengthDelimitedStruct()

---
