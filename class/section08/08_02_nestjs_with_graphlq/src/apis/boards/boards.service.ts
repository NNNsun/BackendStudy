import { Injectable, Scope } from '@nestjs/common';

/**
 * 인젝션 - 스코프 고르기
 *  1) 싱글톤 (new 한 번)
 *  2) Request 스코프(매 요청마다 new)
 *  3)Transient 스코프(매 주입마다 new)
 */

@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  getHello(): string {
    return 'Hello World!';
  }
}
