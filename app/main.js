import CaughtPokiController from "./Controllers/CaughtPokiController.js";
import PokiApiController from "./Controllers/PokiApiController.js";


class App {
  // valuesController = new ValuesController();
  pokiApiController = new PokiApiController();
  caughtPokiController = new CaughtPokiController();
}

window["app"] = new App();
