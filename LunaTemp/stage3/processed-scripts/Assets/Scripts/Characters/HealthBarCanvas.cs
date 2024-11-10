using UnityEngine;

public class HealthBarCanvas : MonoBehaviour
{
    private void Start()
    {
        gameObject.GetComponent<Canvas>().worldCamera = Camera.main;
    }
}
