---
layout: docs
title: Supported Primitives
---
# Supported Primitives

When creating a [**RealtimeModel**](./realtimemodel.md), only specific primitives can be used. This page includes a full list of supported primitives as well as edge-cases related to equality checks, collections, and nested models.

### Supported C# primitives
`bool`, `byte`, `sbyte`, `short`, `ushort`, `int`, `uint`, `long`, `ulong`, `float`, `double`, `string`

### Supported Unity primitives
`Color`, `Vector2`, `Vector3`, `Vector4`, `Quaternion`

### Supported Collections
* `RealtimeArray`
* `RealtimeSet`
* `RealtimeDictionary`
* `StringKeyDictionary`

See the [Collections](./collections.md) page for more information.

:::note
Built-in C# collections like **`List`** and **`Dictionary`** are not supported because Normcore cannot efficiently detect when their contents have changed.
:::

## Support for byte[] arrays
Models support `byte[]` arrays as properties out of the box, however, most users will want to disable [equality checks](#equality-checks) as they only check the reference and not the contents of the `byte[]` array itself. Leaving equality checks on means that Normcore will only synchronize the property if the `byte[]` array is set to a new reference.

```csharp
[RealtimeModel]
public partial class MyModel {
    [RealtimeProperty(1, false, true, includeEqualityCheck: false)]
    private byte[] _rawData = new byte[0];
}

public class MyComponent : RealtimeComponent<MyModel> {
    private Update() {
        // Fetch the model
        byte[] rawData = model.rawData;

        // Update a byte in the buffer
        rawData[0] = 0xff;

        // Update the property to tell Normcore the value has changed.
        // Since the rawData property has includeEqualityCheck set to false, the buffer will
        // be synchronized to all clients even though the byte[] object reference has not changed. 
        model.rawData = rawData;
    }
}
```

## Support for nested models
Models can contain other models as properties:

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

All functionality will work as expected.

## Equality checks
By default, when a model property is updated, Normcore will run an equality check to ensure the value has changed before sending an update to keep bandwidth use as low as possible.

:::note
The equality check uses the `==` operator which behaves differently depending on the type being compared.
:::

There are cases where you will want Normcore to serialize and send a value every time it's set, regardless of whether the value has changed.

In order to accomplish this, `RealtimeProperty` has an `includeEqualityCheck` argument that can be set to `false`. When `includeEqualityCheck` is set to `false`, Normcore will mark the property to be serialized and sent to all players every time the setter is called.

```csharp
[RealtimeModel]
public partial class MyModel {
    [RealtimeProperty(1, false, true, includeEqualityCheck: false)]
    private byte[] _rawData = new byte[0];
}

public class MyComponent : RealtimeComponent<MyModel> {
    private Update() {
        // Fetch the model
        byte[] rawData = model.rawData;

        // Update a byte in the buffer
        rawData[0] = 0xff;

        // Update the property to tell Normcore the value has changed.
        // Since the rawData property has includeEqualityCheck set to false, the buffer will
        // be synchronized to all clients even though the byte[] object reference has not changed. 
        model.rawData = rawData;
    }
}
```

:::note
The equality check setting has no effect on nested model properties.
:::
