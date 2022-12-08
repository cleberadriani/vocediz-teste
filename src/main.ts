import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 8080;
  console.log(`serviço iniciado na porta:${port}`);

  await app.listen(port);
}
bootstrap();
