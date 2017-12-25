import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';
import { AuthService } from './services/auth.service';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectService } from './services/project-list-provider.service';
import { NavComponent } from './nav/nav.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { SideNavComponent } from './project/side-nav/side-nav.component';
import { SourceCodeComponent } from './project/source-code/source-code.component';
import { DashboardComponent } from './project/dashboard/dashboard.component';
import { AssignmentComponent } from './project/assignment/assignment.component';
import { AnnoucementComponent } from './project/annoucement/annoucement.component';
import { RepositoryParserService } from '@services/repository-parser.service';
import { AssignmentListViewComponent } from './project/assignment/assignment-list-view/assignment-list-view.component';
import { AssignmentCardViewComponent } from './project/assignment/assignment-card-view/assignment-card-view.component';
import { AssignmentInfoComponent } from './project/assignment/assignment-info/assignment-info.component';
import { WorkersComponent } from './project/workers/workers.component';
import { AddNewWorkerComponent } from './project/workers/add-new-worker/add-new-worker.component';
import { WorkersFinderService } from '@services/workers-finder.service';
import { WorkerService } from '@services/worker.service';
import { ProfileCreatorComponent } from './profile/profile-creator/profile-creator.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileService } from '@services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProjectListComponent,
    NavComponent,
    CreateProjectComponent,
    SideNavComponent,
    SourceCodeComponent,
    DashboardComponent,
    AssignmentComponent,
    AnnoucementComponent,
    AssignmentListViewComponent,
    AssignmentCardViewComponent,
    AssignmentInfoComponent,
    WorkersComponent,
    AddNewWorkerComponent,
    ProfileCreatorComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [AuthService, ProjectService, RepositoryParserService, WorkersFinderService, WorkerService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
