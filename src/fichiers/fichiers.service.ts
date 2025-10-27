import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ModuleFormation } from "../common/interfaces/formation.interface";

@Injectable()
export class FichiersService {
  constructor(
    @InjectModel("ModuleFormation") private moduleModel: Model<ModuleFormation>
  ) {}

  async uploadFichiers(files: Express.Multer.File[], moduleId: string) {
    const fichiers = files.map((file) => ({
      nom: file.originalname,
      url: `/uploads/${file.filename}`,
      type: file.mimetype,
      taille: file.size,
    }));

    return this.moduleModel.findByIdAndUpdate(
      moduleId,
      { $push: { fichiers: { $each: fichiers } } },
      { new: true }
    );
  }
}
