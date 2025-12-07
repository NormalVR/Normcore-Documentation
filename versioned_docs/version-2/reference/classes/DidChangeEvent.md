---
title: DidChangeEvent
layout: Reference
category: API Reference
class_name: DidChangeEvent
class_members:
- name: Static Fields
  members:
  - name: None
    definition: public DidChangeEvent None
    summary: Do not generate a change event.
  - name: Read
    definition: public DidChangeEvent Read
    summary: Dispatch the change event during local changes or during model deserialization. This is the legacy Normcore behavior (prior to 2.13.0).
    remarks: A portion of the model's properties may not have been deserialized yet when this change event is fired.
  - name: AfterRead
    definition: public DidChangeEvent AfterRead
    summary: Dispatch the change event during local changes or after the current datastore update. This guarantees that all other properties and models have been deserialized.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
