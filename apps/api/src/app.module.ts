import { ConfigifyModule } from '@itgorillaz/configify';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigifyModule.forRootAsync()],
  controllers: [],
  providers: [],
})
export class AppModule {}
