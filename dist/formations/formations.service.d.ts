import { Model } from "mongoose";
import { Formation } from "../common/interfaces/formation.interface";
export declare class FormationsService {
    private formationModel;
    constructor(formationModel: Model<Formation>);
    create(createFormationDto: any): Promise<Formation>;
    findAll(): Promise<Formation[]>;
    findOne(id: string): Promise<Formation>;
    update(id: string, updateFormationDto: any): Promise<Formation>;
    remove(id: string): Promise<Formation>;
    private generateRandomColor;
}
