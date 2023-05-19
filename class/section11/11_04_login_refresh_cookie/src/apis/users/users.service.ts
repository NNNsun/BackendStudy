import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  IUsersServiceCreate,
  IUsersServiceFindOneByEmail,
  IUsersServiceMakeHashedPassword,
} from './interfaces/users-service.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) //
    private readonly usersRepository: Repository<User>,
  ) {}

  // Service 상단 : service 내에 중복 사용 또는 재사용 해야하는 logics
  findOneEmail({ email }: IUsersServiceFindOneByEmail): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }
  makeHashedPassword({
    password,
  }: IUsersServiceMakeHashedPassword): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  // Service 하단 : Primary Service Logic
  async create({
    email,
    password,
    name,
    age,
  }: IUsersServiceCreate): Promise<User> {
    const user = await this.findOneEmail({ email }); // DB test_result: $2b$10$5NAAXDf9rKp6QtinVwOMSOATs / UKX4SC5bymxgQyAeNegLBK5XU5u;
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');

    const hashedPassword = await this.makeHashedPassword({ password });
    return this.usersRepository.save({
      email,
      password: hashedPassword,
      name,
      age,
    });
  }
}
