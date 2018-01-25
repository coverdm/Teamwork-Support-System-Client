import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { AssignmentListComponent } from './assignment/assignment-list/assignment-list.component';
import { AssignmentCreatorComponent } from './assignment/assignment-creator/assignment-creator.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SourceCodeComponent } from './source-code/source-code.component';
import { WorkersListComponent } from './workers/workers-list/workers-list.component';
import { UserFinderComponent } from './workers/user-finder/user-finder.component';
import { ProfileCreatorComponent } from './profile/profile-creator/profile-creator.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { NavComponent } from 'app/nav/nav.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { OfferPreparationComponent } from './workers/offer-preparation/offer-preparation.component';
import { AssignmentDetailsComponent } from './assignment/assignment-details/assignment-details.component';
import { ProjectCreatorComponent } from 'app/project/project-creator/project-creator.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-profile', component: ProfileCreatorComponent },
  { path: 'app', component: NavComponent,
  children: [
    { path: '', component: ProjectListComponent },
    { path: 'profile', component: ProfileViewComponent },
    { path: 'create-project', component: ProjectCreatorComponent },
    { path: 'project/:uuid', component: SideNavComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'assignment', component: AssignmentListComponent },
      { path: 'create-new-assignment', component: AssignmentCreatorComponent },
      { path: 'source-code', component: SourceCodeComponent },
      { path: 'workers', component: WorkersListComponent },
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
