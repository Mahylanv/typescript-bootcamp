import { Chien, Chat, faireSeDeplacer } from "./animaux.js";

const medor = new Chien("Medor");
const felix = new Chat("Félix");

const animaux: (Chien | Chat)[] = [medor, felix];

faireSeDeplacer(animaux);
