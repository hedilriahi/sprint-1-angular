import { Client } from "./client.model";

export class Commande {
    idCommande! : number;
    total! : number;
    dateCreation! : Date ;
    client! : Client;
    }
