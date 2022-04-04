import {AppState} from "./AppState.js"

function _drawRacers() {
    let template = ''
    const racers = AppState.racers
    racers.forEach(r => r.move())
    _moveRacers()
    console.log("working", racers);
  }
function _moveRacers(){
    AppState.racers.forEach
}

export class RaceController {
    constructor(){ 
    }
    
    startRace(){ 
        
       raceTimer = setInterval(_drawRacers, 100)
    }
}