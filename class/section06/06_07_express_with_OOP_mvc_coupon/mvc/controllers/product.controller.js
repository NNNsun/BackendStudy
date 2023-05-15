import { CashService } from "./services/cash.service"
import { ProductService } from "./services/product.service"

export class ProductController{
    buyProduct = (req, res) => {
        // 1. 가진돈 검증하는 코드
        const cashService = new CashService()
        const hasMoney = cashService.checkValue()
        // 2. 판매여부 검증하는 코드
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout()
        if (hasMoney && !isSoldout) {
            res.send("상품 구매 완료!")
        }
    }
    refundProduct = (req, res) => { 

        const productService = new ProductService()
        const isSoldout = productService.checkSoldout()
        if (isSoldout) {
            res.send("판매완료")
        }    
    }
}