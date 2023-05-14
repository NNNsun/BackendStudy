// node_modules는 실행할때만 yarn install을 통해 받아온다 -> 실행하지않고 코드만 볼 상황을 위해

// const express =require('express') // commonjs == 예전 방식
import express from 'express'        // module == 요즘 방식

const app = express();
// REST API
app.get('/hello', function (req, res) { // 미들웨어 함수
    res.send('Hello World');
});

app.listen(3000); // listen: 기다린다(바라보고 있다)는 뜻 (3000: port number)