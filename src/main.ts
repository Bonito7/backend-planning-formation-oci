import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AppModule } from "./app.modules";
import * as express from "express";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Middleware pour servir les fichiers uploadés
  app.use("/uploads", express.static(join(__dirname, "..", "uploads")));

  // CORS pour le frontend
  app.enableCors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  });

  // Validation globale
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  const port = configService.get<number>("PORT") || 3000;
  await app.listen(port);
  console.log(`🚀 Backend démarré sur http://localhost:${port}`);
  console.log(`📁 Uploads disponibles sur http://localhost:${port}/uploads`);
  console.log(`🗄️  Connecté à MongoDB Atlas`);
}
bootstrap();
