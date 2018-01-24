import {AuthService} from './service/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { SuccessfullDialogComponent } from './successfull-dialog/successfull-dialog.component';
import { FailureDialogComponent } from './failure-dialog/failure-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    MaterializeModule,
    AppRoutingModule
  ],
  declarations: [ LoginComponent, RegisterComponent, SuccessfullDialogComponent, FailureDialogComponent],
  providers: [ AuthService ]
})
export class AuthorizationModule { }
