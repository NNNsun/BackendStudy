import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
// import { KakaoStrategy } from 'passport-kakao'
// import {NaverStrategy } from 'passport-naver'

// 1. 비밀번호 검증
// 2. 만료시간 검증
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        const cookie = req.headers.cookie; // refreshToken=
        console.log('[cookie]= ' + cookie);
        const refreshToken = cookie.replace('refreshToken=', '');
        return refreshToken;
      },
      secretOrKey: 'refreshPassWord',
    });
  }

  validate(payload) {
    console.log(`[JWT_PAYLOAD]: ${payload}`); //{sub: wdgwd(유저ID)}
    return {
      email: payload.email,
      id: payload.sub,
    };
  }
}
