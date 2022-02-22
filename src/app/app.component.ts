import { Component } from '@angular/core';
import { AccountsService } from './account/accounts.service';
import { UserService } from './Assignment5/user.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService,UserService]
})
export class AppComponent {
  showSecret=false;
  title = 'my angular-app';
  log = [0];


  serverElements =[{type: 'server',name:'TestServer',content: 'just a test!'}];

  onServerAdded(serverData:{serverName:string , serverContent:string}) {
    this.serverElements.push({
      type:'server',
      name: serverData.serverName,
      content:serverData.serverContent
    })
  }
  onBlueprintAdded(blueprintData:{serverName:string , serverContent:string}) {
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    });

  }

  onToggleDetails(){
    this.showSecret= !this.showSecret;
    this.log.push(this.log.length+0);
  }
  //onchange
  onChangeFirst(){
    this.serverElements[0].name="Changed!" ;
  }
  
  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }

  //assignment4

  //evenodd numbers
  oddNumbers :number[]=[];
  evenNumbers :number[]=[];
 
  onIntervalFired(firedNumber: number){
    //console.log(firedNumber);
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }

  /*accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }*/
  
  //dataservice
  accounts:{name:string,status:string}[]=[];

  constructor(private accountsService:AccountsService){}
  
  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }

  //Assignment5

 /* activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }*/
   
}
