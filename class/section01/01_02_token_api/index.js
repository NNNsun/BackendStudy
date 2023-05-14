// 안좋은 예
// function createTokenOfPhone(num) { //매개변수(파라미터)
//     // 1. 휴대폰 자릿수 검증(10~11자리)
//     if (num.length >= 10) {
//         if (num.length <= 11) {
//     // 2. 핸드폰 토큰 6자리 생성
//             const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0"); // 남은 곳을 0으로 채움, 6자리
//             console.log(result);
//             console.log(`${num} 번호로 인증번호 ${result}를 전송합니다.`);
            
//         } else {
//             console.log('에러! 핸드폰 번호를 제대로 입력해주세요!!')
//         }
//     } else {
//         console.log('에러! 핸드폰 번호를 제대로 입력해주세요!!')
//     }
//     // (다음에)3. 핸드폰번호에 토큰 전송
// }
// createTokenOfPhone('01099999999'); // 인자(아규먼트)

// 좋은 예
function createTokenOfPhone(num) { //매개변수(파라미터)
    // 1. 휴대폰 자릿수 검증(11자리)
    // 에러 먼저 체크 => early-exit
    if (num.length != 11) {
        console.log(num);
        console.log('에러! 핸드폰 번호를 제대로 입력해주세요!!');
        return;
    }
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0"); // 남은 곳을 0으로 채움, 6자리
    console.log(result);
    
    console.log(`${num} 번호로 인증번호 ${result}를 전송합니다.`);
    
    // (다음에)3. 핸드폰번호에 토큰 전송
}
createTokenOfPhone('01099999999');  // argument
 