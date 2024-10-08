import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client.model';
import { Commande } from '../model/commande.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html'
})
export class AddCommandeComponent implements OnInit {

  newCommande = new Commande();
  clients! : Client[];
  newIdClient! : number;
  newClient! : Client;

  constructor(private commandeService: CommandeService,
              private router : Router) { }

  ngOnInit(): void {

    this.commandeService.listeClients().
          subscribe(clients => {this.clients = clients;
            console.log(clients);
        });

  }


  addCommande(){
    this.newCommande.client = this.clients.find(client => client.idClient == this.newIdClient)!;
    this.commandeService.ajouterCommande(this.newCommande)
                      .subscribe(commande => {
                      this.router.navigate(['commandes']);
                      });
    }




}
