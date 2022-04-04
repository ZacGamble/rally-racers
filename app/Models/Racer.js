export class Racer{
    constructor(id, name){
    this.id = id
    this.name = name
    this.distance = 0
    }

    move(){
        if(this.distance <= 95){
        this.distance += Math.floor(Math.random()*3)
        }else{
            clearInterval(raceTimer)
        }
    }

}