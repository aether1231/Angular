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
  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }
  onInputServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {
  }

}
