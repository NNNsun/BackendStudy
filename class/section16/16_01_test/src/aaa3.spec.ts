import { AppController } from './app.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    // 의존성이 주입된 app에서 AppController만 뽑아옴
    appController = app.get<AppController>(AppController);
  });
  describe('getHello', () => {
    it('이 테스트의 검증 결과는 Hello World를 리턴해야함!!!', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
