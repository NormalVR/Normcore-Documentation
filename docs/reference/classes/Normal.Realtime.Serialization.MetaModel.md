---
title: MetaModel
layout: Reference
category: API Reference
class_name: MetaModel
class_summary: The MetaModel is a model that's used to send metadata about a model to the server. It's always exclusively serialized under propertyID 0 and must always be serialized before any other propertyIDs.
class_remarks: MetaModel instances should never need to be accessed directly. RealtimeModel and RealtimeComponents exposes public properties and methods that let you set this state.
class_members:
- name: Static Fields
  members:
  - name: ReservedPropertyID
    definition: public uint ReservedPropertyID
    summary: The propertyID reserved for serializing metamodel instances inside of a RealtimeModel.
- name: Properties
  members:
  - name: ownerID
    definition: int ownerID { get; set; }
    summary: The client ID of the model owner. A value of -1 is unowned, anything greater is a client ID.
  - name: lifetimeFlags
    definition: LifetimeFlags lifetimeFlags { get; set; }
    summary: The lifetime flags for the model that this metamodel belongs to.
    remarks: In the next major version, this will be replaced with individual boolean properties

---
