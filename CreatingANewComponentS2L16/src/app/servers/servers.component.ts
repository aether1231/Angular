import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]', // select by attribute
  //selector: '.app-server',    - select by class  
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
