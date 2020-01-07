import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermessionsComponent } from './components/permessions/permessions.component';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"users", component: UsersComponent},
  {path:"roles", component: RolesComponent},
  {path:"permessions", component: PermessionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
