import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

import { IContext } from 'src/commons/interfaces/context';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}
  //@UseGuards(AuthGuard('access')) // restAPI 인가방식
  @UseGuards(GqlAuthGuard('access'))
  @Query(() => String)
  fetchUser(
    @Context() context: IContext, //
  ): string {
    console.log('================');
    console.log(context.req.user);
    console.log('================');
    return '인가에 성공했습니다.';
  }
  @Mutation(() => User)
  createUser(
    @Args('email') email: string, //
    @Args('password') password: string,
    @Args('name') name: string,
    @Args({ name: 'age', type: () => Int }) age: number,
  ): Promise<User> {
    return this.usersService.create({ email, password, name, age });
  }
}
