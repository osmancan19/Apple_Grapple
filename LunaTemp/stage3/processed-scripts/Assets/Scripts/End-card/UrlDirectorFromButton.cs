using UnityEngine;

public class UrlDirectorFromButton : MonoBehaviour
{
    private string url = "https://loopgames.net/games";

    public void open()
    {
        //Application.OpenURL(url); 
        Luna.Unity.Playable.InstallFullGame(); 
    }
}
