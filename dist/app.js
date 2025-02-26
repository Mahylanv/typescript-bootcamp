import { premierElement } from "./generics.js";
const nombres = [10, 20, 30];
console.log("Premiere nombre:", premierElement(nombres));
const chaines = ["Alice", "Bob", "Charlie"];
console.log("Premiere chaîne:", premierElement(chaines));
const objets = [{ id: 1, nom: "Alice" }, { id: 2, nom: "Bob" }];
console.log("Premier objet:", premierElement(objets));
