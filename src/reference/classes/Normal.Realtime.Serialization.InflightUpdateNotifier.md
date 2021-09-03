---
title: InflightUpdateNotifier
layout: Reference
category: API Reference
class_name: InflightUpdateNotifier
class_summary: An event notifier that lets the datastore notify properties when a reliable update is acked by the server.
class_remarks: ''
class_members:
- name: Methods
  members:
  - name: Subscribe
    definition: InflightUpdateSubscription Subscribe(uint updateID, IConfirmedProperty property)
    summary: Subscribe a property to an update ID ack.
  - name: Unsubscribe
    definition: void Unsubscribe(uint updateID, IConfirmedProperty property)
    summary: Unsubscribe a property from receiving acks.
  - name: AckUpdateID
    definition: void AckUpdateID(uint updateID)
    summary: Invoke all of the callbacks for a specific update ID. The callbacks will be removed after they invoked.

---
