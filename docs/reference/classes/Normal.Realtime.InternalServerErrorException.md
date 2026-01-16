---
title: InternalServerErrorException
layout: Reference
category: API Reference
class_name: InternalServerErrorException
class_summary: An exception thrown when the Normcore matcher encounters an unexpected issue.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: Message
    definition: string Message { get; }
  - name: details
    definition: string details { get; }
    summary: The details specified by the Normcore backend.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
