import { FichiersService } from "./fichiers.service";
export declare class FichiersController {
    private readonly fichiersService;
    constructor(fichiersService: FichiersService);
    uploadFichiers(files: Express.Multer.File[], moduleId: string): Promise<import("mongoose").Document<unknown, {}, import("../common/interfaces/formation.interface").ModuleFormation> & import("../common/interfaces/formation.interface").ModuleFormation & Required<{
        _id: string;
    }>>;
}
