import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers :[LoggingService]
})
export class AccountComponent implements OnInit {
  @Input()
  account!: { name: string; status: string; };
  @Input()
  id!: number;
 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

 
  constructor(private loggingService:LoggingService,private accountsService:AccountsService){

  }
  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsService.updateStatus(this.id,status)
    this.loggingService.logStatusChange(status);
    //console.log('A server status changed, new status: ' + status);

    //cross-componenet communication
    this.accountsService.statusUpdated.emit(status);
  }

  ngOnInit(): void {
  }

}
