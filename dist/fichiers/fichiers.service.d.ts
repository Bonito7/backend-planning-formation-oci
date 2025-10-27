import { Model } from "mongoose";
import { ModuleFormation } from "../common/interfaces/formation.interface";
export declare class FichiersService {
    private moduleModel;
    constructor(moduleModel: Model<ModuleFormation>);
    uploadFichiers(files: Express.Multer.File[], moduleId: string): Promise<import("mongoose").Document<unknown, {}, ModuleFormation> & ModuleFormation & Required<{
        _id: string;
    }>>;
}
