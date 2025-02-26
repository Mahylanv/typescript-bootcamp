import { GestionCours, NiveauCours } from "./gestionCours.js";

const gestion = new GestionCours();
gestion.ajouterCours({ code: "JS101", titre: "cours Js", niveau: NiveauCours.Debutant });
gestion.ajouterCours({ code: "TS202", titre: "cours TS", niveau: NiveauCours.Intermediaire });
const etudiant1 = { id: 1, nom: "Alice", niveau: "Licence" };
const etudiant2 = { id: 2, nom: "Bob", niveau: "Master" };
gestion.ajouterEtudiant(etudiant1);
gestion.ajouterEtudiant(etudiant2);
gestion.inscrireEtudiant("JS101", etudiant1);
gestion.inscrireEtudiant("TS202", etudiant2);
gestion.inscrireEtudiant("PHP300", etudiant2); 
gestion.afficherInscriptions();
