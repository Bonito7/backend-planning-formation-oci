import { FormationsService } from "./formations.service";
import { Formation } from "../common/interfaces/formation.interface";
export declare class FormationsController {
    private readonly formationsService;
    constructor(formationsService: FormationsService);
    create(createFormationDto: any): Promise<Formation>;
    findAll(): Promise<Formation[]>;
    findOne(id: string): Promise<Formation>;
    update(id: string, updateFormationDto: any): Promise<Formation>;
    remove(id: string): Promise<Formation>;
}
