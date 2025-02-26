import { getProperty } from "./generics.js";
const maVoiture = {
    marque: "ASTon Martin",
    modele: "DB 6",
    annee: 1990
};
const marque = getProperty(maVoiture, "marque");
console.log("Marque de la voiture:", marque);
const annee = getProperty(maVoiture, "annee");
console.log("Année de la voiture:", annee);
