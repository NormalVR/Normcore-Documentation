---
title: MatcherValidationErrorException
layout: Reference
category: API Reference
class_name: MatcherValidationErrorException
class_summary: An exception thrown when data sent to the Normcore matcher does not have a valid format.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: Message
    definition: string Message { get; }
  - name: validationErrors
    definition: IReadOnlyList<ValidationError> validationErrors { get; }
    summary: The validation errors returned by the server.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
