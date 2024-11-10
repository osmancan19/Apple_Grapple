using System.Collections.Generic;
using UnityEngine;

public class SpinningSwordController : MonoBehaviour
{
    public GameObject swordOrbitPrefab;
    private BaseCharacter character;
    private List<GameObject> activeSwords;
    private float orbitRadius;
    private float orbitSpeed;

    private void Start()
    {
        activeSwords = new List<GameObject>();
        orbitRadius = 1.5f;
        orbitSpeed = 5f;
        character = GetComponent<BaseCharacter>();
        if (character != null)
        {
            InitializeSwords(character.GetSwordCount());
        }
    }
    public bool HasSword()
    {
        return activeSwords.Count > 0;
    }
    private void InitializeSwords(int count)
    {
        for (int i = 0; i < count; i++)
        {
            AddSword();
        }
    }

    public void AddSword()
    {
        GameObject newSword = Instantiate(swordOrbitPrefab, transform.position, Quaternion.identity);
        if (newSword != null)
        {
            SpinningSword spinningSword = newSword.GetComponent<SpinningSword>();
            spinningSword.characterTransform = transform;
            spinningSword.orbitRadius = orbitRadius;
            spinningSword.orbitSpeed = orbitSpeed;
            activeSwords.Add(newSword);

            UpdateSwordPositions();
        }
    }

    public void RemoveSword(GameObject sword)
    {
        if (sword != null && activeSwords.Contains(sword))
        {
            activeSwords.Remove(sword);
            Destroy(sword);
            UpdateSwordPositions();
        }
    }

    public void DestroyAllSwords()
    {
        foreach (var sword in activeSwords)
        {
            if (sword != null)
            {
                Destroy(sword);
            }
        }
        activeSwords.Clear();
    }

    public void TransferAllSwords(SpinningSwordController targetController)
    {
        foreach (var sword in activeSwords)
        {
            if (sword != null)
            {
                // Sword'u yeni karaktere ekliyoruz
                SpinningSword spinningSword = sword.GetComponent<SpinningSword>();
                spinningSword.characterTransform = targetController.transform;
                targetController.AddSword();
            }
        }
        activeSwords.Clear();
    }

    private void UpdateSwordPositions()
    {
        float angleStep = 360f / activeSwords.Count;
        for (int i = 0; i < activeSwords.Count; i++)
        {
            if (activeSwords[i] != null)
            {
                float angle = angleStep * i * Mathf.Deg2Rad;
                SpinningSword spinningSword = activeSwords[i].GetComponent<SpinningSword>();
                if (spinningSword != null)
                {
                    spinningSword.currentAngle = angle;
                }
            }
        }
    }
}
