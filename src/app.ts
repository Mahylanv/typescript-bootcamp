import { premierElement } from "./genericscopy.js";

const nombres: number[] = [10, 20, 30];

try {
    const vide: number[] = [];
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Erreur");
    }
}

const objets = [{ id: 1, nom: "Alice" }, { id: 2, nom: "Bob" }];
console.log("Premier élément du tableau d'objets:", premierElement(objets));
