import { Document } from 'mongoose';
export declare class Formation extends Document {
    nom: string;
    vague: string;
    couleur: string;
    periode: {
        debut: Date;
        fin: Date;
    };
    lieu: {
        nom: string;
        lienMaps: string;
    };
    periodeTutorat: {
        debut: Date;
        fin: Date;
    };
    createdAt: Date;
}
export declare const FormationSchema: import("mongoose").Schema<Formation, import("mongoose").Model<Formation, any, any, any, Document<unknown, any, Formation> & Formation & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Formation, Document<unknown, {}, import("mongoose").FlatRecord<Formation>> & import("mongoose").FlatRecord<Formation> & {
    _id: import("mongoose").Types.ObjectId;
}>;
