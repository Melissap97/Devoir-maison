import { CompteBancaire } from "./compteBancaire.js";

let monCompte = new CompteBancaire ();
monCompte.deposer(100);
monCompte.retirer(30);
monCompte.afficherSolde();