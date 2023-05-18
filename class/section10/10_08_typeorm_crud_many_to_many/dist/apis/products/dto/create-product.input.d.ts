import { ProductSaleslocationInput } from 'src/apis/productsSaleslocaltions/dto/product-saleslocation.input';
export declare class CreateProductInput {
    name: string;
    description: string;
    price: number;
    productSaleslocation: ProductSaleslocationInput;
    productCategoryId: string;
    productTags: string[];
}
