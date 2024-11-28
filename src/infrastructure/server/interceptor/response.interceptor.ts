import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
  error: any;
  timestamp: Date;
  path: string;
  method: string;
  url: string;
}
@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<TemplateStringsArray, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> | Promise<Observable<Response<T>>> {
    console.log('ResponseInterceptor');
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response<T>>();
    response.statusCode = 200;
    return next.handle();
  }
}
