---
title: IRealtimePrefabInstantiateDelegate
layout: Reference
category: API Reference
class_name: IRealtimePrefabInstantiateDelegate
class_summary: A delegate used by Realtime / Room to instantiate and destroy prefab instances. This can be used to implement object pooling for realtime prefab instances.
class_remarks: ''
class_members:
- name: Methods
  members:
  - name: InstantiateRealtimePrefab
    definition: GameObject InstantiateRealtimePrefab(GameObject prefab)
    summary: Called by Room to instantiate an instance of the given prefab. The default implementation calls UnityEngine.Object.Instantiate(prefab).
    returns: The prefab instance.
    parameters:
    - name: prefab
      description: The prefab that should be instantiated.
  - name: DestroyRealtimePrefab
    definition: void DestroyRealtimePrefab(GameObject prefabInstance)
    summary: Called by Room to destroy a realtime prefab instance. The default implementation calls UnityEngine.Object.Destroy(prefabInstance).
    remarks: When implementing object pooling, use this method to return the prefab to the pool.
    parameters:
    - name: prefabInstance
      description: The prefab instance to destroy or return to the pool for reuse.

---
