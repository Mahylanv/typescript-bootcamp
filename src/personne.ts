
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
export function afficherPersonneAvancee(personne: Personne): void {
    if (personne.adresse) {
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`);
    } else {
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}) et j'ai ${personne.age} ans.`);
    }
}
