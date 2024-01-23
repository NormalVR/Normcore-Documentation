---
title: SerializationException
layout: Reference
category: API Reference
class_name: SerializationException
class_members:
- name: Static Methods
  members:
  - name: WriteStreamWriteInvalidPropertyID
    definition: SerializationException WriteStreamWriteInvalidPropertyID(uint propertyID)
  - name: WriteBufferLengthExceeded
    definition: SerializationException WriteBufferLengthExceeded(int length)
  - name: ModelLengthCalculatedIncorrectly
    definition: SerializationException ModelLengthCalculatedIncorrectly(Type modelType, int actualLength, int calculatedLength)
  - name: NegativeModelWriteLength
    definition: SerializationException NegativeModelWriteLength(int length)
  - name: ReadBufferLengthExceeded
    definition: SerializationException ReadBufferLengthExceeded(int length)
  - name: ReadLengthDelimitedBufferLengthExceeded
    definition: SerializationException ReadLengthDelimitedBufferLengthExceeded(int length)
  - name: ReadModelBufferLengthIncorrect
    definition: SerializationException ReadModelBufferLengthIncorrect(int readLength, int expectedLength)
  - name: RecursionLevelLimitExceeded
    definition: SerializationException RecursionLevelLimitExceeded(uint recursionLevelLimit)
  - name: InvalidVarint
    definition: SerializationException InvalidVarint()
  - name: ReadInvalidType
    definition: SerializationException ReadInvalidType(WireType expectedWireType, WireType wireType)
  - name: NegativeLengthDelimitedReadLength
    definition: SerializationException NegativeLengthDelimitedReadLength(int length)
  - name: NegativeModelReadLength
    definition: SerializationException NegativeModelReadLength(int length)
  - name: SuppliedBufferNotLargeEnough
    definition: SerializationException SuppliedBufferNotLargeEnough(int length, int maxLength)
  - name: MetaModelSuppliedMismatchedModelType
    definition: SerializationException MetaModelSuppliedMismatchedModelType(uint serverModelType, uint localModelType)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
