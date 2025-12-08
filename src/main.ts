import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
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

  /** OPEN API Swagger Generator / Instance */
  const config = new DocumentBuilder()
    .setTitle('Tasks API Documentation')
    .setDescription('The Tasks API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
