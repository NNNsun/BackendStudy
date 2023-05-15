import express from 'express'        // module == 요즘 방식, export default 가져오기 방식
import sendTokenToSMS,{ checkPhone, getToken } from './phone.js' // default와 함께 쓰기, sendTokenToSMS => 이름바꿔도 된다.
import swaggerUI from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import cors from 'cors'
import { checkEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js'
// mongoose == mongoDB ODM
import mongoose from 'mongoose'

const app = express();
app.use(express.json());  // .use: 모든 api에서 작동
app.use(cors())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsdoc(options)));

app.get('/boards', function (req, res) { 
    const result = [
        { number: 1, writer: "철수", title: "철수입니다~", contents: "철수예요!!!" },
        { number: 2, writer: "짱구", title: "짱구입니다~", contents: "짱구예요!!!" },
        { number: 3, writer: "맹구", title: "맹구입니다~", contents:"맹구예요!!!"}

    ]
    // 2. DB에서 꺼내온 결과를 브라우저에 응답주기(response)
    res.send(result);xw
});

app.post('/boards', function (req, res) { 
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(req);
    console.log('===========================');
    console.log(req.body);
    // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정
    // 3. DB에 저장된 결과를 브라우저에 응답
    res.send('게시물 등록에 성공하였습니다.');
});

app.post("/tokens/phone", function (req, res) {
    const myPhone=req.body.num
    const isValid = checkPhone(myPhone);
    if (!isValid) return;
    const myToken =getToken();
    sendTokenToSMS(myPhone, myToken);
    res.send("인증완료!");
});

app.post("/users", function (req, res) {
   const {name,age,school,email}=req.body
    // 1. 이메일이 정상인지 확인 (1. 존재여부, 2. 골뱅이 포함여부)
    const isValid = checkEmail(email);
    if (!isValid) return;
    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({ name, age, school });
    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email,myTemplate);
})
/*
    Name Resolution
     1) docker compose에서는 fort forwarding 없이 그룹핑이 가능하다
     2) [name-]compose.yaml에 작성한 이름을 사용한다
 */
mongoose.connect("mongodb://my-database:27017/mydocker")
    .then(() => console.log("DB 접속 성공"))
    .catch(() => console.log("DB접속 실패"))

app.listen(4000);
