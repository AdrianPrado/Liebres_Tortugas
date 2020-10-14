
import Runner from "./runner.js"

export default class Race {
    constructor(dis) {
    this.dis = dis
    this.d1 = 0
    this.d2 = 0
    this.c1 = new Runner("Tortuga")
    this.c2 = new Runner("Liebre")
}

avance() {
    let x = 1 + Math.floor(Math.random() * 10)
    let y = 1 + Math.floor(Math.random() * 100)

    if (x <= 5) {
      this.d1 += 3
    } else if (x >= 5 && x <= 8) {
      this.d1 += 1
    } else {
      this.d1 -= 6
    }

    if (y <= 20) {
      this.d2 += 0
    } else if (y >= 21 && y <= 40) {
      this.d2 += 9
    } else if (y >= 41 && y <= 50) {
      this.d2 -= 12
    } else if (y >= 51 && y <= 85) {
      this.d2 += 1
    } else {
      this.d2 -= 2
    }
}

inicio() {
    let gg = 0
    let winner = document.getElementById("winner")
        
    while (gg == 0) {
        this.avance()
        if (this.d1 < this.dis && this.d2 < this.dis) {
        console.log("**********************************************")
        console.log(`La ${this.c1.name} está en la posición num: ${this.d1}`)
        console.log(`La ${this.c2.name} está en la posición num: ${this.d2}`)
        
        } else if (this.d1 >= this.dis) {
            gg = 1
        } else if (this.d2 >= this.dis) {
            gg = 2
        } else {
            gg = 1321412
        }
    }

    if (gg == 1) {
        console.log(`-----La ${this.c1.name} ha sido la ganadora-----`)
        winner.innerHTML = `La ${this.c1.name} ha sido la ganadora!!`
    } else if (gg == 2) {
        console.log("**********************************************")
        console.log(`-----La ${this.c2.name} ha sido la ganadora-----`)
        winner.innerHTML = `La ${this.c2.name} ha sido la ganadora`
    } else {
        console.log("Ha sido un empate")
        winner.innerHTML = "Empate"
    }
  }
}
