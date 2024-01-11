---
title: RealtimeSet<TValue>
layout: Reference
category: API Reference
class_name: RealtimeSet<TValue>
class_summary: RealtimeSet is a special model type that represents an unordered collection of models. Internally this is used for things like keeping track of all RealtimeViews in the scene. If order is not important, this collection is the recommended collection to use for storing collections of models. All updates are applied instantly and are rolled back if rejected by the server (due to ownership). Adding or removing items sends the minimal amount of information to the server in order to perform the update on all clients. The whole collection is not sent every time.
class_remarks: ''
class_members:
- name: Events
  members:
  - name: modelAdded
    definition: event ModelAdded<TValue> modelAdded
    summary: An event that fires when a model is added locally or remotely.
  - name: modelRemoved
    definition: event ModelRemoved<TValue> modelRemoved
    summary: An event that fires when a model is removed locally or remotely.
- name: Properties
  members:
  - name: Count
    definition: int Count { get; }
    summary: The number of models currently stored in the collection.
- name: Methods
  members:
  - name: Add
    definition: bool Add(TValue value)
    summary: Add a model to the collection
    parameters:
    - name: value
      description: The model to add. This value cannot be null.
  - name: Remove
    definition: bool Remove(TValue value)
    summary: Remove a model from the collection.
    returns: A boolean to indicate whether the model was contained within the collection.
    parameters:
    - name: value
      description: The model to remove.
  - name: GetEnumerator
    definition: IEnumerator<TValue> GetEnumerator()
  - name: GetCollectionTypeID
    definition: uint GetCollectionTypeID()

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
