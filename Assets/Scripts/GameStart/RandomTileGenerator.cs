using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;

public class RandomTileGenerator : MonoBehaviour
{
    public Tilemap tilemap;
    public TileBase bigGrassTile;
    public TileBase smallGrassTile;
    public TileBase baseGroundTile;
    public TileBase stoneTile;
    private int mapWidth = 27;
    private int mapHeight = 21;
    private float bigGrassProbability = 10; 
    private float smallGrassProbability = 20; 
    private float stoneProbability = 30; 
    public List<Vector3Int> validTilePositions = new List<Vector3Int>(); // Geçerli tile konumları listesi


    void Start()
    {
        PlaceRandomTiles();
    }

    void PlaceRandomTiles()
    {
        int startX = Mathf.FloorToInt(tilemap.cellBounds.xMin + 7) + 1; // En soldan 6 birim sağa kaydırıyoruz
        int startY = Mathf.FloorToInt(tilemap.cellBounds.yMin + 8) + 1; // En üstten 6 birim aşağı kaydırıyoruz

        for (int x = startX; x < startX + mapWidth; x++)
        {
            for (int y = startY; y < startY +mapHeight; y++)
            {
                float randomValue = Random.Range(0, 101);
                Vector3Int tilePosition = new Vector3Int(x, y, 0);
                validTilePositions.Add(tilePosition);

                // Büyük çim olasılığı %10
                if (randomValue < bigGrassProbability)
                {
                    tilemap.SetTile(tilePosition, bigGrassTile);
                }
                // Küçük çim olasılığı %10
                else if(bigGrassProbability <= randomValue && randomValue < smallGrassProbability)
                {
                    tilemap.SetTile(tilePosition, smallGrassTile);
                }
                // Taş döşeme olasılığı %10
                else if(smallGrassProbability <= randomValue && randomValue < stoneProbability)
                {
                    tilemap.SetTile(tilePosition, stoneTile);
                }
                // Normal döşeme olasılığı %70
                else
                {
                    tilemap.SetTile(tilePosition, baseGroundTile);
                }

            }
        }
    }

    public List<Vector3Int> getValidTilePositions()
    {
        return validTilePositions;
    }
}
