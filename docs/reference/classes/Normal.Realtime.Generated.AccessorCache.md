---
title: AccessorCache
layout: Reference
category: API Reference
class_name: AccessorCache
class_members:
- name: Static Properties
  members:
  - name: cache
    definition: IDictionary<ValueTuple<Type, string>, ValueTuple<Delegate, Delegate>> cache { get; }
- name: Static Methods
  members:
  - name: TryGet
    definition: bool TryGet(Type type, string propertyName, Delegate& getter, Delegate& setter)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
