import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/application/services/service.module';
import { AdminController } from '.';

@Module({
  imports: [ServiceModule],
  controllers: [AdminController],
  providers: [],
})
export class AdminControllerModule {}
