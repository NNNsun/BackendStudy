const fetchData = async () => {
  // API 보내기 요청 !

  // Promise로 만들면 await, .then이 가능해진다
  const result = await new Promise((성공시함수, 실패시함수) => {
    setTimeout(() => {
      try {
        console.log("이미지 받아왔다~!");
        성공시함수("강아지.jpg"); // result로 받을 수 있음
      } catch (error) {
        실패시함수("실패했습니다!!");
      }
    }, 2000);
  });
  console.log(result);
};

fetchData();
