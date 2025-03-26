import { NestFactory } from '@nestjs/core';
import { EmailModule } from './email.module';

async function bootstrap() {
  const app = await NestFactory.create(EmailModule);
  app.enableCors(); // Optional: Enable CORS if needed
  await app.listen(3000);
  console.log('Server running on http://localhost:3000');
}
bootstrap();
