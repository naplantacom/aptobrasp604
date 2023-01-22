(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Image_F0FED4B0_D650_B880_41AA_131FF1C6FCE9",
  "this.Image_F23C3E4D_D631_AB80_41E3_7D4FE50082A0",
  "this.HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.init()",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "definitions": [{
 "initialPosition": {
  "yaw": -65.02,
  "pitch": -11.42,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "3 SALA DE TV",
 "hfovMin": "150%",
 "id": "panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8",
 "overlays": [
  "this.overlay_CBEEBB67_D6CF_6980_41EA_BCB3702BA29B",
  "this.overlay_F3C31690_D630_9880_41AF_C262B32D5A2B"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -165.33,
   "distance": 1,
   "backwardYaw": -38.12,
   "panorama": "this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 9.74,
   "distance": 1,
   "backwardYaw": 12.61,
   "panorama": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_t.jpg",
 "class": "Panorama",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE",
 "class": "Panorama",
 "label": "10 BANHEIRO SUITE",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "items": [
  {
   "media": "this.panorama_CAF4502E_D6D0_B780_41E6_33911252F36E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382",
   "end": "if(this.existsKey('visibility_HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA')){ if(this.getKey('visibility_HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA')) { this.setComponentVisibility(this.HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA, true, -1, this.effect_FEA209CE_D7D1_A880_41DC_EA75CB0D8617, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA, false, -1, this.effect_FB99C8A5_D7D1_E880_41DD_913E95E689F1, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA')",
   "start": "this.keepComponentVisibility(this.HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA, true)",
   "begin": "this.registerKey('visibility_HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA', this.HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA, false); this.setComponentVisibility(this.HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA, false, -1, this.effect_FB99C8A5_D7D1_E880_41DD_913E95E689F1, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -177.62,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FEEF488D_D7D1_A880_41AC_443105F8970D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 132.88,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -323,
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FE8C592C_D7D1_A980_41A9_FB6273EAAC86",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3",
 "class": "Panorama",
 "label": "8 DORMIT\u00d3RIO 2",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 141.88,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FEFB3825_D7D1_B780_41E2_E2B402DE1889",
 "class": "PanoramaCamera"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 41.92,
  "pitch": -13.51,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -323,
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CD6668C7_D6D0_A880_41DB_32507B731382_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7",
 "class": "Panorama",
 "label": "7 DORMIT\u00d3RIO 1",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "4 1 SACADA 1",
 "hfovMin": "150%",
 "id": "panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B",
 "overlays": [
  "this.overlay_C8427607_D650_FB80_41D4_27341B81867B",
  "this.overlay_C9F8CF12_D651_A980_41C7_22E6E7FF62CB"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -38.12,
   "distance": 1,
   "backwardYaw": -165.33,
   "panorama": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 27.33,
   "distance": 1,
   "backwardYaw": 35.23,
   "panorama": "this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_t.jpg",
 "class": "Panorama",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "1 ENTRADA",
 "hfovMin": "150%",
 "id": "panorama_CAF4502E_D6D0_B780_41E6_33911252F36E",
 "overlays": [
  "this.overlay_CA54059B_D6DF_B880_41E1_5F48C91D69E1"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_t.jpg",
 "class": "Panorama",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 5.67,
  "pitch": -1.55,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7",
 "class": "Panorama",
 "label": "9 SU\u00cdTE",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "5 CIRCULA\u00c7\u00c3O",
 "hfovMin": "150%",
 "id": "panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6",
 "overlays": [
  "this.overlay_C9E1DF9B_D650_E880_41E1_F5D5DD1C877A",
  "this.overlay_F698FF45_D65F_6980_41DA_F52449F684FF",
  "this.overlay_F6055560_D65F_9980_41DA_E3D058099044",
  "this.overlay_F7840DFB_D65F_E880_41E8_F40BC2C90AA5",
  "this.overlay_F6AF082E_D650_F783_41E4_67D195D00071"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 40.02,
   "distance": 1,
   "backwardYaw": -39.76,
   "panorama": "this.panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 163.15,
   "distance": 1,
   "backwardYaw": 49.83,
   "panorama": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 14.67,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FED537C5_D7D1_B880_41E3_DEF40600B6F6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CD63C6E1_D6D0_9880_41D6_32862FFBD4C7_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CD63DFE6_D6D3_6883_41E4_408283BEA1CE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 140.24,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FEDA7764_D7D1_B980_41AD_A21116D20E37",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_FB99C8A5_D7D1_E880_41DD_913E95E689F1",
 "class": "FadeOutEffect"
},
{
 "initialPosition": {
  "yaw": -16.85,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FEB6A995_D7D1_A880_41DF_2FF1E939ABF4",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "4 0 COZINHA",
 "hfovMin": "150%",
 "id": "panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD",
 "overlays": [
  "this.overlay_C8D0678D_D651_B880_41D4_94A1803B59E0",
  "this.overlay_CB40A146_D657_9980_41E7_53052641EEA5"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": 2.38,
   "distance": 1,
   "backwardYaw": 124.08,
   "panorama": "this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 100.97,
   "distance": 1,
   "backwardYaw": -47.12,
   "panorama": "this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_t.jpg",
 "class": "Panorama",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2 SALA DE JANTAR",
 "hfovMin": "150%",
 "id": "panorama_CD6668C7_D6D0_A880_41DB_32507B731382",
 "overlays": [
  "this.overlay_CA1F8B9B_D6D0_A880_41D4_1846F2739232",
  "this.overlay_CBECEFC6_D6D0_A880_41DA_B0B977D36EB4",
  "this.overlay_CB07AEAE_D6D1_E880_41C9_16754DF4AC6E"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": 12.61,
   "distance": 1,
   "backwardYaw": 9.74,
   "panorama": "this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 49.83,
   "distance": 1,
   "backwardYaw": 163.15,
   "panorama": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -47.12,
   "distance": 1,
   "backwardYaw": 100.97,
   "panorama": "this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_t.jpg",
 "class": "Panorama",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -79.03,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FEA299C7_D7D1_A880_41EA_CCF6F4D7A26F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -167.39,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -323,
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FEF6D85D_D7D1_B780_41E3_811E39788D54",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "6 BANHEIRO SOCIAL",
 "hfovMin": "150%",
 "id": "panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA",
 "overlays": [
  "this.overlay_F6365AC5_D653_6880_41A4_029E3F20AD25"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -39.76,
   "distance": 1,
   "backwardYaw": 40.02,
   "panorama": "this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CD63D5D0_D6D0_B880_4196_D5D6B84937C7_camera",
 "class": "PanoramaCamera"
},
{
 "gyroscopeEnabled": true,
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CD638E24_D6D0_AB80_41D5_892F222C47B3_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -130.17,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -323,
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FEDC3793_D7D1_B881_41C0_E3405F42E4B3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -55.92,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FE91C8F9_D7D1_A880_41D0_153F673F3132",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "id": "effect_FEA209CE_D7D1_A880_41DC_EA75CB0D8617",
 "class": "FadeInEffect"
},
{
 "initialPosition": {
  "yaw": -152.67,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": -18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FE9A28C2_D7D1_A884_41D2_E16998837A49",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "4 2 SACADA 2",
 "hfovMin": "150%",
 "id": "panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A",
 "overlays": [
  "this.overlay_F656FAAD_D650_A880_41E8_0F8B88375981",
  "this.overlay_F3AEB72D_D630_9983_41E8_027424D05DE4"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": 124.08,
   "distance": 1,
   "backwardYaw": 2.38,
   "panorama": "this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 35.23,
   "distance": 1,
   "backwardYaw": 27.33,
   "panorama": "this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -139.98,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F123B735_D7D1_B981_41E6_08D3675F34E0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -144.77,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FECD67F4_D7D1_B887_41C7_DD5291EA5392",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -170.26,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FEBA6963_D7D1_A981_41D0_BDCCBC38B278",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_F0FED4B0_D650_B880_41AA_131FF1C6FCE9",
 "backgroundOpacity": 0,
 "right": "1.63%",
 "width": "6.069%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_F0FED4B0_D650_B880_41AA_131FF1C6FCE9.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "6.22%",
 "height": "6.555%",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.openLink('http://wa.me/554891171170', '_blank')",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image53814"
 },
 "class": "Image",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 1000,
 "id": "Image_F23C3E4D_D631_AB80_41E3_7D4FE50082A0",
 "left": "0.72%",
 "backgroundOpacity": 0,
 "width": "16.033%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_F23C3E4D_D631_AB80_41E3_7D4FE50082A0.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "1.51%",
 "height": "25.378%",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image54567"
 },
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_F012838E_D7D1_F880_41E6_DAE26D9888AA",
 "left": "18.3%",
 "width": "49.366%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "top": "2.52%",
 "propagateClick": false,
 "height": "25.042%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "paddingTop": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:18px;font-family:'Arial Black', Gadget, sans-serif;\">APARTAMENTO DE 3 DORMIT\u00d3RIOS SENDO 1 SU\u00cdTE COM VAGA DUPLA DE GARAGEM</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:17px;\"><B>CAMPINAS-S\u00c3O JOS\u00c9/SC</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:17px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText1580"
 },
 "class": "HTMLText",
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 9.74,
   "hfov": 15.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382, this.camera_FEF6D85D_D7D1_B780_41E3_811E39788D54); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F60A09F2_D630_E880_41BE_A92268D8B7EC",
   "pitch": -30.27,
   "yaw": 9.74,
   "hfov": 15.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CBEEBB67_D6CF_6980_41EA_BCB3702BA29B",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -165.33,
   "hfov": 31.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B, this.camera_FEFB3825_D7D1_B780_41E2_E2B402DE1889); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FE1C2106_D63F_9980_41A7_26CC080ACB84",
   "pitch": -15.75,
   "yaw": -165.33,
   "hfov": 31.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F3C31690_D630_9880_41AF_C262B32D5A2B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -38.12,
   "hfov": 17.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8, this.camera_FED537C5_D7D1_B880_41E3_DEF40600B6F6); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FF602F8C_D631_6880_41CE_E559E05B1811",
   "pitch": -38.45,
   "yaw": -38.12,
   "hfov": 17.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C8427607_D650_FB80_41D4_27341B81867B",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 27.33,
   "hfov": 17.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A, this.camera_FECD67F4_D7D1_B887_41C7_DD5291EA5392); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FF61BF8C_D631_6880_41E3_1D498E81A423",
   "pitch": -28.02,
   "yaw": 27.33,
   "hfov": 17.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C9F8CF12_D651_A980_41C7_22E6E7FF62CB",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -13.98,
   "hfov": 22.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_1_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CA204FD6_D6D3_A880_41E2_56770EFE7104",
   "pitch": -41.73,
   "yaw": -13.98,
   "hfov": 22.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA54059B_D6DF_B880_41E1_5F48C91D69E1",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 163.15,
   "hfov": 21.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382, this.camera_FEDC3793_D7D1_B881_41C0_E3405F42E4B3); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFB74E63_D651_6B80_41D8_CE6E5A78DBC2",
   "pitch": -45.41,
   "yaw": 163.15,
   "hfov": 21.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C9E1DF9B_D650_E880_41E1_F5D5DD1C877A",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -16.03,
   "hfov": 19.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFB70E63_D651_6B80_41E7_CAF927517B16",
   "pitch": -49.91,
   "yaw": -16.03,
   "hfov": 19.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F698FF45_D65F_6980_41DA_F52449F684FF",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -160.85,
   "hfov": 23.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_2_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFB0AE63_D651_6B80_41E3_D35D92B8BD80",
   "pitch": -39.68,
   "yaw": -160.85,
   "hfov": 23.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F6055560_D65F_9980_41DA_E3D058099044",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 1.56,
   "hfov": 25.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_3_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFB07E63_D651_6B80_41AD_27249C0B6C55",
   "pitch": -31.5,
   "yaw": 1.56,
   "hfov": 25.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F7840DFB_D65F_E880_41E8_F40BC2C90AA5",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 40.02,
   "hfov": 12.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_4_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -65.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA, this.camera_FEDA7764_D7D1_B980_41AD_A21116D20E37); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFB01E63_D651_6B80_41C7_9D05B17C1935",
   "pitch": -65.86,
   "yaw": 40.02,
   "hfov": 12.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F6AF082E_D650_F783_41E4_67D195D00071",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 100.97,
   "hfov": 24.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD6668C7_D6D0_A880_41DB_32507B731382, this.camera_FE8C592C_D7D1_A980_41A9_FB6273EAAC86); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFB52E63_D651_6B80_41B1_18ABDC959AAA",
   "pitch": -34.36,
   "yaw": 100.97,
   "hfov": 24.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C8D0678D_D651_B880_41D4_94A1803B59E0",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 2.38,
   "hfov": 18.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A, this.camera_FE91C8F9_D7D1_A880_41D0_153F673F3132); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFB6EE63_D651_6B80_41E0_8EA2F517C969",
   "pitch": -27.82,
   "yaw": 2.38,
   "hfov": 18.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB40A146_D657_9980_41E7_53052641EEA5",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 12.61,
   "hfov": 13.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8, this.camera_FEBA6963_D7D1_A981_41D0_BDCCBC38B278); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FE1D7104_D63F_9980_4197_4BD8D720EEC5",
   "pitch": -28.43,
   "yaw": 12.61,
   "hfov": 13.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA1F8B9B_D6D0_A880_41D4_1846F2739232",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -47.12,
   "hfov": 13.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD, this.camera_FEA299C7_D7D1_A880_41EA_CCF6F4D7A26F); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FE1CC104_D63F_9980_41DE_589C9A9A2CA4",
   "pitch": -30.68,
   "yaw": -47.12,
   "hfov": 13.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CBECEFC6_D6D0_A880_41DA_B0B977D36EB4",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 49.83,
   "hfov": 15.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_2_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6, this.camera_FEB6A995_D7D1_A880_41DF_2FF1E939ABF4); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FE1C8106_D63F_9980_41E4_C08220C67CD5",
   "pitch": -27,
   "yaw": 49.83,
   "hfov": 15.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB07AEAE_D6D1_E880_41C9_16754DF4AC6E",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -39.76,
   "hfov": 22.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6, this.camera_F123B735_D7D1_B981_41E6_08D3675F34E0); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFB1BE6F_D651_6B80_41E8_DCFAA87D5C02",
   "pitch": -41.73,
   "yaw": -39.76,
   "hfov": 22.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F6365AC5_D653_6880_41A4_029E3F20AD25",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 35.23,
   "hfov": 13.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B, this.camera_FE9A28C2_D7D1_A884_41D2_E16998837A49); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FF616F8C_D631_6880_41CB_AA97760FD0EB",
   "pitch": -33.7,
   "yaw": 35.23,
   "hfov": 13.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F656FAAD_D650_A880_41E8_0F8B88375981",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 124.08,
   "hfov": 34.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD, this.camera_FEEF488D_D7D1_A880_41AC_443105F8970D); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FF611F8D_D631_6880_41D2_110AE4E71A67",
   "pitch": -17.8,
   "yaw": 124.08,
   "hfov": 34.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F3AEB72D_D630_9983_41E8_027424D05DE4",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_F60A09F2_D630_E880_41BE_A92268D8B7EC",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD639185_D6D0_9881_41D9_9F1D275E7ED8_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FE1C2106_D63F_9980_41A7_26CC080ACB84",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FF602F8C_D631_6880_41CE_E559E05B1811",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD63A26F_D6D0_FB80_41E9_8323244D352B_0_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FF61BF8C_D631_6880_41E3_1D498E81A423",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CAF4502E_D6D0_B780_41E6_33911252F36E_1_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_CA204FD6_D6D3_A880_41E2_56770EFE7104",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FFB74E63_D651_6B80_41D8_CE6E5A78DBC2",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FFB70E63_D651_6B80_41E7_CAF927517B16",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_2_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FFB0AE63_D651_6B80_41E3_D35D92B8BD80",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_3_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FFB07E63_D651_6B80_41AD_27249C0B6C55",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD63E46D_D6D0_9F80_4187_386CF19A77E6_0_HS_4_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FFB01E63_D651_6B80_41C7_9D05B17C1935",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FFB52E63_D651_6B80_41B1_18ABDC959AAA",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD639A10_D6D0_EB80_41AB_C0B1CD0C2CFD_0_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FFB6EE63_D651_6B80_41E0_8EA2F517C969",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FE1D7104_D63F_9980_4197_4BD8D720EEC5",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FE1CC104_D63F_9980_41DE_589C9A9A2CA4",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD6668C7_D6D0_A880_41DB_32507B731382_0_HS_2_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FE1C8106_D63F_9980_41E4_C08220C67CD5",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD63FD82_D6D0_A880_41DE_4CC22ABC54AA_0_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FFB1BE6F_D651_6B80_41E8_DCFAA87D5C02",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FF616F8C_D631_6880_41CB_AA97760FD0EB",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD639B6C_D6D0_E980_41D6_9E265828C22A_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FF611F8D_D631_6880_41D2_110AE4E71A67",
 "frameCount": 24,
 "class": "AnimatedImageResource"
}],
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "registerKey": function(key, value){  window[key] = value; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player34565"
 },
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "class": "Player",
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
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
