// 전략패턴

class Fly{
    running = () => {
        console.log("날아서 도망가기!!")
    }
}
class Work{
  running = () => {
        console.log("뛰어서 도망가기!!")
    }
}

class Monster{
    power = 10
    layer;

    constructor(temp) {
        this.layer=temp
    }

    attack = ()=> {
        console.log("공격!!")
        console.log(`내 공격력은 ${this.power} 이야!!`)
    }
    running = ()=> {
       this.layer.running()
    }
}



const myMonster1 = new Monster(new Fly())
const myMonster2 = new Monster(new Work())

myMonster1.attack()
myMonster2.running()
