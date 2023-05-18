import { ProductSaleslocation } from './entities/productSaleslocation.entity';
import { Repository } from 'typeorm';
export declare class ProductsSaleslocationsService {
    private readonly productSaleslocationsRepository;
    constructor(productSaleslocationsRepository: Repository<ProductSaleslocation>);
    create({ productSaleslocation }: {
        productSaleslocation: any;
    }): Promise<any>;
}
