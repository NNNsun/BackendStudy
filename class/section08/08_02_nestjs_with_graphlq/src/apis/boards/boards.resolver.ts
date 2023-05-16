import { Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boarderService: BoardsService, //
  ) {}
  @Query(() => String, { nullable: true })
  fetchBoards(): string {
    return this.boarderService.getHello();
  }
}
