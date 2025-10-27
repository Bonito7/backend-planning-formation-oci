export interface Formation {
    _id?: string;
    nom: string;
    vague: string;
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
    couleur: string;
    createdAt: Date;
}
export interface CreateFormationDto {
    nom: string;
    vague: string;
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
}
export interface ModuleFormation {
    _id?: string;
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
    type: "presentiel" | "en_ligne";
    lieu: string;
    fichiers: Fichier[];
    createdAt: Date;
}
export interface CreateModuleDto {
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
    type: "presentiel" | "en_ligne";
    lieu: string;
}
export interface Fichier {
    nom: string;
    url: string;
    type: string;
    taille: number;
}
