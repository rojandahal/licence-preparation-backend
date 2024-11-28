import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConnection } from 'src/common/database';
import { AdminMySqlEntity } from './entities';

@Module({
  imports: [
    MysqlConnection.connect(),
    TypeOrmModule.forFeature([AdminMySqlEntity]),
  ],
  providers: [],
  exports: [],
})
export class MySqlModule {}
