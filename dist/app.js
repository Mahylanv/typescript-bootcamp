import { afficherPersonneAvancee } from "./personne.js";
const personne2 = {
    id: 1,
    nom: "Alice",
    age: 25,
    adresse: {
        rue: "10 rue des Lilas",
        ville: "Paris"
    }
};
const personne3 = {
    id: 2,
    nom: "Bob",
    age: 30
};
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
