// node_modules는 실행할때만 yarn install을 통해 받아온다 -> 실행하지않고 코드만 볼 상황을 위해

// const express =require('express') // commonjs == 예전 방식
import express from 'express'        // module == 요즘 방식, export default 가져오기 방식
// import { checkPhone, getToken } from './phone.js' // export 가져오기
// import sendTokenToSMS from './phone.js';
import sendTokenToSMS,{ checkPhone, getToken } from './phone.js' // default와 함께 쓰기, sendTokenToSMS => 이름바꿔도 된다.

//import * as temp from '.phone.js' // 해당 파일의 export 모두 가져오기
//temp.checkPhone

// import sun from 'express'   // 이름바꿔서 가져오기 
const app = express();
app.use(express.json()); // bodyParser : 예전방식
// REST API
// get: 보내기
app.get('/boards', function (req, res) { // 미들웨어 함수
    // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
    const result = [
        { number: 1, writer: "철수", title: "철수입니다~", contents: "철수예요!!!" },
        { number: 2, writer: "짱구", title: "짱구입니다~", contents: "짱구예요!!!" },
        { number: 3, writer: "맹구", title: "맹구입니다~", contents:"맹구예요!!!"}

    ]
    // 2. DB에서 꺼내온 결과를 브라우저에 응답주기(response)
    res.send(result);
});
// post: 받기
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


app.listen(3000); // listen: 기다린다(바라보고 있다)는 뜻 (3000: port number)
