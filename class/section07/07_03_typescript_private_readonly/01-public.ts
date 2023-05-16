// public, private, protected, readonly
class Monster2{

    // power : 생략!

    constructor(public power) { // 접근 제어자(pubic, private, protected, readonly)가 붙으면 생성자 멤버 변수 생략!
        this.power=power
    }
    /**
     * 접근제어자 : readonly는 혼자 또는 다른 접근제어자와 같이 사용 가능
     * 속성(생성자 멤버 변수) 액세스 범위
     *  1) public: 본인수정 ⭕️, 본인접근 ⭕️, 자식수정 ⭕️, 자식접근 ⭕️, 인스턴스로 생성자 멤버 변수 값 수정 ⭕️, 값 접근 ⭕️
     *  2) private:  본인수정 ⭕️, 본인접근 ⭕️, 자식수정 ❌, 자식접근 ❌, 인스턴스로 생성자 멤버 변수 값 수정 ❌, 값 접근 ❌
     *  3) protected:  본인수정 ⭕️, 본인접근 ⭕️, 자식수정 ⭕️, 자식접근 ⭕️, 인스턴스로 생성자 멤버 변수 값 수정 ❌, 값 접근 ❌
     *  4) readonly:  본인수정 ❌, 본인접근 ⭕️, 자식수정 ❌, 자식접근 ⭕️, 인스턴스로 생성자 멤버 변수 값 수정 ❌, 값 접근 ⭕️
     */

    attack1 = ()=> {
        console.log("공격!!")
        console.log(`내 공격력은 ${this.power} 이야!!`)
    }

}

class FlyMonster2 extends Monster2{
  attack2 = ()=> {
        console.log("공격!!")
        console.log(`내 공격력은 ${this.power} 이야!!`)
    }

}


const myMonster22 = new FlyMonster2(100)

myMonster22.attack1()
myMonster22.attack2()
console.log(myMonster22.power)
myMonster22.power=10

