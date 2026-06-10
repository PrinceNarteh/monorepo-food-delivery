import { Module } from '@nestjs/common';
import { ConfigifyModule } from '@itgorillaz/configify';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigifyModule.forRootAsync()],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
