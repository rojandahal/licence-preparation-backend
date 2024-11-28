import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Injectable()
export class MysqlConnection {
  static connect() {
    return TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('MYSQL_HOST'),
        port: config.get<number>('MYSQL_PORT'),
        username: config.get<string>('MYSQL_USER'),
        password: config.get<string>('MYSQL_PASSWORD'),
        database: config.get<string>('MYSQL_DATABASE'),
        entities: [__dirname + '/../../**/**/*.mysql.entity{.ts,.js}'],
        autoLoadEntities: true,
        logging: false,
        synchronize: false,
      }),
    });
  }

  static get InjectString(): string {
    return 'TypeOrm_Mysql_Connection'.toUpperCase();
  }
}
