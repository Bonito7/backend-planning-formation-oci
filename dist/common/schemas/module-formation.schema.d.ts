import { Document, Schema as MongooseSchema } from "mongoose";
declare class FichierSchema extends Document {
    nom: string;
    url: string;
    type: string;
    taille: number;
}
export declare class ModuleFormation extends Document {
    formationId: string;
    titre: string;
    horaire: {
        debut: string;
        fin: string;
    };
    date: Date;
    formateur: {
        nom: string;
        contact: string;
    };
    type: string;
    lieu: string;
    fichiers: FichierSchema[];
    createdAt: Date;
}
export declare const ModuleFormationSchema: MongooseSchema<ModuleFormation, import("mongoose").Model<ModuleFormation, any, any, any, Document<unknown, any, ModuleFormation> & ModuleFormation & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModuleFormation, Document<unknown, {}, import("mongoose").FlatRecord<ModuleFormation>> & import("mongoose").FlatRecord<ModuleFormation> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export {};
