import { CompteBancaire } from "./compteBancaire.js";

let monCompte = new CompteBancaire ();
monCompte.deposer(100);
monCompte.retirer(70);
monCompte.afficherSolde();