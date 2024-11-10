using UnityEngine;

public class EnemyMovement : MonoBehaviour
{
    public float speed = 2f;
    private Transform player;
    private Transform closestSword;
    private Vector2 roamDirection;
    private float roamChangeInterval = 2f;
    private float roamTimer = 0f;
    private float swordCheckInterval = 0.5f;
    private float swordCheckTimer = 0f;
    private Animator animator;
    [SerializeField] private SpriteRenderer spriteRenderer;

    void Start()
    {
        player = FindObjectOfType<Player>().transform;
        spriteRenderer = GetComponentInChildren<SpriteRenderer>();

        animator = GetComponent<Animator>();

        // İlk rastgele yön ayarları
        SetRandomRoamDirection();
    }

    void Update()
    {
        swordCheckTimer += Time.deltaTime;

        // Belirli aralıklarla en yakın sword'u kontrol et
        if (swordCheckTimer >= swordCheckInterval)
        {
            closestSword = FindClosestMapSword();
            swordCheckTimer = 0f;
        }

        if (closestSword != null || player != null)
        {
            MoveTowardsTarget();
        }
        else
        {
            RoamAround();
        }
    }

    Transform FindClosestMapSword()
    {
        GameObject[] swords = GameObject.FindGameObjectsWithTag("MapSword");
        Transform closest = null;
        float closestDistance = Mathf.Infinity;

        foreach (GameObject sword in swords)
        {
            float distance = Vector2.Distance(transform.position, sword.transform.position);
            if (distance < closestDistance)
            {
                closest = sword.transform;
                closestDistance = distance;
            }
        }

        return closest;
    }

    void MoveTowardsTarget()
    {
        if (player != null)
        {
            // Enemy'nin kılıcı olup olmadığını kontrol edin
            bool hasSword = GetComponent<BaseCharacter>().GetSwordCount() > 0;

            // Player ve Sword mesafelerini hesapla
            float playerDistance = Vector2.Distance(transform.position, player.position);
            float swordDistance = closestSword != null ? Vector2.Distance(transform.position, closestSword.position) : Mathf.Infinity;

            // Eğer Enemy'nin kılıcı varsa ve Player daha yakınsa Player'a git
            // Eğer Enemy'nin kılıcı yoksa en yakın Sword'a git
            Transform target = hasSword ? (playerDistance <= swordDistance ? player : closestSword) : closestSword;

            if (target != null)
            {
                Vector3 direction = (target.position - transform.position).normalized;
                transform.position += direction * speed * Time.deltaTime;

                // Hareket yönüne göre animasyonu güncelle
                animator.SetFloat("Horizontal", direction.x);
                animator.SetFloat("Vertical", direction.y);

                // Sprite'ı sağa veya sola çevirmek
                spriteRenderer.flipX = direction.x < 0;
            }
        }
    }

    void RoamAround()
    {
        roamTimer += Time.deltaTime;
        if (roamTimer >= roamChangeInterval)
        {
            SetRandomRoamDirection();
            roamTimer = 0f;
        }

        transform.position += (Vector3)roamDirection * speed * Time.deltaTime;

        // Roam yönüne göre animasyonu güncelle
        animator.SetFloat("Horizontal", roamDirection.x);
        animator.SetFloat("Vertical", roamDirection.y);

        // Roam yönüne göre sprite'ı sağa veya sola çevirmek
        spriteRenderer.flipX = roamDirection.x < 0;
    }

    void SetRandomRoamDirection()
    {
        roamDirection = new Vector2(Random.Range(-1f, 1f), Random.Range(-1f, 1f)).normalized;
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Fence"))
        {
            Vector2 collisionNormal = collision.contacts[0].normal;
            roamDirection = Vector2.Reflect(roamDirection, collisionNormal).normalized;
        }
    }
}
