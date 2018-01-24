import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { AssignmentComponent } from './project/assignment/assignment.component';
import { CreateNewAssignmentComponent } from './project/assignment/create-new-assignment/create-new-assignment.component';
import { SideNavComponent } from './project/side-nav/side-nav.component';
import { SourceCodeComponent } from './project/source-code/source-code.component';
import { WorkersComponent } from './project/workers/workers.component';
import { UserFinderComponent } from './project/workers/user-finder/user-finder.component';
import { ProfileCreatorComponent } from './profile/profile-creator/profile-creator.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { NavComponent } from 'app/nav/nav.component';
import { DashboardComponent } from 'app/project/dashboard/dashboard.component';
import { OfferPreparationComponent } from './project/workers/offer-preparation/offer-preparation.component';
import { AssignmentDetailsComponent } from './project/assignment/assignment-details/assignment-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-profile', component: ProfileCreatorComponent },
  { path: 'app', component: NavComponent,
  children: [
    { path: '', component: ProjectListComponent },
    { path: 'profile', component: ProfileViewComponent },
    { path: 'create-project', component: CreateProjectComponent },
    { path: 'project', component: SideNavComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'assignment', component: AssignmentComponent },
      { path: 'create-new-assignment', component: CreateNewAssignmentComponent },
      { path: 'source-code', component: SourceCodeComponent },
      { path: 'workers', component: WorkersComponent },
      { path: 'user-finder', component: UserFinderComponent },
      { path: 'offer-preparation/:userId', component: OfferPreparationComponent},
      { path: 'assignment-details/:assignmentId', component: AssignmentDetailsComponent}
  ]
}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
