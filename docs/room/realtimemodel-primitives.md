---
layout: docs
title: RealtimeModel Primitives
---
# RealtimeModel Primitives

In [RealtimeModel](./realtimemodel.md) definitions the `[RealtimeProperty]` attribute can be used on properties of many different types. Here's the full list:

# C# primitives
* `bool`
* `byte`
* `sbyte`
* `short`
* `ushort`
* `int`
* `uint`
* `float`
* `double`
* `string`

# Unity primitives
* `Color`
* `Vector2`
* `Vector3`
* `Vector4`
* `Quaternion`

# Collections
Classes that implement the `ICollection` interface (in the `Normal.Realtime.Serialization` namespace) are also supported. These include:
* `RealtimeArray`
* `RealtimeSet`
* `RealtimeDictionary`
* `StringKeyDictionary`

# Byte array
`byte[]` is supported, for example:
```csharp
[RealtimeModel]
public partial class MyModel {
    [RealtimeProperty(1, false, true, includeEqualityCheck: false)]
    private byte[] _rawData = new byte[0];
}
```

Note that it can't use an equality check because it would be too costly to run on the CPU. So the property is considered dirty every time it is assigned to.

# Nested models
Models can contain other models, for example:

```csharp
[RealtimeModel]
public partial class MyModel {
    [RealtimeProperty(1, true)] private MyNestedModel _nestedModel;
}

[RealtimeModel]
public partial class MyNestedModel {
    [RealtimeProperty(1, true)] private string _name;
}
```
