import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(port: number) {
  const app = await NestFactory.create(AppModule);
  console.log(port);
  await app.listen(port);
}
bootstrap(8000);
