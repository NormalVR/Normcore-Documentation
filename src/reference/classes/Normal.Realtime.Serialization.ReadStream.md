---
title: ReadStream
layout: Reference
category: API Reference
class_name: ReadStream
class_summary: ''
class_remarks: ''
class_members:
- name: Static Methods
  members:
  - name: ConvertUIntToNegativeOneInt
    definition: int ConvertUIntToNegativeOneInt(uint value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Vector2FromBytes
    definition: Vector2 Vector2FromBytes(byte[] buffer, int offset = 0)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Vector3FromBytes
    definition: Vector3 Vector3FromBytes(byte[] buffer, int offset = 0)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: QuaternionFromBytes
    definition: Quaternion QuaternionFromBytes(byte[] buffer, int offset = 0)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ColorFromBytes
    definition: Color ColorFromBytes(byte[] buffer, int offset = 0)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: BytesToFloat
    definition: float BytesToFloat(byte[] buffer, Int32& offset)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Fields
  members:
  - name: recursionLevelLimit
    definition: recursionLevelLimit
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Methods
  members:
  - name: DeserializeModel
    definition: void DeserializeModel(IStreamReader model, StreamContext context)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadNextPropertyID
    definition: bool ReadNextPropertyID(UInt32& propertyID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadNextPropertyID
    definition: bool ReadNextPropertyID(UInt32& propertyID, WireType& wireType)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadNull
    definition: void ReadNull()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadVarint32
    definition: uint ReadVarint32()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadFloat
    definition: float ReadFloat()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadDouble
    definition: double ReadDouble()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadBytes
    definition: byte[] ReadBytes()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadBytes
    definition: int ReadBytes(byte[] buffer, int offset, int maxLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadString
    definition: string ReadString()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadModel
    definition: void ReadModel(IStreamReader value, StreamContext context, bool didForceWriteFullModel = false)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadModelAsReadBuffer
    definition: ReadBuffer ReadModelAsReadBuffer()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadCollectionTypeID
    definition: uint ReadCollectionTypeID()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadCollection
    definition: void ReadCollection(IStreamReader value, StreamContext context, bool didForceWriteFullModel = false)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: SkipProperty
    definition: void SkipProperty()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
