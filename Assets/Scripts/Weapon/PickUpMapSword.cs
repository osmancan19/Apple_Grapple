using UnityEngine;

public class PickUpMapSword : MonoBehaviour
{
    public GameObject player;
    private bool pickedUp;
    public RandomMapSwordGenerator mapSwordGenerator;
    private Vector3Int tilePosition;

    void Start()
    {
       pickedUp = false;

        // Sword'un tilemap pozisyonunu belirle
        tilePosition = mapSwordGenerator.tilemap.WorldToCell(transform.position); 
    }

    void Update()
    {
        if (pickedUp && player != null) 
        {
            transform.position = Vector3.Lerp(transform.position, player.transform.position, 8 * Time.deltaTime);
        }  
    }

    private void OnTriggerEnter2D(Collider2D other) 
    {
        if (!pickedUp)
        {
            if (other.CompareTag("Player") || other.CompareTag("Enemy"))
            {                  
                player = other.gameObject;
                pickedUp = true;  // pickedUp durumunu burada true yapıyoruz

                // Sword'u ekliyoruz ve mevcut sword'u parametre olarak gönderiyoruz
                SpinningSwordController spinningSwordController = player.GetComponent<SpinningSwordController>();
                if (spinningSwordController != null)
                {
                    spinningSwordController.AddSword();
                }

                // Sword toplandığında mapSwordGenerator'a haber ver
                if (mapSwordGenerator != null)
                {
                    mapSwordGenerator.RemoveOccupiedPosition(tilePosition);
                    mapSwordGenerator.RespawnSword();
                }

                // Sword nesnesini yok et
                Destroy(gameObject, 0.15f);
            }        
        }
    }
}
