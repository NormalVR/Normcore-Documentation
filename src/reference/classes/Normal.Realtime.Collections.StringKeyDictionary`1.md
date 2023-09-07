---
title: StringKeyDictionary<TValue>
layout: Reference
category: API Reference
class_name: StringKeyDictionary<TValue>
class_summary: StringKeyDictionary represents a dictionary collection of models. Unlike RealtimeDictionary, StringKeyDictionary is transactional. This means that models are not added to the collection until they are confirmed by the server. If any key has been modified before your change reaches the server, it will be rejected. It is up to your application to decide whether to retry the operation. Adding or removing items sends the minimal amount of information to the server in order to perform the update on all clients. The whole collection is not sent every time. Once a key has been added, it is assigned a unique ID by the server to reduce bandwidth for future updates.
class_remarks: ''
class_members:
- name: Events
  members:
  - name: didInsertModelForKey
    definition: event DidInsertModelForKey<TValue> didInsertModelForKey
    summary: An event that fires when a model is successfully added to the collection by any client.
  - name: didRemoveModelForKey
    definition: event DidRemoveModelForKey<TValue> didRemoveModelForKey
    summary: An event that fires when a model is successfully removed from the collection by any client.
  - name: didClearAllModels
    definition: event DidClearAllModels<TValue> didClearAllModels
    summary: An event that fires when the collection is cleared by any client.
- name: Properties
  members:
  - name: Item
    definition: TValue Item { get; }
    summary: Retrieve a model given a specific key.
    parameters:
    - name: key
      description: The key of the model to retrieve
  - name: Count
    definition: int Count { get; }
    summary: The number of models currently stored in the collection.
- name: Methods
  members:
  - name: Insert
    definition: void Insert(string key, TValue value, Action<bool> completionHandler)
    summary: Insert a model into the collection. The model will not be inserted until the server confirms the transaction.
    parameters:
    - name: key
      description: The key to use to store the model.
    - name: value
      description: The model to store in the collection. This value cannot be null.
    - name: completionHandler
      description: A completion handler that fires when the operation is complete along with a boolean to indicate if the transaction was successful.
  - name: Remove
    definition: void Remove(string key, Action<bool> completionHandler)
    summary: Remove a model from the collection. The model will not be removed until the server confirms the transaction.
    parameters:
    - name: key
      description: The key of the model to remove.
    - name: completionHandler
      description: A completion handler that fires when the operation is complete along with a boolean to indicate if the transaction was successful.
  - name: Clear
    definition: void Clear(Action<bool> completionHandler)
    summary: Clear all models from the collection. Models will not be removed until the server confirms the transaction.
    remarks: This operation will be rejected if any keys have been modified before the clear operation reaches the server.
    parameters:
    - name: completionHandler
      description: A completion handler that fires when the operation is complete along with a boolean to indicate if the transaction was successful.
  - name: TryGetValue
    definition: bool TryGetValue(string key, TValue& value)
    summary: Attempt to retrieve a value from the collection.
    remarks: This method will not throw an exception if the key is not found.
    returns: A boolean indicating whether the key was found within the collection.
    parameters:
    - name: key
      description: The key of the model to fetch.
    - name: value
      description: The model if one is found, otherwise null.
  - name: ContainsKey
    definition: bool ContainsKey(string key)
    summary: Check if a key exists within the collection.
    returns: A boolean indicating whether the key was found within the collection.
    parameters:
    - name: key
      description: The key to search for.
  - name: ContainsValue
    definition: bool ContainsValue(TValue value)
    summary: Check if a model instance is contained in the collection.
    remarks: This method has equivalent performance to Dictionary<T, V>.ContainsValue().
    returns: A boolean indicating whether the value was found within the collection.
    parameters:
    - name: value
      description: The RealtimeModel instance to look for.
  - name: GetEnumerator
    definition: IEnumerator<KeyValuePair<string, TValue>> GetEnumerator()
  - name: GetCollectionTypeID
    definition: uint GetCollectionTypeID()

---
