import { AuthService } from './service/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { UtilModule } from 'app/util/util.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    MaterializeModule,
    AppRoutingModule,
    UtilModule
  ],
  declarations: [ LoginComponent, RegisterComponent],
  providers: [ AuthService ]
})
export class AuthorizationModule { }
