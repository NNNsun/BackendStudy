import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
  ) {}

  async create({
    impUid,
    amount,
    user: _user, // user를 _user로 받는 용도
  }: IPointsTransactionsServiceCreate): Promise<PointTransaction> {
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
    await this.pointsTransactionsRepository.save(pointTransaction);

    // 2. 유저의 돈 찾아오기
    const user = await this.usersRepository.findOne({
      where: { id: _user.id },
    });
    // 3. 유저의 돈 업데이트
    await this.usersRepository.update(
      // {조건}, {수정내용}
      { id: _user.id },
      { point: user.point + amount },
    );
    // 4. 최종결과 브라우저에 돌려주기
    return pointTransaction;
  }
}
