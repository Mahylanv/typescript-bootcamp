import { afficherInfoProfessionnelle, Employe, Client } from "./personnePro.js";

const employe1: Employe = {
    nom: "Alice",
    poste: "Développeuse Web"
};

const client1: Client = {
    nom: "Bob",
    entreprise: "TechCorp"
};

afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);
