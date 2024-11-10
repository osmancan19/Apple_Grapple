using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    public Transform target;
    public Vector3 offset; // Kameranın başlangıç konumuna göre offset ayarı

    void LateUpdate()
    {
        if (target != null)
        {
            // Kamerayı Player konumuna sabitle, dönmesini engelle
            transform.position = target.position + offset;
            transform.rotation = Quaternion.Euler(0, 0, 0);
        }
    }
}
