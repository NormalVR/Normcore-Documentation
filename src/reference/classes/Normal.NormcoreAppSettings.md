---
title: NormcoreAppSettings
layout: Reference
category: API Reference
class_name: NormcoreAppSettings
class_summary: ''
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: DEFAULT_MATCHER_URL
    definition: DEFAULT_MATCHER_URL
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Static Methods
  members:
  - name: CreateInstance
    definition: NormcoreAppSettings CreateInstance(string normcoreAppKey, string matcherURL = wss://normcore-matcher.normcore.io:3000)
    summary: Create a new app settings instance.
    remarks: ''
    returns: ''
    parameters: []
- name: Properties
  members:
  - name: normcoreAppKey
    definition: normcoreAppKey
    summary: The app key used to associate your application with the Normcore servers.
    remarks: ''
    returns: ''
    parameters: []
  - name: matcherURL
    definition: matcherURL
    summary: The matcher URL used to connect to Normcore servers. If you're using Normcore On-Premises, make sure this  points to your on-premises Normcore servers before connecting with Realtime.
    remarks: ''
    returns: ''
    parameters: []

---
