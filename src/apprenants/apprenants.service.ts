import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Formation } from "../common/interfaces/formation.interface";
import { ModuleFormation } from "../common/interfaces/formation.interface";

@Injectable()
export class ApprenantsService {
  constructor(
    @InjectModel("Formation") private formationModel: Model<Formation>,
    @InjectModel("ModuleFormation") private moduleModel: Model<ModuleFormation>
  ) {}

  async getFormationsDisponibles(): Promise<Formation[]> {
    const aujourdhui = new Date();
    return this.formationModel
      .find({ "periode.fin": { $gte: aujourdhui } })
      .sort({ createdAt: -1 })
      .exec();
  }

  async getPlanningParDate(date: string) {
    const dateRecherche = new Date(date);
    const modules = await this.moduleModel
      .find({ date: dateRecherche })
      .populate("formationId")
      .exec();

    return modules;
  }

  async getModulesDuJour() {
    const aujourdhui = new Date();
    aujourdhui.setHours(0, 0, 0, 0);

    const demain = new Date(aujourdhui);
    demain.setDate(demain.getDate() + 1);

    return this.moduleModel
      .find({
        date: {
          $gte: aujourdhui,
          $lt: demain,
        },
      })
      .populate("formationId")
      .exec();
  }
}
