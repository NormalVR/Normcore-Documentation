---
title: RealtimeDictionary<TValue>
layout: Reference
category: API Reference
class_name: RealtimeDictionary<TValue>
class_summary: RealtimeDictionary is a special model type that represents an dictionary of models. This collection can be modified by multiple clients simultaneously without introducing datastore conflicts. All updates are applied instantly and are rolled back if rejected by the server (due to ownership). Adding or removing items sends the minimal amount of information to the server in order to perform the update on all clients. The whole collection is not sent every time.
class_remarks: ''
class_members:
- name: Events
  members:
  - name: modelAdded
    definition: event ModelAdded<TValue> modelAdded
    summary: An event that fires when a model is added locally or remotely.
  - name: modelReplaced
    definition: event ModelReplaced<TValue> modelReplaced
    summary: An event that fires when a model is replaced locally or remotely.
    remarks: A model is considered replaced (as opposed to removed and added) if a new model is added that overwrites an existing model under the same key.
  - name: modelRemoved
    definition: event ModelRemoved<TValue> modelRemoved
    summary: An event that fires when a model is removed locally or remotely.
- name: Properties
  members:
  - name: Item
    definition: TValue Item { get; set; }
    summary: Access a model for a specific key.
    parameters:
    - name: key
      description: The key of the model.
  - name: Count
    definition: int Count { get; }
    summary: The number of models currently stored in the collection.
- name: Methods
  members:
  - name: Add
    definition: void Add(uint key, TValue value)
    summary: Add a model to the collection.
    parameters:
    - name: key
      description: The key to store the model under
    - name: value
      description: The model to store in the collection
  - name: Remove
    definition: bool Remove(uint key)
    summary: Remove a model from the collection.
    returns: A boolean to indicate whether the key was contained within the collection.
    parameters:
    - name: key
      description: The key of the model to remove
  - name: GetEnumerator
    definition: IEnumerator<KeyValuePair<uint, TValue>> GetEnumerator()
  - name: TryGetValue
    definition: bool TryGetValue(uint key, TValue& value)
    summary: Attempt to retrieve a value from the collection.
    remarks: This method will not throw an exception if the key is not found.
    returns: A boolean indicating whether the key was found within the collection.
    parameters:
    - name: key
      description: The key of the model to fetch.
    - name: value
      description: The model if one is found, otherwise null.
  - name: ContainsKey
    definition: bool ContainsKey(uint key)
    summary: Check if a key exists within the collection.
    returns: A boolean indicating whether the key was found within the collection.
    parameters:
    - name: key
      description: The key to search for.
  - name: Contains
    definition: bool Contains(TValue value)
    summary: Check if a model instance is contained in the collection.
    remarks: This method is very slow! If you need high performance value searching, you should use the added/replaced/removed events to mirror this collection to a faster collection type.
    returns: A boolean indicating whether the value was found within the collection.
    parameters:
    - name: value
      description: The model instance to look for.
  - name: GetCollectionTypeID
    definition: uint GetCollectionTypeID()

---
