import { Module } from "@nestjs/common";
import { ApprenantsController } from "./apprenants.controller";
import { ApprenantsService } from "./apprenants.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Formation, FormationSchema } from "../common/schemas/formation.schema";
import {
  ModuleFormation,
  ModuleFormationSchema,
} from "../common/schemas/module-formation.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Formation.name, schema: FormationSchema },
    ]),
    MongooseModule.forFeature([
      { name: ModuleFormation.name, schema: ModuleFormationSchema },
    ]),
  ],
  controllers: [ApprenantsController],
  providers: [ApprenantsService],
})
export class ApprenantsModule {}
