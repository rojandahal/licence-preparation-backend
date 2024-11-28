import { Module } from "@nestjs/common";
import { MySqlModule } from "./mysql/mysql.module";

@Module({
    imports: [MySqlModule],
    exports: [MySqlModule]
})
export class DataSourceModule {}