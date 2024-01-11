---
title: StaticFunctions
layout: Reference
category: API Reference
class_name: StaticFunctions
class_members:
- name: Static Methods
  members:
  - name: SetLayerRecursively
    definition: void SetLayerRecursively(GameObject gameObject, int layer)
  - name: CalculateAverageDbForAudioBuffer
    definition: float CalculateAverageDbForAudioBuffer(float[] audioBuffer, int offset = 0)
  - name: LinearToDb
    definition: float LinearToDb(float linear)
  - name: SwingTwistDecomposition
    definition: void SwingTwistDecomposition(Quaternion rotation, Vector3 direction, Quaternion& swing, Quaternion& twist)
  - name: LerpClamped
    definition: double LerpClamped(double a, double b, double t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
