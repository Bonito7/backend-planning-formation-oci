import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  Param,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { FichiersService } from "./fichiers.service";
import { multerConfig } from "../common/config/multer.config";

@Controller("fichiers")
export class FichiersController {
  constructor(private readonly fichiersService: FichiersService) {}

  @Post("upload/:moduleId")
  @UseInterceptors(FilesInterceptor("files", 10, multerConfig))
  async uploadFichiers(
    @UploadedFiles() files: Express.Multer.File[],
    @Param("moduleId") moduleId: string
  ) {
    return this.fichiersService.uploadFichiers(files, moduleId);
  }
}
