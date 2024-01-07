---
title: IRealtimePrefabLoadDelegate
layout: Reference
category: API Reference
class_name: IRealtimePrefabLoadDelegate
class_summary: A delegate used by Realtime / Room to load a prefab for instantiation. This can be used to redirect a prefabName in the datastore to another prefab or to use a different prefab loading API such as Addressables.
class_remarks: ''
class_members:
- name: Methods
  members:
  - name: LoadRealtimePrefab
    definition: GameObject LoadRealtimePrefab(RealtimePrefabMetadata prefabMetadata)
    summary: Called by Room to load a prefab for a given prefab name. The default implementation calls Resources.Load<GameObject>(prefabName).
    returns: The realtime prefab to clone for instantiation.
    parameters:
    - name: prefabMetadata
      description: The metadata stored in the datastore to reference this realtime prefab.

---
