import axios from "axios";


const marvelApi = axios.create({
    baseURL: 'https://gateway.marvel.com'
})

export default marvelApi;