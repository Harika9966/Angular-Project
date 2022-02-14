import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [' .online {color:white;}']
    
})
export class ServerComponent{
    //assigning values
    serverId:Number=10;
    ServerStatus:string='offline';
    servers = [''];
    onAddServer(){
        this.servers.push( 'Another Server');
      }
    constructor()
    {
        this.ServerStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    //method define
    getServerStatus()
    { 
        return this.ServerStatus;
    }
    getColor(){
        return this.ServerStatus === 'online' ? 'green' : 'red ';
    }
    onRemoveServer(id:number){
        const Position =id +1
        this.servers.splice(Position,1)

    }
}