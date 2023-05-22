import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductSaleslocation } from '../productsSaleslocaltions/entities/productSaleslocation.entity';
import { ProductsSaleslocationsService } from '../productsSaleslocaltions/productsSaleslocations.service';
import { ProductsTagsService } from '../productsTags/productsTags.service';
import { ProductTag } from '../productsTags/entities/productTag.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      ProductSaleslocation,
      ProductTag,
    ]),
  ],

  providers: [
    ProductsResolver, //
    ProductsService,
    ProductsSaleslocationsService,
    ProductsTagsService,
  ],
})
export class ProductsModule {}
