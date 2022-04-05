export class Racer{
    constructor(id, name, distance){
    this.id = id
    this.name = name
    this.distance = 0
    }

    get Template() {
        return `
        <div class="row bg-dark text-light my-3">
        <div class="col-12 p-4">
            <span id="1" class="fs-5 emoji"> ${this.name} </span>
         </div>
         </div>
    `}

    move(){
        
        this.distance += Math.floor(Math.random()*3)
        
    }

}