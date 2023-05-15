import express from 'express'
import { CashService, CashService } from './cash';
import { ProductService } from './product'; 
const app = express();
app.post('/products/buy', (req, res) => { 
 /**
  * 1. 가진돈 검증하는 코드 (대락 10줄)
  * 2. 판매여부 검증하는 코드 (대략 10줄)
  * 3. 상품 구매하는 코드
  *  if (돈있음 && !판매완료) {
  *     res.send("상품 구매 완료!")
  *  }
  */
  // 1. 가진돈 검증하는 코드
  const cashService = new CashService()
  const hasMoney =cashService.checkValue()
  // 2. 판매여부 검증하는 코드
  const productService = new ProductService()
  const isSoldout = productService.checkSoldout()
  if (hasMoney && !isSoldout) {
    res.send("상품 구매 완료!")
  }
});
app.post('/products/refund', (req, res) => { 
 /**
  * 1. 판매여부 검증하는 코드 (대략 10줄)
  *     ...
  *     ...
  *     ...
  *     ...
  * 2. 상품 환불하는 코드
  */
  const productService = new ProductService()
  const isSoldout = productService.checkSoldout()
  if (isSoldout) {
    res.send("판매완료")
  }
});
app.listen(3000); 
