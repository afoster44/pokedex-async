

export default class Pokemon {
    constructor(data) {
        this.name = data.name
        this.height = data.height
        this.img = data.img || data.sprites.front_shiny
        this.weight = data.weight
        this.types = data.types
        this.id = '' || data._id
    }

    get Template() {
        return /*html*/ `
        <div class="card text-center">
        <div class="card-body">
        <h1 class="card-title">PokeDEX</h1>
        <img src=${this.img} alt="" style='height: 150px; width: 150px;'>
            <h3 class="card-title">Pokemon: ${this.name.toUpperCase()}</h3>
            <h4 class="card-text">Height: ${this.height}</h4>
            <p class="card-text">Weight: ${this.weight}</p>
            <p class="card-text">Type: ${this.Type}</p>
                ${this.Buttons}
        </div>
</div>
        `
    }

    get Buttons() {
        let template = ''
        if (this.id) {
            return `<button class='btn btn-danger block' onclick='app.caughtPokiController.freeCaughtPokemon()'>Release Pokemon!</button>`
        } else {
            return `<button class='btn btn-success block' onclick='app.caughtPokiController.catchPokemon()'>Catch Pokemon =/</button>`
        }
    }
    get Type() {
        let template = ''
        this.types.forEach(element => template += element.type.name.toUpperCase() + ' ')
        return template
    }
}