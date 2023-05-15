import coolsms from 'coolsms-node-sdk'
const mysms = coolsms.default

import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY; // API 키 변수 로드
const API_SECRET = process.env.API_SECRET; // API 키 변수 로드
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
export default async function sendTokenToSMS(num, result) {
    const messageService = new mysms(API_KEY, API_SECRET)
   const res= await messageService.sendOne({
        to:num,
        from:"01095653242",
        text: `[실습] 한순간 불가능해 보이는 것도 신념을 가지면 다음 순간 가능해진다. -노먼 빈센트 필-\n인증번호 [${result}]`
    })
    console.log(res)
}
/**
 * 양식
 * {
  groupId: 'G4V20230514205604Q8QLYIMNJ9EDCXA',
  to: '01095653242',
  from: '01095653242',
  type: 'LMS',
  statusMessage: '정상 접수(이통사로 접수 예정) ',
  country: '82',
  messageId: 'M4V20230514205605HOQLELSRTXENUNQ',
  statusCode: '2000',
  accountId: '23051438655784'
}
 */