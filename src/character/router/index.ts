import type { RouteRecordRaw } from "vue-router";
import CharacterLayout from "@/character/layout/CharacterLayout.vue";
import  CharacterId  from "@/character/pages/CharacterId.vue";
import  CharacterList  from "@/character/pages/CharacterList.vue";
import  CharacterSearch  from "@/character/pages/CharacterSearch.vue";
//import type { Character } from '../interfaces/character';

export const characterRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list',
    component: CharacterLayout,
    children: [
        {
            path: 'by/id',
            name: 'character-id',
            component: CharacterId,
            props: {title: 'Por ID', visible: false}
        },
        {
            path: 'list',
            name: 'character-list',
            component: CharacterList,
            props: {title: 'Lista de Personajes', visible: true}
        },
        {
            path: 'search',
            name: 'character-search',
            component: CharacterSearch,
            props: {title: 'Busqueda', visible: true}
        },

    ]
}