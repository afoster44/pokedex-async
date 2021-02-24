import { ProxyState } from "../AppState.js";
import { pokiApiService } from "../Services/PokiApiService.js"


function _drawPokiApiWildPokemon() {
    let wildPokemon = ProxyState.wildPokemon
    let template = ''
    wildPokemon.forEach(p => template += `<li onclick="app.pokiApiController.checkPokemon('${p.name}')">${p.name}</li>`)
    document.getElementById('wild-pokemon').innerHTML = template
}

function _drawCheckPokemon() {
    if (ProxyState.currentPokemon) {
        document.getElementById('check-pokemon').innerHTML = ProxyState.currentPokemon.Template
    } else {
        document.getElementById('check-pokemon').innerHTML = ''
    }
}
export default class PokiApiController {
    constructor() {
        console.log('pokiapicontroller!');
        ProxyState.on('wildPokemon', _drawPokiApiWildPokemon)
        ProxyState.on('currentPokemon', _drawCheckPokemon)
    }

    checkPokemon(name) {
        pokiApiService.checkPokemon(name)
    }
}