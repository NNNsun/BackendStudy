## 대표적인 Web API 통신

>  GraphQL vs REST API

| 분류          | GraphQL        | REST API       |
| :-----------: | :------------: | :------------: |
| Open-Api   |   적음   |    일반적으로 제공 |
| API 형태    |    함수 형식    |     주소 형식 |
| Front-Program    |   apollo client      |     axios|
| 요청    |   요청 받은 각 필드에 대한 resolver를 호출    |   엔드포인트에 정의된 핸들링 함수를 호출   |
| Resource    |    GraphQL Schema    |    URI |
| 작업형태    |    Query, Mutation    |    Method |
| Resource 형태정의 및 데이터 요청    | 완전히 분리된 상태    |    연결되어있는 상태 |
| 다수 Resource에 접근 시    | 1회 요청    |    여러번 요청 필요 |

<br>


>  GraphQL의 장점
 *  하나의 엔드포인트만 존재
 *  요청할 때 사용하는 쿼리에 따라 다른 응답을 받을 수 있음
 *  원하는 데이터(response)만 받을 수 있음
    * REST API의 문제점 보완 
      * OverFetching: 엔드포인트에 존재하는 모든 데이터를 가져와야 하기때문에 불필요한 데이터를 담고 있는 경우 네트워크 낭비가 발생한다
      * UnderFetching: 하나의 엔드포인트로 필요한 모든 데이터 요청을 처리하지 못하므로 여러 번의 API 호출로 인해 요청 횟수가 증가하는 문제를 말한다
*  무중단 배포에 유리
   *  API가 기존 쿼리를 중단하지 않고도 진화할 수 있도록 허용

<br>

> GraphQL의 단점
* 변형(GraphQL 개발자가 데이터를 제출하는 방식)이 복잡해지면 설계가 어려워진다
  *  데이터 유형이 매우 다양할 때
  *  제출된 데이터가 지나치게 적을 경우
* HTTP 캐싱 사용 불가능
  * 일반적인 HTTP 프로토콜에서는 URL마다 다양한 캐쉬 정책을 설정할 수 있는데 GraphQL은 단일 엔드포인트를 가지므로 HTTP 캐싱이 어렵다
    * persist query, persist graphql 같은 기능을 사용
* 빈약한 Error 핸들링
  * REST API의 경우, 다양한 API 요청의 상태에 따라 HTTP status 코드를 반환하는 반면 Graphql의 경우, 모든 요청에 대해 200 OK status 코드를 내려주기 때문에, status 코드만으로 API 상태를 구분하고, 관리하는데 어렵다 

<br>

```
⭐️ GraphQL는 재사용 가능성 측면에 최적화하는데 목적을 두어야 한다
```
