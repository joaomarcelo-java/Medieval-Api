import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; 
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,     // Remove campos que não estão no DTO
    forbidNonWhitelisted: true, // Dá erro se enviarem campos extras
    transform: true,     // Transforma os tipos automaticamente
  }));
// CONFIGURAÇÃO DO SWAGGER
  const config = new DocumentBuilder()
    .setTitle('RPG API')
    .setDescription('Documentação completa das rotas de Personagens, Itens e Guildas')
    .setVersion('1.0')
    .addTag('personagens')
    .addTag('itens')
    .addTag('guildas')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 
  await app.listen(3000);
}
bootstrap();