import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { AssignmentComponent } from './project/assignment/assignment.component';
import { SideNavComponent } from './project/side-nav/side-nav.component';
import { SourceCodeComponent } from './project/source-code/source-code.component';
import { AssignmentCardViewComponent } from './project/assignment/assignment-card-view/assignment-card-view.component';
import { AssignmentListViewComponent } from './project/assignment/assignment-list-view/assignment-list-view.component';
import { WorkersComponent } from './project/workers/workers.component';
import { AddNewWorkerComponent } from './project/workers/add-new-worker/add-new-worker.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'project', component: SideNavComponent,
    children: [
      { path: 'assignment', component: AssignmentComponent,
      children: [
        {path: '', component: AssignmentCardViewComponent},
        {path: 'card-view', component: AssignmentCardViewComponent, redirectTo: '' },
        {path: 'list-view', component: AssignmentListViewComponent }
      ] },
      { path: 'source-code', component: SourceCodeComponent },
      { path: 'workers', component: WorkersComponent },
      { path: 'add-worker', component: AddNewWorkerComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
