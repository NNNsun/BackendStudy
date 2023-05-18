import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
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

  async update({
    productId,
    updateProductInput,
  }: IProductsServiceUpdate): Promise<Product> {
    // await 이유 => 아래 코드를 실행하기전 선행해야하기때문
    // 기존 있는 내용을 재사용하여, 로직을 통일하자! => 백엔드 == 안전한 코드를 지향
    const product = await this.findOne({ productId });
    this.checkSoldout({ product });
    // // DB접속이랑 괸련 없음, 등록을 위해 빈껍데기 객체 만들기 위해 사용
    // this.productsRepository.create;
    // // 등록된 결과를 객체로 받아오지않는 방법 => 굳이 브라우저에 보여주지않아도 될 경우 사용
    // this.productsRepository.insert;
    // // 수정된 결과를 객체로 받아오지않는 방법 => "
    // this.productsRepository.update;

    const result = this.productsRepository.save({
      // save 후 1회 조회하는 비용 발생
      // id 없음 => 등록, id 있음 => 수정
      // 수정하지않은 데이터도 담아서 return해야 객체 전체를 확인 할 수 있음
      ...product, // 수정후 수정되지앟은 다른 결과값까지 모두 객체로 돌려받고 싶을 때
      ...updateProductInput,
    });
    return result;
  }
  // 검증은 service에서 하자!
  // checkSoldout을 함수로 만드는 이유 => 수정, 삭제 시 등 같은 검증 로직 사용
  checkSoldout({ product }: IProductsServiceCheckSoldout): void {
    // 검증을 서비스에서 이용하는 이유: service는 logic이 실제로 실행되는 가장 작은 단위
    // => 완성된 service를 재사용하기 위함
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }

    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY, // 422
    //   );
    // }
  }
}
