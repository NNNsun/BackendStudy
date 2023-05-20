import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { IContext } from 'src/commons/interfaces/context';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  @Mutation(() => String)
  login(
    @Args('email') email: string, //
    @Args('password') password: string,
    @Context() context: IContext,
  ): Promise<string> {
    context.req;
    context.res;
    console.log('[auth.resolver.LOGIN_password]' + email);
    return this.authService.login({ email, password, context });
  }
  // refreshToken 인가 =>refreshToken 발급
  @UseGuards(GqlAuthGuard('refresh'))
  @Mutation(() => String)
  restoreAccessToken(@Context() context: IContext): string {
    console.log('[restoreAccessToken]' + context.req.user);
    return this.authService.restoreAccessToken({ user: context.req.user });
  }
}
