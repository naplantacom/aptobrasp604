(function(){
    var script = {
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 132.88,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_CF509C85_D71D_FCD8_41E4_DE56CF16891C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 41.92,
  "pitch": -13.51
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD6668C7_D6D0_A880_41DB_32507B731382_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.29,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_C0DCDAE3_D71D_E458_41DF_4083D5C6C107",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.24,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_C0BECB52_D71D_E47B_419F_A33290AA3382",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 35.23,
   "backwardYaw": 27.33,
   "distance": 1,
   "panorama": "this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 124.08,
   "backwardYaw": 2.38,
   "distance": 1,
   "panorama": "this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "4 2 SACADA 2",
 "id": "panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A",
 "thumbnailUrl": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F656FAAD_D650_A880_41E8_0F8B88375981",
  "this.overlay_F3AEB72D_D630_9983_41E8_027424D05DE4"
 ]
},
{
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "automaticRotationSpeed": 75,
 "timeToIdle": 2100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 30.84,
  "pitch": -22.83
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.32,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_C0A29B2C_D71D_E428_41E0_034DE3355C77",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_CAF4502E_D6D0_B780_41E6_33911252F36E",
   "camera": "this.panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382",
   "end": "if(this.existsKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A')){ if(this.getKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A')) { this.setComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, true, -1, this.effect_CFFF2DDA_D71D_FC68_41D1_C55C53F9638A, 'showEffect', false); } else { this.setComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, false, -1, this.effect_C0E15CBC_D73C_5C2F_41D0_BC4222384E5E, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A'); if(this.existsKey('visibility_Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2')){ if(this.getKey('visibility_Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2')) { this.setComponentVisibility(this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2, true, -1, this.effect_CFFF7DDA_D71D_FC68_41D5_EB8977FAF6D8, 'showEffect', false); } else { this.setComponentVisibility(this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2, false, -1, this.effect_C0E12CBC_D73C_5C2F_41E9_3C9E8C937987, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2')",
   "camera": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382_camera",
   "begin": "this.registerKey('visibility_Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2', this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2.get('visible')); this.registerKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A', this.Label_0DD14F09_1744_0507_41AA_D8475423214A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, false); this.setComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, false, -1, this.effect_C0E15CBC_D73C_5C2F_41D0_BC4222384E5E, 'hideEffect', false); this.keepComponentVisibility(this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2, false); this.setComponentVisibility(this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2, false, -1, this.effect_C0E12CBC_D73C_5C2F_41E9_3C9E8C937987, 'hideEffect', false)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, true); this.keepComponentVisibility(this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2, true)"
  },
  {
   "media": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8",
   "camera": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD",
   "camera": "this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B",
   "camera": "this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A",
   "camera": "this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6",
   "camera": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA",
   "camera": "this.panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7",
   "camera": "this.panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3",
   "camera": "this.panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7",
   "camera": "this.panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "idleSequence": "this.sequence_C0C37AC0_D71D_E458_41E2_E708B1B51921",
 "automaticRotationSpeed": 75,
 "timeToIdle": 2100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.85,
  "pitch": 0
 },
 "initialSequence": "this.sequence_C0C37AC0_D71D_E458_41E2_E708B1B51921",
 "class": "PanoramaCamera",
 "id": "camera_C0C36AC0_D71D_E458_41E7_42F9F6C987FD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.62,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_CFFA7DD0_D71D_FC78_41D3_ED003D6429A4",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_CFCD8DFF_D71D_FC29_41E7_3BC1AAA7EBE8",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.43,
  "pitch": -14.66
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.78,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_CF40DC4D_D71D_FC69_41D2_AE78086FC176",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -46.71,
   "backwardYaw": -16.03,
   "distance": 1,
   "panorama": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6"
  }
 ],
 "hfovMin": "153%",
 "hfov": 360,
 "label": "7 DORMIT\u00d3RIO 1",
 "id": "panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7",
 "thumbnailUrl": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 140,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DB381AB9_D6F5_A428_41A4_652E0AC6E8CB"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_C0E15CBC_D73C_5C2F_41D0_BC4222384E5E",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "1 ENTRADA",
 "id": "panorama_CAF4502E_D6D0_B780_41E6_33911252F36E",
 "thumbnailUrl": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 140,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CA54059B_D6DF_B880_41E1_5F48C91D69E1"
 ]
},
{
 "idleSequence": "this.sequence_CF3E9CF3_D71D_FC38_41E0_3F640FC8EF9A",
 "automaticRotationSpeed": 75,
 "timeToIdle": 2100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.97,
  "pitch": 0
 },
 "initialSequence": "this.sequence_CF3E9CF3_D71D_FC38_41E0_3F640FC8EF9A",
 "class": "PanoramaCamera",
 "id": "camera_CF3E8CF3_D71D_FC38_41DD_EAECE1802C6E",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_C0E12CBC_D73C_5C2F_41E9_3C9E8C937987",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_CFCD6DFE_D71D_FC2B_41E4_6F2D4E41E363",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.67,
  "pitch": -1.55
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_CFFF2DDA_D71D_FC68_41D1_C55C53F9638A",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -130.17,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_C0A92B08_D71D_E5D7_41E4_42B61EF05636",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -39.76,
   "backwardYaw": 27.31,
   "distance": 1,
   "panorama": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "6 BANHEIRO SOCIAL",
 "id": "panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA",
 "thumbnailUrl": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F6365AC5_D653_6880_41A4_029E3F20AD25"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.2,
  "pitch": 2.4
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -38.12,
   "backwardYaw": -165.33,
   "distance": 1,
   "panorama": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 27.33,
   "backwardYaw": 35.23,
   "distance": 1,
   "panorama": "this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "4 1 SACADA 1",
 "id": "panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B",
 "thumbnailUrl": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 140,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C8427607_D650_FB80_41D4_27341B81867B",
  "this.overlay_C9F8CF12_D651_A980_41C7_22E6E7FF62CB"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -152.26,
   "backwardYaw": 13.22,
   "distance": 1,
   "panorama": "this.panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "10 BANHEIRO SUITE",
 "id": "panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE",
 "thumbnailUrl": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C65E9926_D6F4_65D8_4186_18D1DEB94974"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.67,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_CF0CDD2B_D71D_FC28_41E8_CB611F99896F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.39,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_C0E6EA5A_D71D_E46B_41E2_6C59D58F2410",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 42.73,
   "backwardYaw": 8.37,
   "distance": 1,
   "panorama": "this.panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 13.22,
   "backwardYaw": -152.26,
   "distance": 1,
   "panorama": "this.panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "9 SU\u00cdTE",
 "id": "panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7",
 "thumbnailUrl": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D89C3170_D6F4_6438_41E0_4122407847C9",
  "this.overlay_D9D4222F_D6F4_A428_41E7_AF766B9A2209",
  "this.overlay_C6832B1F_D6FB_A5E8_41E1_2A95EC8C40C3"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.92,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_CF2ECCBE_D71D_FC28_41D6_E780A30F648F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 141.88,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_C0EFDA38_D71D_E428_41E8_C36DA0A563DF",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 100.97,
   "backwardYaw": -47.12,
   "distance": 1,
   "panorama": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.38,
   "backwardYaw": 124.08,
   "distance": 1,
   "panorama": "this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "4 0 COZINHA",
 "id": "panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD",
 "thumbnailUrl": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 140,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C8D0678D_D651_B880_41D4_94A1803B59E0",
  "this.overlay_CB40A146_D657_9980_41E7_53052641EEA5"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_CAF4502E_D6D0_B780_41E6_33911252F36E",
   "camera": "this.panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382",
   "end": "if(this.existsKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A')){ if(this.getKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A')) { this.setComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, true, -1, this.effect_CFCD6DFE_D71D_FC2B_41E4_6F2D4E41E363, 'showEffect', false); } else { this.setComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, false, -1, this.effect_C0E15CBC_D73C_5C2F_41D0_BC4222384E5E, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A'); if(this.existsKey('visibility_Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2')){ if(this.getKey('visibility_Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2')) { this.setComponentVisibility(this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2, true, -1, this.effect_CFCD8DFF_D71D_FC29_41E7_3BC1AAA7EBE8, 'showEffect', false); } else { this.setComponentVisibility(this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2, false, -1, this.effect_C0E12CBC_D73C_5C2F_41E9_3C9E8C937987, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2')",
   "camera": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382_camera",
   "begin": "this.registerKey('visibility_Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2', this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2.get('visible')); this.registerKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A', this.Label_0DD14F09_1744_0507_41AA_D8475423214A.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2); this.keepComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, false); this.setComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, false, -1, this.effect_C0E15CBC_D73C_5C2F_41D0_BC4222384E5E, 'hideEffect', false); this.keepComponentVisibility(this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2, false); this.setComponentVisibility(this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2, false, -1, this.effect_C0E12CBC_D73C_5C2F_41E9_3C9E8C937987, 'hideEffect', false)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, true); this.keepComponentVisibility(this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2, true)"
  },
  {
   "media": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8",
   "camera": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD",
   "camera": "this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B",
   "camera": "this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A",
   "camera": "this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6",
   "camera": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA",
   "camera": "this.panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7",
   "camera": "this.panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3",
   "camera": "this.panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7",
   "camera": "this.panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE",
   "camera": "this.panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 6.68,
   "backwardYaw": 1.56,
   "distance": 1,
   "panorama": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 8.37,
   "backwardYaw": 42.73,
   "distance": 1,
   "panorama": "this.panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "8 DORMIT\u00d3RIO 2",
 "id": "panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3",
 "thumbnailUrl": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 140,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D8601071_D6F7_E438_41D3_41FACFC4CF0C",
  "this.overlay_C6DF5DA0_D6F4_BCD7_41E7_02E2305C162C"
 ]
},
{
 "idleSequence": "this.sequence_C08A4B76_D71D_E438_41DC_D931D6EC8759",
 "automaticRotationSpeed": 75,
 "timeToIdle": 2100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.44,
  "pitch": 0
 },
 "initialSequence": "this.sequence_C08A4B76_D71D_E438_41DC_D931D6EC8759",
 "class": "PanoramaCamera",
 "id": "camera_C08A7B76_D71D_E438_41DD_519022D477B9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.67,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_CFEA9D98_D71D_FCE8_41DB_4A18D97706A1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.26,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_C0FE5A7B_D71D_E428_41DB_D7EAEDF4A439",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -144.77,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_CF1C5D64_D71D_FC5F_41D0_391891D36C3A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.27,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_C0992B9D_D71D_E4E9_41DB_09506FE2F87B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 27.74,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_CF62FBE6_D71D_E458_41EA_E0141D27B25A",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 12.61,
   "backwardYaw": 9.74,
   "distance": 1,
   "panorama": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -47.12,
   "backwardYaw": 100.97,
   "distance": 1,
   "panorama": "this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 49.83,
   "backwardYaw": 163.15,
   "distance": 1,
   "panorama": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "2 SALA DE JANTAR",
 "id": "panorama_CD6668C7_D6D0_A880_41DB_32507B731382",
 "thumbnailUrl": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 140,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CA1F8B9B_D6D0_A880_41D4_1846F2739232",
  "this.overlay_CBECEFC6_D6D0_A880_41DA_B0B977D36EB4",
  "this.overlay_CB07AEAE_D6D1_E880_41C9_16754DF4AC6E"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.63,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_C0950BC2_D71D_E458_41E2_52658CC231B8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -65.02,
  "pitch": -11.42
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_CF731C0C_D71D_E3E8_41E3_067ED5AB4E64",
 "automaticRotationSpeed": 75,
 "timeToIdle": 2100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.69,
  "pitch": 0
 },
 "initialSequence": "this.sequence_CF731C0C_D71D_E3E8_41E3_067ED5AB4E64",
 "class": "PanoramaCamera",
 "id": "camera_CF730C0C_D71D_E3E8_41D8_F9C8CAB325AF",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -165.33,
   "backwardYaw": -38.12,
   "distance": 1,
   "panorama": "this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 9.74,
   "backwardYaw": 12.61,
   "distance": 1,
   "panorama": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "3 SALA DE TV",
 "id": "panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8",
 "thumbnailUrl": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 140,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CBEEBB67_D6CF_6980_41EA_BCB3702BA29B",
  "this.overlay_F3C31690_D630_9880_41AF_C262B32D5A2B"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -79.03,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_C0C9DA9D_D71D_E4E8_41E0_518D1AEBE27D",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_CFFF7DDA_D71D_FC68_41D5_EB8977FAF6D8",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -16.03,
   "backwardYaw": -46.71,
   "distance": 1,
   "panorama": "this.panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 163.15,
   "backwardYaw": 49.83,
   "distance": 1,
   "panorama": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 1.56,
   "backwardYaw": 6.68,
   "distance": 1,
   "panorama": "this.panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 27.31,
   "backwardYaw": -39.76,
   "distance": 1,
   "panorama": "this.panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "5 CIRCULA\u00c7\u00c3O",
 "id": "panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6",
 "thumbnailUrl": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 140,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C9E1DF9B_D650_E880_41E1_F5D5DD1C877A",
  "this.overlay_F698FF45_D65F_6980_41DA_F52449F684FF",
  "this.overlay_F6055560_D65F_9980_41DA_E3D058099044",
  "this.overlay_F7840DFB_D65F_E880_41E8_F40BC2C90AA5",
  "this.overlay_C4CCAF90_D6F4_BCF8_41EA_67331E5FBF7B"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_in",
    "yawDelta": -18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "linear",
    "yawDelta": -323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 13.26,
    "easing": "cubic_out",
    "yawDelta": -18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_camera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "progressBarBorderSize": 6,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 115.05,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 641,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "class": "Container",
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": 228,
 "width": 573,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": 20,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 133,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--STICKER"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "class": "Container",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "minHeight": 1,
 "horizontalAlign": "left",
 "overflow": "visible",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.64,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 118,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--MENU"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "class": "Container",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photo"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "class": "Container",
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photoalbum"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "class": "Container",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "class": "Container",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "class": "Container",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "class": "Container",
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "class": "Container",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "class": "Container",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Image_C42E5B23_D715_A5D8_41E2_5CF8EE2A0257"
 ],
 "class": "Container",
 "id": "Container_C4C38357_D714_6479_41E9_1D80668BDA35",
 "left": "1.45%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "2.52%",
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "16.938%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "26.555%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "logo360"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "class": "Container",
 "id": "Container_C2785D5B_D714_7C68_41C2_EB18725FDA87",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "2.63%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "3.17%",
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "4.891%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.openLink('http://wa.me/5548911171170', '_blank')",
 "borderRadius": 0,
 "height": "9.58%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container15503"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_C2472943_D714_6459_41D7_7EE714A341BD"
 ],
 "class": "Container",
 "id": "Container_C2806F85_D71B_BCD8_41E6_9E1D2FE355F9",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "2.26%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "5.38%",
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "5.616%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.openLink('http://wa.me/5548991171170', '_blank')",
 "borderRadius": 0,
 "height": "9.58%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "whatsapp"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B, this.camera_CFEA9D98_D71D_FCE8_41DB_4A18D97706A1); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.46,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FF616F8C_D631_6880_41CB_AA97760FD0EB",
   "pitch": -33.7,
   "yaw": 35.23,
   "distance": 100
  }
 ],
 "id": "overlay_F656FAAD_D650_A880_41E8_0F8B88375981",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -33.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD, this.camera_CFFA7DD0_D71D_FC78_41D3_ED003D6429A4); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 34.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FF611F8D_D631_6880_41D2_110AE4E71A67",
   "pitch": -17.8,
   "yaw": 124.08,
   "distance": 100
  }
 ],
 "id": "overlay_F3AEB72D_D630_9983_41E8_027424D05DE4",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 34.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -17.8
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C0C37AC0_D71D_E458_41E2_E708B1B51921",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "cubic_in",
   "yawDelta": -18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "linear",
   "yawDelta": -323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "cubic_out",
   "yawDelta": -18.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6, this.camera_CF3E8CF3_D71D_FC38_41DD_EAECE1802C6E); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C777BC1F_D6FC_E3E9_41C8_C872E560AA0C",
   "pitch": -27.61,
   "yaw": -46.71,
   "distance": 100
  }
 ],
 "id": "overlay_DB381AB9_D6F5_A428_41A4_652E0AC6E8CB",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -27.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 22.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA204FD6_D6D3_A880_41E2_56770EFE7104",
   "pitch": -41.73,
   "yaw": -13.98,
   "distance": 100
  }
 ],
 "id": "overlay_CA54059B_D6DF_B880_41E1_5F48C91D69E1",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -41.73
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_CF3E9CF3_D71D_FC38_41E0_3F640FC8EF9A",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "cubic_in",
   "yawDelta": -18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "linear",
   "yawDelta": -323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "cubic_out",
   "yawDelta": -18.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6, this.camera_CF730C0C_D71D_E3E8_41D8_F9C8CAB325AF); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 22.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FFB1BE6F_D651_6B80_41E8_DCFAA87D5C02",
   "pitch": -41.73,
   "yaw": -39.76,
   "distance": 100
  }
 ],
 "id": "overlay_F6365AC5_D653_6880_41A4_029E3F20AD25",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -41.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8, this.camera_CF0CDD2B_D71D_FC28_41E8_CB611F99896F); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FF602F8C_D631_6880_41CE_E559E05B1811",
   "pitch": -38.45,
   "yaw": -38.12,
   "distance": 100
  }
 ],
 "id": "overlay_C8427607_D650_FB80_41D4_27341B81867B",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -38.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A, this.camera_CF1C5D64_D71D_FC5F_41D0_391891D36C3A); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.93,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FF61BF8C_D631_6880_41E3_1D498E81A423",
   "pitch": -28.02,
   "yaw": 27.33,
   "distance": 100
  }
 ],
 "id": "overlay_C9F8CF12_D651_A980_41C7_22E6E7FF62CB",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -28.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7, this.camera_CF40DC4D_D71D_FC69_41D2_AE78086FC176); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C5E312E7_D6F5_A458_41DA_F88150D82FA3",
   "pitch": -55.64,
   "yaw": -152.26,
   "distance": 100
  }
 ],
 "id": "overlay_C65E9926_D6F4_65D8_4186_18D1DEB94974",
 "data": {
  "label": "volta suite"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -55.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.73,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C776BC21_D6FC_E3D8_41E4_89E600E4794A",
   "pitch": -27.61,
   "yaw": 38.99,
   "distance": 100
  }
 ],
 "id": "overlay_D89C3170_D6F4_6438_41E0_4122407847C9",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -27.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE, this.camera_CF62FBE6_D71D_E458_41EA_E0141D27B25A); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.94,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C776FC21_D6FC_E3D8_4171_97F31C8FD426",
   "pitch": -25.98,
   "yaw": 13.22,
   "distance": 100
  }
 ],
 "id": "overlay_D9D4222F_D6F4_A428_41E7_AF766B9A2209",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -25.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3, this.camera_C0950BC2_D71D_E458_41E2_52658CC231B8); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.01,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C7761C22_D6FC_E3D8_41E8_6BD25261D833",
   "pitch": -6.33,
   "yaw": 42.73,
   "distance": 100
  }
 ],
 "id": "overlay_C6832B1F_D6FB_A5E8_41E1_2A95EC8C40C3",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382, this.camera_CF509C85_D71D_FCD8_41E4_DE56CF16891C); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 24.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FFB52E63_D651_6B80_41B1_18ABDC959AAA",
   "pitch": -34.36,
   "yaw": 100.97,
   "distance": 100
  }
 ],
 "id": "overlay_C8D0678D_D651_B880_41D4_94A1803B59E0",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 24.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -34.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A, this.camera_CF2ECCBE_D71D_FC28_41D6_E780A30F648F); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 18.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FFB6EE63_D651_6B80_41E0_8EA2F517C969",
   "pitch": -27.82,
   "yaw": 2.38,
   "distance": 100
  }
 ],
 "id": "overlay_CB40A146_D657_9980_41E7_53052641EEA5",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -27.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6, this.camera_C08A7B76_D71D_E438_41DD_519022D477B9); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C777CC20_D6FC_E3D7_41EA_2B063A70E321",
   "pitch": -24.34,
   "yaw": 6.68,
   "distance": 100
  }
 ],
 "id": "overlay_D8601071_D6F7_E438_41D3_41FACFC4CF0C",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -24.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7, this.camera_C0992B9D_D71D_E4E9_41DB_09506FE2F87B); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C7771C20_D6FC_E3D7_41E8_15E59F7042A3",
   "pitch": -2.03,
   "yaw": 8.37,
   "distance": 100
  }
 ],
 "id": "overlay_C6DF5DA0_D6F4_BCD7_41E7_02E2305C162C",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.03
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C08A4B76_D71D_E438_41DC_D931D6EC8759",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "cubic_in",
   "yawDelta": -18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "linear",
   "yawDelta": -323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "cubic_out",
   "yawDelta": -18.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8, this.camera_C0FE5A7B_D71D_E428_41DB_D7EAEDF4A439); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.54,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FE1D7104_D63F_9980_4197_4BD8D720EEC5",
   "pitch": -28.43,
   "yaw": 12.61,
   "distance": 100
  }
 ],
 "id": "overlay_CA1F8B9B_D6D0_A880_41D4_1846F2739232",
 "data": {
  "label": "sala de tv"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -28.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD, this.camera_C0C9DA9D_D71D_E4E8_41E0_518D1AEBE27D); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FE1CC104_D63F_9980_41DE_589C9A9A2CA4",
   "pitch": -30.68,
   "yaw": -47.12,
   "distance": 100
  }
 ],
 "id": "overlay_CBECEFC6_D6D0_A880_41DA_B0B977D36EB4",
 "data": {
  "label": "cozinha"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -30.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6, this.camera_C0C36AC0_D71D_E458_41E7_42F9F6C987FD); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FE1C8106_D63F_9980_41E4_C08220C67CD5",
   "pitch": -27,
   "yaw": 49.83,
   "distance": 100
  }
 ],
 "id": "overlay_CB07AEAE_D6D1_E880_41C9_16754DF4AC6E",
 "data": {
  "label": "circula\u00e7ao"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -27
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_CF731C0C_D71D_E3E8_41E3_067ED5AB4E64",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "cubic_in",
   "yawDelta": -18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "linear",
   "yawDelta": -323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 13.26,
   "easing": "cubic_out",
   "yawDelta": -18.5
  }
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 37,
 "maxWidth": 49,
 "class": "IconButton",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "horizontalAlign": "center",
 "right": 30,
 "width": 100,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "bottom": 8,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "borderRadius": 0,
 "height": 75,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382, this.camera_C0E6EA5A_D71D_E46B_41E2_6C59D58F2410); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F60A09F2_D630_E880_41BE_A92268D8B7EC",
   "pitch": -30.27,
   "yaw": 9.74,
   "distance": 100
  }
 ],
 "id": "overlay_CBEEBB67_D6CF_6980_41EA_BCB3702BA29B",
 "data": {
  "label": "sala de jantar"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -30.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B, this.camera_C0EFDA38_D71D_E428_41E8_C36DA0A563DF); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 31.39,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FE1C2106_D63F_9980_41A7_26CC080ACB84",
   "pitch": -15.75,
   "yaw": -165.33,
   "distance": 100
  }
 ],
 "id": "overlay_F3C31690_D630_9880_41AF_C262B32D5A2B",
 "data": {
  "label": "sacada"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 31.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382, this.camera_C0A92B08_D71D_E5D7_41E4_42B61EF05636); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 21.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FFB74E63_D651_6B80_41D8_CE6E5A78DBC2",
   "pitch": -45.41,
   "yaw": 163.15,
   "distance": 100
  }
 ],
 "id": "overlay_C9E1DF9B_D650_E880_41E1_F5D5DD1C877A",
 "data": {
  "label": "sala de jantar"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 21.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -45.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7, this.camera_C0DCDAE3_D71D_E458_41DF_4083D5C6C107); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 19.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FFB70E63_D651_6B80_41E7_CAF927517B16",
   "pitch": -49.91,
   "yaw": -16.03,
   "distance": 100
  }
 ],
 "id": "overlay_F698FF45_D65F_6980_41DA_F52449F684FF",
 "data": {
  "label": "dormit\u00f3rio 1"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -49.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 23.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FFB0AE63_D651_6B80_41E3_D35D92B8BD80",
   "pitch": -39.68,
   "yaw": -160.85,
   "distance": 100
  }
 ],
 "id": "overlay_F6055560_D65F_9980_41DA_E3D058099044",
 "data": {
  "label": "sala de tv"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 23.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -39.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3, this.camera_C0A29B2C_D71D_E428_41E0_034DE3355C77); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 25.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FFB07E63_D651_6B80_41AD_27249C0B6C55",
   "pitch": -31.5,
   "yaw": 1.56,
   "distance": 100
  }
 ],
 "id": "overlay_F7840DFB_D65F_E880_41E8_F40BC2C90AA5",
 "data": {
  "label": "dormit\u00f3rio 2"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -31.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA, this.camera_C0BECB52_D71D_E47B_419F_A33290AA3382); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C7F51C10_D6F4_63F7_41C2_C3464ED67476",
   "pitch": -17.8,
   "yaw": 27.31,
   "distance": 100
  }
 ],
 "id": "overlay_C4CCAF90_D6F4_BCF8_41EA_67331E5FBF7B",
 "data": {
  "label": "banheiro social"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -17.8
  }
 ]
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 110,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 110,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "layout": "horizontal",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "91.304%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "85.959%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Bebas Neue Bold",
 "class": "Label",
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 45,
 "horizontalAlign": "left",
 "width": 454,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "textShadowOpacity": 1,
 "minHeight": 1,
 "textShadowColor": "#000000",
 "text": "3 dormitórios com suíte",
 "textShadowVerticalLength": 0,
 "paddingRight": 0,
 "top": 17,
 "verticalAlign": "top",
 "minWidth": 1,
 "textShadowHorizontalLength": 0,
 "fontSize": "56px",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 86,
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "textDecoration": "none",
 "paddingLeft": 0,
 "propagateClick": true,
 "data": {
  "name": "3 dorm"
 },
 "fontWeight": "bold"
},
{
 "fontFamily": "Bebas Neue Book",
 "class": "Label",
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "horizontalAlign": "left",
 "right": 73,
 "width": 295,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "textShadowOpacity": 1,
 "minHeight": 1,
 "textShadowColor": "#000000",
 "text": "campinas, sãojosé/sc",
 "textShadowVerticalLength": 0,
 "paddingRight": 0,
 "bottom": 16,
 "verticalAlign": "top",
 "minWidth": 1,
 "textShadowHorizontalLength": 0,
 "fontSize": 41,
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 46,
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "textDecoration": "none",
 "paddingLeft": 0,
 "propagateClick": true,
 "data": {
  "name": "campinas"
 },
 "fontWeight": "normal"
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "class": "Image",
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "horizontalAlign": "center",
 "right": "0%",
 "borderSize": 0,
 "minHeight": 1,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingRight": 0,
 "bottom": 53,
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 2,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "white line"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "scaleMode": "fit_outside"
},
{
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "class": "Container",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 1199,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 51,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-button set container"
 },
 "paddingLeft": 30,
 "propagateClick": true,
 "layout": "horizontal",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "class": "Container",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "class": "Container",
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "class": "Container",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "class": "Container",
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10
},
{
 "maxHeight": 1000,
 "maxWidth": 1000,
 "class": "Image",
 "id": "Image_C42E5B23_D715_A5D8_41E2_5CF8EE2A0257",
 "left": "0%",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_C42E5B23_D715_A5D8_41E2_5CF8EE2A0257.png",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "logo"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "scaleMode": "fit_inside"
},
{
 "transparencyActive": false,
 "maxHeight": 1095,
 "maxWidth": 1095,
 "class": "IconButton",
 "id": "IconButton_C2472943_D714_6459_41D7_7EE714A341BD",
 "horizontalAlign": "center",
 "right": "0%",
 "width": 54,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconURL": "skin/IconButton_C2472943_D714_6459_41D7_7EE714A341BD.png",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 50,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton18299"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FF616F8C_D631_6880_41CB_AA97760FD0EB",
 "levels": [
  {
   "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FF611F8D_D631_6880_41D2_110AE4E71A67",
 "levels": [
  {
   "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C777BC1F_D6FC_E3E9_41C8_C872E560AA0C",
 "levels": [
  {
   "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CA204FD6_D6D3_A880_41E2_56770EFE7104",
 "levels": [
  {
   "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFB1BE6F_D651_6B80_41E8_DCFAA87D5C02",
 "levels": [
  {
   "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FF602F8C_D631_6880_41CE_E559E05B1811",
 "levels": [
  {
   "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FF61BF8C_D631_6880_41E3_1D498E81A423",
 "levels": [
  {
   "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C5E312E7_D6F5_A458_41DA_F88150D82FA3",
 "levels": [
  {
   "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C776BC21_D6FC_E3D8_41E4_89E600E4794A",
 "levels": [
  {
   "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C776FC21_D6FC_E3D8_4171_97F31C8FD426",
 "levels": [
  {
   "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7761C22_D6FC_E3D8_41E8_6BD25261D833",
 "levels": [
  {
   "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFB52E63_D651_6B80_41B1_18ABDC959AAA",
 "levels": [
  {
   "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFB6EE63_D651_6B80_41E0_8EA2F517C969",
 "levels": [
  {
   "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C777CC20_D6FC_E3D7_41EA_2B063A70E321",
 "levels": [
  {
   "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7771C20_D6FC_E3D7_41E8_15E59F7042A3",
 "levels": [
  {
   "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FE1D7104_D63F_9980_4197_4BD8D720EEC5",
 "levels": [
  {
   "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FE1CC104_D63F_9980_41DE_589C9A9A2CA4",
 "levels": [
  {
   "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FE1C8106_D63F_9980_41E4_C08220C67CD5",
 "levels": [
  {
   "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F60A09F2_D630_E880_41BE_A92268D8B7EC",
 "levels": [
  {
   "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FE1C2106_D63F_9980_41A7_26CC080ACB84",
 "levels": [
  {
   "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFB74E63_D651_6B80_41D8_CE6E5A78DBC2",
 "levels": [
  {
   "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFB70E63_D651_6B80_41E7_CAF927517B16",
 "levels": [
  {
   "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFB0AE63_D651_6B80_41E3_D35D92B8BD80",
 "levels": [
  {
   "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFB07E63_D651_6B80_41AD_27249C0B6C55",
 "levels": [
  {
   "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7F51C10_D6F4_63F7_41C2_C3464ED67476",
 "levels": [
  {
   "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "horizontalAlign": "center",
 "width": 60,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "click": "this.shareTwitter('https://www.virtualnaplanta.com.br/tour/aptobrasp604')",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "click": "this.shareFacebook('https://www.virtualnaplanta.com.br/tour/aptobrasp604')",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "horizontalAlign": "center",
 "fontFamily": "Montserrat",
 "width": 120,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "fontSize": 12,
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "HOUSE INFO",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "fontWeight": "bold",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button panorama list"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "horizontalAlign": "center",
 "fontFamily": "Montserrat",
 "width": 130,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "fontSize": 12,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "PANORAMA LIST",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button location"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "horizontalAlign": "center",
 "fontFamily": "Montserrat",
 "width": 90,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "fontSize": 12,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "LOCATION",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button floorplan"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "horizontalAlign": "center",
 "fontFamily": "Montserrat",
 "width": 103,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "fontSize": 12,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "FLOORPLAN",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button photoalbum"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "horizontalAlign": "center",
 "fontFamily": "Montserrat",
 "width": 112,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "fontSize": 12,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "PHOTOALBUM",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button realtor"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "horizontalAlign": "center",
 "fontFamily": "Montserrat",
 "width": 90,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "fontSize": 12,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "REALTOR",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "class": "Container",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "85%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "class": "Container",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 460,
 "width": "50%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 50,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 50,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "class": "Container",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "85%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "class": "Container",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 460,
 "width": "50%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 50,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 50,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "class": "Container",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "scrollBarColor": "#04A3E1",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "normal",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "itemPaddingRight": 3,
 "minHeight": 1,
 "itemMode": "normal",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "itemLabelFontFamily": "Montserrat",
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "paddingRight": 70,
 "minWidth": 1,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "width": "100%",
 "verticalAlign": "middle",
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0.05,
 "itemOpacity": 1,
 "itemPaddingLeft": 3,
 "itemBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemThumbnailBorderRadius": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "height": "100%",
 "shadow": false,
 "propagateClick": false,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "itemWidth": 220,
 "paddingLeft": 70,
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "class": "ThumbnailGrid",
 "backgroundColorDirection": "vertical",
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 14,
 "itemThumbnailScaleMode": "fit_outside",
 "itemMinWidth": 50,
 "itemHeight": 156,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 70,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "class": "Container",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "85%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "class": "Container",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 400,
 "width": "15%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 50,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 50,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "class": "Container",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "progressBarBorderSize": 6,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "class": "Container",
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "class": "Container",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "class": "Container",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "class": "Container",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "55%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "class": "Container",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 60,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 460,
 "width": "45%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 60,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 50,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "class": "Image",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "scaleMode": "fit_outside"
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "class": "Container",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 100,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "right": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "bottom": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "class": "Container",
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container arrows"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "horizontal",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "class": "Container",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 100,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "HTMLText",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "width": "77.115%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "propagateClick": false,
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "horizontalAlign": "right",
 "right": 20,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 50,
 "paddingRight": 0,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "WebFrame",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "scrollEnabled": true,
 "paddingRight": 0,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "class": "Container",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 100,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "HTMLText",
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "width": "77.115%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "propagateClick": false,
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "horizontalAlign": "right",
 "right": 20,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 50,
 "paddingRight": 0,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "HTMLText",
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "width": "77.115%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "propagateClick": false,
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "horizontalAlign": "right",
 "right": 20,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 50,
 "paddingRight": 0,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "progressBarBorderSize": 6,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "14.22%",
 "minHeight": 50,
 "paddingRight": 0,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "horizontalAlign": "center",
 "right": 10,
 "borderSize": 0,
 "width": "14.22%",
 "minHeight": 50,
 "paddingRight": 0,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "progressBarBorderSize": 6,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "14.22%",
 "minHeight": 50,
 "paddingRight": 0,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "horizontalAlign": "center",
 "right": 10,
 "borderSize": 0,
 "width": "14.22%",
 "minHeight": 50,
 "paddingRight": 0,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "horizontalAlign": "right",
 "right": 20,
 "borderSize": 0,
 "width": "10%",
 "minHeight": 50,
 "paddingRight": 0,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "borderRadius": 0,
 "height": "10%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "class": "Image",
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "scaleMode": "fit_outside"
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "class": "Container",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 100,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "HTMLText",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.72vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.72vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.36vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.36vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.69vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.69vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.7vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "fontFamily": "Bebas Neue Bold",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "46%",
 "iconHeight": 32,
 "minHeight": 1,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": "3vh",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "lorem ipsum",
 "borderRadius": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "transparencyActive": true,
 "maxHeight": 150,
 "maxWidth": 150,
 "class": "IconButton",
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "12%",
 "minHeight": 70,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "borderRadius": 0,
 "height": "8%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "Container",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "80%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "30%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container separator"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false
},
{
 "transparencyActive": true,
 "maxHeight": 150,
 "maxWidth": 150,
 "class": "IconButton",
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "12%",
 "minHeight": 70,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "borderRadius": 0,
 "height": "8%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "HTMLText",
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.72vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.72vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.36vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.36vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.69vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "fontFamily": "Bebas Neue Bold",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "46%",
 "iconHeight": 32,
 "minHeight": 1,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": "3vh",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "lorem ipsum",
 "borderRadius": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "class": "HTMLText",
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.72vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.85vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.36vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.36vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "fontFamily": "Bebas Neue Bold",
 "width": 207,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "rollOverBackgroundOpacity": 1,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 59,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 34,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "minWidth": 1,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "lorem ipsum",
 "borderRadius": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "visible": false,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "class": "HTMLText",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "45%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.05vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "class": "Container",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 },
 "height": "80%",
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "class": "Image",
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "horizontalAlign": "left",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 1,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "agent photo"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "scaleMode": "fit_inside"
},
{
 "class": "HTMLText",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "75%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.36vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.85vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Container_C4C38357_D714_6479_41E9_1D80668BDA35",
  "this.Container_C2785D5B_D714_7C68_41C2_EB18725FDA87",
  "this.Container_C2806F85_D71B_BCD8_41E6_9E1D2FE355F9"
 ],
 "class": "Player",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "overflow": "visible",
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; }
 },
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "creationPolicy": "inAdvance",
 "downloadEnabled": false,
 "contentOpaque": false,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "height": "100%",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "desktopMipmappingEnabled": false,
 "paddingLeft": 0,
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
