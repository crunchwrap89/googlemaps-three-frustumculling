<template>
    <div id="map-mount"></div>
      <Suspense>
    <template #default>
      <TheMap />
    </template>
    <template #fallback>
      <p>loading...</p>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import TheMap from "@/components/map/TheMap.vue";
</script>

<style>
#map-mount {
  position: absolute;
  height: auto;
  width: 100%;
  top: 0;
  bottom: 0;
  border: none;
  min-height: 100%;
  z-index: 10;
}
</style>
