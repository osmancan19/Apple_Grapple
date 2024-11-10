using UnityEngine;

public class Enemy : BaseCharacter
{
    protected override void Awake()
    {
        base.Awake();        
        characterType = CharacterType.Enemy;
        gameObject.tag = "Enemy";
    }
    protected override void Die(BaseCharacter attacker)
    {
        base.Die(attacker);

        // Enemy öldüğünde EnemyManager'a bildir
        EnemyManager.instance.EnemyKilled();

        Destroy(gameObject);
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
            if (otherCharacter != null && otherCharacter.characterType == CharacterType.Player)
            {
                TakeDamage(otherCharacter);
            }
        }
    }
}
