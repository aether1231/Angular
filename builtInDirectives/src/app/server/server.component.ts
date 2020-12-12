import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowAddServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }
  onInputServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColour() {
    return this.serverStatus === 'online' ? 'light-green' : 'red';
  }
  ngOnInit(): void {
  }
}