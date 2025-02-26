export interface Personne {
    nom: string;
    age: number;
}

export function afficherPersonne(personne: Personne): void {
    console.log(`Bonjour je m'appelle ${personne.nom} et j'ai ${personne.age} ans`);
}
