---
title: SerializationException
layout: Reference
category: API Reference
class_name: SerializationException
class_summary: ''
class_remarks: ''
class_members:
- name: Static Methods
  members:
  - name: WriteStreamWriteInvalidPropertyID
    definition: SerializationException WriteStreamWriteInvalidPropertyID(uint propertyID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteBufferLengthExceeded
    definition: SerializationException WriteBufferLengthExceeded(int length)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ModelLengthCalculatedIncorrectly
    definition: SerializationException ModelLengthCalculatedIncorrectly(Type modelType, int actualLength, int calculatedLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: NegativeModelWriteLength
    definition: SerializationException NegativeModelWriteLength(int length)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadBufferLengthExceeded
    definition: SerializationException ReadBufferLengthExceeded(int length)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadLengthDelimitedBufferLengthExceeded
    definition: SerializationException ReadLengthDelimitedBufferLengthExceeded(int length)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadModelBufferLengthIncorrect
    definition: SerializationException ReadModelBufferLengthIncorrect(int readLength, int expectedLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: RecursionLevelLimitExceeded
    definition: SerializationException RecursionLevelLimitExceeded(uint recursionLevelLimit)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: InvalidVarint
    definition: SerializationException InvalidVarint()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ReadInvalidType
    definition: SerializationException ReadInvalidType(WireType expectedWireType, WireType wireType)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: NegativeLengthDelimitedReadLength
    definition: SerializationException NegativeLengthDelimitedReadLength(int length)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: NegativeModelReadLength
    definition: SerializationException NegativeModelReadLength(int length)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: SuppliedBufferNotLargeEnough
    definition: SerializationException SuppliedBufferNotLargeEnough(int length, int maxLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MetaModelSuppliedMismatchedModelType
    definition: SerializationException MetaModelSuppliedMismatchedModelType(uint serverModelType, uint localModelType)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
