export interface Employe {
    nom: string;
    poste: string;
}

export interface Client {
    nom: string;
    entreprise: string;
}

export type PersonnePro = Employe | Client;

export function afficherInfoProfessionnelle(personne: PersonnePro): void {
    if ("poste" in personne) {
        console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
    } else if ("entreprise" in personne) {
        console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
    }
}
