import { ConfigifyModule } from '@itgorillaz/configify';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DBModule } from './db/db.module';

@Module({
  imports: [ConfigifyModule.forRootAsync(), DBModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
