import { Module } from '@nestjs/common';
import { AdminService } from './admin';

@Module({
  imports: [],
  providers: [AdminService],
  exports: [AdminService],
})
export class ServiceModule {}
