using UnityEngine;

public class Player : BaseCharacter
{
    protected override void Awake()
    {
        base.Awake();   
        characterType = CharacterType.Player;
        gameObject.tag = "Player";
        SpriteRenderer[] spriteRenderers = GetComponentsInChildren<SpriteRenderer>();
        spriteRenderers[3].color = new Color(1f, 1f, 1f, 0.5f);//decreasing opacity of the shadow
    }
    protected override void Die(BaseCharacter attacker)
    {
        base.Die(attacker);
        LevelLoader levelLoader = FindObjectOfType<LevelLoader>();
        levelLoader.LoadNextLevel();
    }
    public override void OnCollisionEnter2D (Collision2D other)
    {
        if (other.gameObject.CompareTag("MapSword"))
        {
            PickUpSword();
        }
        else
        {
            
            BaseCharacter otherCharacter = other.gameObject.GetComponent<BaseCharacter>();
            if (otherCharacter != null && otherCharacter.characterType == CharacterType.Enemy)
            {
                TakeDamage(otherCharacter);
            }
        }
    }
}
