export function traiterValeur(valeur: string | number): number {
    if (typeof valeur === "string") {
        return valeur.length; 
    } else {
        return valeur * 2;
    }
}
