import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService:LoggingService ,
              private accountService:AccountsService)
              {
                this.accountService.statusUpdated.subscribe(
                  (status: string)=> alert('New Status:' + status)
                );
              }

  onCreateAccount(accountName: string, accountStatus: string) {


   /* this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
   //const service = new LoggingService();
   //service.logStatusChange(accountStatus);*/

   this.accountService.addAccount(accountName,accountStatus);
   this.loggingService.logStatusChange(accountStatus);
  }




  ngOnInit(): void {
  }

}
