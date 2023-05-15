// class Date{
//     getFullYear() {
        
//     }
//     getMonth() {
        
//     }
// }
const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth() + 1)

class Monster{
    power = 10

    constructor(power) {
        this.power=power
    }

    attack = ()=> {
        console.log("공격!!")
        console.log(`내 공격력은 ${this.power} 이야!!`)
    }
    running = ()=> {
        console.log("도망가는중!")
    }
}

const myMonster1 = new Monster(100)
const myMonster2 = new Monster()

myMonster1.attack()
myMonster2.running()