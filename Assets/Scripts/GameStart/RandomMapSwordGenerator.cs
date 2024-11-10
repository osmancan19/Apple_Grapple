using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;

public class RandomMapSwordGenerator : MonoBehaviour
{
    public Tilemap tilemap;
    public GameObject mapSwordPrefab;
    private int initialSwordCount; // Başlangıçtaki sword sayısı
    private float minRespawnTime; // Minimum respawn süresi
    private float maxRespawnTime; // Maksimum respawn süresi
    private List<Vector3Int> validTilePositions; // Geçerli tile konumları listesi
    private HashSet<Vector3Int> occupiedPositions = new HashSet<Vector3Int>(); // Zaten Sword olan pozisyonlar
    [SerializeField] private RandomTileGenerator randomTileGenerator;

    void Start()
    {
        initialSwordCount = 40;
        minRespawnTime = 0f;
        maxRespawnTime = 5f;

        StartCoroutine(InitializeSwordSpawn());
    }
    IEnumerator InitializeSwordSpawn()
    {
        while(randomTileGenerator.getValidTilePositions().Count == 0)
        {
            yield return null;
        }
        // RandomTileGenerator'dan geçerli tile konumlarını al
        validTilePositions = randomTileGenerator.getValidTilePositions();

        // Sword'larını yerleştir
        for (int i = 0; i < initialSwordCount; i++)
        {
            SpawnSword();
        }
    }

    void SpawnSword()
    {
        Vector3Int randomTilePosition;
        do
        {
            // Rastgele bir geçerli konum seç
            randomTilePosition = validTilePositions[Random.Range(0, validTilePositions.Count)];
        } while (occupiedPositions.Contains(randomTilePosition)); // Pozisyon doluysa yeni bir pozisyon seç

        // Sword'u bu pozisyonda oluştur
        Vector3 worldPosition = tilemap.CellToWorld(randomTilePosition) + new Vector3(0.5f, 0.5f, -5);
        GameObject sword = Instantiate(mapSwordPrefab, worldPosition, Quaternion.identity);
        sword.name = $"MapSword";
        SpriteRenderer[] spriteRenderers = sword.GetComponentsInChildren<SpriteRenderer>();
        spriteRenderers[2].color = new Color(1f, 1f, 1f, 0.5f);//decreasing opacity of the shadow
        
        // Sword script'ine mapSwordGenerator referansını ata
        PickUpMapSword swordScript = sword.GetComponent<PickUpMapSword>();
        if (swordScript != null)
        {
            swordScript.mapSwordGenerator = this;
        }

        // Bu pozisyonu dolu olarak işaretle
        occupiedPositions.Add(randomTilePosition);
    }

    public void RespawnSword()
    {
        // 0-5 saniye arasında rastgele bir süre bekleyip sword'u yeniden oluştur
        float respawnTime = Random.Range(minRespawnTime, maxRespawnTime);
        StartCoroutine(RespawnSwordCoroutine(respawnTime));
    }

    IEnumerator RespawnSwordCoroutine(float respawnTime)
    {
        yield return new WaitForSeconds(respawnTime);
        SpawnSword();
    }

    public void RemoveOccupiedPosition(Vector3Int position)
    {
        occupiedPositions.Remove(position); // Pozisyonu boşalt
    }
}
