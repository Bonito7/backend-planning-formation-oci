import { Controller, Get, Param } from "@nestjs/common";
import { ApprenantsService } from "./apprenants.service";

@Controller("apprenants")
export class ApprenantsController {
  constructor(private readonly apprenantsService: ApprenantsService) {}

  @Get("formations")
  async getFormationsDisponibles() {
    return this.apprenantsService.getFormationsDisponibles();
  }

  @Get("calendrier/:date")
  async getPlanningParDate(@Param("date") date: string) {
    return this.apprenantsService.getPlanningParDate(date);
  }

  @Get("modules/aujourdhui")
  async getModulesDuJour() {
    return this.apprenantsService.getModulesDuJour();
  }
}
