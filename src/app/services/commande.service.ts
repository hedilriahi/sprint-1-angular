import {Injectable} from '@angular/core';
import {Client} from '../model/client.model';
import {Commande} from '../model/commande.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  apiURL: string = 'http://localhost:8081/api/commandes';
  apiURLClient: string = 'http://localhost:8081/api/clients';

  commandes: Commande[];


  constructor(private http: HttpClient) {
    this.commandes = [{
      idCommande: 1, total: 3000.600, dateCreation: new Date("01/14/2011"),
      client: {idClient: 1, nomClient: "riahi", prenomClient: "hadil", adresse: "bebjdid"}
    },
      {
        idCommande: 2, total: 450, dateCreation: new Date("12/17/2010"),
        client: {idClient: 2, nomClient: "riahi", prenomClient: "hadil", adresse: "bebjdid"}
      },
      {
        idCommande: 3, total: 900.123, dateCreation: new Date("02/20/2020"),
        client: {idClient: 1, nomClient: "riahi", prenomClient: "hadil", adresse: "bebjdid"}
      }
    ];

  }

  listeCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.apiURL);
  }

  ajouterCommande(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(this.apiURL, commande, httpOptions);
  }

  supprimerCommande(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  consulterCommande(id: number): Observable<Commande> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Commande>(url);
  }

  trierCommandes() {
    this.commandes = this.commandes.sort((n1, n2) => {
      if (n1.idCommande > n2.idCommande) {
        return 1;
      }
      if (n1.idCommande < n2.idCommande) {
        return -1;
      }
      return 0;
    });
  }


  updateCommande(commande: Commande): Observable<Commande> {
    return this.http.put<Commande>(this.apiURL, commande, httpOptions);
  }


  listeClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiURLClient);
  }

  rechercherParClient(idClient: number): Observable<Commande[]> {
    const url = `${this.apiURL}/client/${idClient.toString()}`;
    return this.http.get<Commande[]>(url);
  }

  rechercherParNom(nom: string): Observable<Commande[]> {
    const url = `${this.apiURL}/clients/${nom}`;
    return this.http.get<Commande[]>(url);
  }

  ajouterClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiURLClient, client, httpOptions);
  }


}
