import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceModule } from './infrastructure/datasource/datasource.module';
import { ConfigModule } from '@nestjs/config';
import { InfraModule } from './infrastructure/infra.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DataSourceModule,
    InfraModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
