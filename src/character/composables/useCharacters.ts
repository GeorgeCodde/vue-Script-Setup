import marvelApi from "@/api/apimarvel";
import { onMounted, ref } from "vue";
import type { Character } from "../interfaces/character";
import axios from 'axios';
const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();

export const useCharacters = () => {
    
    onMounted(async () => {
        loadCharacters();
    });

    const loadCharacters = async () => {
        if (characters.value.length > 0) return;
        isLoading.value = true;
        try {
            const {data }= await marvelApi.get("/v1/public/characters", {
                params: {
                  ts: 1,
                  hash: "0ee3255a77600cc8e4816817486dc671",
                  apikey: "b8822f85829df6138076f3d7cd20b440",
                  limit: 100,
                },
            }) 
            characters.value = data.data.results;
            isLoading.value = false;
        } catch (error) {
            hasError.value = false;
            isLoading.value = false;
            if (axios.isAxiosError(error)) {
                return errorMessage.value = error.message;
            }
            errorMessage.value = JSON.stringify(error);
        }

    }
    
    return {
        isLoading,
        characters,
        errorMessage,
        hasError
    }
}