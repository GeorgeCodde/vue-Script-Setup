<script setup lang="ts">
import { toRef } from "vue";
import type { Character } from "../interfaces/character";

const props = defineProps<{ character: Character }>();
const character = toRef(props, "character");
</script>

<template>
  <div v-if="character.name !== 'Battering Ram'" class="character-card">
    <img
      :src="character.thumbnail.path + '.' + character.thumbnail.extension"
      :alt="character.name"
    />
    <h5>{{ character.name }}</h5>
  </div>
  <!-- !! esta opcion es haciendo el filtro en la imagen y colocando otra -->
  <!-- <div class="character-card">
    <img
      v-if="character.thumbnail.path.includes('image_not_available')"
      src="https://e0.pxfuel.com/wallpapers/387/423/desktop-wallpaper-11-12-13-big-hero-6-px-for-baymax.jpg"
      alt="No se encontro imagen"
    />
    <img
      v-else
      :src="character.thumbnail.path + '.' + character.thumbnail.extension"
      :alt="character.name"
    />
    <h3>{{ character.name }}</h3>
  </div> -->
</template>

<style scoped>
.character-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}
img {
  width: 150px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.3);
}
</style>
