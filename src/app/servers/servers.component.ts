import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-servers',
 // selector: '[app-servers]', --attribte selector--
  templateUrl: './servers.component.html',
 // template:'<app-servers></app-servers> <app-servers></app-servers>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //adding new property
  allowNewServer = false;
  //event handing 
  ServerCreationStatus = 'No server was created';
  ServerName ='TestServer';
  UserName='';
  servercreated = false;
  servers=['TestServer','TestServer 2'];
  
  showSecret=false;
  log = [];

  constructor() { 
    setTimeout(() => { this.allowNewServer = true;},2000);
  }

  ngOnInit(): void {
  }
  oncreateServer() {

    this.servercreated = true;
    this.servers.push(this.ServerName);
    this.ServerCreationStatus='Server Was Created Name is ' + this.ServerName;
  }
  onUpdateServerName(event: Event){
    this.ServerName=(<HTMLInputElement>event.target).value;
    console.log(event);
  }
  
  onToggleDetails(){
    this.showSecret = !this.showSecret;

  }

}
