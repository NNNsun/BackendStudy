import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { IProductsServiceCheckSoldout, IProductsServiceCreate, IProductsServiceFindOne, IProductsServiceUpdate } from './interfaces/products-service.interface';
import { ProductsSaleslocationsService } from '../productsSaleslocaltions/productsSaleslocations.service';
import { ProductsTagsService } from '../productsTags/productsTags.service';
export declare class ProductsService {
    private readonly productsRepository;
    private readonly productsSaleslocationsService;
    private readonly productsTagsService;
    constructor(productsRepository: Repository<Product>, productsSaleslocationsService: ProductsSaleslocationsService, productsTagsService: ProductsTagsService);
    findAll(): Promise<Product[]>;
    findOne({ productId }: IProductsServiceFindOne): Promise<Product>;
    create({ createProductInput, }: IProductsServiceCreate): Promise<Product>;
    update({ productId, updateProductInput, }: IProductsServiceUpdate): Promise<void>;
    checkSoldout({ product }: IProductsServiceCheckSoldout): void;
    delete({ productId }: IProductsServiceDelete): Promise<boolean>;
}
interface IProductsServiceDelete {
    productId: string;
}
export {};
