export interface Employe {
    nom: string;
    poste: string;
}
export interface Client {
    nom: string;
    entreprise: string;
}
export type PersonnePro = Employe | Client;
export declare function afficherInfoProfessionnelle(personne: PersonnePro): void;
