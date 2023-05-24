import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly clientAuthService: ClientProxy,
    @Inject('RESOURCE_SERVICE')
    private readonly clientResourceService: ClientProxy,
  ) {}
  @Post('/auth/login')
  login() {
    // 트래픽 넘기기
    // AUTH_SERVICE로 트래픽 넘겨줌
    return this.clientAuthService.send(
      { qqq: '이름' }, // 매칭
      { email: 'a@a.com', password: '1234' }, // 데이터
    );
  }

  @Get('/boards')
  fetchBoard() {
    // RESOURCE_SERVICE로 트래픽 넘겨줌
    return this.clientResourceService.send({ cmd: 'fetchBoards' }, {}); // 트래픽 넘기기
  }
}
