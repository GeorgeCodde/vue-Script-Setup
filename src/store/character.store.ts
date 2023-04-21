import marvelApi from "@/api/apimarvel";
import type { Character } from "@/character/interfaces/character"
import { reactive } from "vue";


interface Store {
    characters: {
        list: Character[],
        count: number,
        isLoading: boolean,
        hasError: boolean,
        errorMessage: string | null,
    },
    //Metodos
    startLoadingCharacters: () => void;
    loadedCharacters: (data: Character[]) => void;
    loadCharactersFailed: (error:string)=>void
}

const characterStore = reactive<Store>({
    characters: {
        count: 0,
        errorMessage: null,
        hasError: false,
        isLoading: true,
        list: []
    },

    //Metodos
    async startLoadingCharacters () {
        //console.log('Store esta iniciado');
        const { data } = await marvelApi.get("/v1/public/characters", {
          params: {
            ts: 1,
            hash: "0ee3255a77600cc8e4816817486dc671",
            apikey: "b8822f85829df6138076f3d7cd20b440",
            limit: 100,
          },
        });
        const characters: Character[] = data.data.results;
        this.loadedCharacters(characters);
    },
    loadedCharacters (data: Character[]){
        // console.log(data);

        const characters = data.filter(
            (character) => !character.thumbnail.path.includes("image_not_available"));
            
            
        this.characters = {
            count: characters.length,
            errorMessage: null,
            hasError: false,
            isLoading: false,
            list: characters
        }
    },
    loadCharactersFailed (error: string){
        
    }

});

characterStore.startLoadingCharacters();
export default characterStore;