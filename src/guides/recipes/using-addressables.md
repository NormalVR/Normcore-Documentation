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

And we can create a simple version that uses the Addressables API like so:

```csharp
public class CustomPrefabLoadDelegate : MonoBehaviour, IRealtimePrefabLoadDelegate, IRealtimePrefabInstantiateDelegate {
    public GameObject LoadRealtimePrefab(RealtimePrefabMetadata prefabMetadata) {
        // Load the asset via Addressables
        var loadOperation = Addressables.LoadAssetAsync<GameObject>(prefabMetadata.prefabName);

        return loadOperation.WaitForCompletion();
    }

    public GameObject InstantiateRealtimePrefab(GameObject prefab) {
        return UnityEngine.Object.Instantiate(prefab);
    }

    public void DestroyRealtimePrefab(GameObject prefabInstance) {
        UnityEngine.Object.Destroy(prefabInstance);
    }
}
```

While this works, it has a few problems. Namely that it's going to be just as slow as `Resources.Load<GameObject>()` and it will never correctly unload the addressables asset. Instead, what we want to do is preload any addressables we plan to use with Normcore and unload them when the manager is destroyed:

```csharp
public class CustomPrefabLoadDelegate : MonoBehaviour, IRealtimePrefabLoadDelegate, IRealtimePrefabInstantiateDelegate {
    private struct Asset {
        public readonly AsyncOperationHandle<GameObject> loadOperation;
        public          int referenceCount;

        public Asset(string key) {
            this.loadOperation = Addressables.LoadAssetAsync<GameObject>(key);
        }

        public GameObject GetGameObject() {
            return loadOperation.WaitForCompletion();
        }
    }
    private Dictionary<string, Asset> _assets;

    private void Awake() {
        _assets = new Dictionary<string, Asset>();
    }

    private IEnumerator Start() {
        // TODO: Convert this to addressable asset references
        string[] keysToLoad = ["test1", "test2"];

        for (string key in keysToLoad) {
            _assets.Add(key, new Asset(key));
        }
    }

    private void OnDestroy() {
        // Unload all assets, verify that their retain count is zero.
        // TODO: Implement this
    }

    public GameObject LoadRealtimePrefab(RealtimePrefabMetadata prefabMetadata) {
        string key   = prefabMetadata.prefabName;
        Asset  asset = default;

        if (!_assets.TryGetValue(key, out asset)) {
            Debug.LogWarning($"CustomPrefabLoadDelegate: Realtime asked to load prefab that doesn't exist in our list of assets. Will load synchronously. Make sure to add this asset to the list of prefabs to preload.");

            // Create a fresh asset
            asset = new Asset(key);
            _assets.Add(key, asset);
        }

        // Wait for the asset to load (anything preloaded will return instantly)
        return asset.GetGameObject();
    }

    public GameObject InstantiateRealtimePrefab(GameObject prefab) {
        return UnityEngine.Object.Instantiate(prefab);
    }

    public void DestroyRealtimePrefab(GameObject prefabInstance) {
        UnityEngine.Object.Destroy(prefabInstance);
    }
}
```
