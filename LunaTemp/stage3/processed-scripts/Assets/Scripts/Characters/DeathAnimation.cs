using System.Collections;
using UnityEngine;

public class DeathAnimation : MonoBehaviour
{
    private Rigidbody2D rb;
    private Collider2D characterCollider;
    private bool isDying = false;
    public float rotationSpeed = 1080f; // 3 tur
    public float shrinkDuration = 0.8f;  // Küçülme süresi

    void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
        characterCollider = GetComponent<Collider2D>();
    }

    public void PlayDeathAnimation()
    {
        if (!isDying)
        {
            isDying = true;
            if (rb != null) rb.simulated = false; // Rigidbody'i devre dışı bırak
            if (characterCollider != null) characterCollider.enabled = false; // Collider'ı devre dışı bırak
            StartCoroutine(AnimateDeath());
        }
    }

    private IEnumerator AnimateDeath()
    {
        float elapsedTime = 0f;
        Vector3 initialScale = transform.localScale;

        while (elapsedTime < shrinkDuration)
        {
            elapsedTime += Time.deltaTime;
            float t = elapsedTime / shrinkDuration;

            // Döndürme ve küçültme işlemini uygula
            transform.Rotate(0, 0, rotationSpeed * Time.deltaTime);
            transform.localScale = Vector3.Lerp(initialScale, Vector3.zero, t);

            yield return null;
        }

        // Küçültme tamamlandığında nesneyi yok et
        Destroy(gameObject);
    }
}
