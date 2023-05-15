import axios from 'axios'
import cheerio from 'cheerio'
// cors때문에 백엔드에서 이루어짐
const createMessage = async () => {
    // input msg: "안녕하세요~ http://www.naver.com 에 방문해주세요!"

    // 1. 입력된 메시지에서 http로 시작하는 문장이 있는지 먼저찾기! (.find() 등의 알고리즘 사용)
    // 2. axios.get으로 요청해서 html코드 받아오기 => 스크래핑
    // 3. 스크래핑 결과에서 OG(오픈그래프) 코드를 골라내서 변수에 담기 => cheerio 도움 받기

    const url = "http://www.naver.com"
    
    const result = await axios.get(url)
    // console.log(result.data)
    const $ = cheerio.load(result.data)
    $("meta").each((index, el) => {
        if ($(el).attr("property") && $(el).attr("property").includes("og:")) {
           const key= $(el).attr("property")
            const value = $(el).attr("content")
            console.log(key,value)
        }
    })
}
createMessage()