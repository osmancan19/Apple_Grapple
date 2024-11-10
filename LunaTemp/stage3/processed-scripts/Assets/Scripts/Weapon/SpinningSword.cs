using UnityEngine;
using System.Collections;

public class SpinningSword : MonoBehaviour
{
    public Transform characterTransform;
    public float orbitSpeed;
    public float orbitRadius;
    public float currentAngle;
    private bool isFlyingAway;
    private Vector2 flyDirection;
    private float flySpeed;
    private AudioSource clashSwordAudioSource;
    private BoxCollider2D swordCollider;
    public float knockbackForce;
    public int swordDamage;

    void Start()
    {
        knockbackForce = 3f;
        swordDamage = 1;
        isFlyingAway = false; 
        flySpeed = 1.5f;
        clashSwordAudioSource = gameObject.AddComponent<AudioSource>();
        clashSwordAudioSource.clip = Resources.Load<AudioClip>("Sounds/ClashSwordSound");
        clashSwordAudioSource.playOnAwake = false;
        clashSwordAudioSource.enabled = true;
        swordCollider = GetComponent<BoxCollider2D>();
    }

    void Update()
    {
        if (!isFlyingAway)
        {
            currentAngle -= orbitSpeed * Time.deltaTime;
            UpdateOrbitPosition();
        }
        else
        {
            transform.position += (Vector3)flyDirection * flySpeed * Time.deltaTime;
            transform.Rotate(0, 0, 1000 * Time.deltaTime);
        }
    }

    public void UpdateOrbitPosition()
    {
        float x = Mathf.Cos(currentAngle) * orbitRadius;
        float y = Mathf.Sin(currentAngle) * orbitRadius;
        transform.position = characterTransform.position + new Vector3(x, y, 0);

        Vector3 directionToCharacter = characterTransform.position - transform.position;
        float angle = Mathf.Atan2(directionToCharacter.y, directionToCharacter.x) * Mathf.Rad2Deg;
        transform.rotation = Quaternion.Euler(new Vector3(0, 0, angle + 180));
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Sword"))
        {
            SpinningSword otherSword = other.GetComponent<SpinningSword>();

            if (otherSword != null && otherSword.characterTransform == characterTransform)
            {
                return;
            }

            if (clashSwordAudioSource != null && clashSwordAudioSource.enabled)
            {
                clashSwordAudioSource.Play();
            }

            float randomAngle = Random.Range(0, 2 * Mathf.PI);
            flyDirection = new Vector2(Mathf.Cos(randomAngle), Mathf.Sin(randomAngle)) * orbitSpeed * 3;
            isFlyingAway = true;
            swordCollider.enabled = false;
            Destroy(gameObject, 5f);
        }
        else if ((other.CompareTag("Player") || other.CompareTag("Enemy")) && other.transform != characterTransform)
        {
            BaseCharacter otherCharacter = other.GetComponent<BaseCharacter>();
            if (otherCharacter != null)
            {
                otherCharacter.TakeDamage(characterTransform.GetComponent<BaseCharacter>());

                // Geri itme kuvvetini yarım saniyeliğine uygula
                Vector2 knockbackDirection = (other.transform.position - transform.position).normalized;
                StartCoroutine(ApplyTemporaryKnockback(otherCharacter, knockbackDirection, knockbackForce));

                AudioSource.PlayClipAtPoint(Resources.Load<AudioClip>("Sounds/CharacterDamageSound"), transform.position);
            }
        }
    }

    // Kuvvetin kısa süreli uygulanması için Coroutine yapıyoruz
    private IEnumerator ApplyTemporaryKnockback(BaseCharacter character, [Bridge.Ref] Vector2 direction, float force)
    {
        character.ApplyKnockback(direction, force); // Kuvveti uygula
        yield return new WaitForSeconds(0.5f);      // Yarım saniye bekle
        character.ApplyKnockback(Vector2.zero, 0);  // Kuvveti sıfırla
    }
}
