---
title: RingBuffer<T>
layout: Reference
category: API Reference
class_name: RingBuffer<T>
class_summary: ''
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: capacity
    definition: capacity
    summary: The capacity of the buffer.
    remarks: ''
    returns: ''
    parameters: []
  - name: count
    definition: count
    summary: The number of elements in the buffer.
    remarks: ''
    returns: ''
    parameters: []
  - name: isEmpty
    definition: isEmpty
    summary: True if the buffer is empty.
    remarks: ''
    returns: ''
    parameters: []
  - name: isFull
    definition: isFull
    summary: True if the buffer is full. Pushing onto the buffer will overwrite old elements.
    remarks: ''
    returns: ''
    parameters: []
  - name: front
    definition: front
    summary: Returns the newest element in the buffer. This is equivalent to calling buffer[0].
    remarks: ''
    returns: ''
    parameters: []
  - name: back
    definition: back
    summary: Returns the oldest element in the buffer. This is equivalent to calling buffer[buffer.count - 1].
    remarks: ''
    returns: ''
    parameters: []
  - name: Item
    definition: Item
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: next
    definition: next
    summary: Returns the next front of the buffer. If the buffer is not full, this object has been allocated but is not  considered "inside" the buffer. If the buffer is full, this returns the oldest element. The buffer is  allocated during construction, so calling `buffer.Enqueue(buffer.next)` will advance the ring without  allocating any new objects.
    remarks: ''
    returns: ''
    parameters: []
- name: Methods
  members:
  - name: Enqueue
    definition: void Enqueue(T value)
    summary: Add an element to the front of the buffer. If the buffer is full, this overwrites the back of the buffer.
    remarks: ''
    returns: ''
    parameters: []
  - name: Dequeue
    definition: T Dequeue()
    summary: Remove the element at the back of the buffer.
    remarks: ''
    returns: ''
    parameters: []
  - name: DequeueFront
    definition: T DequeueFront()
    summary: Remove the element at the front of the buffer.
    remarks: ''
    returns: ''
    parameters: []
  - name: Clear
    definition: void Clear()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
