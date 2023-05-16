import express from "express";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { PointService } from "./mvc/controllers/services/point.service.js";
import { CashService } from "./mvc/controllers/services/cash.service.js";
import { ProductService } from "./mvc/controllers/services/product.service.js";

const app = express();
// loose-coupling
const productService = new ProductService(); // 1. 의존성 주입으로 몽땅 한번에 변경 가능
const cashService = new CashService(); // 2. new 한번으로 모든 곳에서 재사용 가능 =>싱글톤 패턴 =>(new 감소) Memory 절약
const pointService = new PointService(); // 3. 의존성 주입으로 쿠폰 구매 방식을포인트 결제로 안전하게 변경 가능

// 1. ProductController가 CashService에 의존하고 있다 => 강하게 결합 => Tight-Coupling
// 2. 이를 개선하기 위해서 "느슨한 결합"으로 변경할 필요가 있음 => loose-coupling =>"의존성 주입"(Dependency-Injection. DI)
//      이 역할을 대신해주는 Nest.js 기능 => (제어역전)IoC 컨테이너: 알아서 new. 즉 DI 해줌
//      IoC: Inversion-Of-Control
// 3. "의존성 주입"으로 "싱글톤 패턴" 구현 가능 => "의존성주입"이면 항상 "싱글톤패턴"인가? => ❌

// 상품 API
const productController = new ProductController(cashService, productService); // 의존성 주입
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

// 쿠폰(상품권) API
const couponController = new CouponController(cashService);
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000);
