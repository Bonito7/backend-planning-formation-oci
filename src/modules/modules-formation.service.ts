import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ModuleFormation } from "../common/interfaces/formation.interface";
import { Formation } from "../common/interfaces/formation.interface";

@Injectable()
export class ModulesFormationService {
  constructor(
    @InjectModel("ModuleFormation") private moduleModel: Model<ModuleFormation>,
    @InjectModel("Formation") private formationModel: Model<Formation>
  ) {}

  async create(createModuleDto: any): Promise<ModuleFormation> {
    const module = new this.moduleModel({
      ...createModuleDto,
      createdAt: new Date(),
    });
    return module.save();
  }

  async findAll(): Promise<ModuleFormation[]> {
    return this.moduleModel
      .find()
      .populate("formationId") // Assurez-vous que c'est bien 'formationId'
      .sort({ date: 1, "horaire.debut": 1 })
      .exec();
  }

  async findOne(id: string): Promise<ModuleFormation> {
    const module = await this.moduleModel
      .findById(id)
      .populate("formationId")
      .exec();
    if (!module) {
      throw new NotFoundException("Module non trouvé");
    }
    return module;
  }

  async findByFormationId(formationId: string): Promise<ModuleFormation[]> {
    return this.moduleModel
      .find({ formationId })
      .populate("formationId")
      .sort({ date: 1, "horaire.debut": 1 })
      .exec();
  }

  async update(id: string, updateModuleDto: any): Promise<ModuleFormation> {
    const module = await this.moduleModel
      .findByIdAndUpdate(id, updateModuleDto, { new: true })
      .populate("formationId")
      .exec();

    if (!module) {
      throw new NotFoundException("Module non trouvé");
    }
    return module;
  }

  async remove(id: string): Promise<ModuleFormation> {
    const module = await this.moduleModel.findByIdAndDelete(id).exec();
    if (!module) {
      throw new NotFoundException("Module non trouvé");
    }
    return module;
  }

  async getModulesByDateRange(
    startDate: Date,
    endDate: Date
  ): Promise<ModuleFormation[]> {
    return this.moduleModel
      .find({
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      })
      .populate("formationId")
      .exec();
  }
}
