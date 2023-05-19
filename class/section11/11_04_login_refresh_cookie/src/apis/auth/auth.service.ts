import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
  IAuthServiceSetRefreshToken,
} from './interfaces/auth-service.interface';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService, //
  ) {}
  async login({
    email,
    password,
    context,
  }: IAuthServiceLogin): Promise<string> {
    // 1. 이메일이 일치하는 유저를 DB에서 찾기
    const user = await this.usersService.findOneEmail({ email });
    // 2. 일치하는 유저가 없으면? => 에러 던지기
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다');
    // 3. 일치하는 유저가 있지만 비밀번호가 틀렸다면? => 에러던지기
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다');
    //4. refreshToken(JWT)를 만들어서 브라우저 쿠키에 저장해서 보내주기
    this.setRefreshToken({ user, context });

    // 5. 일치하는 유저도 있고 비밀번호도 맞다면?
    // =>accessToken(JWT)를 만들어서 브라우저에 전달
    return this.getAccessToken({ user });
  }
  setRefreshToken({ user, context }: IAuthServiceSetRefreshToken): void {
    console.log('[setRefreshToken 실행]');
    const refreshToken = this.jwtService.sign(
      { sub: user.id }, //
      { secret: '나의리프레시비밀번호', expiresIn: '2w' },
    );
    console.log('[setRefreshToken 실행]: ' + refreshToken);

    // 개발환경
    context.res.setHeader(
      'set-Cookie',
      `refreshToken=${refreshToken}: path=/;`,
      // header = body와 같이 감
    );
    // 배포환경
    // context.res.setHeader('set-Cookie',`refreshToken=${refreshToken}: path=/; domain=.mybacksite.com; SameSite=None; Secure; httpOnly`,);
    // context.res.setHearder("Access-Control-Allow-Origin","https://myfrontsite.com")
  }
  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    console.log('[getAccessToken 실행]');
    return this.jwtService.sign(
      { sub: user.id }, //
      { secret: '나의비밀번호', expiresIn: '1h' }, // secret =  secretOrKey !!!!
    );
  }
}
