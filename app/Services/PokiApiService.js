import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokiApi } from "./AxiosService.js";


class PokiApiService {
    constructor() {
        console.log('pokiapi service!');
        this.getPokiApiPoki()
    }

    async getPokiApiPoki() {
        try {
            const res = await pokiApi.get('')
            console.log(res.data.results);
            ProxyState.wildPokemon = res.data.results
        } catch (error) {
            console.error(error)
        }
    }
    async checkPokemon(name) {
        try {
            const res = await pokiApi.get(name)
            console.log(res);
            ProxyState.currentPokemon = new Pokemon(res.data)
        } catch (error) {
            console.error(error)
        }
    }


}

export const pokiApiService = new PokiApiService();