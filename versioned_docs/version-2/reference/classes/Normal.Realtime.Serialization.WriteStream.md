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
  - name: WriteVarint64Length
    definition: int WriteVarint64Length(uint propertyID, ulong value)
  - name: WriteFloatLength
    definition: int WriteFloatLength(uint propertyID)
  - name: WriteDoubleLength
    definition: int WriteDoubleLength(uint propertyID)
  - name: WriteBytesLength
    definition: int WriteBytesLength(uint propertyID, byte[] value)
  - name: WriteStringLength
    definition: int WriteStringLength(uint propertyID, string value)
  - name: WriteModelLength
    definition: int WriteModelLength(uint propertyID, IStreamWriter model, StreamContext context, bool forceWriteFullModel = false)
  - name: WriteCollectionLength
    definition: int WriteCollectionLength(uint propertyID, ICollection collection, StreamContext context, bool forceWriteFullModel = false)
  - name: LengthStructBool
    definition: int LengthStructBool(bool value)
  - name: LengthStructByte
    definition: int LengthStructByte(byte value)
  - name: LengthStructSByte
    definition: int LengthStructSByte(sbyte value)
  - name: LengthStructUShort
    definition: int LengthStructUShort(ushort value)
  - name: LengthStructShort
    definition: int LengthStructShort(short value)
  - name: LengthStructUInt
    definition: int LengthStructUInt(uint value)
  - name: LengthStructInt
    definition: int LengthStructInt(int value)
  - name: LengthStructULong
    definition: int LengthStructULong(ulong value)
  - name: LengthStructLong
    definition: int LengthStructLong(long value)
  - name: LengthStructFloat
    definition: int LengthStructFloat(float value)
  - name: LengthStructDouble
    definition: int LengthStructDouble(double value)
  - name: LengthStructString
    definition: int LengthStructString(string value)
    summary: Returns the serialized size in bytes of the value. A null value is serialized as an empty string.
  - name: LengthStructBytes
    definition: int LengthStructBytes(byte[] value)
    summary: Returns the serialized size in bytes of the value. A null value is serialized as an empty byte array.
  - name: LengthPropertyHeader
    definition: int LengthPropertyHeader(PropertyHeader& header)
- name: Methods
  members:
  - name: WriteStructByte
    definition: void WriteStructByte(byte value)
  - name: WriteStructSByte
    definition: void WriteStructSByte(sbyte value)
  - name: WriteStructUShort
    definition: void WriteStructUShort(ushort value)
  - name: WriteStructShort
    definition: void WriteStructShort(short value)
  - name: WriteStructUInt
    definition: void WriteStructUInt(uint value)
  - name: WriteStructInt
    definition: void WriteStructInt(int value)
  - name: WriteStructULong
    definition: void WriteStructULong(ulong value)
  - name: WriteStructLong
    definition: void WriteStructLong(long value)
  - name: WriteStructFloat
    definition: void WriteStructFloat(float value)
  - name: WriteStructDouble
    definition: void WriteStructDouble(double value)
  - name: WriteStructString
    definition: void WriteStructString(string value)
  - name: WriteStructBytes
    definition: void WriteStructBytes(byte[] value)
  - name: WritePropertyHeader
    definition: void WritePropertyHeader(PropertyHeader& header)
  - name: SerializeModel
    definition: void SerializeModel(IStreamWriter model, StreamContext context)
  - name: WriteNull
    definition: void WriteNull(uint propertyID)
  - name: WriteVarint32
    definition: void WriteVarint32(uint propertyID, uint value)
  - name: WriteVarint64
    definition: void WriteVarint64(uint propertyID, ulong value)
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
  - name: WriteStructBool
    definition: void WriteStructBool(bool value)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
