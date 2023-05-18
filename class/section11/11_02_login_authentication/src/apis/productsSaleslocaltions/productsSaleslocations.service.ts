import { Injectable } from '@nestjs/common';
import { ProductSaleslocation } from './entities/productSaleslocation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsSaleslocationsService {
  constructor(
    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationsRepository: Repository<ProductSaleslocation>,
  ) {}

  create({ productSaleslocation }) {
    return this.productSaleslocationsRepository.save({
      ...productSaleslocation,
    });
  }
}
