import { AssignmentCreatorComponent } from "./assignment-creator/assignment-creator.component";
import { AssignmentListComponent } from "./assignment-list/assignment-list.component";
import { AssignmentDetailsComponent } from "./assignment-details/assignment-details.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "app/app-routing.module";
import { AssignmentService } from "./service/assignment.service";
import { MaterializeModule } from "angular2-materialize/dist/materialize-module";

import {
  MatSelectModule,
  MatIconModule
} from "@angular/material";

@NgModule({
  declarations: [
    AssignmentDetailsComponent,
    AssignmentListComponent,
    AssignmentCreatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterializeModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [],
  providers: [AssignmentService]
})
export class AssignmentModule {}
