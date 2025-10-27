"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_modules_1 = require("./app.modules");
const express = require("express");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_modules_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.use("/uploads", express.static((0, path_1.join)(__dirname, "..", "uploads")));
    app.enableCors({
        origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const port = configService.get("PORT") || 3000;
    await app.listen(port);
    console.log(`🚀 Backend démarré sur http://localhost:${port}`);
    console.log(`📁 Uploads disponibles sur http://localhost:${port}/uploads`);
    console.log(`🗄️  Connecté à MongoDB Atlas`);
}
bootstrap();
//# sourceMappingURL=main.js.map