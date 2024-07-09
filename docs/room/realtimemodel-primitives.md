---
layout: docs
title: RealtimeModel Primitives
---
# RealtimeModel Primitives

In [RealtimeModel](./realtimemodel.md) definitions the `[RealtimeProperty]` attribute can be used on properties of many different types. Here's the full list:

## C# primitives
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

## Unity primitives
* `Color`
* `Vector2`
* `Vector3`
* `Vector4`
* `Quaternion`

## Collections
* `RealtimeArray`
* `RealtimeSet`
* `RealtimeDictionary`
* `StringKeyDictionary`

:::warning
Built-in C# collections (arrays, `List`, `Dictionary`, etc.) are not supported.
:::

See the [Collections](./collections.md) page for more information.

## Byte array
There is custom support for `byte[]`. Other types of arrays (ex `int[]`) are not supported though.

For example:
```csharp
[RealtimeModel]
public partial class MyModel {
    [RealtimeProperty(1, false, true, includeEqualityCheck: false)]
    private byte[] _rawData = new byte[0];
}
```

:::warning
It's recommended to [disable the equality check for byte arrays](#byte-array-1).
:::

## Nested models
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

## Equality check
`RealtimeProperty` has an `includeEqualityCheck` argument (set to `true` by default) that enables the equality check on the property's setter.

When the tagged property's value is set, this check verifies that the new value is different from the previous value. If they're identical then no serialization or network update is triggered for that operation.

If the check is disabled, then any value assignment to the property triggers a serialization and network update.

The equality check uses the `==` operator. This operator is implemented by the type of the property.

### C#/Unity primitives
The `==` operator compares by value.

### Nested models
The equality check is always disabled for nested model properties.

### Byte array
The `==` operator of `byte[]` examines the object references of the arrays but not their contents.

For this reason it's often best to disable the equality check on this type of property since it won't be able to detect when the array contents have changed.
