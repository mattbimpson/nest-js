import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from '../config/database.config';
import appConfig from '../config/app.config';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, appConfig]
    }),
    ItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
