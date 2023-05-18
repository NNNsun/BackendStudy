import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
// import { KakaoStrategy } from 'passport-kakao'
// import {NaverStrategy } from 'passport-naver'

// 1. 비밀번호 검증
// 2. 만료시간 검증
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    super({
      //   jwtFromRequest: (req) => {
      //     // accessToken
      //     const temp = req.headers.Authrization;
      //     const accessToken = temp.toLowrcase().replace('bearer ', '');
      //     return accessToken;
      //   },
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '나의비밀번호',
    });
  }

  validate(payload) {
    console.log(`[JWT_PAYLOAD] ${payload}`); //{sub: wdgwd(유저ID)}
    return {
      id: payload.sub,
    };
  }
}
