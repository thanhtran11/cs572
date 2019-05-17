import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details.component';

const routes: Routes = [
 {
    path:'users', component:UsersComponent, 
    children:
      [{path:':uuid', component:UserDetailsComponent}]
  },  
  {path:'**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
