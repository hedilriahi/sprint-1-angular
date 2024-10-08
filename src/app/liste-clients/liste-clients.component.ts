import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styles: [
  ]
})
export class ListeClientsComponent implements OnInit {

  clients!: Client[];

  ajout:boolean=true;


  updatedClient:Client = {"idClient":0,"nomClient":"", "prenomClient":"", "adresse":""};


  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {

    this.chargerClients();
  }


  chargerClients() {
    this.commandeService.listeClients().
      subscribe(clients => {
        this.clients = clients;
      });

  }

  clientUpdated(client:Client) {
    console.log("client reçue du composant updateClient ",client);
    this.commandeService.ajouterClient(client).subscribe( ()=> this.chargerClients());


  }

  updateClient(client :Client)
  {
    this.updatedClient = client;
    this.ajout=false;
  }

}
