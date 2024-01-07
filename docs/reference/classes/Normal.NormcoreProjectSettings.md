---
title: NormcoreProjectSettings
layout: Reference
category: API Reference
class_name: NormcoreProjectSettings
class_summary: A ScriptableObject that represents all settings related to a Normcore project.
class_remarks: These settings are applied project-wide, regardless of how many Normcore Apps this project connects to.
class_members:
- name: Static Properties
  members:
  - name: logLevel
    definition: NormcoreLogLevel logLevel { get; set; }
    summary: The log level to use for all Normcore-related logging.
    remarks: Defaults to Error, which only logs errors. Set to Debug for more verbose logging.

---
