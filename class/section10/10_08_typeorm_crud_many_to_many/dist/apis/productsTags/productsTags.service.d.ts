import { Repository } from 'typeorm';
import { ProductTag } from './entities/productTag.entity';
import { IProductsTagsServiceBulkInsert, IProductsTagsServiceFindByNames } from './interfaces/products-tags-service.interface';
export declare class ProductsTagsService {
    private readonly productsTagsRepository;
    constructor(productsTagsRepository: Repository<ProductTag>);
    findByNames({ tagNames }: IProductsTagsServiceFindByNames): Promise<ProductTag[]>;
    bulkInsert({ names }: IProductsTagsServiceBulkInsert): Promise<import("typeorm").InsertResult>;
}
