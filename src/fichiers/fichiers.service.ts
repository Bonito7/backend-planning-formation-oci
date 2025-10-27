import { Injectable } from "@nestjs/common";
import { Express } from "express"; // Ajouter cet import

@Injectable()
export class FichiersService {
  async uploadFichiers(files: Express.Multer.File[], moduleId: string) {
    // Votre code existant
  }
}
