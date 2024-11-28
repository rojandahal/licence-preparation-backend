import { Module } from '@nestjs/common';
import { AdminControllerModule } from './admin';
import { RouterModule } from '@nestjs/core';
import routes from './router';

@Module({
  imports: [AdminControllerModule, RouterModule.register(routes)],
  controllers: [],
  providers: [],
})
export class ControllerModule {}
