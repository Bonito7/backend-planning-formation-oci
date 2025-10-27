import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ModulesFormationController } from "./modules-formation.controller";
import { ModulesFormationService } from "./modules-formation.service";
import {
  ModuleFormation,
  ModuleFormationSchema,
} from "../common/schemas/module-formation.schema";
import { Formation, FormationSchema } from "../common/schemas/formation.schema";
import { FormationsModule } from "../formations/formations.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ModuleFormation.name, schema: ModuleFormationSchema },
    ]),
    MongooseModule.forFeature([
      { name: Formation.name, schema: FormationSchema },
    ]), // Ajoutez cette ligne
    FormationsModule,
  ],
  controllers: [ModulesFormationController],
  providers: [ModulesFormationService],
  exports: [ModulesFormationService],
})
export class ModulesFormationModule {}
