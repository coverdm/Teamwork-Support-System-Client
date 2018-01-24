import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationModule } from './authorization/authorization.module';

import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';

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
import { WorkersComponent } from './project/workers/workers.component';
import { UserFinderComponent } from './project/workers/user-finder/user-finder.component';
import { WorkerService } from '@services/worker.service';
import { ProfileCreatorComponent } from './profile/profile-creator/profile-creator.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileService } from '@services/profile.service';
import { CreateNewAssignmentComponent } from './project/assignment/create-new-assignment/create-new-assignment.component';
import { AssignmentService } from '@services/assignment.service';
import { HireformComponent } from './project/workers/hireform/hireform.component';
import { OfferPreparationComponent } from './project/workers/offer-preparation/offer-preparation.component';
import { AssignmentDetailsComponent } from './project/assignment/assignment-details/assignment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegisterComponent,
    ProjectListComponent,
    NavComponent,
    CreateProjectComponent,
    SideNavComponent,
    SourceCodeComponent,
    DashboardComponent,
    AssignmentComponent,
    AnnoucementComponent,
    WorkersComponent,
    UserFinderComponent,
    ProfileCreatorComponent,
    ProfileViewComponent,
    CreateNewAssignmentComponent,
    HireformComponent,
    OfferPreparationComponent,
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
    AuthorizationModule
  ],
  providers: [AssignmentService, AuthService, ProjectService, RepositoryParserService, WorkerService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
