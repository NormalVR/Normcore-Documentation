---
title: WriteStream
layout: Reference
category: API Reference
class_name: WriteStream
class_summary: ''
class_remarks: ''
class_members:
- name: Static Methods
  members:
  - name: ConvertNegativeOneIntToUInt
    definition: uint ConvertNegativeOneIntToUInt(int value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Vector2ToBytesLength
    definition: int Vector2ToBytesLength()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Vector2ToBytes
    definition: byte[] Vector2ToBytes(Vector2 value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Vector3ToBytesLength
    definition: int Vector3ToBytesLength()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Vector3ToBytes
    definition: byte[] Vector3ToBytes(Vector3 value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: QuaternionToBytesLength
    definition: int QuaternionToBytesLength()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: QuaternionToBytes
    definition: byte[] QuaternionToBytes(Quaternion value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ColorToBytesLength
    definition: int ColorToBytesLength()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ColorToBytes
    definition: byte[] ColorToBytes(Color value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: FloatToBytesLength
    definition: int FloatToBytesLength()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: FloatToBytes
    definition: void FloatToBytes(float value, byte[] buffer, Int32& offset)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteNullLength
    definition: int WriteNullLength(uint propertyID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteVarint32Length
    definition: int WriteVarint32Length(uint propertyID, uint value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteFloatLength
    definition: int WriteFloatLength(uint propertyID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteDoubleLength
    definition: int WriteDoubleLength(uint propertyID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteBytesLength
    definition: int WriteBytesLength(uint propertyID, int numberOfBytes)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteStringLength
    definition: int WriteStringLength(uint propertyID, string value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteModelLength
    definition: int WriteModelLength(uint propertyID, IStreamWriter model, StreamContext context, bool forceWriteFullModel = false)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteCollectionLength
    definition: int WriteCollectionLength(uint propertyID, ICollection collection, StreamContext context, bool forceWriteFullModel = false)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Methods
  members:
  - name: SerializeModel
    definition: void SerializeModel(IStreamWriter model, StreamContext context)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteNull
    definition: void WriteNull(uint propertyID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteVarint32
    definition: void WriteVarint32(uint propertyID, uint value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteFloat
    definition: void WriteFloat(uint propertyID, float value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteDouble
    definition: void WriteDouble(uint propertyID, double value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteBytes
    definition: void WriteBytes(uint propertyID, byte[] value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteBytes
    definition: void WriteBytes(uint propertyID, byte[] value, int offset, int length)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteString
    definition: void WriteString(uint propertyID, string value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteModel
    definition: void WriteModel(uint propertyID, IStreamWriter value, StreamContext context, bool forceWriteFullModel = false)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteCollection
    definition: void WriteCollection(uint propertyID, ICollection value, StreamContext context, bool forceWriteFullModel = false)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
