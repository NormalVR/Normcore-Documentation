---
layout: docs
title: Using Addressables
---
# Recipe: Using Addressables

By default, Normcore loads all realtime prefabs using `Resources.Load<GameObject>()`. For larger projects, this can cause performance issues when loading prefabs from disk. It can also be a pain run a large project with multiple Resources folders.

Normcore includes two interfaces that can be used to hook the prefab loading and instantiation pipeline: [**IRealtimePrefabLoadDelegate**](../../reference/classes/Normal.Realtime.IRealtimePrefabLoadDelegate.html) and [**IRealtimePrefabInstantiateDelegate**](../../reference/classes/Normal.Realtime.IRealtimePrefabInstantiateDelegate.html). Addressables support can be easily added by implementing a prefab load delegate.

The built-in default implementation looks like this:

```csharp
public class DefaultRealtimePrefabDelegate : MonoBehaviour, IRealtimePrefabLoadDelegate, IRealtimePrefabInstantiateDelegate {
    public GameObject LoadRealtimePrefab(RealtimePrefabMetadata prefabMetadata) {
        return Resources.Load<GameObject>(prefabMetadata.prefabName);
    }

    public GameObject InstantiateRealtimePrefab(GameObject prefab) {
        return UnityEngine.Object.Instantiate(prefab);
    }

    public void DestroyRealtimePrefab(GameObject prefabInstance) {
        UnityEngine.Object.Destroy(prefabInstance);
    }
}
```

And prefab loading can be hooked to use Addressables instead by creating our own **IRealtimePrefabLoadDelegate**:

```csharp
using UnityEngine;
using UnityEngine.AddressableAssets;
using Normal.Realtime;

public class CustomPrefabLoadDelegate : MonoBehaviour, IRealtimePrefabLoadDelegate {
    public GameObject LoadRealtimePrefab(RealtimePrefabMetadata prefabMetadata) {
        // Load the asset via Addressables
        var loadOperation = Addressables.LoadAssetAsync<GameObject>(prefabMetadata.prefabName);

        return loadOperation.WaitForCompletion();
    }
}
```

This realtime prefab load delegate will technically work, but it has a few issues.

First, it's going to be just as slow as `Resources.Load<GameObject>()`. The first time a realtime prefab is instantiated the asset will be loaded from disk which can cause stuttering. Second, it will never unload the addressables asset.

A better approach would be to create a component that preloads all of the realtime prefabs we plan to use and then unloads them when we're done.

Here's a recipe that does exactly that. It lets us specify a list of assets to preload and it implements the IRealtimePrefabLoadDelegate protocol to allow them to be referenced by Realtime. If a prefab isn't preloaded it will be loaded synchronously, similarly to how the default `Resources.Load<GameObject>()` implementation works.

```csharp
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;
using Normal.Realtime;

public class CustomPrefabLoadDelegate : MonoBehaviour, IRealtimePrefabLoadDelegate {
    [SerializeField]
    private List<AssetReference> _realtimePrefabsToPreload = new List<AssetReference>();
    private Dictionary<string, AsyncOperationHandle<GameObject>> _assets;

    private void Start() {
        // Preload all assets
        _assets = new Dictionary<string, AsyncOperationHandle<GameObject>>();
        foreach (AssetReference assetToLoad in _realtimePrefabsToPreload) {
            if (assetToLoad.RuntimeKeyIsValid() == false)
                continue;

            string key = assetToLoad.RuntimeKey as string;
            if (key == null)
                continue;

            _assets.Add(key, Addressables.LoadAssetAsync<GameObject>(key));
        }
    }

    private void OnDestroy() {
        // Unload all assets
        // Note: Make sure all of your realtime prefabs are destroyed before this script is destroyed otherwise it may unload assets that are in use by realtime prefabs in the scene.
        foreach (var assetHandle in _assets.Values) {
            Addressables.Release(assetHandle);
        }
    }

    public GameObject LoadRealtimePrefab(RealtimePrefabMetadata prefabMetadata) {
        string key = prefabMetadata.prefabName;
        AsyncOperationHandle<GameObject> asset = default;

        // Check if we have already preloaded this asset.
        if (_assets.TryGetValue(key, out asset) == false) {
            // Not found, log a warning that the asset will need to be loaded into memory.
            Debug.LogWarning($"CustomPrefabLoadDelegate: Asked to load a prefab that doesn't exist in our list of preloaded assets. Will load synchronously, but this may be slow if the asset isn't already loaded.");

            // Start loading the asset
            asset = Addressables.LoadAssetAsync<GameObject>(key);

            // Store the load operation for future calls
            _assets.Add(key, asset);
        }

        // Wait for the asset to load (anything preloaded will return instantly)
        return asset.WaitForCompletion();
    }
}
```

Throw this in a file called **CustomRealtimePrefabLoadDelegate.cs** and then add the component to the same game object as your **Realtime** component.

To test this out, let's create a quick test component that instantiates an addressables prefab. Instantiation works the same was as before, except we pass the asset key as the name of the prefab:

```csharp
using UnityEngine;
using UnityEngine.AddressableAssets;
using Normal.Realtime;

public class AddressablesTest : MonoBehaviour {
    [SerializeField] private Realtime       _realtime;
    [SerializeField] private AssetReference _testAsset;

    private void Awake() {
        _realtime.didConnectToRoom += DidConnectToRoom;
    }

    private void DidConnectToRoom(Realtime realtime) {
        // Get the RuntimeKey as a string and instantiate
        string assetKey = _testAsset.RuntimeKey as string;

        // Instantiate the object
        GameObject gameObject = Realtime.Instantiate(assetKey, Realtime.InstantiateOptions.defaults);
    }
}
```

Throw this script on an empty game object in the scene and wire up the realtime and test asset references. Make sure to add your test prefab to the list of realtime prefabs for our custom load delegate to preload. Once that's configured, enter play mode to test it out:

![](./using-addressables/addressables-test.mp4)

As soon as Realtime connects to the room server, our test script will `Realtime.Instantiate` our test asset, and we'll see it show up in the scene.

Download the complete <a :href="$withBase('/downloads/Normcore%20Addressables%20Recipe.zip')">Normcore Addressables Recipe</a> project and try it out for yourself.
