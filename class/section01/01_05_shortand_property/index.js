function send(msg) {
    console.log(msg.name)
    console.log(msg.age)
    console.log(msg.school)
}

const name = "철수";
const age = 12
const school = "다람쥐초등학교"


// const profile = {
//     name: "철수",
//     age: 12,
//     school: "다람쥐초등학교"
// }

const profile = { name, age, school } // short and property : key와 value가 같아서 value생략 => 구조분해할당
send(profile);
/**
 * 구조분해할당
 * 1) 배열
 *      순서가 중요 [0][1][2], 이름은 중요하지않음
 * 2) 객체
 *      이름이 중요 _ name, age, school === age, name, school _, 순서는 중요하지않음
 */