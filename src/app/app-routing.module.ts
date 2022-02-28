import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./Router/error-page/error-page.component";

import { HomeComponent } from "./Router/home/home.component";
import { PageNotFoundComponent } from "./Router/page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./Router/routerservers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./Router/routerservers/edit-server/edit-server.component";
import { RouterserverComponent } from "./Router/routerservers/routerserver/routerserver.component";
import { ServerResolver } from "./Router/routerservers/routerserver/server-resolver.service";
import { RouterserversComponent } from "./Router/routerservers/routerservers.component";
import { UserComponent } from "./Router/users/user/user.component";
import { UsersComponent } from "./Router/users/users.component";

const appRoutes: Routes =[
    {path:'' , component:HomeComponent,},
    {path:'users' , component:UsersComponent , children:[
      {path:':id/:name' , component:UserComponent},
    ]},
    // {path:'users/:id/:name' , component:UserComponent},  //passing parameters
      
    {path:'routerservers',
    canActivateChild:[AuthGuard],
     component:RouterserversComponent,
     children:[
      {path:':id' , component:RouterserverComponent,resolve: {server: ServerResolver}},
      {path:':id/edit' , component:EditServerComponent,canActivate:[CanDeactivateGuard]},
    ]},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    //{path:'not-found', component:PageNotFoundComponent},
    {path:'**', redirectTo:'/not-found'}
  ];
  //   {path:'routerservers/:id/edit' , component:EditServerComponent},  //passing parameters and fragments
  //   {path:'routerservers/:id' , component:RouterserverComponent},

@NgModule({
    imports:[
      RouterModule.forRoot(appRoutes)
        //RouterModule.forRoot(appRoutes,{useHash:true})
    ],
    exports:[RouterModule]

})
export class AppRoutingModule{

}