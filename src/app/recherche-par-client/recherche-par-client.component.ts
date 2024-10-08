import {Component, OnInit} from '@angular/core';
import {Client} from '../model/client.model';
import {Commande} from '../model/commande.model';
import {CommandeService} from '../services/commande.service';

@Component({
  selector: 'app-recherche-par-client',
  templateUrl: './recherche-par-client.component.html',
  styles: [
  ]
})
export class RechercheParClientComponent implements OnInit {
  IdClient! : number;
  clients! : Client[];
  commandes! : Commande[];


  constructor(private commandeService : CommandeService) { }

  ngOnInit(): void {
    this.commandeService.listeClients().
      subscribe(clients => {this.clients = clients;
      console.log(clients);
    });

  }

  onChange() {
    this.commandeService.rechercherParClient(this.IdClient).
      subscribe(commandes =>{this.commandes=commandes});

    }

}
