export function premierElement(tableau) {
    if (tableau.length === 0) {
        throw new Error("Tableau vide ");
    }
    return tableau[0];
}
