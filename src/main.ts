import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BaseException } from './infrastructure/server/exceptions';

async function bootstrap() {
  const logger = new Logger('BOOTSTRAP');
  const app = await NestFactory.create(AppModule);

  const config: ConfigService = app.get(ConfigService);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory(errors) {
        return new BaseException(errors);
      },
    }),
  );

  app.setGlobalPrefix('/api/v1');
  const port = config.get<number>('APP_PORT') || 8000;
  await app.listen(port, () => {
    logger.log(`Listening on port:${port}`);
    console.log('Server is running on http://localhost:8000');
  });
}
bootstrap();
