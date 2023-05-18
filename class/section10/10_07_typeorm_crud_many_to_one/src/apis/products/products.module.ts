import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductSaleslocation } from '../productsSaleslocaltions/entities/productSaleslocation.entity';
import { ProductsSaleslocationsService } from '../productsSaleslocaltions/productsSaleslocations.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      ProductSaleslocation,
    ]),
  ],

  providers: [
    ProductsResolver, //
    ProductsService,
    ProductsSaleslocationsService,
  ],
})
export class ProductsModule {}
