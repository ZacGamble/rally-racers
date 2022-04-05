import { Racer } from "./Models/Racer.js"

let racer1 = new Racer(1, 'Fox 🦊')
let racer2 = new Racer(2, 'Wolf 🐺')
let racer3 = new Racer(3, "Slippy 🐸")
let racer4 = new Racer(4, 'Peppy 🐰')

export const AppState = {
    racers: [racer1, racer2, racer3, racer4]
}

