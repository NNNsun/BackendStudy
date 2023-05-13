function checkPhone(num) {
    if (num.length != 11) {
        console.log(num);
        console.log('에러! 핸드폰 번호를 제대로 입력해주세요!!');
        return false;
    } else {
        return true;
    }
}
function getToken() {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0"); // 남은 곳을 0으로 채움, 6자리
    return result;
}
function sendTokenToSMS(num,result) {
    console.log(`${num} 번호로 인증번호 ${result}를 전송합니다.`);
}

// 퍼사드 패턴 => 기능을 가장 작은단위까지 쪼개고 함수명만 봐도 기능을 유추하도록 리팩토링하는 방식
function createTokenOfPhone(num) { //매개변수(파라미터)

    const isValid = checkPhone(num);
    if (!isValid) return;
    const myToken =getToken();
    sendTokenToSMS(num,myToken);
}
 createTokenOfPhone('01099999999');