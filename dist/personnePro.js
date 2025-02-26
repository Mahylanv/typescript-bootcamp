export function afficherInfoProfessionnelle(personne) {
    if ("poste" in personne) {
        console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
    }
    else if ("entreprise" in personne) {
        console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
    }
}
