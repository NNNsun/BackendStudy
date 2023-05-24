import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import {
  POINT_TRANSACTION_STATUS_ENUM,
  PointTransaction,
} from './entities/pointTransaction.entity';
import { IPointsTransactionsServiceCreate } from './interfaces/points-transactions-service.interface';
import { User } from '../users/entities/user.entity';

@Injectable()
export class PointsTransactionsService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointsTransactionsRepository: Repository<PointTransaction>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    private readonly dataSource: DataSource,
  ) {}

  async create({
    impUid,
    amount,
    user: _user, // user를 _user로 받는 용도
  }: IPointsTransactionsServiceCreate): Promise<PointTransaction> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('SERIALIZABLE');

    try {
      // 1. PointTransaction table에 거래 기록 1줄 생성
      //.create(): '등록'을 위한 '빈 객체' 만들기
      //.insert(): 결과는 못 받는 '등록' 방법
      //.update(): 결과는 못 받는 '수정' 방법
      const pointTransaction = this.pointsTransactionsRepository.create({
        impUid,
        amount,
        user: _user, // user에 넣는 용도
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
      });
      // await this.pointsTransactionsRepository.save(pointTransaction);
      await queryRunner.manager.save(pointTransaction);

      // 2. 유저의 돈 찾아서 업데이트하기 // 숫자일때만 가능 => 숫자가 아니면(ex. 좌석등)? 직접 lock걸기! (service 파일 참고)
      const id = _user.id;
      queryRunner.manager.increment(User, { id }, 'point', amount);
      await queryRunner.commitTransaction();

      // 3. 최종결과 브라우저에 돌려주기
      return pointTransaction;
    } catch (error) {
      await queryRunner.rollbackTransaction(); // release가 없으면, commit이 끝나도 커넥션이 끊기지않아 문제됨(하지만 에러나면 자동끊김)
    } finally {
      await queryRunner.release();
    }
  }
}
