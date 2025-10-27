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

  // CORS pour le frontend (PRODUCTION)
  app.enableCors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://formation-planning-oci.netlify.app", // VOTRE FRONTEND NETLIFY
      "https://backend-planning-formation-oci.onrender.com", // VOTRE BACKEND RENDER (si nécessaire)
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
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
  console.log(`🌐 CORS autorisé pour: formation-planning-oci.netlify.app`);
}
bootstrap();
