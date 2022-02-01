import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
    
})
export class ServerComponent{
    //assigning values
    serverId:Number=10;
    ServerStatus:string='offline';

    //method define
    getServerStatus()
    { 
        return this.ServerStatus;
    }
}