import { ModulesFormationService } from "./modules-formation.service";
import { CreateModuleDto } from "../common/interfaces/formation.interface";
export declare class ModulesFormationController {
    private readonly modulesService;
    constructor(modulesService: ModulesFormationService);
    create(createModuleDto: CreateModuleDto): Promise<import("../common/interfaces/formation.interface").ModuleFormation>;
    findAll(): Promise<import("../common/interfaces/formation.interface").ModuleFormation[]>;
    findByFormation(formationId: string): Promise<import("../common/interfaces/formation.interface").ModuleFormation[]>;
    findOne(id: string): Promise<import("../common/interfaces/formation.interface").ModuleFormation>;
    update(id: string, updateModuleDto: any): Promise<import("../common/interfaces/formation.interface").ModuleFormation>;
    remove(id: string): Promise<import("../common/interfaces/formation.interface").ModuleFormation>;
}
