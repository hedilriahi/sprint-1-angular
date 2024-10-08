import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomClient! : string;
  commandes!: Commande[];
  allCommandes!: Commande[];
  searchTerm!: string;

  constructor(private commandeService : CommandeService) { }

  ngOnInit(): void {
    this.commandeService.listeCommandes().subscribe(commandes => {
      this.commandes = commandes;
      });

  }

  rechercherCommandesByNomClient(){
    this.commandeService.rechercherParNom(this.nomClient).
    subscribe(commandes => {
      this.commandes=commandes;});
  }

  onKeyUp(filterText : string){
    this.commandes = this.allCommandes.filter(item =>
    item.client.nomClient.toLowerCase().includes(filterText));
    }


}
