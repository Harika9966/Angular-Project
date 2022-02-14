import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
   
}
