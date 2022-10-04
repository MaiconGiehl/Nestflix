import { ConfigService, ConfigModule } from '@nestjs/config';
import AppConfig from './config/app.config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: __dirname + '//../.env',
    }),
  ],
  providers: [ConfigService, AppConfig],
  exports: [ConfigService, AppConfig],
})
export class AppConfigModule {}
