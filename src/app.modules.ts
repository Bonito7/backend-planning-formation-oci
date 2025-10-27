import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FormationsModule } from './formations/formations.module';
import { ModulesFormationModule } from './modules/modules-formation.module';
import { ApprenantsModule } from './apprenants/apprenants.module';
import { FichiersModule } from './fichiers/fichiers.module';
import { AuthModule } from './auth/auth.module'; // ← Ajoutez cette ligne

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    FormationsModule,
    ModulesFormationModule,
    ApprenantsModule,
    FichiersModule,
    AuthModule, // ← Ajoutez cette ligne
  ],
})
export class AppModule {}