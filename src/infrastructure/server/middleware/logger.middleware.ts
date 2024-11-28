import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  logger = new Logger('HTTP');
  use(
    request: Request,
    response: Response,
    next: (error?: Error | any) => void,
  ) {
    const { body, method, originalUrl, ip } = request;
    const userAgent = request.get('user-agent') || '';
    const startDate = Date.now();
    response.on('finish', () => {
      const status = response.statusCode;
      const duration = Date.now() - startDate;
      let message = `[method]${method} [url]${originalUrl} [status]${status}  -  [ip]${ip} [Agent]${userAgent} [duration]${duration}ms`;
      //   if (body) message += ` - ${JSON.stringify(body)}`;
      if (status >= 500) this.logger.error(message);
      else if (status >= 400) this.logger.warn(message);
      else this.logger.log(message);
    });
    next();
  }
}
