import { ApprenantsService } from "./apprenants.service";
export declare class ApprenantsController {
    private readonly apprenantsService;
    constructor(apprenantsService: ApprenantsService);
    getFormationsDisponibles(): Promise<import("../common/interfaces/formation.interface").Formation[]>;
    getPlanningParDate(date: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("../common/interfaces/formation.interface").ModuleFormation> & import("../common/interfaces/formation.interface").ModuleFormation & Required<{
        _id: string;
    }>, never>[]>;
    getModulesDuJour(): Promise<Omit<import("mongoose").Document<unknown, {}, import("../common/interfaces/formation.interface").ModuleFormation> & import("../common/interfaces/formation.interface").ModuleFormation & Required<{
        _id: string;
    }>, never>[]>;
}
