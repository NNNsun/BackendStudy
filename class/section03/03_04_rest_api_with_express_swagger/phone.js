export function checkPhone(num) {
    if (num.length != 11) {
        console.log(num);
        console.log('에러! 핸드폰 번호를 제대로 입력해주세요!!');
        return false;
    } else {
        return true;
    }
}
export function getToken() {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0"); // 남은 곳을 0으로 채움, 6자리
    return result;
}
export default function sendTokenToSMS(num,result) {
    console.log(`${num} 번호로 인증번호 ${result}를 전송합니다.`);
}