export interface Personne {
    readonly id: number;
    nom: string;
    age: number;
    adresse?: Adresse;
}
export interface Adresse {
    rue: string;
    ville: string;
}
export declare function afficherPersonneAvancee(personne: Personne): void;
