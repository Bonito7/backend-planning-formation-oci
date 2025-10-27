import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from "@nestjs/common";
import { FormationsService } from "./formations.service";
import { Formation } from "../common/interfaces/formation.interface";

@Controller("formations")
export class FormationsController {
  constructor(private readonly formationsService: FormationsService) {}

  @Post()
  async create(@Body() createFormationDto: any): Promise<Formation> {
    return this.formationsService.create(createFormationDto);
  }

  @Get()
  async findAll(): Promise<Formation[]> {
    return this.formationsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Formation> {
    return this.formationsService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateFormationDto: any
  ): Promise<Formation> {
    return this.formationsService.update(id, updateFormationDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<Formation> {
    return this.formationsService.remove(id);
  }
}
