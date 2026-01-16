---
title: ImmutableModelCollection
layout: Reference
category: API Reference
class_name: ImmutableModelCollection
class_summary: An immutable map of models indexed by unique property IDs.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: Item
    definition: RealtimeModel Item { get; }
    summary: Get the RealtimeModel associated with a property ID.
    parameters:
    - name: id
      description: The property ID of the model.
- name: Methods
  members:
  - name: GetEnumerator
    definition: Enumerator<KeyValuePair<uint, RealtimeModel>> GetEnumerator()
    summary: Get an enumerator for the models in this collection.
    returns: An enumerator for the models in this collection.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
