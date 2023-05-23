import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './commons/fillter/http-exception.filter';
import { graphqlUploadExpress } from 'graphql-upload';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // request 중 통과된 값만 resolver에 적용됨, request lifeCycle과 연관
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(graphqlUploadExpress());
  await app.listen(3000);
}
bootstrap();
