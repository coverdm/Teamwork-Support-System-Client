import { OfferPreparationComponent } from "./offer-preparation/offer-preparation.component";
import { UserFinderComponent } from "./user-finder/user-finder.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmploymentFormComponent } from "./employment-form/employment-form.component";
import { WorkersListComponent } from "./workers-list/workers-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterializeModule } from "angular2-materialize/dist/materialize-module";
import { WorkerService } from "@services/worker.service";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    EmploymentFormComponent,
    OfferPreparationComponent,
    UserFinderComponent,
    WorkersListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterializeModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [WorkerService]
})
export class WorkersModule {}
