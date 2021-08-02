---
layout: docs
title: Using Addressables
---
# Recipe: Using Addressables

By default, Normcore loads all realtime prefabs using `Resources.Load<GameObject>()`. For larger projects, this can cause performance issues when loading prefabs from disk. It can also be a pain run a large project with multiple Resources folders.

Normcore includes two interfaces that can be used to hook the prefab loading and instantiation pipeline: [**IRealtimePrefabLoadDelegate**](../../reference/classes/Normal.Realtime.IRealtimePrefabLoadDelegate) and [**IRealtimePrefabInstantiateDelegate**](../../reference/classes/Normal.Realtime.IRealtimePrefabInstantiateDelegate). In order to implement Addressables support, we only need to hook prefab loading.

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

And we can redirect prefab loading calls by creating our own **IRealtimePrefabLoadDelegate**:

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

While this works, it has a few problems. Namely that it's going to be just as slow as `Resources.Load<GameObject>()` and it will never correctly unload the addressables asset. Instead, what we want to do is preload any addressables we plan to use with Normcore and unload them when the manager is destroyed:

```csharp
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;
using Normal.Realtime;

public class CustomPrefabLoadDelegate : MonoBehaviour, IRealtimePrefabLoadDelegate {
    [SerializeField]
    private List<AssetReference> _realtimePrefabsToLoad = new List<AssetReference>();
    private Dictionary<string, AsyncOperationHandle<GameObject>> _assets;

    private void Start() {
        // Preload all assets
        _assets = new Dictionary<string, AsyncOperationHandle<GameObject>>();
        foreach (AssetReference assetToLoad in _realtimePrefabsToLoad) {
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

This version includes a list of AddressableAssets that are preloaded when the scene is loaded in order to make prefab instantiation as fast as possible. If a prefab isn't preloaded, it will be loaded synchronously similarly to how the default `Resources.Load<GameObject>()` implementation works.

Add the **CustomRealtimePrefabLoadDelegate** component to the same game object as your **Realtime** component and let's test it out by creating a script to instantiate an addressable asset:

```csharp
using UnityEngine;
using UnityEngine.AddressableAssets;
using Normal.Realtime;

public class AddressablesTest : MonoBehaviour {
    [SerializeField] private AssetReference _testAsset;

    [SerializeField] private Realtime _realtime;

    private void Awake() {
        _realtime.didConnectToRoom += DidConnectToRoom;
    }

    private void DidConnectToRoom(Realtime realtime) {
        // Get the RuntimeKey as a string
        string assetKey = _testAsset.RuntimeKey as string;

        // Instantiate the object
        GameObject gameObject = Realtime.Instantiate(assetKey, Realtime.InstantiateOptions.defaults);

        // Done!
    }
}
```

Throw this on an empty game object in your scene and wire up the asset and realtime references and hit Play!

It everything works properly, you should see your addressables asset loaded in the scene :)
