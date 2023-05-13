// 구조분해할당 예제
// const profile = {
//     name: '철수',
//     age: 12,
//     school: '다람쥐초등학교',
// }
// const { name, age, school } = profile; // 객체


// // 1. 일반변수 전달하기
// function temp(str) {
//     console.log(str);
// }
// temp('사과');

// 2. 객체 전달
// function temp(obj) {
//     console.log(obj.apple);
//     console.log(obj.banana);
    
// }

// const basket = {
//     apple: 3,
//     banana:10,
// }
// temp(basket)

// 3. 객체전달 - 구조분해방식
function temp({apple,banana}) {
    console.log(apple);
    console.log(banana);
    
}

const basket = {
    apple: 3,
    banana:10,
}
temp(basket)