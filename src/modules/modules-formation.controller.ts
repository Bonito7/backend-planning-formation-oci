import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from "@nestjs/common";
import { ModulesFormationService } from "./modules-formation.service";
import { CreateModuleDto } from "../common/interfaces/formation.interface";

@Controller("modules")
export class ModulesFormationController {
  constructor(private readonly modulesService: ModulesFormationService) {}

  @Post()
  async create(@Body() createModuleDto: CreateModuleDto) {
    return this.modulesService.create(createModuleDto);
  }

  @Get()
  async findAll() {
    return this.modulesService.findAll();
  }

  @Get("formation/:formationId")
  async findByFormation(@Param("formationId") formationId: string) {
    return this.modulesService.findByFormationId(formationId);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.modulesService.findOne(id);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() updateModuleDto: any) {
    return this.modulesService.update(id, updateModuleDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.modulesService.remove(id);
  }
}
