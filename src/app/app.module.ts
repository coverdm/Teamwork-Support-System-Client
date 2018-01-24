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

import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectService } from './services/project-list-provider.service';
import { NavComponent } from './nav/nav.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { SideNavComponent } from './project/side-nav/side-nav.component';
import { SourceCodeComponent } from './project/source-code/source-code.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignmentComponent } from './project/assignment/assignment.component';
import { RepositoryParserService } from '@services/repository-parser.service';
import { CreateNewAssignmentComponent } from './project/assignment/create-new-assignment/create-new-assignment.component';
import { AssignmentService } from '@services/assignment.service';
import { AssignmentDetailsComponent } from './project/assignment/assignment-details/assignment-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    NavComponent,
    CreateProjectComponent,
    SideNavComponent,
    SourceCodeComponent,
    DashboardComponent,
    AssignmentComponent,
    CreateNewAssignmentComponent,
    AssignmentDetailsComponent
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
    WorkersModule
  ],
  providers: [AssignmentService, ProjectService, RepositoryParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
