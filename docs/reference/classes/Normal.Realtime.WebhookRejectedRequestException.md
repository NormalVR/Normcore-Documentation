---
title: WebhookRejectedRequestException
layout: Reference
category: API Reference
class_name: WebhookRejectedRequestException
class_summary: An exception thrown when a request to the Normcore matcher is rejected by the custom webhook.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: Message
    definition: string Message { get; }
  - name: webhookErrorMessage
    definition: string webhookErrorMessage { get; }
    summary: The webhook error message.
  - name: webhookErrorContext
    definition: string webhookErrorContext { get; }
    summary: The webhook error context.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
