import { Racer } from "./Models/Racer.js"
import{RaceController} from "./RaceController.js"

class App{
    raceController = new RaceController()
}


window['app'] = new App() 

