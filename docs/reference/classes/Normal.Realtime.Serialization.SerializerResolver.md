---
title: SerializerResolver
layout: Reference
category: API Reference
class_name: SerializerResolver
class_members:
- name: Static Methods
  members:
  - name: Register
    definition: void Register()
  - name: TryRegister
    definition: void TryRegister(ISerializer<TStruct> instance)
    summary: Register a new instance of the serializer if none already exists for the type.
  - name: Resolve
    definition: ISerializer<TStruct> Resolve()

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
