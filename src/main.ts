import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  //Configuración de CORS (Vital para que el frontend se conecte
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // Transforma los payloads a los tipos del DTO
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API de AutoSale')
    .setDescription('API para la gestión de vehículos en AutoSale')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  //Solo una vez el app.listen y con '0.0.0.0'
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');

  console.log(`API ejecutándose en el puerto: ${port}`);
  console.log(`Documentación disponible en: /api/docs`);
}
bootstrap();
