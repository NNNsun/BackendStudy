console.log('안녕하세요!');

function getToken() {
    const result =String(Math.floor(Math.random() * 1000000)).padStart(6, "0"); // 남은 곳을 0으로 채움, 6자리
    console.log(result);
};
getToken();