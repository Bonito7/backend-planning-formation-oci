import { Module } from "@nestjs/common";
import { FichiersService } from "./fichiers.service";
import { FichiersController } from "./fichiers.controller";
import { MongooseModule } from "@nestjs/mongoose";
import {
  ModuleFormation,
  ModuleFormationSchema,
} from "../common/schemas/module-formation.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ModuleFormation.name, schema: ModuleFormationSchema },
    ]),
  ],
  controllers: [FichiersController],
  providers: [FichiersService],
})
export class FichiersModule {}
