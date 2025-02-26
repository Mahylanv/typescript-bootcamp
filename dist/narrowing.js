export function traiterValeur(valeur) {
    if (typeof valeur === "string") {
        return valeur.length;
    }
    else {
        return valeur * 2;
    }
}
