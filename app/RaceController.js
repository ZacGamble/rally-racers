import {AppState} from "./AppState.js"
import { Racer } from "./Models/Racer.js"


const aWord = 'word'

function _drawRacers() {
    let template = ''
    const racers = AppState.racers
    racers.forEach(r => template += r.Template)
    document.getElementById("race-track").innerHTML = template
}

function _moveRacers(){
    AppState.racers.forEach(r => r.move())
    _drawRacers()
    console.log('racer array', AppState.racers)
    
}

export class RaceController {
    constructor(){ 
        _drawRacers()
    }
    
    startRace(){ 
     let timer = setInterval(_moveRacers, 100)
       console.log();
    }
    resetRace(){
        if(AppState.racers.forEach(r => r.distance) > 95)
        clearInterval(timer)
        console.log("reset race button");
    }
}