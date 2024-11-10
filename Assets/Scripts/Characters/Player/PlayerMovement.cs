using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    private float horizontalMovementSpeed;
    private float verticalMovementSpeed;
    [SerializeField]private Animator animator ;
    [SerializeField]private SpriteRenderer spriteRenderer;
    private float movementSpeed;
    void Start() 
    {
        movementSpeed = 0.025f;
        animator = GetComponent<Animator>();
        spriteRenderer = GetComponentInChildren<SpriteRenderer>();
    }
    void Update() 
    {
        // Yatay ve dikey hareket girdilerini al
        horizontalMovementSpeed = Input.GetAxis("Horizontal");
        verticalMovementSpeed = Input.GetAxis("Vertical");

        // Hareket vektörünü oluştur
        Vector3 movementVector = new Vector3(horizontalMovementSpeed, verticalMovementSpeed, 0);

        // Çapraz harekette hızı sabitlemek için normalize et
        if (movementVector.magnitude > 1)
        {
            movementVector = movementVector.normalized;
        }
        // Oyuncuyu hareket ettir
        transform.Translate(movementVector * movementSpeed);

        // Tuş basıldıysa varsa animasyonu başlatıyoruz
        if (horizontalMovementSpeed != 0 || verticalMovementSpeed != 0)
        {
            animator.SetBool("isRunning", true);

            // Karakterin sola veya sağa bakmasını ayarlıyoruz
            if (horizontalMovementSpeed < 0)
            {
                // Sola gidiyorsa
                spriteRenderer.flipX = true; 
            }
            else if (horizontalMovementSpeed > 0)
            {
                // Sağa gidiyorsa
                spriteRenderer.flipX = false; 
            }
        }
        else
        {
            //karakter durdu. Running bitti Standing animasyonu başladı
            animator.SetBool("isRunning", false);
        }
    }
    void OnApplicationQuit()
    {
        // Oyun kapandığında tüm animasyonları durdur
        if (animator != null)
        {
            animator.enabled = false;
        }
    }
}
