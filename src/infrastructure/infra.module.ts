import { Controller, Module } from '@nestjs/common';
import { ControllerModule } from './controllers/controller.module';
import { NestModule } from './server/nest.module';

@Module({
  imports: [ControllerModule, NestModule],
  controllers: [],
  providers: [],
  exports: [ControllerModule, NestModule],
})
export class InfraModule {}
