// // public, private, protected, readonly
// class Monster4{

//     // power : 생략!

//     constructor(protected power) { // 접근 제어자(pubic, private, protected, readonly)가 붙으면 생성자 멤버 변수 생략!
//         this.power=power
//     }
//    /**
//      * 접근제어자 : readonly는 혼자 또는 다른 접근제어자와 같이 사용 가능
//      * 속성(생성자 멤버 변수) 액세스 범위
//      *  1) public: 본인수정 ⭕️, 본인접근 ⭕️, 자식수정 ⭕️, 자식접근 ⭕️, 인스턴스로 생성자 멤버 변수 값 수정 ⭕️, 값 접근 ⭕️
//      *  2) private:  본인수정 ⭕️, 본인접근 ⭕️, 자식수정 ❌, 자식접근 ❌, 인스턴스로 생성자 멤버 변수 값 수정 ❌, 값 접근 ❌
//      *  3) protected:  본인수정 ⭕️, 본인접근 ⭕️, 자식수정 ⭕️, 자식접근 ⭕️, 인스턴스로 생성자 멤버 변수 값 수정 ❌, 값 접근 ❌
//      *  4) readonly:  본인수정 ❌, 본인접근 ⭕️, 자식수정 ❌, 자식접근 ⭕️, 인스턴스로 생성자 멤버 변수 값 수정 ❌, 값 접근 ⭕️
//      */

//     attack1 = ()=> {
//         console.log("공격!!")
//         console.log(`내 공격력은 ${this.power} 이야!!`) // 안에서 접근 가능
//         this.power = 30 // 안에서 수정 가능
//     }

// }

// class FlyMonster4 extends Monster4{
//   attack2 = ()=> {
//         console.log("공격!!")
//         console.log(`내 공격력은 ${this.power} 이야!!`) // 자식이 접근 가능
//         this.power = 30 // 자식이 수정 가능
//     }

// }


// const myMonster44 = new FlyMonster4(100)

// myMonster44.attack1()
// myMonster44.attack2()
// console.log(myMonster44.power) // 밖에서 접근 불가
// myMonster44.power=10 // 밖에서 수정 불가

