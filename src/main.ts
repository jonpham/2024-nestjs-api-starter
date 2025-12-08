import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
/** Fastify
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
*/

async function bootstrap() {
  // Express
  const app = await NestFactory.create(AppModule);
  /** Fastify
   const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
   */
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
