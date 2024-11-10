if ( TRACE ) { TRACE( JSON.parse( '["BaseCharacter#Awake","BaseCharacter#Update","BaseCharacter#TakeDamage","BaseCharacter#Die","BaseCharacter#PickUpSword","BaseCharacter#ClashSword","BaseCharacter#GetSwordCount","BaseCharacter#GetCharacterType","BaseCharacter#ApplyKnockback","CameraFollow#init","CameraFollow#LateUpdate","DeathAnimation#init","DeathAnimation#Awake","DeathAnimation#PlayDeathAnimation","DeathAnimation#AnimateDeath","EnemyManager#init","EnemyManager#Awake","EnemyManager#EnemyKilled","EnemyMovement#init","EnemyMovement#Start","EnemyMovement#Update","EnemyMovement#FindClosestMapSword","EnemyMovement#MoveTowardsTarget","EnemyMovement#RoamAround","EnemyMovement#SetRandomRoamDirection","EnemyMovement#OnCollisionEnter2D","HealthBar#setHealth","HealthBarCanvas#Start","LevelLoader#init","LevelLoader#LoadNextLevel","LevelLoader#LoadLevel","PickUpMapSword#init","PickUpMapSword#Start","PickUpMapSword#Update","PickUpMapSword#OnTriggerEnter2D","PlayerMovement#Start","PlayerMovement#Update","PlayerMovement#OnApplicationQuit","RandomEnemyGenerator#init","RandomEnemyGenerator#Start","RandomEnemyGenerator#WaitForValidTilesAndSpawnEnemies","RandomEnemyGenerator#SpawnEnemies","RandomEnemyGenerator#GetRandomValidPosition","RandomEnemyGenerator#AdjustEnemySprites","RandomMapSwordGenerator#init","RandomMapSwordGenerator#Start","RandomMapSwordGenerator#InitializeSwordSpawn","RandomMapSwordGenerator#SpawnSword","RandomMapSwordGenerator#RespawnSword","RandomMapSwordGenerator#RespawnSwordCoroutine","RandomMapSwordGenerator#RemoveOccupiedPosition","RandomTileGenerator#init","RandomTileGenerator#Start","RandomTileGenerator#PlaceRandomTiles","RandomTileGenerator#getValidTilePositions","SpinningSword#init","SpinningSword#Start","SpinningSword#Update","SpinningSword#UpdateOrbitPosition","SpinningSword#OnTriggerEnter2D","SpinningSword#ApplyTemporaryKnockback","SpinningSwordController#Start","SpinningSwordController#HasSword","SpinningSwordController#InitializeSwords","SpinningSwordController#AddSword","SpinningSwordController#RemoveSword","SpinningSwordController#DestroyAllSwords","SpinningSwordController#TransferAllSwords","SpinningSwordController#UpdateSwordPositions","UrlDirectorFromButton#init","UrlDirectorFromButton#open","Enemy#Awake","Enemy#Die","Enemy#OnCollisionEnter2D","Player#Awake","Player#Die","Player#OnCollisionEnter2D"]' ) ); }
/**
 * @version 1.0.9071.27686
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BaseCharacter start.*/
    Bridge.define("BaseCharacter", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            instance: null,
            characterType: 0,
            characterPosX: 0,
            characterPosY: 0,
            health: 0,
            swordCount: 0,
            rb: null,
            spinningSwordController: null,
            healthBar: null,
            audioSource: null,
            characterDamageSound: null,
            characterDieSound: null
        },
        methods: {
            /*BaseCharacter.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BaseCharacter#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.instance, null) && UnityEngine.MonoBehaviour.op_Inequality(this.instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                this.instance = this;
                this.audioSource = this.gameObject.AddComponent(UnityEngine.AudioSource);
                this.audioSource.playOnAwake = false;
                this.audioSource.enabled = true;

                this.characterDamageSound = UnityEngine.Resources.Load(UnityEngine.AudioClip, "Sounds/CharacterDamageSound");
                this.characterDieSound = UnityEngine.Resources.Load(UnityEngine.AudioClip, "Sounds/CharacterDieSound");

                this.health = 3;
                this.healthBar.setHealth(this.health);
                this.swordCount = 1;
                this.rb = this.GetComponent(UnityEngine.Rigidbody2D); // Rigidbody'yi alıyoruz
                this.spinningSwordController = this.GetComponent(SpinningSwordController);
            },
            /*BaseCharacter.Awake end.*/

            /*BaseCharacter.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BaseCharacter#Update", this ); }

                this.characterPosX = this.transform.position.x;
                this.characterPosY = this.transform.position.y;
            },
            /*BaseCharacter.Update end.*/

            /*BaseCharacter.TakeDamage start.*/
            TakeDamage: function (attacker) {
if ( TRACE ) { TRACE( "BaseCharacter#TakeDamage", this ); }

                this.health = (this.health - 1) | 0;
                if (this.health === 0) {
                    this.Die(attacker);
                    this.healthBar.setHealth(0);
                } else {
                    this.healthBar.setHealth(this.health);
                    if (UnityEngine.Component.op_Inequality(this.audioSource, null) && this.characterDamageSound != null) {
                        this.audioSource.PlayOneShot(this.characterDamageSound);
                    }
                }
            },
            /*BaseCharacter.TakeDamage end.*/

            /*BaseCharacter.Die start.*/
            Die: function (attacker) {
if ( TRACE ) { TRACE( "BaseCharacter#Die", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.spinningSwordController, null)) {
                    this.spinningSwordController.TransferAllSwords(attacker.GetComponent(SpinningSwordController));
                }

                // Ses çal
                if (UnityEngine.Component.op_Inequality(this.audioSource, null) && this.characterDieSound != null) {
                    this.audioSource.PlayOneShot(this.characterDieSound);
                }
                // Collider'i devre dışı bırakıp animasyon sırasında çarpışmaları önlüyoruz
                var collider = this.GetComponent(UnityEngine.Collider2D);
                if (UnityEngine.Component.op_Inequality(collider, null)) {
                    collider.enabled = false;
                }

                // Ölüm animasyonunu başlat
                var deathAnimation = this.GetComponent(DeathAnimation);
                if (UnityEngine.MonoBehaviour.op_Inequality(deathAnimation, null)) {
                    deathAnimation.PlayDeathAnimation();
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject); // Eğer animasyon yoksa doğrudan yok et
                }
            },
            /*BaseCharacter.Die end.*/

            /*BaseCharacter.PickUpSword start.*/
            PickUpSword: function () {
if ( TRACE ) { TRACE( "BaseCharacter#PickUpSword", this ); }

                this.swordCount = (this.swordCount + 1) | 0;
            },
            /*BaseCharacter.PickUpSword end.*/

            /*BaseCharacter.ClashSword start.*/
            ClashSword: function () {
if ( TRACE ) { TRACE( "BaseCharacter#ClashSword", this ); }

                this.swordCount = (this.swordCount - 1) | 0;
            },
            /*BaseCharacter.ClashSword end.*/

            /*BaseCharacter.GetSwordCount start.*/
            GetSwordCount: function () {
if ( TRACE ) { TRACE( "BaseCharacter#GetSwordCount", this ); }

                return this.swordCount;
            },
            /*BaseCharacter.GetSwordCount end.*/

            /*BaseCharacter.GetCharacterType start.*/
            GetCharacterType: function () {
if ( TRACE ) { TRACE( "BaseCharacter#GetCharacterType", this ); }

                return this.characterType;
            },
            /*BaseCharacter.GetCharacterType end.*/

            /*BaseCharacter.ApplyKnockback start.*/
            ApplyKnockback: function (direction, force) {
if ( TRACE ) { TRACE( "BaseCharacter#ApplyKnockback", this ); }

                if (UnityEngine.Component.op_Inequality(this.rb, null)) {
                    this.rb.velocity = pc.Vec2.ZERO.clone(); // Herhangi bir mevcut hareketi sıfırlayın
                    this.rb.AddForce(direction.$clone().scale( force ), UnityEngine.ForceMode2D["Impulse"]);
                }
            },
            /*BaseCharacter.ApplyKnockback end.*/


        }
    });
    /*BaseCharacter end.*/

    /*CameraFollow start.*/
    Bridge.define("CameraFollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            offset: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraFollow#init", this ); }

                this.offset = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*CameraFollow.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "CameraFollow#LateUpdate", this ); }

                if (UnityEngine.Component.op_Inequality(this.target, null)) {
                    // Kamerayı Player konumuna sabitle, dönmesini engelle
                    this.transform.position = this.target.position.$clone().add( this.offset );
                    this.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, 0 );
                }
            },
            /*CameraFollow.LateUpdate end.*/


        }
    });
    /*CameraFollow end.*/

    /*CharacterType start.*/
    Bridge.define("CharacterType", {
        $kind: 6,
        statics: {
            fields: {
                Player: 0,
                Enemy: 1
            }
        }
    });
    /*CharacterType end.*/

    /*DeathAnimation start.*/
    Bridge.define("DeathAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rb: null,
            characterCollider: null,
            isDying: false,
            rotationSpeed: 0,
            shrinkDuration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DeathAnimation#init", this ); }

                this.isDying = false;
                this.rotationSpeed = 1080.0;
                this.shrinkDuration = 0.8;
            }
        },
        methods: {
            /*DeathAnimation.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DeathAnimation#Awake", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody2D);
                this.characterCollider = this.GetComponent(UnityEngine.Collider2D);
            },
            /*DeathAnimation.Awake end.*/

            /*DeathAnimation.PlayDeathAnimation start.*/
            PlayDeathAnimation: function () {
if ( TRACE ) { TRACE( "DeathAnimation#PlayDeathAnimation", this ); }

                if (!this.isDying) {
                    this.isDying = true;
                    if (UnityEngine.Component.op_Inequality(this.rb, null)) {
                        this.rb.simulated = false;
                    } // Rigidbody'i devre dışı bırak
                    if (UnityEngine.Component.op_Inequality(this.characterCollider, null)) {
                        this.characterCollider.enabled = false;
                    } // Collider'ı devre dışı bırak
                    this.StartCoroutine$1(this.AnimateDeath());
                }
            },
            /*DeathAnimation.PlayDeathAnimation end.*/

            /*DeathAnimation.AnimateDeath start.*/
            AnimateDeath: function () {
if ( TRACE ) { TRACE( "DeathAnimation#AnimateDeath", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsedTime,
                    initialScale,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsedTime = 0.0;
                                        initialScale = this.transform.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsedTime < this.shrinkDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsedTime += UnityEngine.Time.deltaTime;
                                        t = elapsedTime / this.shrinkDuration;

                                        // Döndürme ve küçültme işlemini uygula
                                        this.transform.Rotate(0, 0, this.rotationSpeed * UnityEngine.Time.deltaTime);
                                        this.transform.localScale = new pc.Vec3().lerp( initialScale, pc.Vec3.ZERO.clone(), t );

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    // Küçültme tamamlandığında nesneyi yok et
                                        UnityEngine.MonoBehaviour.Destroy(this.gameObject);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*DeathAnimation.AnimateDeath end.*/


        }
    });
    /*DeathAnimation end.*/

    /*EnemyManager start.*/
    Bridge.define("EnemyManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            enemiesKilled: 0,
            totalEnemiesToKill: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EnemyManager#init", this ); }

                this.enemiesKilled = 0;
                this.totalEnemiesToKill = 3;
            }
        },
        methods: {
            /*EnemyManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "EnemyManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(EnemyManager.instance, null) && UnityEngine.MonoBehaviour.op_Inequality(EnemyManager.instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                } else {
                    EnemyManager.instance = this;
                }
            },
            /*EnemyManager.Awake end.*/

            /*EnemyManager.EnemyKilled start.*/
            EnemyKilled: function () {
if ( TRACE ) { TRACE( "EnemyManager#EnemyKilled", this ); }

                this.enemiesKilled = (this.enemiesKilled + 1) | 0;
                if (this.enemiesKilled >= this.totalEnemiesToKill) {
                    var levelLoader = UnityEngine.Object.FindObjectOfType(LevelLoader);
                    levelLoader.LoadNextLevel();
                }
            },
            /*EnemyManager.EnemyKilled end.*/


        }
    });
    /*EnemyManager end.*/

    /*EnemyMovement start.*/
    Bridge.define("EnemyMovement", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            player: null,
            closestSword: null,
            roamDirection: null,
            "roamChangeInterval": 0,
            roamTimer: 0,
            "swordCheckInterval": 0,
            swordCheckTimer: 0,
            animator: null,
            spriteRenderer: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EnemyMovement#init", this ); }

                this.roamDirection = new UnityEngine.Vector2();
                this.speed = 2.0;
                this["roamChangeInterval"] = 2.0;
                this.roamTimer = 0.0;
                this["swordCheckInterval"] = 0.5;
                this.swordCheckTimer = 0.0;
            }
        },
        methods: {
            /*EnemyMovement.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EnemyMovement#Start", this ); }

                this.player = UnityEngine.Object.FindObjectOfType(Player).transform;
                this.spriteRenderer = this.GetComponentInChildren(UnityEngine.SpriteRenderer);

                this.animator = this.GetComponent(UnityEngine.Animator);

                // İlk rastgele yön ayarları
                this.SetRandomRoamDirection();
            },
            /*EnemyMovement.Start end.*/

            /*EnemyMovement.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EnemyMovement#Update", this ); }

                this.swordCheckTimer += UnityEngine.Time.deltaTime;

                // Belirli aralıklarla en yakın sword'u kontrol et
                if (this.swordCheckTimer >= this["swordCheckInterval"]) {
                    this.closestSword = this.FindClosestMapSword();
                    this.swordCheckTimer = 0.0;
                }

                if (UnityEngine.Component.op_Inequality(this.closestSword, null) || UnityEngine.Component.op_Inequality(this.player, null)) {
                    this.MoveTowardsTarget();
                } else {
                    this.RoamAround();
                }
            },
            /*EnemyMovement.Update end.*/

            /*EnemyMovement.FindClosestMapSword start.*/
            FindClosestMapSword: function () {
if ( TRACE ) { TRACE( "EnemyMovement#FindClosestMapSword", this ); }

                var $t;
                var swords = UnityEngine.GameObject.FindGameObjectsWithTag("MapSword");
                var closest = null;
                var closestDistance = window.Infinity;

                $t = Bridge.getEnumerator(swords);
                try {
                    while ($t.moveNext()) {
                        var sword = $t.Current;
                        var distance = UnityEngine.Vector2.FromVector3(this.transform.position.$clone()).sub( UnityEngine.Vector2.FromVector3(sword.transform.position) ).length();
                        if (distance < closestDistance) {
                            closest = sword.transform;
                            closestDistance = distance;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return closest;
            },
            /*EnemyMovement.FindClosestMapSword end.*/

            /*EnemyMovement.MoveTowardsTarget start.*/
            MoveTowardsTarget: function () {
if ( TRACE ) { TRACE( "EnemyMovement#MoveTowardsTarget", this ); }

                if (UnityEngine.Component.op_Inequality(this.player, null)) {
                    // Enemy'nin kılıcı olup olmadığını kontrol edin
                    var hasSword = this.GetComponent(BaseCharacter).GetSwordCount() > 0;

                    // Player ve Sword mesafelerini hesapla
                    var playerDistance = UnityEngine.Vector2.FromVector3(this.transform.position.$clone()).sub( UnityEngine.Vector2.FromVector3(this.player.position) ).length();
                    var swordDistance = UnityEngine.Component.op_Inequality(this.closestSword, null) ? UnityEngine.Vector2.FromVector3(this.transform.position.$clone()).sub( UnityEngine.Vector2.FromVector3(this.closestSword.position) ).length() : window.Infinity;

                    // Eğer Enemy'nin kılıcı varsa ve Player daha yakınsa Player'a git
                    // Eğer Enemy'nin kılıcı yoksa en yakın Sword'a git
                    var target = hasSword ? (playerDistance <= swordDistance ? this.player : this.closestSword) : this.closestSword;

                    if (UnityEngine.Component.op_Inequality(target, null)) {
                        var direction = (target.position.$clone().sub( this.transform.position )).clone().normalize().$clone();
                        this.transform.position = this.transform.position.$clone().add( direction.$clone().clone().scale( this.speed ).clone().scale( UnityEngine.Time.deltaTime ) );

                        // Hareket yönüne göre animasyonu güncelle
                        this.animator.SetFloat$1("Horizontal", direction.x);
                        this.animator.SetFloat$1("Vertical", direction.y);

                        // Sprite'ı sağa veya sola çevirmek
                        this.spriteRenderer.flipX = direction.x < 0;
                    }
                }
            },
            /*EnemyMovement.MoveTowardsTarget end.*/

            /*EnemyMovement.RoamAround start.*/
            RoamAround: function () {
if ( TRACE ) { TRACE( "EnemyMovement#RoamAround", this ); }

                this.roamTimer += UnityEngine.Time.deltaTime;
                if (this.roamTimer >= this["roamChangeInterval"]) {
                    this.SetRandomRoamDirection();
                    this.roamTimer = 0.0;
                }

                this.transform.position = this.transform.position.$clone().add( UnityEngine.Vector3.FromVector2(this.roamDirection).clone().scale( this.speed ).clone().scale( UnityEngine.Time.deltaTime ) );

                // Roam yönüne göre animasyonu güncelle
                this.animator.SetFloat$1("Horizontal", this.roamDirection.x);
                this.animator.SetFloat$1("Vertical", this.roamDirection.y);

                // Roam yönüne göre sprite'ı sağa veya sola çevirmek
                this.spriteRenderer.flipX = this.roamDirection.x < 0;
            },
            /*EnemyMovement.RoamAround end.*/

            /*EnemyMovement.SetRandomRoamDirection start.*/
            SetRandomRoamDirection: function () {
if ( TRACE ) { TRACE( "EnemyMovement#SetRandomRoamDirection", this ); }

                this.roamDirection = new pc.Vec2( UnityEngine.Random.Range$1(-1.0, 1.0), UnityEngine.Random.Range$1(-1.0, 1.0) ).clone().normalize().$clone();
            },
            /*EnemyMovement.SetRandomRoamDirection end.*/

            /*EnemyMovement.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "EnemyMovement#OnCollisionEnter2D", this ); }

                var $t;
                if (collision.gameObject.CompareTag("Fence")) {
                    var collisionNormal = ($t = collision.contacts)[0].normal.$clone();
                    this.roamDirection = pc.Vec2.reflect( this.roamDirection, collisionNormal ).clone().normalize().$clone();
                }
            },
            /*EnemyMovement.OnCollisionEnter2D end.*/


        }
    });
    /*EnemyMovement end.*/

    /*HealthBar start.*/
    Bridge.define("HealthBar", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            slider: null,
            gradient: null,
            fill: null
        },
        methods: {
            /*HealthBar.setHealth start.*/
            setHealth: function (health) {
if ( TRACE ) { TRACE( "HealthBar#setHealth", this ); }

                this.slider.value = health;
                this.fill.color = this.gradient.evaluate(this.slider.normalizedValue);
            },
            /*HealthBar.setHealth end.*/


        }
    });
    /*HealthBar end.*/

    /*HealthBarCanvas start.*/
    Bridge.define("HealthBarCanvas", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*HealthBarCanvas.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "HealthBarCanvas#Start", this ); }

                this.gameObject.GetComponent(UnityEngine.Canvas).worldCamera = UnityEngine.Camera.main;
            },
            /*HealthBarCanvas.Start end.*/


        }
    });
    /*HealthBarCanvas end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LevelLoader start.*/
    Bridge.define("LevelLoader", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            transition: null,
            transitionTime: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LevelLoader#init", this ); }

                this.transitionTime = 1.0;
            }
        },
        methods: {
            /*LevelLoader.LoadNextLevel start.*/
            LoadNextLevel: function () {
if ( TRACE ) { TRACE( "LevelLoader#LoadNextLevel", this ); }

                this.StartCoroutine$1(this.LoadLevel(1));
            },
            /*LevelLoader.LoadNextLevel end.*/

            /*LevelLoader.LoadLevel start.*/
            LoadLevel: function (levelIndex) {
if ( TRACE ) { TRACE( "LevelLoader#LoadLevel", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.transition.SetTrigger$1("Start");

                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.transitionTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.SceneManagement.SceneManager.LoadScene(levelIndex);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LevelLoader.LoadLevel end.*/


        }
    });
    /*LevelLoader end.*/

    /*PickUpMapSword start.*/
    Bridge.define("PickUpMapSword", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            player: null,
            pickedUp: false,
            mapSwordGenerator: null,
            tilePosition: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PickUpMapSword#init", this ); }

                this.tilePosition = new UnityEngine.Vector3Int();
            }
        },
        methods: {
            /*PickUpMapSword.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PickUpMapSword#Start", this ); }

                this.pickedUp = false;

                // Sword'un tilemap pozisyonunu belirle
                this.tilePosition = this.mapSwordGenerator.tilemap.reportMethod( 'UnityEngine.GridLayout.WorldToCell', null );
            },
            /*PickUpMapSword.Start end.*/

            /*PickUpMapSword.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PickUpMapSword#Update", this ); }

                if (this.pickedUp && UnityEngine.GameObject.op_Inequality(this.player, null)) {
                    this.transform.position = new pc.Vec3().lerp( this.transform.position, this.player.transform.position, 8 * UnityEngine.Time.deltaTime );
                }
            },
            /*PickUpMapSword.Update end.*/

            /*PickUpMapSword.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (other) {
if ( TRACE ) { TRACE( "PickUpMapSword#OnTriggerEnter2D", this ); }

                if (!this.pickedUp) {
                    if (other.CompareTag("Player") || other.CompareTag("Enemy")) {
                        this.player = other.gameObject;
                        this.pickedUp = true; // pickedUp durumunu burada true yapıyoruz

                        // Sword'u ekliyoruz ve mevcut sword'u parametre olarak gönderiyoruz
                        var spinningSwordController = this.player.GetComponent(SpinningSwordController);
                        if (UnityEngine.MonoBehaviour.op_Inequality(spinningSwordController, null)) {
                            spinningSwordController.AddSword();
                        }

                        // Sword toplandığında mapSwordGenerator'a haber ver
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.mapSwordGenerator, null)) {
                            this.mapSwordGenerator.RemoveOccupiedPosition(this.tilePosition);
                            this.mapSwordGenerator.RespawnSword();
                        }

                        // Sword nesnesini yok et
                        this.Destroy(this.gameObject, 0.15);
                    }
                }
            },
            /*PickUpMapSword.OnTriggerEnter2D end.*/


        }
    });
    /*PickUpMapSword end.*/

    /*PlayerMovement start.*/
    Bridge.define("PlayerMovement", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            horizontalMovementSpeed: 0,
            verticalMovementSpeed: 0,
            animator: null,
            spriteRenderer: null,
            movementSpeed: 0
        },
        methods: {
            /*PlayerMovement.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerMovement#Start", this ); }

                this.movementSpeed = 0.0045;
                this.animator = this.GetComponent(UnityEngine.Animator);
                this.spriteRenderer = this.GetComponentInChildren(UnityEngine.SpriteRenderer);
            },
            /*PlayerMovement.Start end.*/

            /*PlayerMovement.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerMovement#Update", this ); }

                // Yatay ve dikey hareket girdilerini al
                this.horizontalMovementSpeed = UnityEngine.Input.GetAxis("Horizontal");
                this.verticalMovementSpeed = UnityEngine.Input.GetAxis("Vertical");

                // Hareket vektörünü oluştur
                var movementVector = new pc.Vec3( this.horizontalMovementSpeed, this.verticalMovementSpeed, 0 );

                // Çapraz harekette hızı sabitlemek için normalize et
                if (movementVector.length() > 1) {
                    movementVector = movementVector.clone().normalize().$clone();
                }
                // Oyuncuyu hareket ettir
                this.transform.Translate$1(movementVector.$clone().clone().scale( this.movementSpeed ));

                // Tuş basıldıysa varsa animasyonu başlatıyoruz
                if (this.horizontalMovementSpeed !== 0 || this.verticalMovementSpeed !== 0) {
                    this.animator.SetBool$1("isRunning", true);

                    // Karakterin sola veya sağa bakmasını ayarlıyoruz
                    if (this.horizontalMovementSpeed < 0) {
                        // Sola gidiyorsa
                        this.spriteRenderer.flipX = true;
                    } else if (this.horizontalMovementSpeed > 0) {
                        // Sağa gidiyorsa
                        this.spriteRenderer.flipX = false;
                    }
                } else {
                    //karakter durdu. Running bitti Standing animasyonu başladı
                    this.animator.SetBool$1("isRunning", false);
                }
            },
            /*PlayerMovement.Update end.*/

            /*PlayerMovement.OnApplicationQuit start.*/
            OnApplicationQuit: function () {
if ( TRACE ) { TRACE( "PlayerMovement#OnApplicationQuit", this ); }

                // Oyun kapandığında tüm animasyonları durdur
                if (UnityEngine.Component.op_Inequality(this.animator, null)) {
                    this.animator.enabled = false;
                }
            },
            /*PlayerMovement.OnApplicationQuit end.*/


        }
    });
    /*PlayerMovement end.*/

    /*RandomEnemyGenerator start.*/
    Bridge.define("RandomEnemyGenerator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            enemyPrefab: null,
            enemyCount: 0,
            validTilePositions: null,
            randomTileGenerator: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RandomEnemyGenerator#init", this ); }

                this.enemyCount = 3;
            }
        },
        methods: {
            /*RandomEnemyGenerator.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "RandomEnemyGenerator#Start", this ); }

                this.StartCoroutine$1(this.WaitForValidTilesAndSpawnEnemies());
            },
            /*RandomEnemyGenerator.Start end.*/

            /*RandomEnemyGenerator.WaitForValidTilesAndSpawnEnemies start.*/
            WaitForValidTilesAndSpawnEnemies: function () {
if ( TRACE ) { TRACE( "RandomEnemyGenerator#WaitForValidTilesAndSpawnEnemies", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // validTilePositions listesi dolana kadar bekleyin
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( this.validTilePositions == null || this.validTilePositions.Count === 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.validTilePositions = this.randomTileGenerator.getValidTilePositions();
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    // Bir sonraki frame'i bekleyin

                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    // Liste dolduktan sonra düşmanları spawnla
                                        this.SpawnEnemies();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RandomEnemyGenerator.WaitForValidTilesAndSpawnEnemies end.*/

            /*RandomEnemyGenerator.SpawnEnemies start.*/
            SpawnEnemies: function () {
if ( TRACE ) { TRACE( "RandomEnemyGenerator#SpawnEnemies", this ); }

                for (var i = 0; i < this.enemyCount; i = (i + 1) | 0) {
                    var spawnPosition = this.GetRandomValidPosition();
                    var enemy = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.enemyPrefab, spawnPosition, pc.Quat.IDENTITY.clone());
                    enemy.name = System.String.format("Enemy_{0}", [Bridge.box(((i + 1) | 0), System.Int32)]);
                    this.AdjustEnemySprites(enemy, i);
                }
            },
            /*RandomEnemyGenerator.SpawnEnemies end.*/

            /*RandomEnemyGenerator.GetRandomValidPosition start.*/
            GetRandomValidPosition: function () {
if ( TRACE ) { TRACE( "RandomEnemyGenerator#GetRandomValidPosition", this ); }

                var randomIndex = UnityEngine.Random.Range(0, this.validTilePositions.Count);
                return UnityEngine.Vector3Int.op_Implicit(this.validTilePositions.getItem(randomIndex).$clone());
            },
            /*RandomEnemyGenerator.GetRandomValidPosition end.*/

            /*RandomEnemyGenerator.AdjustEnemySprites start.*/
            AdjustEnemySprites: function (enemy, enemyNo) {
if ( TRACE ) { TRACE( "RandomEnemyGenerator#AdjustEnemySprites", this ); }

                var spriteRenderers = enemy.GetComponentsInChildren(UnityEngine.SpriteRenderer);

                //body-arm-leg-shadow ayarlıyoruz
                var spriteBody = System.String.format("Textures/character/apple-gun-character-enemy-{0}-body", [Bridge.box(((enemyNo + 1) | 0), System.Int32)]);
                spriteRenderers[0].sprite = UnityEngine.Resources.Load(UnityEngine.Sprite, spriteBody);

                var spriteLeftLeg = System.String.format("Textures/character/apple-gun-character-enemy-{0}-left-leg", [Bridge.box(((enemyNo + 1) | 0), System.Int32)]);
                spriteRenderers[1].sprite = UnityEngine.Resources.Load(UnityEngine.Sprite, spriteLeftLeg);

                var spriteRightLeg = System.String.format("Textures/character/apple-gun-character-enemy-{0}-right-leg", [Bridge.box(((enemyNo + 1) | 0), System.Int32)]);
                spriteRenderers[2].sprite = UnityEngine.Resources.Load(UnityEngine.Sprite, spriteRightLeg);

                var spriteShadow = System.String.format("Textures/character/apple-gun-shadow", null);
                spriteRenderers[3].sprite = UnityEngine.Resources.Load(UnityEngine.Sprite, spriteShadow);
                spriteRenderers[3].color = new pc.Color( 1.0, 1.0, 1.0, 0.5 );

                //Rasgele bir bayrak seçiyoruz
                var spriteFlagChina = System.String.format("Textures/flags/cn", null);
                var spriteFlagJp = System.String.format("Textures/flags/jp", null);
                var spriteFlagTr = System.String.format("Textures/flags/tr", null);
                var spriteFlagUs = System.String.format("Textures/flags/us", null);
                var randomFlagIndex = UnityEngine.Random.Range(0, 4);
                switch (randomFlagIndex) {
                    case 0: 
                        spriteRenderers[4].sprite = UnityEngine.Resources.Load(UnityEngine.Sprite, spriteFlagChina);
                        break;
                    case 1: 
                        spriteRenderers[4].sprite = UnityEngine.Resources.Load(UnityEngine.Sprite, spriteFlagJp);
                        break;
                    case 2: 
                        spriteRenderers[4].sprite = UnityEngine.Resources.Load(UnityEngine.Sprite, spriteFlagTr);
                        break;
                    case 3: 
                        spriteRenderers[4].sprite = UnityEngine.Resources.Load(UnityEngine.Sprite, spriteFlagUs);
                        break;
                    default: 
                        spriteRenderers[4].sprite = UnityEngine.Resources.Load(UnityEngine.Sprite, spriteFlagTr);
                        break;
                }

                //ismini ayarlıyoruz
                var enemyName = System.String.format("unnamed_warrior{0}", [Bridge.box(enemyNo, System.Int32)]);
                var textComponent = enemy.GetComponentInChildren(TMPro.TextMeshPro);
                if (UnityEngine.MonoBehaviour.op_Inequality(textComponent, null)) {
                    textComponent.text = enemyName;
                }
            },
            /*RandomEnemyGenerator.AdjustEnemySprites end.*/


        }
    });
    /*RandomEnemyGenerator end.*/

    /*RandomMapSwordGenerator start.*/
    Bridge.define("RandomMapSwordGenerator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tilemap: null,
            mapSwordPrefab: null,
            initialSwordCount: 0,
            minRespawnTime: 0,
            maxRespawnTime: 0,
            validTilePositions: null,
            occupiedPositions: null,
            randomTileGenerator: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RandomMapSwordGenerator#init", this ); }

                this.occupiedPositions = new (System.Collections.Generic.HashSet$1(UnityEngine.Vector3Int)).ctor();
            }
        },
        methods: {
            /*RandomMapSwordGenerator.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "RandomMapSwordGenerator#Start", this ); }

                this.initialSwordCount = 40;
                this.minRespawnTime = 0.0;
                this.maxRespawnTime = 5.0;

                this.StartCoroutine$1(this.InitializeSwordSpawn());
            },
            /*RandomMapSwordGenerator.Start end.*/

            /*RandomMapSwordGenerator.InitializeSwordSpawn start.*/
            InitializeSwordSpawn: function () {
if ( TRACE ) { TRACE( "RandomMapSwordGenerator#InitializeSwordSpawn", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this.randomTileGenerator.getValidTilePositions().Count === 0 ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    // RandomTileGenerator'dan geçerli tile konumlarını al
                                        this.validTilePositions = this.randomTileGenerator.getValidTilePositions();

                                        // Sword'larını yerleştir
                                        for (var i = 0; i < this.initialSwordCount; i = (i + 1) | 0) {
                                            this.SpawnSword();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RandomMapSwordGenerator.InitializeSwordSpawn end.*/

            /*RandomMapSwordGenerator.SpawnSword start.*/
            SpawnSword: function () {
if ( TRACE ) { TRACE( "RandomMapSwordGenerator#SpawnSword", this ); }

                var randomTilePosition = new UnityEngine.Vector3Int();
                do {
                    // Rastgele bir geçerli konum seç
                    randomTilePosition = this.validTilePositions.getItem(UnityEngine.Random.Range(0, this.validTilePositions.Count)).$clone();
                } while (this.occupiedPositions.contains(randomTilePosition.$clone())); // Pozisyon doluysa yeni bir pozisyon seç

                // Sword'u bu pozisyonda oluştur
                var worldPosition = this.tilemap.reportMethod( 'UnityEngine.GridLayout.CellToWorld', null ).add( new pc.Vec3( 0.5, 0.5, -5 ) );
                var sword = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.mapSwordPrefab, worldPosition, pc.Quat.IDENTITY.clone());
                sword.name = System.String.format("MapSword", null);
                var spriteRenderers = sword.GetComponentsInChildren(UnityEngine.SpriteRenderer);
                spriteRenderers[2].color = new pc.Color( 1.0, 1.0, 1.0, 0.5 ); //decreasing opacity of the shadow

                // Sword script'ine mapSwordGenerator referansını ata
                var swordScript = sword.GetComponent(PickUpMapSword);
                if (UnityEngine.MonoBehaviour.op_Inequality(swordScript, null)) {
                    swordScript.mapSwordGenerator = this;
                }

                // Bu pozisyonu dolu olarak işaretle
                this.occupiedPositions.add(randomTilePosition.$clone());
            },
            /*RandomMapSwordGenerator.SpawnSword end.*/

            /*RandomMapSwordGenerator.RespawnSword start.*/
            RespawnSword: function () {
if ( TRACE ) { TRACE( "RandomMapSwordGenerator#RespawnSword", this ); }

                // 0-5 saniye arasında rastgele bir süre bekleyip sword'u yeniden oluştur
                var respawnTime = UnityEngine.Random.Range$1(this.minRespawnTime, this.maxRespawnTime);
                this.StartCoroutine$1(this.RespawnSwordCoroutine(respawnTime));
            },
            /*RandomMapSwordGenerator.RespawnSword end.*/

            /*RandomMapSwordGenerator.RespawnSwordCoroutine start.*/
            RespawnSwordCoroutine: function (respawnTime) {
if ( TRACE ) { TRACE( "RandomMapSwordGenerator#RespawnSwordCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(respawnTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.SpawnSword();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RandomMapSwordGenerator.RespawnSwordCoroutine end.*/

            /*RandomMapSwordGenerator.RemoveOccupiedPosition start.*/
            RemoveOccupiedPosition: function (position) {
if ( TRACE ) { TRACE( "RandomMapSwordGenerator#RemoveOccupiedPosition", this ); }

                this.occupiedPositions.remove(position.$clone()); // Pozisyonu boşalt
            },
            /*RandomMapSwordGenerator.RemoveOccupiedPosition end.*/


        }
    });
    /*RandomMapSwordGenerator end.*/

    /*RandomTileGenerator start.*/
    Bridge.define("RandomTileGenerator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tilemap: null,
            bigGrassTile: null,
            smallGrassTile: null,
            baseGroundTile: null,
            stoneTile: null,
            mapWidth: 0,
            mapHeight: 0,
            bigGrassProbability: 0,
            smallGrassProbability: 0,
            stoneProbability: 0,
            validTilePositions: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RandomTileGenerator#init", this ); }

                this.mapWidth = 27;
                this.mapHeight = 21;
                this.bigGrassProbability = 10;
                this.smallGrassProbability = 20;
                this.stoneProbability = 30;
                this.validTilePositions = new (System.Collections.Generic.List$1(UnityEngine.Vector3Int)).ctor();
            }
        },
        methods: {
            /*RandomTileGenerator.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "RandomTileGenerator#Start", this ); }

                this.PlaceRandomTiles();
            },
            /*RandomTileGenerator.Start end.*/

            /*RandomTileGenerator.PlaceRandomTiles start.*/
            PlaceRandomTiles: function () {
if ( TRACE ) { TRACE( "RandomTileGenerator#PlaceRandomTiles", this ); }

                var startX = (Math.floor(((this.tilemap.reportProperty( 'UnityEngine.Tilemaps.Tilemap.cellBounds', null ).reportProperty( 'UnityEngine.BoundsInt.xMin', 0 ) + 7) | 0)) + 1) | 0; // En soldan 6 birim sağa kaydırıyoruz
                var startY = (Math.floor(((this.tilemap.reportProperty( 'UnityEngine.Tilemaps.Tilemap.cellBounds', null ).reportProperty( 'UnityEngine.BoundsInt.yMin', 0 ) + 8) | 0)) + 1) | 0; // En üstten 6 birim aşağı kaydırıyoruz

                for (var x = startX; x < ((startX + this.mapWidth) | 0); x = (x + 1) | 0) {
                    for (var y = startY; y < ((startY + this.mapHeight) | 0); y = (y + 1) | 0) {
                        var randomValue = UnityEngine.Random.Range(0, 101);
                        var tilePosition = new UnityEngine.Vector3Int.$ctor1(x, y, 0);
                        this.validTilePositions.add(tilePosition.$clone());

                        // Büyük çim olasılığı %10
                        if (randomValue < this.bigGrassProbability) {
                            this.tilemap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetTile', null );
                        } else if (this.bigGrassProbability <= randomValue && randomValue < this.smallGrassProbability) {
                            this.tilemap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetTile', null );
                        } else if (this.smallGrassProbability <= randomValue && randomValue < this.stoneProbability) {
                            this.tilemap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetTile', null );
                        } else {
                            this.tilemap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetTile', null );
                        }

                    }
                }
            },
            /*RandomTileGenerator.PlaceRandomTiles end.*/

            /*RandomTileGenerator.getValidTilePositions start.*/
            getValidTilePositions: function () {
if ( TRACE ) { TRACE( "RandomTileGenerator#getValidTilePositions", this ); }

                return this.validTilePositions;
            },
            /*RandomTileGenerator.getValidTilePositions end.*/


        }
    });
    /*RandomTileGenerator end.*/

    /*SpinningSword start.*/
    Bridge.define("SpinningSword", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            characterTransform: null,
            orbitSpeed: 0,
            orbitRadius: 0,
            currentAngle: 0,
            isFlyingAway: false,
            flyDirection: null,
            flySpeed: 0,
            clashSwordAudioSource: null,
            swordCollider: null,
            knockbackForce: 0,
            swordDamage: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SpinningSword#init", this ); }

                this.flyDirection = new UnityEngine.Vector2();
            }
        },
        methods: {
            /*SpinningSword.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SpinningSword#Start", this ); }

                this.knockbackForce = 3.0;
                this.swordDamage = 1;
                this.isFlyingAway = false;
                this.flySpeed = 1.5;
                this.clashSwordAudioSource = this.gameObject.AddComponent(UnityEngine.AudioSource);
                this.clashSwordAudioSource.clip = UnityEngine.Resources.Load(UnityEngine.AudioClip, "Sounds/ClashSwordSound");
                this.clashSwordAudioSource.playOnAwake = false;
                this.clashSwordAudioSource.enabled = true;
                this.swordCollider = this.GetComponent(UnityEngine.BoxCollider2D);
            },
            /*SpinningSword.Start end.*/

            /*SpinningSword.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SpinningSword#Update", this ); }

                if (!this.isFlyingAway) {
                    this.currentAngle -= this.orbitSpeed * UnityEngine.Time.deltaTime;
                    this.UpdateOrbitPosition();
                } else {
                    this.transform.position = this.transform.position.$clone().add( UnityEngine.Vector3.FromVector2(this.flyDirection).clone().scale( this.flySpeed ).clone().scale( UnityEngine.Time.deltaTime ) );
                    this.transform.Rotate(0, 0, 1000 * UnityEngine.Time.deltaTime);
                }
            },
            /*SpinningSword.Update end.*/

            /*SpinningSword.UpdateOrbitPosition start.*/
            UpdateOrbitPosition: function () {
if ( TRACE ) { TRACE( "SpinningSword#UpdateOrbitPosition", this ); }

                var $t;
                var x = Math.cos(this.currentAngle) * this.orbitRadius;
                var y = Math.sin(this.currentAngle) * this.orbitRadius;
                this.transform.position = this.characterTransform.position.$clone().add( new pc.Vec3( x, y, 0 ) );

                var directionToCharacter = this.characterTransform.position.$clone().sub( this.transform.position );
                var angle = Math.atan2(directionToCharacter.y, directionToCharacter.x) * UnityEngine.Mathf.Rad2Deg;
                this.transform.rotation = ($t = new pc.Vec3( 0, 0, angle + 180 ), new pc.Quat().setFromEulerAngles_Unity( $t.x, $t.y, $t.z ));
            },
            /*SpinningSword.UpdateOrbitPosition end.*/

            /*SpinningSword.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (other) {
if ( TRACE ) { TRACE( "SpinningSword#OnTriggerEnter2D", this ); }

                if (other.CompareTag("Sword")) {
                    var otherSword = other.GetComponent(SpinningSword);

                    if (UnityEngine.MonoBehaviour.op_Inequality(otherSword, null) && UnityEngine.Component.op_Equality(otherSword.characterTransform, this.characterTransform)) {
                        return;
                    }

                    if (UnityEngine.Component.op_Inequality(this.clashSwordAudioSource, null) && this.clashSwordAudioSource.enabled) {
                        this.clashSwordAudioSource.Play();
                    }

                    var randomAngle = UnityEngine.Random.Range$1(0, 6.28318548);
                    this.flyDirection = new pc.Vec2( Math.cos(randomAngle), Math.sin(randomAngle) ).scale( this.orbitSpeed ).scale( 3 );
                    this.isFlyingAway = true;
                    this.swordCollider.enabled = false;
                    this.Destroy(this.gameObject, 5.0);
                } else if ((other.CompareTag("Player") || other.CompareTag("Enemy")) && UnityEngine.Component.op_Inequality(other.transform, this.characterTransform)) {
                    var otherCharacter = other.GetComponent(BaseCharacter);
                    if (UnityEngine.MonoBehaviour.op_Inequality(otherCharacter, null)) {
                        otherCharacter.TakeDamage(this.characterTransform.GetComponent(BaseCharacter));

                        // Geri itme kuvvetini yarım saniyeliğine uygula
                        var knockbackDirection = UnityEngine.Vector2.FromVector3((other.transform.position.$clone().sub( this.transform.position )).clone().normalize().$clone());
                        this.StartCoroutine$1(this.ApplyTemporaryKnockback(otherCharacter, knockbackDirection, this.knockbackForce));

                        UnityEngine.AudioSource.PlayClipAtPoint(UnityEngine.Resources.Load(UnityEngine.AudioClip, "Sounds/CharacterDamageSound"), this.transform.position);
                    }
                }
            },
            /*SpinningSword.OnTriggerEnter2D end.*/

            /*SpinningSword.ApplyTemporaryKnockback start.*/
            ApplyTemporaryKnockback: function (character, direction, force) {
if ( TRACE ) { TRACE( "SpinningSword#ApplyTemporaryKnockback", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    character.ApplyKnockback(direction, force); // Kuvveti uygula
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // Yarım saniye bekle
                                        character.ApplyKnockback(pc.Vec2.ZERO.clone(), 0); // Kuvveti sıfırla

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SpinningSword.ApplyTemporaryKnockback end.*/


        }
    });
    /*SpinningSword end.*/

    /*SpinningSwordController start.*/
    Bridge.define("SpinningSwordController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            swordOrbitPrefab: null,
            character: null,
            activeSwords: null,
            orbitRadius: 0,
            orbitSpeed: 0
        },
        methods: {
            /*SpinningSwordController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SpinningSwordController#Start", this ); }

                this.activeSwords = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.orbitRadius = 1.5;
                this.orbitSpeed = 5.0;
                this.character = this.GetComponent(BaseCharacter);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.character, null)) {
                    this.InitializeSwords(this.character.GetSwordCount());
                }
            },
            /*SpinningSwordController.Start end.*/

            /*SpinningSwordController.HasSword start.*/
            HasSword: function () {
if ( TRACE ) { TRACE( "SpinningSwordController#HasSword", this ); }

                return this.activeSwords.Count > 0;
            },
            /*SpinningSwordController.HasSword end.*/

            /*SpinningSwordController.InitializeSwords start.*/
            InitializeSwords: function (count) {
if ( TRACE ) { TRACE( "SpinningSwordController#InitializeSwords", this ); }

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    this.AddSword();
                }
            },
            /*SpinningSwordController.InitializeSwords end.*/

            /*SpinningSwordController.AddSword start.*/
            AddSword: function () {
if ( TRACE ) { TRACE( "SpinningSwordController#AddSword", this ); }

                var newSword = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.swordOrbitPrefab, this.transform.position, pc.Quat.IDENTITY.clone());
                if (UnityEngine.GameObject.op_Inequality(newSword, null)) {
                    var spinningSword = newSword.GetComponent(SpinningSword);
                    spinningSword.characterTransform = this.transform;
                    spinningSword.orbitRadius = this.orbitRadius;
                    spinningSword.orbitSpeed = this.orbitSpeed;
                    this.activeSwords.add(newSword);

                    this.UpdateSwordPositions();
                }
            },
            /*SpinningSwordController.AddSword end.*/

            /*SpinningSwordController.RemoveSword start.*/
            RemoveSword: function (sword) {
if ( TRACE ) { TRACE( "SpinningSwordController#RemoveSword", this ); }

                if (UnityEngine.GameObject.op_Inequality(sword, null) && this.activeSwords.contains(sword)) {
                    this.activeSwords.remove(sword);
                    UnityEngine.MonoBehaviour.Destroy(sword);
                    this.UpdateSwordPositions();
                }
            },
            /*SpinningSwordController.RemoveSword end.*/

            /*SpinningSwordController.DestroyAllSwords start.*/
            DestroyAllSwords: function () {
if ( TRACE ) { TRACE( "SpinningSwordController#DestroyAllSwords", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.activeSwords);
                try {
                    while ($t.moveNext()) {
                        var sword = $t.Current;
                        if (UnityEngine.GameObject.op_Inequality(sword, null)) {
                            UnityEngine.MonoBehaviour.Destroy(sword);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.activeSwords.clear();
            },
            /*SpinningSwordController.DestroyAllSwords end.*/

            /*SpinningSwordController.TransferAllSwords start.*/
            TransferAllSwords: function (targetController) {
if ( TRACE ) { TRACE( "SpinningSwordController#TransferAllSwords", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.activeSwords);
                try {
                    while ($t.moveNext()) {
                        var sword = $t.Current;
                        if (UnityEngine.GameObject.op_Inequality(sword, null)) {
                            // Sword'u yeni karaktere ekliyoruz
                            var spinningSword = sword.GetComponent(SpinningSword);
                            spinningSword.characterTransform = targetController.transform;
                            targetController.AddSword();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.activeSwords.clear();
            },
            /*SpinningSwordController.TransferAllSwords end.*/

            /*SpinningSwordController.UpdateSwordPositions start.*/
            UpdateSwordPositions: function () {
if ( TRACE ) { TRACE( "SpinningSwordController#UpdateSwordPositions", this ); }

                var angleStep = 360.0 / this.activeSwords.Count;
                for (var i = 0; i < this.activeSwords.Count; i = (i + 1) | 0) {
                    if (UnityEngine.GameObject.op_Inequality(this.activeSwords.getItem(i), null)) {
                        var angle = angleStep * i * UnityEngine.Mathf.Deg2Rad;
                        var spinningSword = this.activeSwords.getItem(i).GetComponent(SpinningSword);
                        if (UnityEngine.MonoBehaviour.op_Inequality(spinningSword, null)) {
                            spinningSword.currentAngle = angle;
                        }
                    }
                }
            },
            /*SpinningSwordController.UpdateSwordPositions end.*/


        }
    });
    /*SpinningSwordController end.*/

    /*UrlDirectorFromButton start.*/
    Bridge.define("UrlDirectorFromButton", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            url: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UrlDirectorFromButton#init", this ); }

                this.url = "https://loopgames.net/games";
            }
        },
        methods: {
            /*UrlDirectorFromButton.open start.*/
            open: function () {
if ( TRACE ) { TRACE( "UrlDirectorFromButton#open", this ); }

                //Application.OpenURL(url); 
                Luna.Unity.Playable.InstallFullGame();
            },
            /*UrlDirectorFromButton.open end.*/


        }
    });
    /*UrlDirectorFromButton end.*/

    /*Enemy start.*/
    Bridge.define("Enemy", {
        inherits: [BaseCharacter],
        methods: {
            /*Enemy.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Enemy#Awake", this ); }

                BaseCharacter.prototype.Awake.call(this);
                this.characterType = CharacterType.Enemy;
                this.gameObject.tag = "Enemy";
            },
            /*Enemy.Awake end.*/

            /*Enemy.Die start.*/
            Die: function (attacker) {
if ( TRACE ) { TRACE( "Enemy#Die", this ); }

                BaseCharacter.prototype.Die.call(this, attacker);

                // Enemy öldüğünde EnemyManager'a bildir
                EnemyManager.instance.EnemyKilled();

                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*Enemy.Die end.*/

            /*Enemy.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (other) {
if ( TRACE ) { TRACE( "Enemy#OnCollisionEnter2D", this ); }

                if (other.gameObject.CompareTag("MapSword")) {
                    this.PickUpSword();
                } else {
                    var otherCharacter = other.gameObject.GetComponent(BaseCharacter);
                    if (UnityEngine.MonoBehaviour.op_Inequality(otherCharacter, null) && otherCharacter.characterType === CharacterType.Player) {
                        this.TakeDamage(otherCharacter);
                    }
                }
            },
            /*Enemy.OnCollisionEnter2D end.*/


        }
    });
    /*Enemy end.*/

    /*Player start.*/
    Bridge.define("Player", {
        inherits: [BaseCharacter],
        methods: {
            /*Player.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Player#Awake", this ); }

                BaseCharacter.prototype.Awake.call(this);
                this.characterType = CharacterType.Player;
                this.gameObject.tag = "Player";
                var spriteRenderers = this.GetComponentsInChildren(UnityEngine.SpriteRenderer);
                spriteRenderers[3].color = new pc.Color( 1.0, 1.0, 1.0, 0.5 ); //decreasing opacity of the shadow
            },
            /*Player.Awake end.*/

            /*Player.Die start.*/
            Die: function (attacker) {
if ( TRACE ) { TRACE( "Player#Die", this ); }

                BaseCharacter.prototype.Die.call(this, attacker);
                var levelLoader = UnityEngine.Object.FindObjectOfType(LevelLoader);
                levelLoader.LoadNextLevel();
            },
            /*Player.Die end.*/

            /*Player.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (other) {
if ( TRACE ) { TRACE( "Player#OnCollisionEnter2D", this ); }

                if (other.gameObject.CompareTag("MapSword")) {
                    this.PickUpSword();
                } else {

                    var otherCharacter = other.gameObject.GetComponent(BaseCharacter);
                    if (UnityEngine.MonoBehaviour.op_Inequality(otherCharacter, null) && otherCharacter.characterType === CharacterType.Enemy) {
                        this.TakeDamage(otherCharacter);
                    }
                }
            },
            /*Player.OnCollisionEnter2D end.*/


        }
    });
    /*Player end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","System.Collections","UnityEngine.UI","System.Collections.Generic"];

    /*CharacterType start.*/
    $m("CharacterType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Enemy","is":true,"t":4,"rt":CharacterType,"sn":"Enemy","box":function ($v) { return Bridge.box($v, CharacterType, System.Enum.toStringFn(CharacterType));}},{"a":2,"n":"Player","is":true,"t":4,"rt":CharacterType,"sn":"Player","box":function ($v) { return Bridge.box($v, CharacterType, System.Enum.toStringFn(CharacterType));}}]}; }, $n);
    /*CharacterType end.*/

    /*BaseCharacter start.*/
    $m("BaseCharacter", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyKnockback","t":8,"pi":[{"n":"direction","pt":$n[0].Vector2,"ps":0},{"n":"force","pt":$n[1].Single,"ps":1}],"sn":"ApplyKnockback","rt":$n[1].Void,"p":[$n[0].Vector2,$n[1].Single]},{"v":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":3,"n":"ClashSword","t":8,"sn":"ClashSword","rt":$n[1].Void},{"v":true,"a":3,"n":"Die","t":8,"pi":[{"n":"attacker","pt":BaseCharacter,"ps":0}],"sn":"Die","rt":$n[1].Void,"p":[BaseCharacter]},{"a":2,"n":"GetCharacterType","t":8,"sn":"GetCharacterType","rt":CharacterType,"box":function ($v) { return Bridge.box($v, CharacterType, System.Enum.toStringFn(CharacterType));}},{"a":2,"n":"GetSwordCount","t":8,"sn":"GetSwordCount","rt":$n[1].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ab":true,"a":2,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"other","pt":$n[0].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[1].Void,"p":[$n[0].Collision2D]},{"a":3,"n":"PickUpSword","t":8,"sn":"PickUpSword","rt":$n[1].Void},{"v":true,"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"attacker","pt":BaseCharacter,"ps":0}],"sn":"TakeDamage","rt":$n[1].Void,"p":[BaseCharacter]},{"v":true,"a":3,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"audioSource","t":4,"rt":$n[0].AudioSource,"sn":"audioSource"},{"a":1,"n":"characterDamageSound","t":4,"rt":$n[0].AudioClip,"sn":"characterDamageSound"},{"a":1,"n":"characterDieSound","t":4,"rt":$n[0].AudioClip,"sn":"characterDieSound"},{"a":1,"n":"characterPosX","t":4,"rt":$n[1].Single,"sn":"characterPosX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"characterPosY","t":4,"rt":$n[1].Single,"sn":"characterPosY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"characterType","t":4,"rt":CharacterType,"sn":"characterType","box":function ($v) { return Bridge.box($v, CharacterType, System.Enum.toStringFn(CharacterType));}},{"a":1,"n":"health","t":4,"rt":$n[1].Int32,"sn":"health","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"healthBar","t":4,"rt":HealthBar,"sn":"healthBar"},{"a":3,"n":"instance","t":4,"rt":BaseCharacter,"sn":"instance"},{"a":3,"n":"rb","t":4,"rt":$n[0].Rigidbody2D,"sn":"rb"},{"a":1,"n":"spinningSwordController","t":4,"rt":SpinningSwordController,"sn":"spinningSwordController"},{"a":1,"n":"swordCount","t":4,"rt":$n[1].Int32,"sn":"swordCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*BaseCharacter end.*/

    /*DeathAnimation start.*/
    $m("DeathAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateDeath","t":8,"sn":"AnimateDeath","rt":$n[2].IEnumerator},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"PlayDeathAnimation","t":8,"sn":"PlayDeathAnimation","rt":$n[1].Void},{"a":1,"n":"characterCollider","t":4,"rt":$n[0].Collider2D,"sn":"characterCollider"},{"a":1,"n":"isDying","t":4,"rt":$n[1].Boolean,"sn":"isDying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"rb","t":4,"rt":$n[0].Rigidbody2D,"sn":"rb"},{"a":2,"n":"rotationSpeed","t":4,"rt":$n[1].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"shrinkDuration","t":4,"rt":$n[1].Single,"sn":"shrinkDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DeathAnimation end.*/

    /*Enemy start.*/
    $m("Enemy", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"ov":true,"a":3,"n":"Die","t":8,"pi":[{"n":"attacker","pt":BaseCharacter,"ps":0}],"sn":"Die","rt":$n[1].Void,"p":[BaseCharacter]},{"ov":true,"a":2,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"other","pt":$n[0].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[1].Void,"p":[$n[0].Collision2D]}]}; }, $n);
    /*Enemy end.*/

    /*EnemyMovement start.*/
    $m("EnemyMovement", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FindClosestMapSword","t":8,"sn":"FindClosestMapSword","rt":$n[0].Transform},{"a":1,"n":"MoveTowardsTarget","t":8,"sn":"MoveTowardsTarget","rt":$n[1].Void},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[0].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[1].Void,"p":[$n[0].Collision2D]},{"a":1,"n":"RoamAround","t":8,"sn":"RoamAround","rt":$n[1].Void},{"a":1,"n":"SetRandomRoamDirection","t":8,"sn":"SetRandomRoamDirection","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"animator","t":4,"rt":$n[0].Animator,"sn":"animator"},{"a":1,"n":"closestSword","t":4,"rt":$n[0].Transform,"sn":"closestSword"},{"a":1,"n":"player","t":4,"rt":$n[0].Transform,"sn":"player"},{"a":1,"n":"roamChangeInterval","t":4,"rt":$n[1].Single,"sn":"roamChangeInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"roamDirection","t":4,"rt":$n[0].Vector2,"sn":"roamDirection"},{"a":1,"n":"roamTimer","t":4,"rt":$n[1].Single,"sn":"roamTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spriteRenderer","t":4,"rt":$n[0].SpriteRenderer,"sn":"spriteRenderer"},{"a":1,"n":"swordCheckInterval","t":4,"rt":$n[1].Single,"sn":"swordCheckInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"swordCheckTimer","t":4,"rt":$n[1].Single,"sn":"swordCheckTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*EnemyMovement end.*/

    /*EnemyManager start.*/
    $m("EnemyManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"EnemyKilled","t":8,"sn":"EnemyKilled","rt":$n[1].Void},{"a":1,"n":"enemiesKilled","t":4,"rt":$n[1].Int32,"sn":"enemiesKilled","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"instance","is":true,"t":4,"rt":EnemyManager,"sn":"instance"},{"a":2,"n":"totalEnemiesToKill","t":4,"rt":$n[1].Int32,"sn":"totalEnemiesToKill","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*EnemyManager end.*/

    /*HealthBar start.*/
    $m("HealthBar", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"setHealth","t":8,"pi":[{"n":"health","pt":$n[1].Int32,"ps":0}],"sn":"setHealth","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"fill","t":4,"rt":$n[3].Image,"sn":"fill"},{"a":2,"n":"gradient","t":4,"rt":pc.ColorGradient,"sn":"gradient"},{"a":2,"n":"slider","t":4,"rt":$n[3].Slider,"sn":"slider"}]}; }, $n);
    /*HealthBar end.*/

    /*HealthBarCanvas start.*/
    $m("HealthBarCanvas", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void}]}; }, $n);
    /*HealthBarCanvas end.*/

    /*CameraFollow start.*/
    $m("CameraFollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":2,"n":"offset","t":4,"rt":$n[0].Vector3,"sn":"offset"},{"a":2,"n":"target","t":4,"rt":$n[0].Transform,"sn":"target"}]}; }, $n);
    /*CameraFollow end.*/

    /*Player start.*/
    $m("Player", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"ov":true,"a":3,"n":"Die","t":8,"pi":[{"n":"attacker","pt":BaseCharacter,"ps":0}],"sn":"Die","rt":$n[1].Void,"p":[BaseCharacter]},{"ov":true,"a":2,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"other","pt":$n[0].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[1].Void,"p":[$n[0].Collision2D]}]}; }, $n);
    /*Player end.*/

    /*PlayerMovement start.*/
    $m("PlayerMovement", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnApplicationQuit","t":8,"sn":"OnApplicationQuit","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animator","t":4,"rt":$n[0].Animator,"sn":"animator"},{"a":1,"n":"horizontalMovementSpeed","t":4,"rt":$n[1].Single,"sn":"horizontalMovementSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"movementSpeed","t":4,"rt":$n[1].Single,"sn":"movementSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spriteRenderer","t":4,"rt":$n[0].SpriteRenderer,"sn":"spriteRenderer"},{"a":1,"n":"verticalMovementSpeed","t":4,"rt":$n[1].Single,"sn":"verticalMovementSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PlayerMovement end.*/

    /*LevelLoader start.*/
    $m("LevelLoader", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LoadLevel","t":8,"pi":[{"n":"levelIndex","pt":$n[1].Int32,"ps":0}],"sn":"LoadLevel","rt":$n[2].IEnumerator,"p":[$n[1].Int32]},{"a":2,"n":"LoadNextLevel","t":8,"sn":"LoadNextLevel","rt":$n[1].Void},{"a":2,"n":"transition","t":4,"rt":$n[0].Animator,"sn":"transition"},{"a":2,"n":"transitionTime","t":4,"rt":$n[1].Single,"sn":"transitionTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LevelLoader end.*/

    /*UrlDirectorFromButton start.*/
    $m("UrlDirectorFromButton", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"open","t":8,"sn":"open","rt":$n[1].Void},{"a":1,"n":"url","t":4,"rt":$n[1].String,"sn":"url"}]}; }, $n);
    /*UrlDirectorFromButton end.*/

    /*RandomEnemyGenerator start.*/
    $m("RandomEnemyGenerator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AdjustEnemySprites","t":8,"pi":[{"n":"enemy","pt":$n[0].GameObject,"ps":0},{"n":"enemyNo","pt":$n[1].Int32,"ps":1}],"sn":"AdjustEnemySprites","rt":$n[1].Void,"p":[$n[0].GameObject,$n[1].Int32]},{"a":1,"n":"GetRandomValidPosition","t":8,"sn":"GetRandomValidPosition","rt":$n[0].Vector3},{"a":1,"n":"SpawnEnemies","t":8,"sn":"SpawnEnemies","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"WaitForValidTilesAndSpawnEnemies","t":8,"sn":"WaitForValidTilesAndSpawnEnemies","rt":$n[2].IEnumerator},{"a":1,"n":"enemyCount","t":4,"rt":$n[1].Int32,"sn":"enemyCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"enemyPrefab","t":4,"rt":$n[0].GameObject,"sn":"enemyPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"randomTileGenerator","t":4,"rt":RandomTileGenerator,"sn":"randomTileGenerator"},{"a":1,"n":"validTilePositions","t":4,"rt":$n[4].List$1(UnityEngine.Vector3Int),"sn":"validTilePositions"}]}; }, $n);
    /*RandomEnemyGenerator end.*/

    /*RandomMapSwordGenerator start.*/
    $m("RandomMapSwordGenerator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"InitializeSwordSpawn","t":8,"sn":"InitializeSwordSpawn","rt":$n[2].IEnumerator},{"a":2,"n":"RemoveOccupiedPosition","t":8,"pi":[{"n":"position","pt":$n[0].Vector3Int,"ps":0}],"sn":"RemoveOccupiedPosition","rt":$n[1].Void,"p":[$n[0].Vector3Int]},{"a":2,"n":"RespawnSword","t":8,"sn":"RespawnSword","rt":$n[1].Void},{"a":1,"n":"RespawnSwordCoroutine","t":8,"pi":[{"n":"respawnTime","pt":$n[1].Single,"ps":0}],"sn":"RespawnSwordCoroutine","rt":$n[2].IEnumerator,"p":[$n[1].Single]},{"a":1,"n":"SpawnSword","t":8,"sn":"SpawnSword","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"initialSwordCount","t":4,"rt":$n[1].Int32,"sn":"initialSwordCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"mapSwordPrefab","t":4,"rt":$n[0].GameObject,"sn":"mapSwordPrefab"},{"a":1,"n":"maxRespawnTime","t":4,"rt":$n[1].Single,"sn":"maxRespawnTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"minRespawnTime","t":4,"rt":$n[1].Single,"sn":"minRespawnTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"occupiedPositions","t":4,"rt":$n[4].HashSet$1(UnityEngine.Vector3Int),"sn":"occupiedPositions"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"randomTileGenerator","t":4,"rt":RandomTileGenerator,"sn":"randomTileGenerator"},{"a":2,"n":"tilemap","t":4,"rt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) ),"sn":"tilemap"},{"a":1,"n":"validTilePositions","t":4,"rt":$n[4].List$1(UnityEngine.Vector3Int),"sn":"validTilePositions"}]}; }, $n);
    /*RandomMapSwordGenerator end.*/

    /*RandomTileGenerator start.*/
    $m("RandomTileGenerator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"PlaceRandomTiles","t":8,"sn":"PlaceRandomTiles","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"getValidTilePositions","t":8,"sn":"getValidTilePositions","rt":$n[4].List$1(UnityEngine.Vector3Int)},{"a":2,"n":"baseGroundTile","t":4,"rt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.TileBase' ) ),"sn":"baseGroundTile"},{"a":1,"n":"bigGrassProbability","t":4,"rt":$n[1].Single,"sn":"bigGrassProbability","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"bigGrassTile","t":4,"rt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.TileBase' ) ),"sn":"bigGrassTile"},{"a":1,"n":"mapHeight","t":4,"rt":$n[1].Int32,"sn":"mapHeight","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"mapWidth","t":4,"rt":$n[1].Int32,"sn":"mapWidth","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"smallGrassProbability","t":4,"rt":$n[1].Single,"sn":"smallGrassProbability","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"smallGrassTile","t":4,"rt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.TileBase' ) ),"sn":"smallGrassTile"},{"a":1,"n":"stoneProbability","t":4,"rt":$n[1].Single,"sn":"stoneProbability","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"stoneTile","t":4,"rt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.TileBase' ) ),"sn":"stoneTile"},{"a":2,"n":"tilemap","t":4,"rt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) ),"sn":"tilemap"},{"a":2,"n":"validTilePositions","t":4,"rt":$n[4].List$1(UnityEngine.Vector3Int),"sn":"validTilePositions"}]}; }, $n);
    /*RandomTileGenerator end.*/

    /*PickUpMapSword start.*/
    $m("PickUpMapSword", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"other","pt":$n[0].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[1].Void,"p":[$n[0].Collider2D]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"mapSwordGenerator","t":4,"rt":RandomMapSwordGenerator,"sn":"mapSwordGenerator"},{"a":1,"n":"pickedUp","t":4,"rt":$n[1].Boolean,"sn":"pickedUp","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"player","t":4,"rt":$n[0].GameObject,"sn":"player"},{"a":1,"n":"tilePosition","t":4,"rt":$n[0].Vector3Int,"sn":"tilePosition"}]}; }, $n);
    /*PickUpMapSword end.*/

    /*SpinningSword start.*/
    $m("SpinningSword", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyTemporaryKnockback","t":8,"pi":[{"n":"character","pt":BaseCharacter,"ps":0},{"n":"direction","pt":$n[0].Vector2,"ps":1},{"n":"force","pt":$n[1].Single,"ps":2}],"sn":"ApplyTemporaryKnockback","rt":$n[2].IEnumerator,"p":[BaseCharacter,$n[0].Vector2,$n[1].Single]},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"other","pt":$n[0].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[1].Void,"p":[$n[0].Collider2D]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"UpdateOrbitPosition","t":8,"sn":"UpdateOrbitPosition","rt":$n[1].Void},{"a":2,"n":"characterTransform","t":4,"rt":$n[0].Transform,"sn":"characterTransform"},{"a":1,"n":"clashSwordAudioSource","t":4,"rt":$n[0].AudioSource,"sn":"clashSwordAudioSource"},{"a":2,"n":"currentAngle","t":4,"rt":$n[1].Single,"sn":"currentAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"flyDirection","t":4,"rt":$n[0].Vector2,"sn":"flyDirection"},{"a":1,"n":"flySpeed","t":4,"rt":$n[1].Single,"sn":"flySpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isFlyingAway","t":4,"rt":$n[1].Boolean,"sn":"isFlyingAway","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"knockbackForce","t":4,"rt":$n[1].Single,"sn":"knockbackForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"orbitRadius","t":4,"rt":$n[1].Single,"sn":"orbitRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"orbitSpeed","t":4,"rt":$n[1].Single,"sn":"orbitSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"swordCollider","t":4,"rt":$n[0].BoxCollider2D,"sn":"swordCollider"},{"a":2,"n":"swordDamage","t":4,"rt":$n[1].Int32,"sn":"swordDamage","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SpinningSword end.*/

    /*SpinningSwordController start.*/
    $m("SpinningSwordController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddSword","t":8,"sn":"AddSword","rt":$n[1].Void},{"a":2,"n":"DestroyAllSwords","t":8,"sn":"DestroyAllSwords","rt":$n[1].Void},{"a":2,"n":"HasSword","t":8,"sn":"HasSword","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"InitializeSwords","t":8,"pi":[{"n":"count","pt":$n[1].Int32,"ps":0}],"sn":"InitializeSwords","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"RemoveSword","t":8,"pi":[{"n":"sword","pt":$n[0].GameObject,"ps":0}],"sn":"RemoveSword","rt":$n[1].Void,"p":[$n[0].GameObject]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"TransferAllSwords","t":8,"pi":[{"n":"targetController","pt":SpinningSwordController,"ps":0}],"sn":"TransferAllSwords","rt":$n[1].Void,"p":[SpinningSwordController]},{"a":1,"n":"UpdateSwordPositions","t":8,"sn":"UpdateSwordPositions","rt":$n[1].Void},{"a":1,"n":"activeSwords","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"activeSwords"},{"a":1,"n":"character","t":4,"rt":BaseCharacter,"sn":"character"},{"a":1,"n":"orbitRadius","t":4,"rt":$n[1].Single,"sn":"orbitRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"orbitSpeed","t":4,"rt":$n[1].Single,"sn":"orbitSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"swordOrbitPrefab","t":4,"rt":$n[0].GameObject,"sn":"swordOrbitPrefab"}]}; }, $n);
    /*SpinningSwordController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
