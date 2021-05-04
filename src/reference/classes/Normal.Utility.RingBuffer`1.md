---
title: RingBuffer<T>
layout: Reference
category: API Reference
class_name: RingBuffer<T>
class_members:
- name: Properties
  members:
  - name: capacity
    definition: int capacity { get; }
    summary: The capacity of the buffer.
  - name: count
    definition: int count { get; }
    summary: The number of elements in the buffer.
  - name: isEmpty
    definition: bool isEmpty { get; }
    summary: True if the buffer is empty.
  - name: isFull
    definition: bool isFull { get; }
    summary: True if the buffer is full. Pushing onto the buffer will overwrite old elements.
  - name: front
    definition: T front { get; }
    summary: Returns the newest element in the buffer. This is equivalent to calling buffer[0].
  - name: back
    definition: T back { get; }
    summary: Returns the oldest element in the buffer. This is equivalent to calling buffer[buffer.count - 1].
  - name: Item
    definition: T Item { get; set; }
  - name: next
    definition: T next { get; }
    summary: Returns the next front of the buffer. If the buffer is not full, this object has been allocated but is not considered "inside" the buffer. If the buffer is full, this returns the oldest element. The buffer is allocated during construction, so calling `buffer.Enqueue(buffer.next)` will advance the ring without allocating any new objects.
- name: Methods
  members:
  - name: Enqueue
    definition: void Enqueue(T value)
    summary: Add an element to the front of the buffer. If the buffer is full, this overwrites the back of the buffer.
  - name: Dequeue
    definition: T Dequeue()
    summary: Remove the element at the back of the buffer.
  - name: DequeueFront
    definition: T DequeueFront()
    summary: Remove the element at the front of the buffer.
  - name: Clear
    definition: void Clear()

---
