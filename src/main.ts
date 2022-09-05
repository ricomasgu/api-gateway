import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import sessionConfig from './config/session.config';
import passportConfig from './config/passport.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  sessionConfig(app);
  passportConfig(app);
  await app.listen(3000);
}
bootstrap();
