<script setup lang="ts">
// import marvelApi from "@/api/apimarvel";
//import { toRef } from "vue";
import CharacterCard from "./CharacterCard.vue";
import type { Character } from "../interfaces/character";
// import { ref } from "vue";
// import { useCharacters } from "../composables/useCharacters";
// import { useQuery } from "@tanstack/vue-query";

//! Con el suspense
// const { data } = await marvelApi.get("/v1/public/characters", {
// +  params: {
//     ts: 1,
//     hash: "0ee3255a77600cc8e4816817486dc671",
//     apikey: "b8822f85829df6138076f3d7cd20b440",
//     limit: 100,
//   },
// });
// const characters: Character[] = data.data.results;
//!!!Con el suspense

//? Con composables functions
//const { isLoading, characters, errorMessage, hasError } = useCharacters();

//^ TanStack Query
// const getCharactersSlow = async (): Promise<Character[]> => {
//   const { data } = await marvelApi.get("/v1/public/characters", {
//     params: {
//       ts: 1,
//       hash: "0ee3255a77600cc8e4816817486dc671",
//       apikey: "b8822f85829df6138076f3d7cd20b440",
//       limit: 100,
//     },
//   });
//   const characters: Character[] = data.data.results;
//   return characters.filter(
//     (character) => !character.thumbnail.path.includes("image_not_available")
//   );
// };

// const {
//   isLoading,
//   isError: hasError,
//   data: characters,
//   error: errorMessage,
// } = useQuery(
//   ["characters"],
//   getCharactersSlow
//   // {
//   // cacheTime: 1000 * 60,
//   // refetchOnReconnect: "always",
//   // }
// );

const props = defineProps<{ characters: Character[] }>();
//const characters = toRef(props, "characters");
</script>

<template>
  <div class="card-list">
    <CharacterCard
      v-for="character of props.characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
