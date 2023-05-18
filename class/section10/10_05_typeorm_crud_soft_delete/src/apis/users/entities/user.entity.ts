import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;
  @Column()
  name: string;

  @Column()
  @Field(() => String)
  email: string;
}
