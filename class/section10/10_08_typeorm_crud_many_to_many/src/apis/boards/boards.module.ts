import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsResolver } from './boards.resolver';

@Module({
  imports: [],
  providers: [
    BoardsService, //
    BoardsResolver,
  ],
})
export class BoardsModule {}
