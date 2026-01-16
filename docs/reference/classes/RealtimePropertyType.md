---
title: RealtimePropertyType
layout: Reference
category: API Reference
class_name: RealtimePropertyType
class_members:
- name: Static Fields
  members:
  - name: Unreliable
    definition: public RealtimePropertyType Unreliable
    summary: A property that is synchronized on the unreliable channel.
  - name: Reliable
    definition: public RealtimePropertyType Reliable
    summary: A property that is synchronized on the reliable channel.
  - name: UnreliableRedundant
    definition: public RealtimePropertyType UnreliableRedundant
    summary: A property that is synchronized on the unreliable channel, and resends its value up to two times.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
