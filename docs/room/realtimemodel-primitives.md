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
* `RealtimeArray`
* `RealtimeSet`
* `RealtimeDictionary`
* `StringKeyDictionary`

:::warning
Built-in C# collections (arrays, `List`, `Dictionary`, etc.) are not supported.
:::

See the [Collections](./collections.md) page for more information.

# Byte array
There is custom support for `byte[]`. Other types of arrays (ex `int[]`) are not supported though.

For example:
```csharp
[RealtimeModel]
public partial class MyModel {
    [RealtimeProperty(1, false, true, includeEqualityCheck: false)]
    private byte[] _rawData = new byte[0];
}
```

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
