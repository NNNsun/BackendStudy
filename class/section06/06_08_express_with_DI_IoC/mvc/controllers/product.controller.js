import { CashService } from "./services/cash.service.js"
import { ProductService } from "./services/product.service.js"

export class ProductController{ // ProductController는 CashService에 의존하고 있다!
    paymentService;
    productService;
    constructor(paymentService,productService ) {
        this.paymentService = paymentService
        this.productService=productService
    }

    buyProduct = (req, res) => {
        // 1. 가진돈 검증하는 코드
        //const cashService = new CashService() // 의존성
        const hasMoney = this.paymentService.checkValue()

        // 2. 판매여부 검증하는 코드
        // const productService = new ProductService()
        const isSoldout = this.productService.checkSoldout()
        if (hasMoney && !isSoldout) {
            res.send("상품 구매 완료!")
        }
    }
    refundProduct = (req, res) => { 

        //const productService = new ProductService()
        const isSoldout = this.productService.checkSoldout()
        if (isSoldout) {
            res.send("판매완료")
        }    
    }
}