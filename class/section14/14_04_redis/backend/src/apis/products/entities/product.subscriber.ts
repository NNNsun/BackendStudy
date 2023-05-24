import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';

// Trigger : 메인로직에서 빠진 것들, 메인 프로세스에서 벋어난 것들(통계계산, 로그 쌓기)
// 1. 트랜잭션으로 연결된 중요한 내용들엔 사용 ❌
@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Product;
  }
  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log(event);
    const id = event.entity.id;
    const name = event.entity.name;
    const description = event.entity.description;
    const price = event.entity.price;
    const isSoldout = event.entity.isSoldout;

    console.log(`${id}, ${name}, ${description}, ${price}, ${isSoldout}`);
    // DB 로그찍기 편리한 프레임워크들
    // 1. 빅쿼리 [LOG찍는 용도]
    // 2. 엘라스틱 서치
  }
}
