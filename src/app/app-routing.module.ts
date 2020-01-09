import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermessionsComponent } from './components/permessions/permessions.component';
import { FolderComponent } from './components/folder/folder.component';
import { DocComponent } from './components/doc/doc.component';
import { ViewdocComponent } from './components/viewdoc/viewdoc.component';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"users", component: UsersComponent},
  {path:"roles", component: RolesComponent},
  {path:"permessions", component: PermessionsComponent},
  {path:"folder", component: FolderComponent},
  {path:"doc/:id", component: DocComponent},
  {path:"viewdocument/:id", component: ViewdocComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
