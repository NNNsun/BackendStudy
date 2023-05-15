import { getToday} from './utils.js'  
import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();
const PASS_WORD = process.env.PASS_WORD
const MY_MAIL = process.env.MY_MAIL
export function checkEmail(email) {
    if (email === undefined || email.includes("@")===false ) {
        console.log("[ERROR] 유효하지않는 값")
        return false;
    } else {
        return true;
    }
}

export function getWelcomeTemplate({name, age,school}) { // parameters, {} = 순서를 보장함
   const myTemplate= `
        <html>
            <body>
                <div style="display: flex; flex-direction:column; align-items:center;">
                    <div style="width: 500px;">
                        <h1>${name}님 가입을 환영합니다!!!</h1>
                        <hr />
                        <div style="color: red;">이름: ${name}</div>
                        <div>나이: ${age}</div>
                        <div>학교: ${school}</div>
                        <div>가입일: ${getToday()}</div>
                    </div>
                </div>
            </body>
        </html>
    `
    return myTemplate;
} // css를 적용하는 버전이 사이트마다 다르기때문에 구버전 사용 권장

export async function sendTemplateToEmail(email,result) {
  const transporter=  nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: MY_MAIL,
            pass: PASS_WORD,
        }
  })
  const res= await transporter.sendMail({
        from: MY_MAIL,
        to: email,
        subject: "가입을 축하합니다!!!!",
        html:result
  })
    console.log(res)
}
