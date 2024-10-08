import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/client.model';
import { Commande } from '../model/commande.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styles: [
  ]
})
export class UpdateCommandeComponent implements OnInit {

  currentCommande = new Commande();
  clients! : Client[];
  updatedClientId! : number;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.listeClients().
    subscribe(client => {this.clients = client;
    console.log(client);
    });


    this.commandeService.consulterCommande(this.activatedRoute.snapshot.params['id']).
    subscribe( commande =>{ this.currentCommande = commande;
      this.updatedClientId =   this.currentCommande.client.idClient;

    } ) ;
    }




  updateCommande() {
    this.currentCommande.client = this.clients.find(client => client.idClient == this.updatedClientId)!;
         this.commandeService.updateCommande(this.currentCommande).subscribe(prod => {
      this.router.navigate(['commandes']); }
      );
  }

}
