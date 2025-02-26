export interface Vehicule {
    marque: string;
    annee: number;
}

export function isVehicule(obj: any): obj is Vehicule {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.marque === "string" &&
        typeof obj.annee === "number"
    );
}

export function afficherVehicule(obj: any): void {
    if (isVehicule(obj)) {
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    } else {
        console.log("Objet invalide");
    }
}
