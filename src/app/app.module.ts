import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { UsersComponent } from './Router/users/users.component';
import { HomeComponent } from './Router/home/home.component';
import { UserComponent } from './Router/users/user/user.component';
import { RouterserversComponent } from './Router/routerservers/routerservers.component';
import { EditServerComponent } from './Router/routerservers/edit-server/edit-server.component';
import { RouterserverComponent } from './Router/routerservers/routerserver/routerserver.component';
import { ServersService } from './Router/routerservers/servers.service';
import { PageNotFoundComponent } from './Router/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './Router/routerservers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './Router/error-page/error-page.component';
import { ObsUserComponent } from './observables/obs-user/obs-user.component';
import { ObsHomeComponent } from './observables/obs-home/obs-home.component';
import { FormComponent } from './Forms/form/form.component';
import { TdFormComponent } from './Assignment6/td-form/td-form.component';
import { UserformComponent } from './Reactive-form/userform/userform.component';
import { ReactFormComponent } from './Assignment7/react-form/react-form.component';




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
    InactiveUsersComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    RouterserversComponent,
    EditServerComponent,
    RouterserverComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ObsUserComponent,
    ObsHomeComponent,
    FormComponent,
    TdFormComponent,
    UserformComponent,
    ReactFormComponent,
  
    
  


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [AccountsService,LoggingService,CounterService,ServersService,AuthService,AuthGuard,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
