import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';

/**
 * 인젝션 - 스코프 고르기
 *  1) 싱글톤 (new 한 번)
 *  2) Request 스코프(매 요청마다 new)
 *  3)Transient 스코프(매 주입마다 new)
 */

@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  findAll(): Board[] {
    const result = [
      {
        number: 1,
        writer: '철수',
        title: '철수입니다~',
        contents: '철수예요!!!',
      },
      {
        number: 2,
        writer: '짱구',
        title: '짱구입니다~',
        contents: '짱구예요!!!',
      },
      {
        number: 3,
        writer: '맹구',
        title: '맹구입니다~',
        contents: '맹구예요!!!',
      },
    ];
    return result;
  }
  create({ createBoardInput }: IBoardsServiceCreate): string {
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);

    return '게시물 등록에 성공하였습니다.';
  }
}
