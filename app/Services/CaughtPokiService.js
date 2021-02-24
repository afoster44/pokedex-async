import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";


class CaughtPokiService {
    constructor() {
        console.log('caught poki SERVICE!');
        this.getMyPokemon()
    }

    async getMyPokemon() {
        try {
            const res = await sandboxApi.get('')
            console.log(res);
            ProxyState.myPokemon = res.data.map(p => new Pokemon(p))
        } catch (error) {
            console.error(error)
        }
    }

    async catchPokemon() {
        try {
            const res = await sandboxApi.post('', ProxyState.currentPokemon)
            console.log(res);
            this.getMyPokemon()
        } catch (error) {
            console.error(error)
        }
    }
    setCaughtPokemon(id) {
        let caughtPokemon = ProxyState.myPokemon.find(p => p.id == id)
        ProxyState.currentPokemon = caughtPokemon
    }


    async freeCaughtPokemon() {
        try {
            await sandboxApi.delete(ProxyState.currentPokemon.id)
            this.getMyPokemon()
            ProxyState.currentPokemon = null
        } catch (error) {
            console.error(error)
        }
    }

}

export const caughtPokiService = new CaughtPokiService()