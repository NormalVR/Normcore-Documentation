---
title: RealtimeAnimator
layout: Reference
category: API Reference
class_name: RealtimeAnimator
class_summary: A Realtime component that synchronizes the Animator state.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: autoRequestOwnership
    definition: bool autoRequestOwnership { get; set; }
    summary: Automatically request ownership of the model if unowned.
  - name: disableRootMotionWhenOwnedRemotely
    definition: bool disableRootMotionWhenOwnedRemotely { get; set; }
    summary: Determines whether root motion should be disabled on the Animator when this RealtimeAnimator is owned remotely. remotely.
    remarks: This can help when using RealtimeTransform on the Animator root, as the remote owner will sync the root's position with root motion already applied, so root motion should not be applied again by the local client.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
