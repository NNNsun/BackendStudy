import { ProductCategory } from 'src/apis/productsCategories/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocaltions/entities/productSaleslocation.entity';
import { ProductTag } from 'src/apis/productsTags/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ default: false })
  isSoldout: boolean;

  @JoinColumn() // 연결할거다!
  @OneToOne(() => ProductSaleslocation) // 연결될 테이블
  productSaleslocation: ProductSaleslocation; // FK type

  @ManyToOne(() => ProductCategory) // N [현재 테이블, ERD의 FK가 있는 테이블이 항상 기준]:1 [FK의 대상 테이블]
  prodcutCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinTable() // 중간 테이블 생성 N:N
  // @ManyToMany(()대상 테이블class =>(현재 table이 정의한 대상이 되는 table의 property)=> 대상 table.대상 table이 정의한 현재 table의 property)
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  productTags: ProductTag[]; // []: Many
}
