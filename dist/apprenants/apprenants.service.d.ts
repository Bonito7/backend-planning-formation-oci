import { Model } from "mongoose";
import { Formation } from "../common/interfaces/formation.interface";
import { ModuleFormation } from "../common/interfaces/formation.interface";
export declare class ApprenantsService {
    private formationModel;
    private moduleModel;
    constructor(formationModel: Model<Formation>, moduleModel: Model<ModuleFormation>);
    getFormationsDisponibles(): Promise<Formation[]>;
    getPlanningParDate(date: string): Promise<Omit<import("mongoose").Document<unknown, {}, ModuleFormation> & ModuleFormation & Required<{
        _id: string;
    }>, never>[]>;
    getModulesDuJour(): Promise<Omit<import("mongoose").Document<unknown, {}, ModuleFormation> & ModuleFormation & Required<{
        _id: string;
    }>, never>[]>;
}
