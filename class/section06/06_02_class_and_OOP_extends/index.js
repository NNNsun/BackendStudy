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

class FlyMonster extends Monster{
    constructor(child_power) {
        super(child_power+1)
    }
    // overriding: parent Method에 덮어씌기
    running = () => {
        console.log("날아서 도망가는중!")
    }
}

class WorkMonster extends Monster{
  
    // overriding
     running = () => {
        console.log("뛰어서 도망가는중!")
    }
}

const myMonster1 = new FlyMonster(100)
const myMonster2 = new WorkMonster(30)

myMonster1.attack()
myMonster2.running()
myMonster2.attack()
myMonster1.running()