<template><div></div></template>
<script setup lang="ts">
import {
  Mesh,
  Scene,
  HemisphereLight,
  WebGLRenderer,
  MeshLambertMaterial,
  PerspectiveCamera,
  PCFSoftShadowMap,
  sRGBEncoding,
  BoxGeometry
} from "three";

import { ThreeJSOverlayView, latLngToVector3 } from "@googlemaps/three";
import { useInitMap } from "@/composables/useInitMap";

const { initMap } = useInitMap();
const map = await initMap();

      const scene = new Scene();
      const hemiLight = new HemisphereLight(0xffffff, 0x444444, 0.8);
      hemiLight.position.set(0, 1, -0.2).normalize();
      scene.add(hemiLight);

      const overlay = new ThreeJSOverlayView({
        scene,
        map,
        THREE: {
          Scene,
          WebGLRenderer,
          PerspectiveCamera,
          PCFSoftShadowMap,
          sRGBEncoding,
        },
      });

      const geometry = new BoxGeometry( 40000, 40000, 40000 );

      for (let i = 0; i < 2000; i++) {
        const box = new Mesh( geometry, new MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
        latLngToVector3(
          {
            lat: getRandomInRange(),
            lng: getRandomInRange(),
          },
          box.position
        );
        overlay.scene.add(box);
      }

      overlay.requestRedraw();

      console.log("amount of boxmeshes in scene: " + overlay.scene.children.length);

    function getRandomInRange() {
        const from: any = -180;
        const to = 180;
        const fixed = 3;
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

</script>
