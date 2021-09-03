---
title: RealtimeArray<TValue>
layout: Reference
category: API Reference
class_name: RealtimeArray<TValue>
class_summary: RealtimeArray is a special model type that holds a sequential list of models that can be modified at runtime. Modifying the array sends the minimal amount of information necessary for other clients to replicate the change. The whole collection is not sent every time.
class_remarks: This array collection is very limited because it is designed to support adding elements from multiple clients simultaneously. If you need the ability to add and remove elements at runtime, use RealtimeSet or RealtimeDictionary instead.
class_members:
- name: Events
  members:
  - name: modelAdded
    definition: event ModelAdded<TValue> modelAdded
    summary: An event that fires when a model is added locally or remotely.
- name: Properties
  members:
  - name: Count
    definition: int Count { get; }
    summary: The number of models currently stored in the collection.
  - name: Item
    definition: TValue Item { get; }
    summary: Retrieve a model given a specific index.
    parameters:
    - name: index
      description: The index of the model to retrieve
- name: Methods
  members:
  - name: Add
    definition: void Add(TValue value)
    summary: Appends a RealtimeModel to the end of the array.
    remarks: Add operations take effect instantly. If the server rejects a change (due to ownership) the model will be removed.
    parameters:
    - name: value
      description: The model to add. This value cannot be null.
  - name: GetEnumerator
    definition: IEnumerator<TValue> GetEnumerator()
  - name: _ReadArrayUpdate
    definition: void _ReadArrayUpdate(ReadStream stream, StreamContext context, uint propertyID)
    summary: Internal. Do not use.
    remarks: This will be removed in the next major version.
  - name: GetCollectionTypeID
    definition: uint GetCollectionTypeID()

---
