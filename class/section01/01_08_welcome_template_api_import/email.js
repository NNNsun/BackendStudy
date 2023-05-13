import { getToday} from './utils.js'  

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
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `
    return myTemplate;
}

export function sendTemplateToEmail(num,result) {
    console.log(`${num} 이메일로 템플릿 ${result}를 전송합니다.`);
}
