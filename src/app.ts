import { getProperty } from "./generics.js";

interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}

const maVoiture: Voiture = {
    marque: "ASTon Martin",
    modele: "DB 6",
    annee: 1990
};

const marque = getProperty(maVoiture, "marque");
console.log("Marque de la voiture:", marque);

const annee = getProperty(maVoiture, "annee");
console.log("Année de la voiture:", annee);

