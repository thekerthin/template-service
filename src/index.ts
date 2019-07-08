import * as dotenvSafe from 'dotenv-safe';

dotenvSafe.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVICE_PORT);
}

bootstrap();
