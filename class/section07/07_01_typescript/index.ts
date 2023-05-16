let str = "안녕하세요" // type 추론

let str2: string = "반갑다" // type 명시

let str3:(number|string) = 1000 // type 명시가 필요한 상황
str3 = "1000원"

let str4: number = 9
// str4 = "철수"  ❌

let str5: boolean = true
// str5="false" JS에선 error가 나지않음 => true로 작동! == 문자열에 문자가 존재하면 true이기 때문 

// 배열타입
let array: (number|string)[] = [1, 2, 3, "안녕"]
let array2: (number|string)[] = [1, 2, 3, "안녕"]
let array3: (string | number)[] = ["철수", "유리사", 10]

//객체타입
interface IProfile{
    name: string,
    age: number | string,
    school: string,
    hobby?:string
}


const profile:IProfile = {
    name: "철수",
    age: 5,
    school: "떡잎마을",
    
}
profile.name = "훈이" // type 추론은 이것만 가능
profile.age = "훈발";
profile.hobby = "탁구";

// function type: 어디서 몇번이든 호출 가능하므로, type 추론 할 수 없음(반드시, type명시 필요!!)
function add(num1:number, num2:number, unit:string) {
    return num1+num2+unit
}

const result = add(1000, 2000, "원") // 결과의 return type도 예측 가능!

const add2=(num1:number, num2:number, unit:string)=> {
    return num1+num2+unit
}

const result2 = add2(1000, 2000, "원")
// any type (사용 ❌)
