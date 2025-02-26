import { afficherVehicule } from "./vehicule.js";
const voitureValide = {
    marque: "Aston martin",
    annee: 2012
};
const objetInvalide = {
    marque: "Red bhll"
};
afficherVehicule(voitureValide);
afficherVehicule(objetInvalide);
