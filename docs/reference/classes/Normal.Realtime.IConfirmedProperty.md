---
title: IConfirmedProperty
layout: Reference
category: API Reference
class_name: IConfirmedProperty
class_members:
- name: Events
  members:
  - name: onDidRevert
    definition: event OnDidRevertDelegate onDidRevert
    summary: Called when an anticipated change was rejected by the server, and the value has been reverted to the last value that was received from the server.
- name: Methods
  members:
  - name: Confirm
    definition: void Confirm(uint updateID, StreamContext& context)
    summary: Confirm an update as received by the server. This is _not_ an acknowledgement that the property value was accepted, only that the update is no longer inflight. If the property value was accepted, it is sent back to the local client in the preceding read.
    parameters:
    - name: updateID
      description: The ID of the update to confirm.
    - name: context
      description: The context of the current deserialization pass.
  - name: UnsubscribeCallback
    definition: void UnsubscribeCallback()
    summary: Reset the property to the confirmed value, clearing any inflight update.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
