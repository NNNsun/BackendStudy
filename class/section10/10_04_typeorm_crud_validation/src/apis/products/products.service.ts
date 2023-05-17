import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductsServiceCreate,
  IProductsServiceFindOne,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }
  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { id: productId } });
  }

  // Promise로 해당 함수에 await가 필요하다는 것을 알림
  create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    // await 안해도 resolver에서 해줌
    const result = this.productsRepository.save({
      ...createProductInput,
      //직접 하나씩 나열
      //   name: '마우스',
      //   description: '좋은 마우스',
      //   price: 3000,
    });
    // result 구성
    // result ={
    //     id:'dwfdw-gwhh',
    //     name: '마우스,
    //     price: 3000,
    // }
    return result;
  }
}
