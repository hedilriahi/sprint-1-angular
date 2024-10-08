import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandesComponent } from './commandes/commandes.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { FormsModule } from '@angular/forms';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParClientComponent } from './recherche-par-client/recherche-par-client.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandesComponent,
    AddCommandeComponent,
    UpdateCommandeComponent,
    RechercheParClientComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeClientsComponent,
    UpdateClientComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
