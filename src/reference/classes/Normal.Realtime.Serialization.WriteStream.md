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
    definition: int WriteBytesLength(uint propertyID, byte[] value)
  - name: WriteStringLength
    definition: int WriteStringLength(uint propertyID, string value)
  - name: WriteModelLength
    definition: int WriteModelLength(uint propertyID, IStreamWriter model, StreamContext context, bool forceWriteFullModel = false)
  - name: WriteCollectionLength
    definition: int WriteCollectionLength(uint propertyID, ICollection collection, StreamContext context, bool forceWriteFullModel = false)
  - name: LengthBool
    definition: int LengthBool(bool value)
  - name: LengthByte
    definition: int LengthByte(byte value)
  - name: LengthSByte
    definition: int LengthSByte(sbyte value)
  - name: LengthUShort
    definition: int LengthUShort(ushort value)
  - name: LengthShort
    definition: int LengthShort(short value)
  - name: LengthUInt
    definition: int LengthUInt(uint value)
  - name: LengthInt
    definition: int LengthInt(int value)
  - name: LengthFloat
    definition: int LengthFloat(float value)
  - name: LengthDouble
    definition: int LengthDouble(double value)
  - name: LengthString
    definition: int LengthString(string value)
    summary: Returns the serialized size in bytes of the value. A null value is serialized as an empty string.
  - name: LengthBytes
    definition: int LengthBytes(byte[] value)
    summary: Returns the serialized size in bytes of the value. A null value is serialized as an empty byte array.
  - name: LengthPropertyHeader
    definition: int LengthPropertyHeader(PropertyHeader& header)
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
  - name: WriteBool
    definition: void WriteBool(bool value)
  - name: WriteByte
    definition: void WriteByte(byte value)
  - name: WriteSByte
    definition: void WriteSByte(sbyte value)
  - name: WriteUShort
    definition: void WriteUShort(ushort value)
  - name: WriteShort
    definition: void WriteShort(short value)
  - name: WriteUInt
    definition: void WriteUInt(uint value)
  - name: WriteInt
    definition: void WriteInt(int value)
  - name: WriteFloat
    definition: void WriteFloat(float value)
  - name: WriteDouble
    definition: void WriteDouble(double value)
  - name: WriteString
    definition: void WriteString(string value)
  - name: WriteBytes
    definition: void WriteBytes(byte[] value)
  - name: WritePropertyHeader
    definition: void WritePropertyHeader(PropertyHeader& header)

---
