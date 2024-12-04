export class CompteBancaire {
    #solde = 0;
    deposer(montant){
        
     this.#solde += montant; 
    }
    retirer(montant){
        if (this.#solde >= montant){
    this.#solde -= montant;
     }
     }

    afficherSolde(){ 
        console.log(`Solde actuel: ${this.#solde}€`);

    }
}


