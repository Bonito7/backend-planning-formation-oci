import { Model } from "mongoose";
import { ModuleFormation } from "../common/interfaces/formation.interface";
import { Formation } from "../common/interfaces/formation.interface";
export declare class ModulesFormationService {
    private moduleModel;
    private formationModel;
    constructor(moduleModel: Model<ModuleFormation>, formationModel: Model<Formation>);
    create(createModuleDto: any): Promise<ModuleFormation>;
    findAll(): Promise<ModuleFormation[]>;
    findOne(id: string): Promise<ModuleFormation>;
    findByFormationId(formationId: string): Promise<ModuleFormation[]>;
    update(id: string, updateModuleDto: any): Promise<ModuleFormation>;
    remove(id: string): Promise<ModuleFormation>;
    getModulesByDateRange(startDate: Date, endDate: Date): Promise<ModuleFormation[]>;
}
