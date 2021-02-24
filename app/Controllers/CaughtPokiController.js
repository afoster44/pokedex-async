import { ProxyState } from "../AppState.js";
import { caughtPokiService } from "../Services/CaughtPokiService.js"


function _drawMyPokemon() {
    let pokemon = ProxyState.myPokemon
    let template = ''
    pokemon.forEach(p => template += `<li onclick="app.caughtPokiController.setCaughtPokemon('${p.id}')"> ${p.name} </li>`)
    document.getElementById('my-pokemon').innerHTML = template
}
export default class CaughtPokiController {
    constructor() {
        console.log('caught poki CONTROLLER');
        ProxyState.on('myPokemon', _drawMyPokemon)
    }

    catchPokemon() {
        caughtPokiService.catchPokemon();
    }

    setCaughtPokemon(id) {
        caughtPokiService.setCaughtPokemon(id);
    }

    freeCaughtPokemon() {
        caughtPokiService.freeCaughtPokemon()
    }
}