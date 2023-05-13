function checkEmail(email) {
    if (email === undefined || email.includes("@")===false ) {
        console.log("[ERROR] 유효하지않는 값")
        return false;
    } else {
        return true;
    }
}

function getWelcomeTemplate({name, age,school, createdAt}) { // parameters, {} = 순서를 보장함
   const myTemplate= `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `
    return myTemplate;
}

function sendTemplateToEmail(num,result) {
    console.log(`${num} 이메일로 템플릿 ${result}를 전송합니다.`);
}
function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const str = `${year}-${month}-${day}`
    return str;
}

function createUser({ name, age, school, email, createdAt }) {
    // 1. 이메일이 정상인지 확인 (1. 존재여부, 2. 골뱅이 포함여부)
    const isValid = checkEmail(email);
    if (!isValid) return;
    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({ name, age, school, createdAt });
    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email,myTemplate);
  
}



const name='철수'
const age=8
const school='다람쥐초등학교'
const email="a@a.com"
const createdAt = getToday();
createUser({ name, age, school, email, createdAt });
