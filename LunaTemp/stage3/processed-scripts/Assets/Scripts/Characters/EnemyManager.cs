using UnityEngine;

public class EnemyManager : MonoBehaviour
{
    public static EnemyManager instance;
    private int enemiesKilled = 0;
    public int totalEnemiesToKill = 3; // Toplam öldürülmesi gereken düşman sayısı

    private void Awake()
    {
        if (instance != null && instance != this)
        {
            Destroy(gameObject);
        }
        else
        {
            instance = this;
        }
    }

    public void EnemyKilled()
    {
        enemiesKilled++;
        if (enemiesKilled >= totalEnemiesToKill)
        {
            LevelLoader levelLoader = FindObjectOfType<LevelLoader>();
            levelLoader.LoadNextLevel();
        }
    }
}
