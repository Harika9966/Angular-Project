import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './Assignment4/game-control/game-control.component';
import { EvenComponent } from './Assignment4/even/even.component';
import { OddComponent } from './Assignment4/odd/odd.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/betterhighlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { AccountComponent } from './account/account/account.component';
import { NewAccountComponent } from './account/new-account/new-account.component';
import { AccountsService } from './account/accounts.service';
import { LoggingService } from './account/logging.service';
import { ActiveUsersComponent } from './Assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './Assignment5/Inactive-users/inactive-users.component';
import { CounterService } from './Assignment5/counter.service';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessalertComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent


  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [AccountsService,LoggingService,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
