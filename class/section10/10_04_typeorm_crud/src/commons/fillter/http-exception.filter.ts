import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException) {
    const status = exception.getStatus();
    const message = exception.message;

    console.log(`[EXCEPTION_MESSAGE]_HttpException: ${message}`);
    console.log(`[EXCEPTION_CODE]_HttpException: ${status}`);
  }
}
