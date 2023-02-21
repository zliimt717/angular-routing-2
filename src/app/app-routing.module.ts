import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomComponent } from './home/welcom/welcom.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'welcome',component:WelcomComponent},
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
