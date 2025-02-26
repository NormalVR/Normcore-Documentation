---
title: NormcoreProjectSettings
layout: Reference
category: API Reference
class_name: NormcoreProjectSettings
class_summary: NormcoreProjectSettings represents project-wide settings that apply to Normcore. These settings can be changed by going to Edit > Project Settings > Normcore.
class_remarks: These settings are applied project-wide, regardless of how many Normcore Apps this project connects to.
class_members:
- name: Static Properties
  members:
  - name: logLevel
    definition: NormcoreLogLevel logLevel { get; set; }
    summary: The log level to use for all Normcore-related logging.
    remarks: Defaults to Error, which only logs errors. Set to Debug for more verbose logging.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
