<script setup lang="ts">
import marvelApi from "@/api/apimarvel";
import { useQuery } from "@tanstack/vue-query";
import CardList from "../components/CardList.vue";
import type { Character } from "../interfaces/character";
import characterStore from "../../store/character.store";
const props = defineProps<{ title: string; visible: boolean }>();

const getCharactersCacheFirst = async (): Promise<Character[]> => {
  if (characterStore.characters.count > 0) {
    return characterStore.characters.list;
  }
  const { data } = await marvelApi.get("/v1/public/characters", {
    params: {
      ts: 1,
      hash: "0ee3255a77600cc8e4816817486dc671",
      apikey: "b8822f85829df6138076f3d7cd20b440",
      limit: 100,
    },
  });
  const characters: Character[] = data.data.results;
  return characters;
};

/*const { isLoading, isError, data, error } = */ useQuery(
  ["characters"],
  getCharactersCacheFirst,
  {
    onSuccess(data) {
      characterStore.loadedCharacters(data);
    },
  }
  // {
  // cacheTime: 1000 * 60,
  // refetchOnReconnect: "always",
  // }
);

//console.log(props);
</script>

<template>
  <h1 v-if="characterStore.characters.isLoading">Loading...</h1>
  <h1 v-if="characterStore.characters.hasError">
    {{ characterStore.characters.errorMessage }}
  </h1>
  <template v-else>
    <h2>{{ props.title }}</h2>
    <CardList :characters="characterStore.characters.list" />
  </template>
</template>

<style scoped></style>
