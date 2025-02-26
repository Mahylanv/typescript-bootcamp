export function premierElement<T>(tableau: T[]): T {
    if (tableau.length === 0) {
        throw new Error("Tableau vide ");
    }
    return tableau[0];
}
