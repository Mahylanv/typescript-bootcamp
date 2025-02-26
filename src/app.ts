import { traiterValeur } from "./narrowing.js";

const resultat1 = traiterValeur("Hello");
console.log("Longueur de 'Hello':", resultat1);

const resultat2 = traiterValeur(5);
console.log("Double de 5:", resultat2);
