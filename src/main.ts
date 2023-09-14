import * as Dotenv from 'dotenv';
Dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initDatabase } from './modules/database/initdatabase';

async function bootstrap() {
  process.on('uncaughtException', function (err) {
    console.log(err);
  });
  await initDatabase();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap();
