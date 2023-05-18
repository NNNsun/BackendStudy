"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("@nestjs/typeorm");
const productsSaleslocations_service_1 = require("../productsSaleslocaltions/productsSaleslocations.service");
const productsTags_service_1 = require("../productsTags/productsTags.service");
let ProductsService = class ProductsService {
    constructor(productsRepository, productsSaleslocationsService, productsTagsService) {
        this.productsRepository = productsRepository;
        this.productsSaleslocationsService = productsSaleslocationsService;
        this.productsTagsService = productsTagsService;
    }
    findAll() {
        return this.productsRepository.find({
            relations: ['productSaleslocation', 'productCategory'],
        });
    }
    findOne({ productId }) {
        return this.productsRepository.findOne({
            where: { id: productId },
            relations: ['productSaleslocation'],
        });
    }
    async create({ createProductInput, }) {
        const { productSaleslocation, productCategoryId, productTags } = createProductInput, product = __rest(createProductInput, ["productSaleslocation", "productCategoryId", "productTags"]);
        const result = await this.productsSaleslocationsService.create({
            productSaleslocation,
        });
        const tagNames = productTags.map((el) => el.replace('#', ''));
        const prevTages = await this.productsTagsService.findByNames({ tagNames });
        const temp = [];
        tagNames.forEach((el) => {
            const isExists = prevTages.find((prevEl) => el === prevEl.name);
            if (!isExists)
                temp.push({ name: el });
        });
        const newTags = await this.productsTagsService.bulkInsert({ names: temp });
        const tags = [...prevTages, ...newTags.identifiers];
        const result2 = this.productsRepository.save(Object.assign(Object.assign({}, product), { productSaleslocation: result, productCategory: {
                id: productCategoryId,
            }, productTags: tags }));
        return result2;
    }
    async update({ productId, updateProductInput, }) {
        const product = await this.findOne({ productId });
        this.checkSoldout({ product });
    }
    checkSoldout({ product }) {
        if (product.isSoldout) {
            throw new common_1.UnprocessableEntityException('이미 판매 완료된 상품입니다.');
        }
    }
    async delete({ productId }) {
        const result = await this.productsRepository.softDelete({ id: productId });
        return result.affected ? true : false;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        productsSaleslocations_service_1.ProductsSaleslocationsService,
        productsTags_service_1.ProductsTagsService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map