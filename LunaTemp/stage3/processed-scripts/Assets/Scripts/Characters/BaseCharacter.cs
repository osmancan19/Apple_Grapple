using UnityEngine;

public enum CharacterType
{
    Player,
    Enemy
}
public abstract class BaseCharacter : MonoBehaviour
{
    protected BaseCharacter instance;
    public CharacterType characterType;
    private float characterPosX;
    private float characterPosY;
    private int health;
    private int swordCount;
    protected Rigidbody2D rb; // Rigidbody referansı eklendi
    private SpinningSwordController spinningSwordController;
    public HealthBar healthBar;
    private AudioSource audioSource;
    private AudioClip characterDamageSound;
    private AudioClip characterDieSound;
    protected virtual void Awake()
    {     
        if(instance != null && instance != this)
        {
            Destroy(gameObject);
            return;
        }
        instance = this;
        audioSource = gameObject.AddComponent<AudioSource>();
        audioSource.playOnAwake = false;
        audioSource.enabled = true;

        characterDamageSound = Resources.Load<AudioClip>("Sounds/CharacterDamageSound");
        characterDieSound = Resources.Load<AudioClip>("Sounds/CharacterDieSound");

        health = 3; 
        healthBar.setHealth(health);
        swordCount = 1;
        rb = GetComponent<Rigidbody2D>(); // Rigidbody'yi alıyoruz
        spinningSwordController = GetComponent<SpinningSwordController>(); 
    }
    protected virtual void Update()
    {   
       characterPosX = transform.position.x;
       characterPosY = transform.position.y;
    }

    public virtual void TakeDamage(BaseCharacter attacker)
    {
        health--;
        if (health == 0)
        {
            Die(attacker);
            healthBar.setHealth(0);
        }
        else
        {
            healthBar.setHealth(health);
            if (audioSource != null && characterDamageSound != null)
            {
                audioSource.PlayOneShot(characterDamageSound);
            }
        }
    }

protected virtual void Die(BaseCharacter attacker)
{
    if (spinningSwordController != null)
    {
        spinningSwordController.TransferAllSwords(attacker.GetComponent<SpinningSwordController>());
    }
    
    // Ses çal
    if (audioSource != null && characterDieSound != null)
    {
        audioSource.PlayOneShot(characterDieSound);
    }
    // Collider'i devre dışı bırakıp animasyon sırasında çarpışmaları önlüyoruz
    Collider2D collider = GetComponent<Collider2D>();
    if (collider != null)
    {
        collider.enabled = false;
    }

    // Ölüm animasyonunu başlat
    DeathAnimation deathAnimation = GetComponent<DeathAnimation>();
    if (deathAnimation != null)
    {
        deathAnimation.PlayDeathAnimation();
    }
    else
    {
        Destroy(gameObject); // Eğer animasyon yoksa doğrudan yok et
    }
}

    protected void PickUpSword()
    {
        swordCount++;
    }

    protected void ClashSword()
    {
        swordCount--;
    }
    public int GetSwordCount()
    {
        return swordCount;
    }
    public CharacterType GetCharacterType()
    {
        return characterType;
    }

    public abstract void OnCollisionEnter2D(Collision2D other);

    public void ApplyKnockback([Bridge.Ref] Vector2 direction, float force)
    {
        if (rb != null)
        {
            rb.velocity = Vector2.zero; // Herhangi bir mevcut hareketi sıfırlayın
            rb.AddForce(direction * force, ForceMode2D.Impulse);
        }
    }
}