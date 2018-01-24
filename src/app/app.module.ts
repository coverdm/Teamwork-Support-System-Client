import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatIconModule } from '@angular/material';
import { AppComponent } from './app.component';

import { AuthorizationModule } from './authorization/authorization.module';
import { ProfileModule } from './profile/profile.module';
import { WorkersModule } from './workers/workers.module';

import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SourceCodeComponent } from './source-code/source-code.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RepositoryParserService } from '@services/repository-parser.service';
import { AssignmentModule } from 'app/assignment/assignment.module';
import { ProjectModule } from 'app/project/project.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideNavComponent,
    SourceCodeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    AuthorizationModule,
    ProfileModule,
    WorkersModule,
    AssignmentModule,
    ProjectModule
  ],
  providers: [RepositoryParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
