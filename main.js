
import Race from "./race.js"

class Main {
  constructor() {
  this.race = new Race(90)
}

  startRace() {
    this.race.inicio()
  }
}

let app = new Main()
app.startRace()