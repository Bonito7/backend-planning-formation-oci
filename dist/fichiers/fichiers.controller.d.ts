import { FichiersService } from "./fichiers.service";
export declare class FichiersController {
    private readonly fichiersService;
    constructor(fichiersService: FichiersService);
    uploadFichiers(files: Express.Multer.File[], moduleId: string): Promise<void>;
}
