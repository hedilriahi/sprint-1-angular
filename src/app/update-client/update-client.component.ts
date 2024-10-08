import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styles: [
  ]
})
export class UpdateClientComponent implements OnInit {

  @Input()
  client! : Client;

  @Input()
  ajout!:boolean;


  @Output()
   clientUpdated = new EventEmitter<Client>();



  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateClient ",this.client);

  }

  saveClient() {
    this.clientUpdated.emit(this.client);

  }

}
