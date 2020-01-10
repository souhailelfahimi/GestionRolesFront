import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermessionsComponent } from './components/permessions/permessions.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FolderComponent } from './components/folder/folder.component';
import { DocComponent } from './components/doc/doc.component';
import { AuthenticationService } from './services/authentication.service';
import { DocService } from './services/doc.service';
import { FolderService } from './services/folder.service';
import { PermessionsService } from './services/permessions.service';
import { RolesService } from './services/roles.service';

import { ViewdocComponent } from './components/viewdoc/viewdoc.component';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ReaddocComponent } from './components/readdoc/readdoc.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    RolesComponent,
    PermessionsComponent,
    FolderComponent,
    DocComponent,
    ViewdocComponent,
    ReaddocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    SnotifyModule
  ],
  providers: [AuthenticationService,DocService,FolderService,PermessionsService,RolesService,{ provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
