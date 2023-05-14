import axios from "axios";

// 비동기
function fetchAsync() {
    const result = axios.get("https://koreanjson.com/posts/1")
console.log("비동기방식: ",result) // 비동기방식:  Promise { <pending> }
}
// 동기
// async function fetchSync() {  => 함수 중복 선언 문제를 피하자!! (화살표 함수로 변경)
//     const result = await axios.get("https://koreanjson.com/posts/1")
//     console.log("동기방식: ",result.data.title) // 동기방식:  정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는...
// }
// fetchSync()

const fetchSync = async () =>{
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log("동기방식: ",result.data)
}
fetchSync()