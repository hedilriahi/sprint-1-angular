import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { LoginComponent } from './login/login.component';
import { CommandeGuard } from './commande.guard';
import { CommandesComponent } from './commandes/commandes.component';
import { RechercheParClientComponent } from './recherche-par-client/recherche-par-client.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';



const routes: Routes = [
  {path: "commandes", component : CommandesComponent},
  {path: "add-commande", component : AddCommandeComponent, canActivate:[CommandeGuard]},
  {path: "updateCommande/:id", component: UpdateCommandeComponent},
  {path: "rechercheParClient", component : RechercheParClientComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeClients", component : ListeClientsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "", redirectTo: "commandes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
