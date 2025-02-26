import { Rectangle, Cercle } from "./formes.js";
const monRectangle = new Rectangle(10, 5);
console.log(`Surface du rectangle: ${monRectangle.calculerSurface()}`);
const monCercle = new Cercle(7);
console.log(`Surface du cercle: ${monCercle.calculerSurface()}`);
