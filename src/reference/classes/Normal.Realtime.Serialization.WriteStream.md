---
title: WriteStream
layout: Reference
category: API Reference
class_name: WriteStream
class_members:
- name: Static Methods
  members:
  - name: ConvertNegativeOneIntToUInt
    definition: uint ConvertNegativeOneIntToUInt(int value)
  - name: Vector2ToBytesLength
    definition: int Vector2ToBytesLength()
  - name: Vector2ToBytes
    definition: byte[] Vector2ToBytes(Vector2 value)
  - name: Vector3ToBytesLength
    definition: int Vector3ToBytesLength()
  - name: Vector3ToBytes
    definition: byte[] Vector3ToBytes(Vector3 value)
  - name: QuaternionToBytesLength
    definition: int QuaternionToBytesLength()
  - name: QuaternionToBytes
    definition: byte[] QuaternionToBytes(Quaternion value)
  - name: ColorToBytesLength
    definition: int ColorToBytesLength()
  - name: ColorToBytes
    definition: byte[] ColorToBytes(Color value)
  - name: FloatToBytesLength
    definition: int FloatToBytesLength()
  - name: FloatToBytes
    definition: void FloatToBytes(float value, byte[] buffer, Int32& offset)
  - name: WriteNullLength
    definition: int WriteNullLength(uint propertyID)
  - name: WriteVarint32Length
    definition: int WriteVarint32Length(uint propertyID, uint value)
  - name: WriteFloatLength
    definition: int WriteFloatLength(uint propertyID)
  - name: WriteDoubleLength
    definition: int WriteDoubleLength(uint propertyID)
  - name: WriteBytesLength
    definition: int WriteBytesLength(uint propertyID, int numberOfBytes)
  - name: WriteStringLength
    definition: int WriteStringLength(uint propertyID, string value)
  - name: WriteModelLength
    definition: int WriteModelLength(uint propertyID, IStreamWriter model, StreamContext context, bool forceWriteFullModel = false)
  - name: WriteCollectionLength
    definition: int WriteCollectionLength(uint propertyID, ICollection collection, StreamContext context, bool forceWriteFullModel = false)
- name: Methods
  members:
  - name: SerializeModel
    definition: void SerializeModel(IStreamWriter model, StreamContext context)
  - name: WriteNull
    definition: void WriteNull(uint propertyID)
  - name: WriteVarint32
    definition: void WriteVarint32(uint propertyID, uint value)
  - name: WriteFloat
    definition: void WriteFloat(uint propertyID, float value)
  - name: WriteDouble
    definition: void WriteDouble(uint propertyID, double value)
  - name: WriteBytes
    definition: void WriteBytes(uint propertyID, byte[] value)
  - name: WriteBytes
    definition: void WriteBytes(uint propertyID, byte[] value, int offset, int length)
  - name: WriteString
    definition: void WriteString(uint propertyID, string value)
  - name: WriteModel
    definition: void WriteModel(uint propertyID, IStreamWriter value, StreamContext context, bool forceWriteFullModel = false)
  - name: WriteCollection
    definition: void WriteCollection(uint propertyID, ICollection value, StreamContext context, bool forceWriteFullModel = false)

---
