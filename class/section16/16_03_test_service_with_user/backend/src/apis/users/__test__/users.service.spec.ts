import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { beforeEach, describe } from 'node:test';
import { UsersService } from '../users.service';
import { User } from '../entities/user.entity';

// 나만의 데이터베이스 만들기
class MockUsersRepository {
  mydb = [
    { email: 'a@a.com', password: '0000', name: '짱구', age: 8 },
    { email: 'qqq@qqq.com', password: '1234', name: '철수', age: 12 },
  ];
  findOne({ where }) {
    const users = this.mydb.filter((el) => el.email === where.email);
    if (users.length) return users[0];
    return null;
  }
  save({ email, password, name, age }) {
    this.mydb.push({ email, password, name, age });
    return { email, password, name, age };
  }
}

describe('UsersService', () => {
  let usersService: UsersService;
  beforeEach(async () => {
    const usersModule = await Test.createTestingModule({
      // imports: [TypeOrmModule...],
      // controllers: [],
      providers: [
        UsersService, //
        {
          provide: getRepositoryToken(User),
          useClass: MockUsersRepository,
        },
      ],
    }).compile();

    usersService = usersModule.get<UsersService>(UsersService);
  });

  //   describe('findOneByEmail', () => {
  //     const result = usersService.findOneEmail({ email: 'a@a.com' });
  //     expect(result).toStrictEqual({
  //       email: 'a@a.com',
  //         name: '짱구',
  //         ...
  //     });
  //   });
  describe('create', () => {
    it('이미 존재하는 이메일인지 검증하기!!', async () => {
      const myData = {
        email: 'a@a.com',
        password: '1234',
        name: '철수',
        age: 13,
      };
      // 에러가 제대로 떨어지는 지 테스트
      try {
        usersService.create({ ...myData });
      } catch (error) {
        expect(error).toBeInstanceOf(ConflicetException);
      }
    });

    it('회원등록 잘 됐는지 검증!!', async () => {
      const myData = {
        email: 'b@b.com',
        password: '1234',
        name: '철수',
        age: 13,
      };
      // 예상한 내용과 동일한지 확인하는 코드
      const result = await usersService.create({ ...myData });
      const { password, ...rest } = result;
      expect(rest).toStrictEqual({
        email: 'b@b.com',
        name: '철수',
        age: 13,
      });
    });
  });
});
