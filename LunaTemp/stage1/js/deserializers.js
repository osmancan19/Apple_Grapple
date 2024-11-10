var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.JointSpring' )
  var i2681 = data
  i2680.spring = i2681[0]
  i2680.damper = i2681[1]
  i2680.targetPosition = i2681[2]
  return i2680
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.JointMotor' )
  var i2683 = data
  i2682.m_TargetVelocity = i2683[0]
  i2682.m_Force = i2683[1]
  i2682.m_FreeSpin = i2683[2]
  return i2682
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.JointLimits' )
  var i2685 = data
  i2684.m_Min = i2685[0]
  i2684.m_Max = i2685[1]
  i2684.m_Bounciness = i2685[2]
  i2684.m_BounceMinVelocity = i2685[3]
  i2684.m_ContactDistance = i2685[4]
  i2684.minBounce = i2685[5]
  i2684.maxBounce = i2685[6]
  return i2684
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.JointDrive' )
  var i2687 = data
  i2686.m_PositionSpring = i2687[0]
  i2686.m_PositionDamper = i2687[1]
  i2686.m_MaximumForce = i2687[2]
  i2686.m_UseAcceleration = i2687[3]
  return i2686
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2689 = data
  i2688.m_Spring = i2689[0]
  i2688.m_Damper = i2689[1]
  return i2688
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2690 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2691 = data
  i2690.m_Limit = i2691[0]
  i2690.m_Bounciness = i2691[1]
  i2690.m_ContactDistance = i2691[2]
  return i2690
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2693 = data
  i2692.m_ExtremumSlip = i2693[0]
  i2692.m_ExtremumValue = i2693[1]
  i2692.m_AsymptoteSlip = i2693[2]
  i2692.m_AsymptoteValue = i2693[3]
  i2692.m_Stiffness = i2693[4]
  return i2692
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2695 = data
  i2694.m_LowerAngle = i2695[0]
  i2694.m_UpperAngle = i2695[1]
  return i2694
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2697 = data
  i2696.m_MotorSpeed = i2697[0]
  i2696.m_MaximumMotorTorque = i2697[1]
  return i2696
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2699 = data
  i2698.m_DampingRatio = i2699[0]
  i2698.m_Frequency = i2699[1]
  i2698.m_Angle = i2699[2]
  return i2698
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2701 = data
  i2700.m_LowerTranslation = i2701[0]
  i2700.m_UpperTranslation = i2701[1]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2702 = root || new pc.UnityMaterial()
  var i2703 = data
  i2702.name = i2703[0]
  request.r(i2703[1], i2703[2], 0, i2702, 'shader')
  i2702.renderQueue = i2703[3]
  i2702.enableInstancing = !!i2703[4]
  var i2705 = i2703[5]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2705[i + 0]) );
  }
  i2702.floatParameters = i2704
  var i2707 = i2703[6]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2707[i + 0]) );
  }
  i2702.colorParameters = i2706
  var i2709 = i2703[7]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2709[i + 0]) );
  }
  i2702.vectorParameters = i2708
  var i2711 = i2703[8]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2711[i + 0]) );
  }
  i2702.textureParameters = i2710
  var i2713 = i2703[9]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2713[i + 0]) );
  }
  i2702.materialFlags = i2712
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2717 = data
  i2716.name = i2717[0]
  i2716.value = i2717[1]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2721 = data
  i2720.name = i2721[0]
  i2720.value = new pc.Color(i2721[1], i2721[2], i2721[3], i2721[4])
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2725 = data
  i2724.name = i2725[0]
  i2724.value = new pc.Vec4( i2725[1], i2725[2], i2725[3], i2725[4] )
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2729 = data
  i2728.name = i2729[0]
  request.r(i2729[1], i2729[2], 0, i2728, 'value')
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2733 = data
  i2732.name = i2733[0]
  i2732.enabled = !!i2733[1]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2735 = data
  i2734.name = i2735[0]
  i2734.width = i2735[1]
  i2734.height = i2735[2]
  i2734.mipmapCount = i2735[3]
  i2734.anisoLevel = i2735[4]
  i2734.filterMode = i2735[5]
  i2734.hdr = !!i2735[6]
  i2734.format = i2735[7]
  i2734.wrapMode = i2735[8]
  i2734.alphaIsTransparency = !!i2735[9]
  i2734.alphaSource = i2735[10]
  i2734.graphicsFormat = i2735[11]
  i2734.sRGBTexture = !!i2735[12]
  i2734.desiredColorSpace = i2735[13]
  i2734.wrapU = i2735[14]
  i2734.wrapV = i2735[15]
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2737 = data
  i2736.position = new pc.Vec3( i2737[0], i2737[1], i2737[2] )
  i2736.scale = new pc.Vec3( i2737[3], i2737[4], i2737[5] )
  i2736.rotation = new pc.Quat(i2737[6], i2737[7], i2737[8], i2737[9])
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2739 = data
  i2738.enabled = !!i2739[0]
  request.r(i2739[1], i2739[2], 0, i2738, 'sharedMaterial')
  var i2741 = i2739[3]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 2) {
  request.r(i2741[i + 0], i2741[i + 1], 2, i2740, '')
  }
  i2738.sharedMaterials = i2740
  i2738.receiveShadows = !!i2739[4]
  i2738.shadowCastingMode = i2739[5]
  i2738.sortingLayerID = i2739[6]
  i2738.sortingOrder = i2739[7]
  i2738.lightmapIndex = i2739[8]
  i2738.lightmapSceneIndex = i2739[9]
  i2738.lightmapScaleOffset = new pc.Vec4( i2739[10], i2739[11], i2739[12], i2739[13] )
  i2738.lightProbeUsage = i2739[14]
  i2738.reflectionProbeUsage = i2739[15]
  i2738.color = new pc.Color(i2739[16], i2739[17], i2739[18], i2739[19])
  request.r(i2739[20], i2739[21], 0, i2738, 'sprite')
  i2738.flipX = !!i2739[22]
  i2738.flipY = !!i2739[23]
  i2738.drawMode = i2739[24]
  i2738.size = new pc.Vec2( i2739[25], i2739[26] )
  i2738.tileMode = i2739[27]
  i2738.adaptiveModeThreshold = i2739[28]
  i2738.maskInteraction = i2739[29]
  i2738.spriteSortPoint = i2739[30]
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2745 = data
  i2744.bodyType = i2745[0]
  request.r(i2745[1], i2745[2], 0, i2744, 'material')
  i2744.simulated = !!i2745[3]
  i2744.useAutoMass = !!i2745[4]
  i2744.mass = i2745[5]
  i2744.drag = i2745[6]
  i2744.angularDrag = i2745[7]
  i2744.gravityScale = i2745[8]
  i2744.collisionDetectionMode = i2745[9]
  i2744.sleepMode = i2745[10]
  i2744.constraints = i2745[11]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2747 = data
  i2746.usedByComposite = !!i2747[0]
  i2746.autoTiling = !!i2747[1]
  i2746.size = new pc.Vec2( i2747[2], i2747[3] )
  i2746.edgeRadius = i2747[4]
  i2746.enabled = !!i2747[5]
  i2746.isTrigger = !!i2747[6]
  i2746.usedByEffector = !!i2747[7]
  i2746.density = i2747[8]
  i2746.offset = new pc.Vec2( i2747[9], i2747[10] )
  request.r(i2747[11], i2747[12], 0, i2746, 'material')
  return i2746
}

Deserializers["SpinningSword"] = function (request, data, root) {
  var i2748 = root || request.c( 'SpinningSword' )
  var i2749 = data
  request.r(i2749[0], i2749[1], 0, i2748, 'characterTransform')
  i2748.orbitSpeed = i2749[2]
  i2748.orbitRadius = i2749[3]
  i2748.currentAngle = i2749[4]
  i2748.knockbackForce = i2749[5]
  i2748.swordDamage = i2749[6]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2751 = data
  i2750.name = i2751[0]
  i2750.tagId = i2751[1]
  i2750.enabled = !!i2751[2]
  i2750.isStatic = !!i2751[3]
  i2750.layer = i2751[4]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2753 = data
  i2752.radius = i2753[0]
  i2752.enabled = !!i2753[1]
  i2752.isTrigger = !!i2753[2]
  i2752.usedByEffector = !!i2753[3]
  i2752.density = i2753[4]
  i2752.offset = new pc.Vec2( i2753[5], i2753[6] )
  request.r(i2753[7], i2753[8], 0, i2752, 'material')
  return i2752
}

Deserializers["PickUpMapSword"] = function (request, data, root) {
  var i2754 = root || request.c( 'PickUpMapSword' )
  var i2755 = data
  request.r(i2755[0], i2755[1], 0, i2754, 'player')
  request.r(i2755[2], i2755[3], 0, i2754, 'mapSwordGenerator')
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'animatorController')
  request.r(i2757[2], i2757[3], 0, i2756, 'avatar')
  i2756.updateMode = i2757[4]
  i2756.hasTransformHierarchy = !!i2757[5]
  i2756.applyRootMotion = !!i2757[6]
  var i2759 = i2757[7]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 2) {
  request.r(i2759[i + 0], i2759[i + 1], 2, i2758, '')
  }
  i2756.humanBones = i2758
  i2756.enabled = !!i2757[8]
  return i2756
}

Deserializers["Enemy"] = function (request, data, root) {
  var i2762 = root || request.c( 'Enemy' )
  var i2763 = data
  i2762.characterType = i2763[0]
  request.r(i2763[1], i2763[2], 0, i2762, 'healthBar')
  return i2762
}

Deserializers["EnemyMovement"] = function (request, data, root) {
  var i2764 = root || request.c( 'EnemyMovement' )
  var i2765 = data
  i2764.speed = i2765[0]
  request.r(i2765[1], i2765[2], 0, i2764, 'spriteRenderer')
  return i2764
}

Deserializers["SpinningSwordController"] = function (request, data, root) {
  var i2766 = root || request.c( 'SpinningSwordController' )
  var i2767 = data
  request.r(i2767[0], i2767[1], 0, i2766, 'swordOrbitPrefab')
  return i2766
}

Deserializers["DeathAnimation"] = function (request, data, root) {
  var i2768 = root || request.c( 'DeathAnimation' )
  var i2769 = data
  i2768.rotationSpeed = i2769[0]
  i2768.shrinkDuration = i2769[1]
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2771 = data
  i2770.enabled = !!i2771[0]
  request.r(i2771[1], i2771[2], 0, i2770, 'sharedMaterial')
  var i2773 = i2771[3]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 2) {
  request.r(i2773[i + 0], i2773[i + 1], 2, i2772, '')
  }
  i2770.sharedMaterials = i2772
  i2770.receiveShadows = !!i2771[4]
  i2770.shadowCastingMode = i2771[5]
  i2770.sortingLayerID = i2771[6]
  i2770.sortingOrder = i2771[7]
  i2770.lightmapIndex = i2771[8]
  i2770.lightmapSceneIndex = i2771[9]
  i2770.lightmapScaleOffset = new pc.Vec4( i2771[10], i2771[11], i2771[12], i2771[13] )
  i2770.lightProbeUsage = i2771[14]
  i2770.reflectionProbeUsage = i2771[15]
  i2770.frontSortingLayerID = i2771[16]
  i2770.frontSortingOrder = i2771[17]
  i2770.backSortingLayerID = i2771[18]
  i2770.backSortingOrder = i2771[19]
  i2770.alphaCutoff = i2771[20]
  request.r(i2771[21], i2771[22], 0, i2770, 'sprite')
  i2770.tileMode = i2771[23]
  i2770.isCustomRangeActive = !!i2771[24]
  i2770.spriteSortPoint = i2771[25]
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2775 = data
  i2774.pivot = new pc.Vec2( i2775[0], i2775[1] )
  i2774.anchorMin = new pc.Vec2( i2775[2], i2775[3] )
  i2774.anchorMax = new pc.Vec2( i2775[4], i2775[5] )
  i2774.sizeDelta = new pc.Vec2( i2775[6], i2775[7] )
  i2774.anchoredPosition3D = new pc.Vec3( i2775[8], i2775[9], i2775[10] )
  i2774.rotation = new pc.Quat(i2775[11], i2775[12], i2775[13], i2775[14])
  i2774.scale = new pc.Vec3( i2775[15], i2775[16], i2775[17] )
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2777 = data
  request.r(i2777[0], i2777[1], 0, i2776, 'additionalVertexStreams')
  i2776.enabled = !!i2777[2]
  request.r(i2777[3], i2777[4], 0, i2776, 'sharedMaterial')
  var i2779 = i2777[5]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 2) {
  request.r(i2779[i + 0], i2779[i + 1], 2, i2778, '')
  }
  i2776.sharedMaterials = i2778
  i2776.receiveShadows = !!i2777[6]
  i2776.shadowCastingMode = i2777[7]
  i2776.sortingLayerID = i2777[8]
  i2776.sortingOrder = i2777[9]
  i2776.lightmapIndex = i2777[10]
  i2776.lightmapSceneIndex = i2777[11]
  i2776.lightmapScaleOffset = new pc.Vec4( i2777[12], i2777[13], i2777[14], i2777[15] )
  i2776.lightProbeUsage = i2777[16]
  i2776.reflectionProbeUsage = i2777[17]
  return i2776
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2780 = root || request.c( 'TMPro.TextMeshPro' )
  var i2781 = data
  i2780._SortingLayer = i2781[0]
  i2780._SortingLayerID = i2781[1]
  i2780._SortingOrder = i2781[2]
  i2780.m_hasFontAssetChanged = !!i2781[3]
  request.r(i2781[4], i2781[5], 0, i2780, 'm_renderer')
  i2780.m_maskType = i2781[6]
  i2780.m_text = i2781[7]
  i2780.m_isRightToLeft = !!i2781[8]
  request.r(i2781[9], i2781[10], 0, i2780, 'm_fontAsset')
  request.r(i2781[11], i2781[12], 0, i2780, 'm_sharedMaterial')
  var i2783 = i2781[13]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 2) {
  request.r(i2783[i + 0], i2783[i + 1], 2, i2782, '')
  }
  i2780.m_fontSharedMaterials = i2782
  request.r(i2781[14], i2781[15], 0, i2780, 'm_fontMaterial')
  var i2785 = i2781[16]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 2) {
  request.r(i2785[i + 0], i2785[i + 1], 2, i2784, '')
  }
  i2780.m_fontMaterials = i2784
  i2780.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2781[17], i2781[18], i2781[19], i2781[20])
  i2780.m_fontColor = new pc.Color(i2781[21], i2781[22], i2781[23], i2781[24])
  i2780.m_enableVertexGradient = !!i2781[25]
  i2780.m_colorMode = i2781[26]
  i2780.m_fontColorGradient = request.d('TMPro.VertexGradient', i2781[27], i2780.m_fontColorGradient)
  request.r(i2781[28], i2781[29], 0, i2780, 'm_fontColorGradientPreset')
  request.r(i2781[30], i2781[31], 0, i2780, 'm_spriteAsset')
  i2780.m_tintAllSprites = !!i2781[32]
  request.r(i2781[33], i2781[34], 0, i2780, 'm_StyleSheet')
  i2780.m_TextStyleHashCode = i2781[35]
  i2780.m_overrideHtmlColors = !!i2781[36]
  i2780.m_faceColor = UnityEngine.Color32.ConstructColor(i2781[37], i2781[38], i2781[39], i2781[40])
  i2780.m_fontSize = i2781[41]
  i2780.m_fontSizeBase = i2781[42]
  i2780.m_fontWeight = i2781[43]
  i2780.m_enableAutoSizing = !!i2781[44]
  i2780.m_fontSizeMin = i2781[45]
  i2780.m_fontSizeMax = i2781[46]
  i2780.m_fontStyle = i2781[47]
  i2780.m_HorizontalAlignment = i2781[48]
  i2780.m_VerticalAlignment = i2781[49]
  i2780.m_textAlignment = i2781[50]
  i2780.m_characterSpacing = i2781[51]
  i2780.m_wordSpacing = i2781[52]
  i2780.m_lineSpacing = i2781[53]
  i2780.m_lineSpacingMax = i2781[54]
  i2780.m_paragraphSpacing = i2781[55]
  i2780.m_charWidthMaxAdj = i2781[56]
  i2780.m_enableWordWrapping = !!i2781[57]
  i2780.m_wordWrappingRatios = i2781[58]
  i2780.m_overflowMode = i2781[59]
  request.r(i2781[60], i2781[61], 0, i2780, 'm_linkedTextComponent')
  request.r(i2781[62], i2781[63], 0, i2780, 'parentLinkedComponent')
  i2780.m_enableKerning = !!i2781[64]
  i2780.m_enableExtraPadding = !!i2781[65]
  i2780.checkPaddingRequired = !!i2781[66]
  i2780.m_isRichText = !!i2781[67]
  i2780.m_parseCtrlCharacters = !!i2781[68]
  i2780.m_isOrthographic = !!i2781[69]
  i2780.m_isCullingEnabled = !!i2781[70]
  i2780.m_horizontalMapping = i2781[71]
  i2780.m_verticalMapping = i2781[72]
  i2780.m_uvLineOffset = i2781[73]
  i2780.m_geometrySortingOrder = i2781[74]
  i2780.m_IsTextObjectScaleStatic = !!i2781[75]
  i2780.m_VertexBufferAutoSizeReduction = !!i2781[76]
  i2780.m_useMaxVisibleDescender = !!i2781[77]
  i2780.m_pageToDisplay = i2781[78]
  i2780.m_margin = new pc.Vec4( i2781[79], i2781[80], i2781[81], i2781[82] )
  i2780.m_isUsingLegacyAnimationComponent = !!i2781[83]
  i2780.m_isVolumetricText = !!i2781[84]
  request.r(i2781[85], i2781[86], 0, i2780, 'm_Material')
  i2780.m_Maskable = !!i2781[87]
  i2780.m_Color = new pc.Color(i2781[88], i2781[89], i2781[90], i2781[91])
  i2780.m_RaycastTarget = !!i2781[92]
  i2780.m_RaycastPadding = new pc.Vec4( i2781[93], i2781[94], i2781[95], i2781[96] )
  return i2780
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2786 = root || request.c( 'TMPro.VertexGradient' )
  var i2787 = data
  i2786.topLeft = new pc.Color(i2787[0], i2787[1], i2787[2], i2787[3])
  i2786.topRight = new pc.Color(i2787[4], i2787[5], i2787[6], i2787[7])
  i2786.bottomLeft = new pc.Color(i2787[8], i2787[9], i2787[10], i2787[11])
  i2786.bottomRight = new pc.Color(i2787[12], i2787[13], i2787[14], i2787[15])
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2789 = data
  i2788.enabled = !!i2789[0]
  i2788.planeDistance = i2789[1]
  i2788.referencePixelsPerUnit = i2789[2]
  i2788.isFallbackOverlay = !!i2789[3]
  i2788.renderMode = i2789[4]
  i2788.renderOrder = i2789[5]
  i2788.sortingLayerName = i2789[6]
  i2788.sortingOrder = i2789[7]
  i2788.scaleFactor = i2789[8]
  request.r(i2789[9], i2789[10], 0, i2788, 'worldCamera')
  i2788.overrideSorting = !!i2789[11]
  i2788.pixelPerfect = !!i2789[12]
  i2788.targetDisplay = i2789[13]
  i2788.overridePixelPerfect = !!i2789[14]
  return i2788
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2790 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2791 = data
  i2790.m_UiScaleMode = i2791[0]
  i2790.m_ReferencePixelsPerUnit = i2791[1]
  i2790.m_ScaleFactor = i2791[2]
  i2790.m_ReferenceResolution = new pc.Vec2( i2791[3], i2791[4] )
  i2790.m_ScreenMatchMode = i2791[5]
  i2790.m_MatchWidthOrHeight = i2791[6]
  i2790.m_PhysicalUnit = i2791[7]
  i2790.m_FallbackScreenDPI = i2791[8]
  i2790.m_DefaultSpriteDPI = i2791[9]
  i2790.m_DynamicPixelsPerUnit = i2791[10]
  i2790.m_PresetInfoIsWorld = !!i2791[11]
  return i2790
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2792 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2793 = data
  i2792.m_IgnoreReversedGraphics = !!i2793[0]
  i2792.m_BlockingObjects = i2793[1]
  i2792.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2793[2] )
  return i2792
}

Deserializers["HealthBarCanvas"] = function (request, data, root) {
  var i2794 = root || request.c( 'HealthBarCanvas' )
  var i2795 = data
  return i2794
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2796 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2797 = data
  request.r(i2797[0], i2797[1], 0, i2796, 'm_FillRect')
  request.r(i2797[2], i2797[3], 0, i2796, 'm_HandleRect')
  i2796.m_Direction = i2797[4]
  i2796.m_MinValue = i2797[5]
  i2796.m_MaxValue = i2797[6]
  i2796.m_WholeNumbers = !!i2797[7]
  i2796.m_Value = i2797[8]
  i2796.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2797[9], i2796.m_OnValueChanged)
  i2796.m_Navigation = request.d('UnityEngine.UI.Navigation', i2797[10], i2796.m_Navigation)
  i2796.m_Transition = i2797[11]
  i2796.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2797[12], i2796.m_Colors)
  i2796.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2797[13], i2796.m_SpriteState)
  i2796.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2797[14], i2796.m_AnimationTriggers)
  i2796.m_Interactable = !!i2797[15]
  request.r(i2797[16], i2797[17], 0, i2796, 'm_TargetGraphic')
  return i2796
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2798 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2799 = data
  i2798.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2799[0], i2798.m_PersistentCalls)
  return i2798
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2800 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2801 = data
  var i2803 = i2801[0]
  var i2802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.add(request.d('UnityEngine.Events.PersistentCall', i2803[i + 0]));
  }
  i2800.m_Calls = i2802
  return i2800
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2806 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2807 = data
  request.r(i2807[0], i2807[1], 0, i2806, 'm_Target')
  i2806.m_TargetAssemblyTypeName = i2807[2]
  i2806.m_MethodName = i2807[3]
  i2806.m_Mode = i2807[4]
  i2806.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2807[5], i2806.m_Arguments)
  i2806.m_CallState = i2807[6]
  return i2806
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2808 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2809 = data
  i2808.m_Mode = i2809[0]
  i2808.m_WrapAround = !!i2809[1]
  request.r(i2809[2], i2809[3], 0, i2808, 'm_SelectOnUp')
  request.r(i2809[4], i2809[5], 0, i2808, 'm_SelectOnDown')
  request.r(i2809[6], i2809[7], 0, i2808, 'm_SelectOnLeft')
  request.r(i2809[8], i2809[9], 0, i2808, 'm_SelectOnRight')
  return i2808
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2810 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2811 = data
  i2810.m_NormalColor = new pc.Color(i2811[0], i2811[1], i2811[2], i2811[3])
  i2810.m_HighlightedColor = new pc.Color(i2811[4], i2811[5], i2811[6], i2811[7])
  i2810.m_PressedColor = new pc.Color(i2811[8], i2811[9], i2811[10], i2811[11])
  i2810.m_SelectedColor = new pc.Color(i2811[12], i2811[13], i2811[14], i2811[15])
  i2810.m_DisabledColor = new pc.Color(i2811[16], i2811[17], i2811[18], i2811[19])
  i2810.m_ColorMultiplier = i2811[20]
  i2810.m_FadeDuration = i2811[21]
  return i2810
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2812 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2813 = data
  request.r(i2813[0], i2813[1], 0, i2812, 'm_HighlightedSprite')
  request.r(i2813[2], i2813[3], 0, i2812, 'm_PressedSprite')
  request.r(i2813[4], i2813[5], 0, i2812, 'm_SelectedSprite')
  request.r(i2813[6], i2813[7], 0, i2812, 'm_DisabledSprite')
  return i2812
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2814 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2815 = data
  i2814.m_NormalTrigger = i2815[0]
  i2814.m_HighlightedTrigger = i2815[1]
  i2814.m_PressedTrigger = i2815[2]
  i2814.m_SelectedTrigger = i2815[3]
  i2814.m_DisabledTrigger = i2815[4]
  return i2814
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i2816 = root || request.c( 'HealthBar' )
  var i2817 = data
  request.r(i2817[0], i2817[1], 0, i2816, 'slider')
  i2816.gradient = i2817[2] ? new pc.ColorGradient(i2817[2][0], i2817[2][1], i2817[2][2]) : null
  request.r(i2817[3], i2817[4], 0, i2816, 'fill')
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2819 = data
  i2818.cullTransparentMesh = !!i2819[0]
  return i2818
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2820 = root || request.c( 'UnityEngine.UI.Image' )
  var i2821 = data
  request.r(i2821[0], i2821[1], 0, i2820, 'm_Sprite')
  i2820.m_Type = i2821[2]
  i2820.m_PreserveAspect = !!i2821[3]
  i2820.m_FillCenter = !!i2821[4]
  i2820.m_FillMethod = i2821[5]
  i2820.m_FillAmount = i2821[6]
  i2820.m_FillClockwise = !!i2821[7]
  i2820.m_FillOrigin = i2821[8]
  i2820.m_UseSpriteMesh = !!i2821[9]
  i2820.m_PixelsPerUnitMultiplier = i2821[10]
  request.r(i2821[11], i2821[12], 0, i2820, 'm_Material')
  i2820.m_Maskable = !!i2821[13]
  i2820.m_Color = new pc.Color(i2821[14], i2821[15], i2821[16], i2821[17])
  i2820.m_RaycastTarget = !!i2821[18]
  i2820.m_RaycastPadding = new pc.Vec4( i2821[19], i2821[20], i2821[21], i2821[22] )
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2823 = data
  i2822.name = i2823[0]
  i2822.atlasId = i2823[1]
  i2822.mipmapCount = i2823[2]
  i2822.hdr = !!i2823[3]
  i2822.size = i2823[4]
  i2822.anisoLevel = i2823[5]
  i2822.filterMode = i2823[6]
  var i2825 = i2823[7]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 4) {
    i2824.push( UnityEngine.Rect.MinMaxRect(i2825[i + 0], i2825[i + 1], i2825[i + 2], i2825[i + 3]) );
  }
  i2822.rects = i2824
  i2822.wrapU = i2823[8]
  i2822.wrapV = i2823[9]
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2829 = data
  i2828.name = i2829[0]
  i2828.index = i2829[1]
  i2828.startup = !!i2829[2]
  return i2828
}

Deserializers["LevelLoader"] = function (request, data, root) {
  var i2830 = root || request.c( 'LevelLoader' )
  var i2831 = data
  request.r(i2831[0], i2831[1], 0, i2830, 'transition')
  i2830.transitionTime = i2831[2]
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2833 = data
  i2832.m_Alpha = i2833[0]
  i2832.m_Interactable = !!i2833[1]
  i2832.m_BlocksRaycasts = !!i2833[2]
  i2832.m_IgnoreParentGroups = !!i2833[3]
  i2832.enabled = !!i2833[4]
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2835 = data
  request.r(i2835[0], i2835[1], 0, i2834, 'clip')
  request.r(i2835[2], i2835[3], 0, i2834, 'outputAudioMixerGroup')
  i2834.playOnAwake = !!i2835[4]
  i2834.loop = !!i2835[5]
  i2834.time = i2835[6]
  i2834.volume = i2835[7]
  i2834.pitch = i2835[8]
  i2834.enabled = !!i2835[9]
  return i2834
}

Deserializers["RandomTileGenerator"] = function (request, data, root) {
  var i2836 = root || request.c( 'RandomTileGenerator' )
  var i2837 = data
  request.r(i2837[0], i2837[1], 0, i2836, 'tilemap')
  request.r(i2837[2], i2837[3], 0, i2836, 'bigGrassTile')
  request.r(i2837[4], i2837[5], 0, i2836, 'smallGrassTile')
  request.r(i2837[6], i2837[7], 0, i2836, 'baseGroundTile')
  request.r(i2837[8], i2837[9], 0, i2836, 'stoneTile')
  return i2836
}

Deserializers["RandomMapSwordGenerator"] = function (request, data, root) {
  var i2838 = root || request.c( 'RandomMapSwordGenerator' )
  var i2839 = data
  request.r(i2839[0], i2839[1], 0, i2838, 'tilemap')
  request.r(i2839[2], i2839[3], 0, i2838, 'mapSwordPrefab')
  request.r(i2839[4], i2839[5], 0, i2838, 'randomTileGenerator')
  return i2838
}

Deserializers["RandomEnemyGenerator"] = function (request, data, root) {
  var i2840 = root || request.c( 'RandomEnemyGenerator' )
  var i2841 = data
  request.r(i2841[0], i2841[1], 0, i2840, 'enemyPrefab')
  request.r(i2841[2], i2841[3], 0, i2840, 'randomTileGenerator')
  return i2840
}

Deserializers["PlayerMovement"] = function (request, data, root) {
  var i2842 = root || request.c( 'PlayerMovement' )
  var i2843 = data
  request.r(i2843[0], i2843[1], 0, i2842, 'animator')
  request.r(i2843[2], i2843[3], 0, i2842, 'spriteRenderer')
  return i2842
}

Deserializers["Player"] = function (request, data, root) {
  var i2844 = root || request.c( 'Player' )
  var i2845 = data
  i2844.characterType = i2845[0]
  request.r(i2845[1], i2845[2], 0, i2844, 'healthBar')
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2847 = data
  request.r(i2847[0], i2847[1], 0, i2846, 'sharedMesh')
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2849 = data
  i2848.enabled = !!i2849[0]
  i2848.aspect = i2849[1]
  i2848.orthographic = !!i2849[2]
  i2848.orthographicSize = i2849[3]
  i2848.backgroundColor = new pc.Color(i2849[4], i2849[5], i2849[6], i2849[7])
  i2848.nearClipPlane = i2849[8]
  i2848.farClipPlane = i2849[9]
  i2848.fieldOfView = i2849[10]
  i2848.depth = i2849[11]
  i2848.clearFlags = i2849[12]
  i2848.cullingMask = i2849[13]
  i2848.rect = i2849[14]
  request.r(i2849[15], i2849[16], 0, i2848, 'targetTexture')
  i2848.usePhysicalProperties = !!i2849[17]
  i2848.focalLength = i2849[18]
  i2848.sensorSize = new pc.Vec2( i2849[19], i2849[20] )
  i2848.lensShift = new pc.Vec2( i2849[21], i2849[22] )
  i2848.gateFit = i2849[23]
  return i2848
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2850 = root || request.c( 'CameraFollow' )
  var i2851 = data
  request.r(i2851[0], i2851[1], 0, i2850, 'target')
  i2850.offset = new pc.Vec3( i2851[2], i2851[3], i2851[4] )
  return i2850
}

Deserializers["EnemyManager"] = function (request, data, root) {
  var i2852 = root || request.c( 'EnemyManager' )
  var i2853 = data
  i2852.totalEnemiesToKill = i2853[0]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2855 = data
  i2854.ambientIntensity = i2855[0]
  i2854.reflectionIntensity = i2855[1]
  i2854.ambientMode = i2855[2]
  i2854.ambientLight = new pc.Color(i2855[3], i2855[4], i2855[5], i2855[6])
  i2854.ambientSkyColor = new pc.Color(i2855[7], i2855[8], i2855[9], i2855[10])
  i2854.ambientGroundColor = new pc.Color(i2855[11], i2855[12], i2855[13], i2855[14])
  i2854.ambientEquatorColor = new pc.Color(i2855[15], i2855[16], i2855[17], i2855[18])
  i2854.fogColor = new pc.Color(i2855[19], i2855[20], i2855[21], i2855[22])
  i2854.fogEndDistance = i2855[23]
  i2854.fogStartDistance = i2855[24]
  i2854.fogDensity = i2855[25]
  i2854.fog = !!i2855[26]
  request.r(i2855[27], i2855[28], 0, i2854, 'skybox')
  i2854.fogMode = i2855[29]
  var i2857 = i2855[30]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2857[i + 0]) );
  }
  i2854.lightmaps = i2856
  i2854.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2855[31], i2854.lightProbes)
  i2854.lightmapsMode = i2855[32]
  i2854.mixedBakeMode = i2855[33]
  i2854.environmentLightingMode = i2855[34]
  i2854.ambientProbe = new pc.SphericalHarmonicsL2(i2855[35])
  i2854.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2855[36])
  i2854.useReferenceAmbientProbe = !!i2855[37]
  request.r(i2855[38], i2855[39], 0, i2854, 'customReflection')
  request.r(i2855[40], i2855[41], 0, i2854, 'defaultReflection')
  i2854.defaultReflectionMode = i2855[42]
  i2854.defaultReflectionResolution = i2855[43]
  i2854.sunLightObjectId = i2855[44]
  i2854.pixelLightCount = i2855[45]
  i2854.defaultReflectionHDR = !!i2855[46]
  i2854.hasLightDataAsset = !!i2855[47]
  i2854.hasManualGenerate = !!i2855[48]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2861 = data
  request.r(i2861[0], i2861[1], 0, i2860, 'lightmapColor')
  request.r(i2861[2], i2861[3], 0, i2860, 'lightmapDirection')
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2862 = root || new UnityEngine.LightProbes()
  var i2863 = data
  return i2862
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2870 = root || request.c( 'UnityEngine.UI.Button' )
  var i2871 = data
  i2870.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2871[0], i2870.m_OnClick)
  i2870.m_Navigation = request.d('UnityEngine.UI.Navigation', i2871[1], i2870.m_Navigation)
  i2870.m_Transition = i2871[2]
  i2870.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2871[3], i2870.m_Colors)
  i2870.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2871[4], i2870.m_SpriteState)
  i2870.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2871[5], i2870.m_AnimationTriggers)
  i2870.m_Interactable = !!i2871[6]
  request.r(i2871[7], i2871[8], 0, i2870, 'm_TargetGraphic')
  return i2870
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2872 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2873 = data
  i2872.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2873[0], i2872.m_PersistentCalls)
  return i2872
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2874 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2875 = data
  request.r(i2875[0], i2875[1], 0, i2874, 'm_ObjectArgument')
  i2874.m_ObjectArgumentAssemblyTypeName = i2875[2]
  i2874.m_IntArgument = i2875[3]
  i2874.m_FloatArgument = i2875[4]
  i2874.m_StringArgument = i2875[5]
  i2874.m_BoolArgument = !!i2875[6]
  return i2874
}

Deserializers["UrlDirectorFromButton"] = function (request, data, root) {
  var i2876 = root || request.c( 'UrlDirectorFromButton' )
  var i2877 = data
  return i2876
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2878 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2879 = data
  request.r(i2879[0], i2879[1], 0, i2878, 'm_FirstSelected')
  i2878.m_sendNavigationEvents = !!i2879[2]
  i2878.m_DragThreshold = i2879[3]
  return i2878
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2880 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2881 = data
  i2880.m_HorizontalAxis = i2881[0]
  i2880.m_VerticalAxis = i2881[1]
  i2880.m_SubmitButton = i2881[2]
  i2880.m_CancelButton = i2881[3]
  i2880.m_InputActionsPerSecond = i2881[4]
  i2880.m_RepeatDelay = i2881[5]
  i2880.m_ForceModuleActive = !!i2881[6]
  i2880.m_SendPointerHoverToParent = !!i2881[7]
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2883 = data
  var i2885 = i2883[0]
  var i2884 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2885[i + 0]));
  }
  i2882.ShaderCompilationErrors = i2884
  i2882.name = i2883[1]
  i2882.guid = i2883[2]
  var i2887 = i2883[3]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( i2887[i + 0] );
  }
  i2882.shaderDefinedKeywords = i2886
  var i2889 = i2883[4]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2889[i + 0]) );
  }
  i2882.passes = i2888
  var i2891 = i2883[5]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2891[i + 0]) );
  }
  i2882.usePasses = i2890
  var i2893 = i2883[6]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2893[i + 0]) );
  }
  i2882.defaultParameterValues = i2892
  request.r(i2883[7], i2883[8], 0, i2882, 'unityFallbackShader')
  i2882.readDepth = !!i2883[9]
  i2882.isCreatedByShaderGraph = !!i2883[10]
  i2882.usedBatchUniforms = i2883[11]
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2897 = data
  i2896.shaderName = i2897[0]
  i2896.errorMessage = i2897[1]
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2902 = root || new pc.UnityShaderPass()
  var i2903 = data
  i2902.id = i2903[0]
  i2902.subShaderIndex = i2903[1]
  i2902.name = i2903[2]
  i2902.passType = i2903[3]
  i2902.grabPassTextureName = i2903[4]
  i2902.usePass = !!i2903[5]
  i2902.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2903[6], i2902.zTest)
  i2902.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2903[7], i2902.zWrite)
  i2902.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2903[8], i2902.culling)
  i2902.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2903[9], i2902.blending)
  i2902.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2903[10], i2902.alphaBlending)
  i2902.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2903[11], i2902.colorWriteMask)
  i2902.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2903[12], i2902.offsetUnits)
  i2902.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2903[13], i2902.offsetFactor)
  i2902.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2903[14], i2902.stencilRef)
  i2902.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2903[15], i2902.stencilReadMask)
  i2902.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2903[16], i2902.stencilWriteMask)
  i2902.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2903[17], i2902.stencilOp)
  i2902.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2903[18], i2902.stencilOpFront)
  i2902.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2903[19], i2902.stencilOpBack)
  var i2905 = i2903[20]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2905[i + 0]) );
  }
  i2902.tags = i2904
  var i2907 = i2903[21]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( i2907[i + 0] );
  }
  i2902.passDefinedKeywords = i2906
  var i2909 = i2903[22]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2909[i + 0]) );
  }
  i2902.passDefinedKeywordGroups = i2908
  var i2911 = i2903[23]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2911[i + 0]) );
  }
  i2902.variants = i2910
  var i2913 = i2903[24]
  var i2912 = []
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2913[i + 0]) );
  }
  i2902.excludedVariants = i2912
  i2902.hasDepthReader = !!i2903[25]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2915 = data
  i2914.val = i2915[0]
  i2914.name = i2915[1]
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2917 = data
  i2916.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2917[0], i2916.src)
  i2916.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2917[1], i2916.dst)
  i2916.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2917[2], i2916.op)
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2919 = data
  i2918.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2919[0], i2918.pass)
  i2918.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2919[1], i2918.fail)
  i2918.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2919[2], i2918.zFail)
  i2918.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2919[3], i2918.comp)
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2923 = data
  i2922.name = i2923[0]
  i2922.value = i2923[1]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2927 = data
  var i2929 = i2927[0]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.push( i2929[i + 0] );
  }
  i2926.keywords = i2928
  i2926.hasDiscard = !!i2927[1]
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2933 = data
  i2932.passId = i2933[0]
  i2932.subShaderIndex = i2933[1]
  var i2935 = i2933[2]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.push( i2935[i + 0] );
  }
  i2932.keywords = i2934
  i2932.vertexProgram = i2933[3]
  i2932.fragmentProgram = i2933[4]
  i2932.compiledForWebGL2 = !!i2933[5]
  i2932.readDepth = !!i2933[6]
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2939 = data
  request.r(i2939[0], i2939[1], 0, i2938, 'shader')
  i2938.pass = i2939[2]
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2943 = data
  i2942.name = i2943[0]
  i2942.type = i2943[1]
  i2942.value = new pc.Vec4( i2943[2], i2943[3], i2943[4], i2943[5] )
  i2942.textureValue = i2943[6]
  i2942.shaderPropertyFlag = i2943[7]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2945 = data
  i2944.name = i2945[0]
  request.r(i2945[1], i2945[2], 0, i2944, 'texture')
  i2944.aabb = i2945[3]
  i2944.vertices = i2945[4]
  i2944.triangles = i2945[5]
  i2944.textureRect = UnityEngine.Rect.MinMaxRect(i2945[6], i2945[7], i2945[8], i2945[9])
  i2944.packedRect = UnityEngine.Rect.MinMaxRect(i2945[10], i2945[11], i2945[12], i2945[13])
  i2944.border = new pc.Vec4( i2945[14], i2945[15], i2945[16], i2945[17] )
  i2944.transparency = i2945[18]
  i2944.bounds = i2945[19]
  i2944.pixelsPerUnit = i2945[20]
  i2944.textureWidth = i2945[21]
  i2944.textureHeight = i2945[22]
  i2944.nativeSize = new pc.Vec2( i2945[23], i2945[24] )
  i2944.pivot = new pc.Vec2( i2945[25], i2945[26] )
  i2944.textureRectOffset = new pc.Vec2( i2945[27], i2945[28] )
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2947 = data
  i2946.name = i2947[0]
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2949 = data
  i2948.name = i2949[0]
  i2948.wrapMode = i2949[1]
  i2948.isLooping = !!i2949[2]
  i2948.length = i2949[3]
  var i2951 = i2949[4]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 1) {
    i2950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2951[i + 0]) );
  }
  i2948.curves = i2950
  var i2953 = i2949[5]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2953[i + 0]) );
  }
  i2948.events = i2952
  i2948.halfPrecision = !!i2949[6]
  i2948._frameRate = i2949[7]
  i2948.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2949[8], i2948.localBounds)
  i2948.hasMuscleCurves = !!i2949[9]
  var i2955 = i2949[10]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( i2955[i + 0] );
  }
  i2948.clipMuscleConstant = i2954
  i2948.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2949[11], i2948.clipBindingConstant)
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2959 = data
  i2958.path = i2959[0]
  i2958.hash = i2959[1]
  i2958.componentType = i2959[2]
  i2958.property = i2959[3]
  i2958.keys = i2959[4]
  var i2961 = i2959[5]
  var i2960 = []
  for(var i = 0; i < i2961.length; i += 1) {
    i2960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2961[i + 0]) );
  }
  i2958.objectReferenceKeys = i2960
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2965 = data
  i2964.time = i2965[0]
  request.r(i2965[1], i2965[2], 0, i2964, 'value')
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2969 = data
  i2968.functionName = i2969[0]
  i2968.floatParameter = i2969[1]
  i2968.intParameter = i2969[2]
  i2968.stringParameter = i2969[3]
  request.r(i2969[4], i2969[5], 0, i2968, 'objectReferenceParameter')
  i2968.time = i2969[6]
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2971 = data
  i2970.center = new pc.Vec3( i2971[0], i2971[1], i2971[2] )
  i2970.extends = new pc.Vec3( i2971[3], i2971[4], i2971[5] )
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2975 = data
  var i2977 = i2975[0]
  var i2976 = []
  for(var i = 0; i < i2977.length; i += 1) {
    i2976.push( i2977[i + 0] );
  }
  i2974.genericBindings = i2976
  var i2979 = i2975[1]
  var i2978 = []
  for(var i = 0; i < i2979.length; i += 1) {
    i2978.push( i2979[i + 0] );
  }
  i2974.pptrCurveMapping = i2978
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2981 = data
  i2980.name = i2981[0]
  i2980.ascent = i2981[1]
  i2980.originalLineHeight = i2981[2]
  i2980.fontSize = i2981[3]
  var i2983 = i2981[4]
  var i2982 = []
  for(var i = 0; i < i2983.length; i += 1) {
    i2982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2983[i + 0]) );
  }
  i2980.characterInfo = i2982
  request.r(i2981[5], i2981[6], 0, i2980, 'texture')
  i2980.originalFontSize = i2981[7]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2987 = data
  i2986.index = i2987[0]
  i2986.advance = i2987[1]
  i2986.bearing = i2987[2]
  i2986.glyphWidth = i2987[3]
  i2986.glyphHeight = i2987[4]
  i2986.minX = i2987[5]
  i2986.maxX = i2987[6]
  i2986.minY = i2987[7]
  i2986.maxY = i2987[8]
  i2986.uvBottomLeftX = i2987[9]
  i2986.uvBottomLeftY = i2987[10]
  i2986.uvBottomRightX = i2987[11]
  i2986.uvBottomRightY = i2987[12]
  i2986.uvTopLeftX = i2987[13]
  i2986.uvTopLeftY = i2987[14]
  i2986.uvTopRightX = i2987[15]
  i2986.uvTopRightY = i2987[16]
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2989 = data
  i2988.name = i2989[0]
  var i2991 = i2989[1]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2991[i + 0]) );
  }
  i2988.layers = i2990
  var i2993 = i2989[2]
  var i2992 = []
  for(var i = 0; i < i2993.length; i += 1) {
    i2992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2993[i + 0]) );
  }
  i2988.parameters = i2992
  i2988.animationClips = i2989[3]
  i2988.avatarUnsupported = i2989[4]
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2997 = data
  i2996.name = i2997[0]
  i2996.defaultWeight = i2997[1]
  i2996.blendingMode = i2997[2]
  i2996.avatarMask = i2997[3]
  i2996.syncedLayerIndex = i2997[4]
  i2996.syncedLayerAffectsTiming = !!i2997[5]
  i2996.syncedLayers = i2997[6]
  i2996.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2997[7], i2996.stateMachine)
  return i2996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2999 = data
  i2998.id = i2999[0]
  i2998.name = i2999[1]
  i2998.path = i2999[2]
  var i3001 = i2999[3]
  var i3000 = []
  for(var i = 0; i < i3001.length; i += 1) {
    i3000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3001[i + 0]) );
  }
  i2998.states = i3000
  var i3003 = i2999[4]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3003[i + 0]) );
  }
  i2998.machines = i3002
  var i3005 = i2999[5]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 1) {
    i3004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3005[i + 0]) );
  }
  i2998.entryStateTransitions = i3004
  var i3007 = i2999[6]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3007[i + 0]) );
  }
  i2998.exitStateTransitions = i3006
  var i3009 = i2999[7]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 1) {
    i3008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3009[i + 0]) );
  }
  i2998.anyStateTransitions = i3008
  i2998.defaultStateId = i2999[8]
  return i2998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3013 = data
  i3012.id = i3013[0]
  i3012.name = i3013[1]
  i3012.cycleOffset = i3013[2]
  i3012.cycleOffsetParameter = i3013[3]
  i3012.cycleOffsetParameterActive = !!i3013[4]
  i3012.mirror = !!i3013[5]
  i3012.mirrorParameter = i3013[6]
  i3012.mirrorParameterActive = !!i3013[7]
  i3012.motionId = i3013[8]
  i3012.nameHash = i3013[9]
  i3012.fullPathHash = i3013[10]
  i3012.speed = i3013[11]
  i3012.speedParameter = i3013[12]
  i3012.speedParameterActive = !!i3013[13]
  i3012.tag = i3013[14]
  i3012.tagHash = i3013[15]
  i3012.writeDefaultValues = !!i3013[16]
  var i3015 = i3013[17]
  var i3014 = []
  for(var i = 0; i < i3015.length; i += 2) {
  request.r(i3015[i + 0], i3015[i + 1], 2, i3014, '')
  }
  i3012.behaviours = i3014
  var i3017 = i3013[18]
  var i3016 = []
  for(var i = 0; i < i3017.length; i += 1) {
    i3016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3017[i + 0]) );
  }
  i3012.transitions = i3016
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3023 = data
  i3022.fullPath = i3023[0]
  i3022.canTransitionToSelf = !!i3023[1]
  i3022.duration = i3023[2]
  i3022.exitTime = i3023[3]
  i3022.hasExitTime = !!i3023[4]
  i3022.hasFixedDuration = !!i3023[5]
  i3022.interruptionSource = i3023[6]
  i3022.offset = i3023[7]
  i3022.orderedInterruption = !!i3023[8]
  i3022.destinationStateId = i3023[9]
  i3022.isExit = !!i3023[10]
  i3022.mute = !!i3023[11]
  i3022.solo = !!i3023[12]
  var i3025 = i3023[13]
  var i3024 = []
  for(var i = 0; i < i3025.length; i += 1) {
    i3024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3025[i + 0]) );
  }
  i3022.conditions = i3024
  return i3022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3029 = data
  i3028.mode = i3029[0]
  i3028.parameter = i3029[1]
  i3028.threshold = i3029[2]
  return i3028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3035 = data
  i3034.destinationStateId = i3035[0]
  i3034.isExit = !!i3035[1]
  i3034.mute = !!i3035[2]
  i3034.solo = !!i3035[3]
  var i3037 = i3035[4]
  var i3036 = []
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3037[i + 0]) );
  }
  i3034.conditions = i3036
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3041 = data
  i3040.defaultBool = !!i3041[0]
  i3040.defaultFloat = i3041[1]
  i3040.defaultInt = i3041[2]
  i3040.name = i3041[3]
  i3040.nameHash = i3041[4]
  i3040.type = i3041[5]
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3043 = data
  i3042.name = i3043[0]
  i3042.bytes64 = i3043[1]
  i3042.data = i3043[2]
  return i3042
}

Deserializers["UnityEngine.Tilemaps.Tile"] = function (request, data, root) {
  var i3044 = root || request.c( 'UnityEngine.Tilemaps.Tile' )
  var i3045 = data
  request.r(i3045[0], i3045[1], 0, i3044, 'm_Sprite')
  i3044.m_Color = new pc.Color(i3045[2], i3045[3], i3045[4], i3045[5])
  i3044.m_Transform = new pc.Mat4().setData(i3045[6], i3045[7], i3045[8], i3045[9],  i3045[10], i3045[11], i3045[12], i3045[13],  i3045[14], i3045[15], i3045[16], i3045[17],  i3045[18], i3045[19], i3045[20], i3045[21])
  request.r(i3045[22], i3045[23], 0, i3044, 'm_InstancedGameObject')
  i3044.m_Flags = i3045[24]
  i3044.m_ColliderType = i3045[25]
  return i3044
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3046 = root || request.c( 'TMPro.TMP_Settings' )
  var i3047 = data
  i3046.m_enableWordWrapping = !!i3047[0]
  i3046.m_enableKerning = !!i3047[1]
  i3046.m_enableExtraPadding = !!i3047[2]
  i3046.m_enableTintAllSprites = !!i3047[3]
  i3046.m_enableParseEscapeCharacters = !!i3047[4]
  i3046.m_EnableRaycastTarget = !!i3047[5]
  i3046.m_GetFontFeaturesAtRuntime = !!i3047[6]
  i3046.m_missingGlyphCharacter = i3047[7]
  i3046.m_warningsDisabled = !!i3047[8]
  request.r(i3047[9], i3047[10], 0, i3046, 'm_defaultFontAsset')
  i3046.m_defaultFontAssetPath = i3047[11]
  i3046.m_defaultFontSize = i3047[12]
  i3046.m_defaultAutoSizeMinRatio = i3047[13]
  i3046.m_defaultAutoSizeMaxRatio = i3047[14]
  i3046.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3047[15], i3047[16] )
  i3046.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3047[17], i3047[18] )
  i3046.m_autoSizeTextContainer = !!i3047[19]
  i3046.m_IsTextObjectScaleStatic = !!i3047[20]
  var i3049 = i3047[21]
  var i3048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3049.length; i += 2) {
  request.r(i3049[i + 0], i3049[i + 1], 1, i3048, '')
  }
  i3046.m_fallbackFontAssets = i3048
  i3046.m_matchMaterialPreset = !!i3047[22]
  request.r(i3047[23], i3047[24], 0, i3046, 'm_defaultSpriteAsset')
  i3046.m_defaultSpriteAssetPath = i3047[25]
  i3046.m_enableEmojiSupport = !!i3047[26]
  i3046.m_MissingCharacterSpriteUnicode = i3047[27]
  i3046.m_defaultColorGradientPresetsPath = i3047[28]
  request.r(i3047[29], i3047[30], 0, i3046, 'm_defaultStyleSheet')
  i3046.m_StyleSheetsResourcePath = i3047[31]
  request.r(i3047[32], i3047[33], 0, i3046, 'm_leadingCharacters')
  request.r(i3047[34], i3047[35], 0, i3046, 'm_followingCharacters')
  i3046.m_UseModernHangulLineBreakingRules = !!i3047[36]
  return i3046
}

Deserializers["UnityEngine.TextCore.Text.FontAsset"] = function (request, data, root) {
  var i3052 = root || request.c( 'UnityEngine.TextCore.Text.FontAsset' )
  var i3053 = data
  i3052.m_SourceFontFileGUID = i3053[0]
  i3052.m_fontAssetCreationEditorSettings = request.d('UnityEngine.TextCore.Text.FontAssetCreationEditorSettings', i3053[1], i3052.m_fontAssetCreationEditorSettings)
  request.r(i3053[2], i3053[3], 0, i3052, 'm_SourceFontFile')
  i3052.m_SourceFontFilePath = i3053[4]
  i3052.m_AtlasPopulationMode = i3053[5]
  i3052.InternalDynamicOS = !!i3053[6]
  i3052.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3053[7], i3052.m_FaceInfo)
  var i3055 = i3053[8]
  var i3054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3055.length; i += 1) {
    i3054.add(request.d('UnityEngine.TextCore.Glyph', i3055[i + 0]));
  }
  i3052.m_GlyphTable = i3054
  var i3057 = i3053[9]
  var i3056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Text.Character')))
  for(var i = 0; i < i3057.length; i += 1) {
    i3056.add(request.d('UnityEngine.TextCore.Text.Character', i3057[i + 0]));
  }
  i3052.m_CharacterTable = i3056
  var i3059 = i3053[10]
  var i3058 = []
  for(var i = 0; i < i3059.length; i += 2) {
  request.r(i3059[i + 0], i3059[i + 1], 2, i3058, '')
  }
  i3052.m_AtlasTextures = i3058
  i3052.m_AtlasTextureIndex = i3053[11]
  i3052.m_IsMultiAtlasTexturesEnabled = !!i3053[12]
  i3052.m_ClearDynamicDataOnBuild = !!i3053[13]
  i3052.m_AtlasWidth = i3053[14]
  i3052.m_AtlasHeight = i3053[15]
  i3052.m_AtlasPadding = i3053[16]
  i3052.m_AtlasRenderMode = i3053[17]
  var i3061 = i3053[18]
  var i3060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3061.length; i += 1) {
    i3060.add(request.d('UnityEngine.TextCore.GlyphRect', i3061[i + 0]));
  }
  i3052.m_UsedGlyphRects = i3060
  var i3063 = i3053[19]
  var i3062 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3063.length; i += 1) {
    i3062.add(request.d('UnityEngine.TextCore.GlyphRect', i3063[i + 0]));
  }
  i3052.m_FreeGlyphRects = i3062
  i3052.m_FontFeatureTable = request.d('UnityEngine.TextCore.Text.FontFeatureTable', i3053[20], i3052.m_FontFeatureTable)
  var i3065 = i3053[21]
  var i3064 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Text.FontAsset')))
  for(var i = 0; i < i3065.length; i += 2) {
  request.r(i3065[i + 0], i3065[i + 1], 1, i3064, '')
  }
  i3052.m_FallbackFontAssetTable = i3064
  var i3067 = i3053[22]
  var i3066 = []
  for(var i = 0; i < i3067.length; i += 1) {
    i3066.push( request.d('UnityEngine.TextCore.Text.FontWeightPair', i3067[i + 0]) );
  }
  i3052.m_FontWeightTable = i3066
  i3052.m_RegularStyleWeight = i3053[23]
  i3052.m_RegularStyleSpacing = i3053[24]
  i3052.m_BoldStyleWeight = i3053[25]
  i3052.m_BoldStyleSpacing = i3053[26]
  i3052.m_ItalicStyleSlant = i3053[27]
  i3052.m_TabMultiple = i3053[28]
  i3052.m_Version = i3053[29]
  request.r(i3053[30], i3053[31], 0, i3052, 'm_Material')
  return i3052
}

Deserializers["UnityEngine.TextCore.Text.FontAssetCreationEditorSettings"] = function (request, data, root) {
  var i3068 = root || request.c( 'UnityEngine.TextCore.Text.FontAssetCreationEditorSettings' )
  var i3069 = data
  i3068.sourceFontFileGUID = i3069[0]
  i3068.faceIndex = i3069[1]
  i3068.pointSizeSamplingMode = i3069[2]
  i3068.pointSize = i3069[3]
  i3068.padding = i3069[4]
  i3068.paddingMode = i3069[5]
  i3068.packingMode = i3069[6]
  i3068.atlasWidth = i3069[7]
  i3068.atlasHeight = i3069[8]
  i3068.characterSetSelectionMode = i3069[9]
  i3068.characterSequence = i3069[10]
  i3068.referencedFontAssetGUID = i3069[11]
  i3068.referencedTextAssetGUID = i3069[12]
  i3068.fontStyle = i3069[13]
  i3068.fontStyleModifier = i3069[14]
  i3068.renderMode = i3069[15]
  i3068.includeFontFeatures = !!i3069[16]
  return i3068
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3070 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3071 = data
  i3070.m_FaceIndex = i3071[0]
  i3070.m_FamilyName = i3071[1]
  i3070.m_StyleName = i3071[2]
  i3070.m_PointSize = i3071[3]
  i3070.m_Scale = i3071[4]
  i3070.m_UnitsPerEM = i3071[5]
  i3070.m_LineHeight = i3071[6]
  i3070.m_AscentLine = i3071[7]
  i3070.m_CapLine = i3071[8]
  i3070.m_MeanLine = i3071[9]
  i3070.m_Baseline = i3071[10]
  i3070.m_DescentLine = i3071[11]
  i3070.m_SuperscriptOffset = i3071[12]
  i3070.m_SuperscriptSize = i3071[13]
  i3070.m_SubscriptOffset = i3071[14]
  i3070.m_SubscriptSize = i3071[15]
  i3070.m_UnderlineOffset = i3071[16]
  i3070.m_UnderlineThickness = i3071[17]
  i3070.m_StrikethroughOffset = i3071[18]
  i3070.m_StrikethroughThickness = i3071[19]
  i3070.m_TabWidth = i3071[20]
  return i3070
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3074 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3075 = data
  i3074.m_Index = i3075[0]
  i3074.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3075[1], i3074.m_Metrics)
  i3074.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3075[2], i3074.m_GlyphRect)
  i3074.m_Scale = i3075[3]
  i3074.m_AtlasIndex = i3075[4]
  i3074.m_ClassDefinitionType = i3075[5]
  return i3074
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3076 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3077 = data
  i3076.m_Width = i3077[0]
  i3076.m_Height = i3077[1]
  i3076.m_HorizontalBearingX = i3077[2]
  i3076.m_HorizontalBearingY = i3077[3]
  i3076.m_HorizontalAdvance = i3077[4]
  return i3076
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3078 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3079 = data
  i3078.m_X = i3079[0]
  i3078.m_Y = i3079[1]
  i3078.m_Width = i3079[2]
  i3078.m_Height = i3079[3]
  return i3078
}

Deserializers["UnityEngine.TextCore.Text.Character"] = function (request, data, root) {
  var i3082 = root || request.c( 'UnityEngine.TextCore.Text.Character' )
  var i3083 = data
  i3082.m_ElementType = i3083[0]
  i3082.m_Unicode = i3083[1]
  i3082.m_GlyphIndex = i3083[2]
  i3082.m_Scale = i3083[3]
  return i3082
}

Deserializers["UnityEngine.TextCore.Text.FontFeatureTable"] = function (request, data, root) {
  var i3088 = root || request.c( 'UnityEngine.TextCore.Text.FontFeatureTable' )
  var i3089 = data
  var i3091 = i3089[0]
  var i3090 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3091.length; i += 1) {
    i3090.add(request.d('UnityEngine.TextCore.LowLevel.MultipleSubstitutionRecord', i3091[i + 0]));
  }
  i3088.m_MultipleSubstitutionRecords = i3090
  var i3093 = i3089[1]
  var i3092 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3093.length; i += 1) {
    i3092.add(request.d('UnityEngine.TextCore.LowLevel.LigatureSubstitutionRecord', i3093[i + 0]));
  }
  i3088.m_LigatureSubstitutionRecords = i3092
  var i3095 = i3089[2]
  var i3094 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3095.length; i += 1) {
    i3094.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3095[i + 0]));
  }
  i3088.m_GlyphPairAdjustmentRecords = i3094
  var i3097 = i3089[3]
  var i3096 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3097.length; i += 1) {
    i3096.add(request.d('UnityEngine.TextCore.LowLevel.MarkToBaseAdjustmentRecord', i3097[i + 0]));
  }
  i3088.m_MarkToBaseAdjustmentRecords = i3096
  var i3099 = i3089[4]
  var i3098 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3099.length; i += 1) {
    i3098.add(request.d('UnityEngine.TextCore.LowLevel.MarkToMarkAdjustmentRecord', i3099[i + 0]));
  }
  i3088.m_MarkToMarkAdjustmentRecords = i3098
  return i3088
}

Deserializers["UnityEngine.TextCore.LowLevel.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3102 = root || request.c( 'UnityEngine.TextCore.LowLevel.MultipleSubstitutionRecord' )
  var i3103 = data
  i3102.m_TargetGlyphID = i3103[0]
  i3102.m_SubstituteGlyphIDs = i3103[1]
  return i3102
}

Deserializers["UnityEngine.TextCore.LowLevel.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3106 = root || request.c( 'UnityEngine.TextCore.LowLevel.LigatureSubstitutionRecord' )
  var i3107 = data
  i3106.m_ComponentGlyphIDs = i3107[0]
  i3106.m_LigatureGlyphID = i3107[1]
  return i3106
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3111 = data
  i3110.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3111[0], i3110.m_FirstAdjustmentRecord)
  i3110.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3111[1], i3110.m_SecondAdjustmentRecord)
  i3110.m_FeatureLookupFlags = i3111[2]
  return i3110
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3113 = data
  i3112.m_GlyphIndex = i3113[0]
  i3112.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3113[1], i3112.m_GlyphValueRecord)
  return i3112
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3114 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3115 = data
  i3114.m_XPlacement = i3115[0]
  i3114.m_YPlacement = i3115[1]
  i3114.m_XAdvance = i3115[2]
  i3114.m_YAdvance = i3115[3]
  return i3114
}

Deserializers["UnityEngine.TextCore.LowLevel.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3118 = root || request.c( 'UnityEngine.TextCore.LowLevel.MarkToBaseAdjustmentRecord' )
  var i3119 = data
  i3118.m_BaseGlyphID = i3119[0]
  i3118.m_BaseGlyphAnchorPoint = request.d('UnityEngine.TextCore.LowLevel.GlyphAnchorPoint', i3119[1], i3118.m_BaseGlyphAnchorPoint)
  i3118.m_MarkGlyphID = i3119[2]
  i3118.m_MarkPositionAdjustment = request.d('UnityEngine.TextCore.LowLevel.MarkPositionAdjustment', i3119[3], i3118.m_MarkPositionAdjustment)
  return i3118
}

Deserializers["UnityEngine.TextCore.LowLevel.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3122 = root || request.c( 'UnityEngine.TextCore.LowLevel.MarkToMarkAdjustmentRecord' )
  var i3123 = data
  i3122.m_BaseMarkGlyphID = i3123[0]
  i3122.m_BaseMarkGlyphAnchorPoint = request.d('UnityEngine.TextCore.LowLevel.GlyphAnchorPoint', i3123[1], i3122.m_BaseMarkGlyphAnchorPoint)
  i3122.m_CombiningMarkGlyphID = i3123[2]
  i3122.m_CombiningMarkPositionAdjustment = request.d('UnityEngine.TextCore.LowLevel.MarkPositionAdjustment', i3123[3], i3122.m_CombiningMarkPositionAdjustment)
  return i3122
}

Deserializers["UnityEngine.TextCore.Text.FontWeightPair"] = function (request, data, root) {
  var i3128 = root || request.c( 'UnityEngine.TextCore.Text.FontWeightPair' )
  var i3129 = data
  request.r(i3129[0], i3129[1], 0, i3128, 'regularTypeface')
  request.r(i3129[2], i3129[3], 0, i3128, 'italicTypeface')
  return i3128
}

Deserializers["UnityEngine.TextCore.Text.SpriteAsset"] = function (request, data, root) {
  var i3130 = root || request.c( 'UnityEngine.TextCore.Text.SpriteAsset' )
  var i3131 = data
  var i3133 = i3131[0]
  var i3132 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Text.SpriteAsset')))
  for(var i = 0; i < i3133.length; i += 2) {
  request.r(i3133[i + 0], i3133[i + 1], 1, i3132, '')
  }
  i3130.fallbackSpriteAssets = i3132
  i3130.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3131[1], i3130.m_FaceInfo)
  request.r(i3131[2], i3131[3], 0, i3130, 'm_SpriteAtlasTexture')
  var i3135 = i3131[4]
  var i3134 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Text.SpriteCharacter')))
  for(var i = 0; i < i3135.length; i += 1) {
    i3134.add(request.d('UnityEngine.TextCore.Text.SpriteCharacter', i3135[i + 0]));
  }
  i3130.m_SpriteCharacterTable = i3134
  var i3137 = i3131[5]
  var i3136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Text.SpriteGlyph')))
  for(var i = 0; i < i3137.length; i += 1) {
    i3136.add(request.d('UnityEngine.TextCore.Text.SpriteGlyph', i3137[i + 0]));
  }
  i3130.m_SpriteGlyphTable = i3136
  i3130.m_Version = i3131[6]
  request.r(i3131[7], i3131[8], 0, i3130, 'm_Material')
  return i3130
}

Deserializers["UnityEngine.TextCore.Text.SpriteCharacter"] = function (request, data, root) {
  var i3142 = root || request.c( 'UnityEngine.TextCore.Text.SpriteCharacter' )
  var i3143 = data
  i3142.m_Name = i3143[0]
  i3142.m_ElementType = i3143[1]
  i3142.m_Unicode = i3143[2]
  i3142.m_GlyphIndex = i3143[3]
  i3142.m_Scale = i3143[4]
  return i3142
}

Deserializers["UnityEngine.TextCore.Text.SpriteGlyph"] = function (request, data, root) {
  var i3146 = root || request.c( 'UnityEngine.TextCore.Text.SpriteGlyph' )
  var i3147 = data
  request.r(i3147[0], i3147[1], 0, i3146, 'sprite')
  i3146.m_Index = i3147[2]
  i3146.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3147[3], i3146.m_Metrics)
  i3146.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3147[4], i3146.m_GlyphRect)
  i3146.m_Scale = i3147[5]
  i3146.m_AtlasIndex = i3147[6]
  i3146.m_ClassDefinitionType = i3147[7]
  return i3146
}

Deserializers["UnityEngine.TextCore.Text.TextStyleSheet"] = function (request, data, root) {
  var i3148 = root || request.c( 'UnityEngine.TextCore.Text.TextStyleSheet' )
  var i3149 = data
  var i3151 = i3149[0]
  var i3150 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Text.TextStyle')))
  for(var i = 0; i < i3151.length; i += 1) {
    i3150.add(request.d('UnityEngine.TextCore.Text.TextStyle', i3151[i + 0]));
  }
  i3148.m_StyleList = i3150
  return i3148
}

Deserializers["UnityEngine.TextCore.Text.TextStyle"] = function (request, data, root) {
  var i3154 = root || request.c( 'UnityEngine.TextCore.Text.TextStyle' )
  var i3155 = data
  i3154.m_Name = i3155[0]
  i3154.m_HashCode = i3155[1]
  i3154.m_OpeningDefinition = i3155[2]
  i3154.m_ClosingDefinition = i3155[3]
  i3154.m_OpeningTagArray = i3155[4]
  i3154.m_ClosingTagArray = i3155[5]
  i3154.m_OpeningTagUnicodeArray = i3155[6]
  i3154.m_ClosingTagUnicodeArray = i3155[7]
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3157 = data
  var i3159 = i3157[0]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3159[i + 0]) );
  }
  i3156.files = i3158
  i3156.componentToPrefabIds = i3157[1]
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3163 = data
  i3162.path = i3163[0]
  request.r(i3163[1], i3163[2], 0, i3162, 'unityObject')
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3165 = data
  var i3167 = i3165[0]
  var i3166 = []
  for(var i = 0; i < i3167.length; i += 1) {
    i3166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3167[i + 0]) );
  }
  i3164.scriptsExecutionOrder = i3166
  var i3169 = i3165[1]
  var i3168 = []
  for(var i = 0; i < i3169.length; i += 1) {
    i3168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3169[i + 0]) );
  }
  i3164.sortingLayers = i3168
  var i3171 = i3165[2]
  var i3170 = []
  for(var i = 0; i < i3171.length; i += 1) {
    i3170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3171[i + 0]) );
  }
  i3164.cullingLayers = i3170
  i3164.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3165[3], i3164.timeSettings)
  i3164.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3165[4], i3164.physicsSettings)
  i3164.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3165[5], i3164.physics2DSettings)
  i3164.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3165[6], i3164.qualitySettings)
  i3164.enableRealtimeShadows = !!i3165[7]
  i3164.enableAutoInstancing = !!i3165[8]
  i3164.enableDynamicBatching = !!i3165[9]
  i3164.lightmapEncodingQuality = i3165[10]
  i3164.desiredColorSpace = i3165[11]
  var i3173 = i3165[12]
  var i3172 = []
  for(var i = 0; i < i3173.length; i += 1) {
    i3172.push( i3173[i + 0] );
  }
  i3164.allTags = i3172
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3177 = data
  i3176.name = i3177[0]
  i3176.value = i3177[1]
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3181 = data
  i3180.id = i3181[0]
  i3180.name = i3181[1]
  i3180.value = i3181[2]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3185 = data
  i3184.id = i3185[0]
  i3184.name = i3185[1]
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3187 = data
  i3186.fixedDeltaTime = i3187[0]
  i3186.maximumDeltaTime = i3187[1]
  i3186.timeScale = i3187[2]
  i3186.maximumParticleTimestep = i3187[3]
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3189 = data
  i3188.gravity = new pc.Vec3( i3189[0], i3189[1], i3189[2] )
  i3188.defaultSolverIterations = i3189[3]
  i3188.bounceThreshold = i3189[4]
  i3188.autoSyncTransforms = !!i3189[5]
  i3188.autoSimulation = !!i3189[6]
  var i3191 = i3189[7]
  var i3190 = []
  for(var i = 0; i < i3191.length; i += 1) {
    i3190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3191[i + 0]) );
  }
  i3188.collisionMatrix = i3190
  return i3188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3195 = data
  i3194.enabled = !!i3195[0]
  i3194.layerId = i3195[1]
  i3194.otherLayerId = i3195[2]
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3197 = data
  request.r(i3197[0], i3197[1], 0, i3196, 'material')
  i3196.gravity = new pc.Vec2( i3197[2], i3197[3] )
  i3196.positionIterations = i3197[4]
  i3196.velocityIterations = i3197[5]
  i3196.velocityThreshold = i3197[6]
  i3196.maxLinearCorrection = i3197[7]
  i3196.maxAngularCorrection = i3197[8]
  i3196.maxTranslationSpeed = i3197[9]
  i3196.maxRotationSpeed = i3197[10]
  i3196.baumgarteScale = i3197[11]
  i3196.baumgarteTOIScale = i3197[12]
  i3196.timeToSleep = i3197[13]
  i3196.linearSleepTolerance = i3197[14]
  i3196.angularSleepTolerance = i3197[15]
  i3196.defaultContactOffset = i3197[16]
  i3196.autoSimulation = !!i3197[17]
  i3196.queriesHitTriggers = !!i3197[18]
  i3196.queriesStartInColliders = !!i3197[19]
  i3196.callbacksOnDisable = !!i3197[20]
  i3196.reuseCollisionCallbacks = !!i3197[21]
  i3196.autoSyncTransforms = !!i3197[22]
  var i3199 = i3197[23]
  var i3198 = []
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3199[i + 0]) );
  }
  i3196.collisionMatrix = i3198
  return i3196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3203 = data
  i3202.enabled = !!i3203[0]
  i3202.layerId = i3203[1]
  i3202.otherLayerId = i3203[2]
  return i3202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3205 = data
  var i3207 = i3205[0]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 1) {
    i3206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3207[i + 0]) );
  }
  i3204.qualityLevels = i3206
  var i3209 = i3205[1]
  var i3208 = []
  for(var i = 0; i < i3209.length; i += 1) {
    i3208.push( i3209[i + 0] );
  }
  i3204.names = i3208
  i3204.shadows = i3205[2]
  i3204.anisotropicFiltering = i3205[3]
  i3204.antiAliasing = i3205[4]
  i3204.lodBias = i3205[5]
  i3204.shadowCascades = i3205[6]
  i3204.shadowDistance = i3205[7]
  i3204.shadowmaskMode = i3205[8]
  i3204.shadowProjection = i3205[9]
  i3204.shadowResolution = i3205[10]
  i3204.softParticles = !!i3205[11]
  i3204.softVegetation = !!i3205[12]
  i3204.activeColorSpace = i3205[13]
  i3204.desiredColorSpace = i3205[14]
  i3204.masterTextureLimit = i3205[15]
  i3204.maxQueuedFrames = i3205[16]
  i3204.particleRaycastBudget = i3205[17]
  i3204.pixelLightCount = i3205[18]
  i3204.realtimeReflectionProbes = !!i3205[19]
  i3204.shadowCascade2Split = i3205[20]
  i3204.shadowCascade4Split = new pc.Vec3( i3205[21], i3205[22], i3205[23] )
  i3204.streamingMipmapsActive = !!i3205[24]
  i3204.vSyncCount = i3205[25]
  i3204.asyncUploadBufferSize = i3205[26]
  i3204.asyncUploadTimeSlice = i3205[27]
  i3204.billboardsFaceCameraPosition = !!i3205[28]
  i3204.shadowNearPlaneOffset = i3205[29]
  i3204.streamingMipmapsMemoryBudget = i3205[30]
  i3204.maximumLODLevel = i3205[31]
  i3204.streamingMipmapsAddAllCameras = !!i3205[32]
  i3204.streamingMipmapsMaxLevelReduction = i3205[33]
  i3204.streamingMipmapsRenderersPerFrame = i3205[34]
  i3204.resolutionScalingFixedDPIFactor = i3205[35]
  i3204.streamingMipmapsMaxFileIORequests = i3205[36]
  i3204.currentQualityLevel = i3205[37]
  return i3204
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAnchorPoint"] = function (request, data, root) {
  var i3212 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAnchorPoint' )
  var i3213 = data
  i3212.m_XCoordinate = i3213[0]
  i3212.m_YCoordinate = i3213[1]
  return i3212
}

Deserializers["UnityEngine.TextCore.LowLevel.MarkPositionAdjustment"] = function (request, data, root) {
  var i3214 = root || request.c( 'UnityEngine.TextCore.LowLevel.MarkPositionAdjustment' )
  var i3215 = data
  i3214.m_XPositionAdjustment = i3215[0]
  i3214.m_YPositionAdjustment = i3215[1]
  return i3214
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"frontSortingLayerID":16,"frontSortingOrder":17,"backSortingLayerID":18,"backSortingOrder":19,"alphaCutoff":20,"sprite":21,"tileMode":23,"isCustomRangeActive":24,"spriteSortPoint":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[33],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[6],"81":[6],"82":[6],"83":[6],"84":[6],"85":[6],"86":[6],"87":[6],"88":[6],"89":[6],"90":[6],"91":[6],"92":[6],"93":[33],"94":[22],"39":[38],"95":[38],"25":[21],"96":[97],"98":[21],"99":[21],"27":[25],"30":[31,21],"100":[21],"26":[25],"101":[21],"102":[21],"103":[21],"104":[21],"105":[21],"106":[21],"107":[21],"108":[21],"109":[21],"110":[31,21],"111":[21],"112":[21],"113":[21],"29":[21],"114":[31,21],"115":[21],"116":[53],"117":[53],"54":[53],"118":[53],"119":[33],"120":[33],"121":[97],"122":[53],"123":[25],"124":[21],"24":[22,21],"125":[21,31],"126":[21],"127":[31,21],"128":[22],"129":[31,21],"130":[21],"131":[97]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UnityEngine.MonoBehaviour","SpinningSword","UnityEngine.CircleCollider2D","PickUpMapSword","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Enemy","HealthBar","EnemyMovement","SpinningSwordController","UnityEngine.GameObject","DeathAnimation","UnityEngine.SpriteMask","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","HealthBarCanvas","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","LevelLoader","UnityEngine.Camera","UnityEngine.CanvasGroup","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Grid","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapRenderer","RandomTileGenerator","UnityEngine.Tilemaps.Tile","RandomMapSwordGenerator","RandomEnemyGenerator","PlayerMovement","Player","UnityEngine.MeshFilter","UnityEngine.AudioListener","CameraFollow","EnemyManager","UnityEngine.Cubemap","UnityEngine.UI.Button","UrlDirectorFromButton","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TMPro.TMP_Settings","UnityEngine.TextAsset","UnityEngine.TextCore.Text.FontAsset","UnityEngine.Font","UnityEngine.TextCore.Text.SpriteAsset","UnityEngine.TextCore.Text.TextStyleSheet","UnityEngine.AnimationClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.51f1";

Deserializers.productName = "Apple_Grapple";

Deserializers.lunaInitializationTime = "11/01/2024 11:07:24";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "25291";

Deserializers.projectId = "827ae06e86a506e42b5571513fc46279";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.11.2\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1652";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4040";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Apple-Grapple";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "dfb9d809-e1f8-4d04-9c44-6827a7101705";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

