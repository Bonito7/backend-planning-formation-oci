import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Formation } from "../common/interfaces/formation.interface";

@Injectable()
export class FormationsService {
  constructor(
    @InjectModel("Formation") private formationModel: Model<Formation>
  ) {}

  async create(createFormationDto: any): Promise<Formation> {
    const formation = new this.formationModel({
      ...createFormationDto,
      // Utilise la couleur envoyée ou génère une couleur aléatoire par défaut
      couleur: createFormationDto.couleur || this.generateRandomColor(),
      createdAt: new Date(),
    });
    return formation.save();
  }

  async findAll(): Promise<Formation[]> {
    return this.formationModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Formation> {
    return this.formationModel.findById(id).exec();
  }

  async update(id: string, updateFormationDto: any): Promise<Formation> {
    return this.formationModel
      .findByIdAndUpdate(id, updateFormationDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Formation> {
    return this.formationModel.findByIdAndDelete(id).exec();
  }

  private generateRandomColor(): string {
    const colors = [
      "#FF6B6B",
      "#4ECDC4", 
      "#45B7D1",
      "#96CEB4",
      "#FFEAA7",
      "#DDA0DD",
      "#98D8C8",
      "#F7DC6F",
      "#BB8FCE",
      "#85C1E9",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}