import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessStrategy } from './strategies/jwt_access.startegy';

@Module({
  imports: [
    JwtModule.register({}),
    UsersModule, //
  ],
  providers: [
    JwtAccessStrategy,
    AuthResolver, //
    AuthService,
  ],
})
export class AuthModule {}

// forRoot([]): 서버 전역에 영향을 주는 곳에 사용
// forFeature([]): forRoot 기능 하에 세부적인 부분만 변경할때 사용
// register({}): forRoot처럼 변형된 모듈을 사용할수 있음, 특정 module에서만 사용 가능
