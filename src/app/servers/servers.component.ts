import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addingServerEnabled: Boolean = true;
  serverCreationStatus = 'No server was created!';
  newServerNameValue: string;

  constructor() { }

  ngOnInit() {
    setTimeout(() => { this.addingServerEnabled = false; }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.newServerNameValue;
  }
  updateNewServerNameValue( event: Event ) {
    this.newServerNameValue = (<HTMLInputElement>event.target).value;
  }
}
