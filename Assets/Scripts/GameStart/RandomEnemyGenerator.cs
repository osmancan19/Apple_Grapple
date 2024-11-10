using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro; 

public class RandomEnemyGenerator : MonoBehaviour
{
    public GameObject enemyPrefab;       // Enemy prefab'i
    private int enemyCount = 3;           // Kaç tane düşman oluşturulacağı
    private List<Vector3Int> validTilePositions; // Geçerli tile konumları listesi
    [SerializeField] private RandomTileGenerator randomTileGenerator;

    void Start()
    {
        StartCoroutine(WaitForValidTilesAndSpawnEnemies());
    }

    IEnumerator WaitForValidTilesAndSpawnEnemies()
    {
        // validTilePositions listesi dolana kadar bekleyin
        while (validTilePositions == null || validTilePositions.Count == 0)
        {
            validTilePositions = randomTileGenerator.getValidTilePositions();
            yield return null; // Bir sonraki frame'i bekleyin
        }

        // Liste dolduktan sonra düşmanları spawnla
        SpawnEnemies();
    }

    void SpawnEnemies()
    {
        for (int i = 0; i < enemyCount; i++)
        {
            Vector3 spawnPosition = GetRandomValidPosition();
            GameObject enemy = Instantiate(enemyPrefab, spawnPosition, Quaternion.identity);
            enemy.name = $"Enemy_{i + 1}";
            AdjustEnemySprites(enemy, i);
        }
    }

    Vector3 GetRandomValidPosition()
    {
        int randomIndex = Random.Range(0, validTilePositions.Count);
        return validTilePositions[randomIndex];
    }

    void AdjustEnemySprites(GameObject enemy, int enemyNo)
    {
        SpriteRenderer[] spriteRenderers = enemy.GetComponentsInChildren<SpriteRenderer>();

        //body-arm-leg-shadow ayarlıyoruz
        string spriteBody = $"Textures/character/apple-gun-character-enemy-{enemyNo + 1}-body";
        spriteRenderers[0].sprite = Resources.Load<Sprite>(spriteBody);

        string spriteLeftLeg = $"Textures/character/apple-gun-character-enemy-{enemyNo + 1}-left-leg";
        spriteRenderers[1].sprite = Resources.Load<Sprite>(spriteLeftLeg);

        string spriteRightLeg = $"Textures/character/apple-gun-character-enemy-{enemyNo + 1}-right-leg";
        spriteRenderers[2].sprite = Resources.Load<Sprite>(spriteRightLeg);

        string spriteShadow = $"Textures/character/apple-gun-shadow";
        spriteRenderers[3].sprite = Resources.Load<Sprite>(spriteShadow);
        spriteRenderers[3].color = new Color(1f, 1f, 1f, 0.5f);

        //Rasgele bir bayrak seçiyoruz
        string spriteFlagChina = $"Textures/flags/cn";
        string spriteFlagJp = $"Textures/flags/jp";
        string spriteFlagTr = $"Textures/flags/tr";
        string spriteFlagUs = $"Textures/flags/us";
        int randomFlagIndex = Random.Range(0, 4);
        switch (randomFlagIndex)
        {
            case 0:
                spriteRenderers[4].sprite = Resources.Load<Sprite>(spriteFlagChina);
                break;
            case 1:
                spriteRenderers[4].sprite = Resources.Load<Sprite>(spriteFlagJp);
                break;
            case 2:
                spriteRenderers[4].sprite = Resources.Load<Sprite>(spriteFlagTr);
                break;
            case 3:
                spriteRenderers[4].sprite = Resources.Load<Sprite>(spriteFlagUs);
                break;
            default:
                spriteRenderers[4].sprite = Resources.Load<Sprite>(spriteFlagTr);
                break;
        }

        //ismini ayarlıyoruz
        string enemyName = $"unnamed_warrior{enemyNo}";
        TextMeshPro textComponent = enemy.GetComponentInChildren<TextMeshPro>();
        if (textComponent != null)
        {
            textComponent.text = enemyName;
        }
    }
}
