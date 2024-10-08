import {Component, OnInit} from '@angular/core';
import {Commande} from '../model/commande.model';
import {AuthService} from '../services/auth.service';
import {CommandeService} from '../services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html'
})
export class CommandesComponent implements OnInit {

  commandes?: Commande[];

  constructor(private commandeService: CommandeService,
              public authService: AuthService) {
  }

  ngOnInit(): void {

    this.chargerCommandes();
  }

  chargerCommandes() {
    this.commandeService.listeCommandes().subscribe(commandes => {
      this.commandes = commandes;
    });
  }

  supprimerCommande(p: Commande) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.commandeService.supprimerCommande(p.idCommande).subscribe(() => {
        console.log("commande supprimé");
        this.chargerCommandes();

      });
  }


}
