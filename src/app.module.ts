import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceModule } from './infrastructure/datasource/datasource.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DataSourceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
