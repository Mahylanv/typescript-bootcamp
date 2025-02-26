import { alerter, logger } from "./module/index.js";

export enum NiveauCours {
    Debutant = "Débutant",
    Intermediaire = "Intermédiaire",
    Avance = "Avancé"
}

export interface Etudiant {
    id: number;
    nom: string;
    niveau: string; 
}

export interface Cours {
    code: string;
    titre: string;
    niveau: NiveauCours;
}

export interface Professeur {
    id: number;
    nom: string;
    matiere: string;
}

export class GestionCours {
    private etudiants: Etudiant[] = [];
    private cours: Cours[] = [];
    private inscriptions: { etudiant: Etudiant; cours: Cours }[] = [];

    ajouterEtudiant(etudiant: Etudiant): void {
        this.etudiants.push(etudiant);
        logger(`Nouvel étudiant ajouté : ${etudiant.nom}`);
    }

    ajouterCours(cours: Cours): void {
        this.cours.push(cours);
        logger(`Nouveau cours ajouté : ${cours.titre}`);
    }

    private rechercherCours<T extends { code: string }>(tableau: T[], code: string): T | undefined {
        return tableau.find(item => item.code === code);
    }

    inscrireEtudiant(coursCode: string, etudiant: Etudiant): void {
        const cours = this.rechercherCours(this.cours, coursCode);

        if (cours) {
            this.inscriptions.push({ etudiant, cours });
            alerter(`Inscription réussie : ${etudiant.nom} au cours ${cours.titre}`);
        } else {
            console.error("Cours non trouvé !");
        }
    }

    afficherInscriptions(): void {
        console.log("Liste des inscriptions :");
        this.inscriptions.forEach(inscription => {
            console.log(`- ${inscription.etudiant.nom} est inscrit à ${inscription.cours.titre}`);
        });
    }
}
