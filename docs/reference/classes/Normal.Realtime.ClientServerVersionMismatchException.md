---
title: ClientServerVersionMismatchException
layout: Reference
category: API Reference
class_name: ClientServerVersionMismatchException
class_summary: An exception thrown when joining a room server that is running an incompatible Normcore version.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: clientVersion
    definition: string clientVersion { get; }
    summary: The version of the client.
  - name: serverVersion
    definition: string serverVersion { get; }
    summary: The version of the room server.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
