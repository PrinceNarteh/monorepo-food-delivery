import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  const port = app.get(AppConfig).port;
  console.log(`API running on port ${port}`);
  await app.listen(port);
}

void bootstrap();
