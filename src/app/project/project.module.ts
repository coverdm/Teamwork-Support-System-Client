import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectCreatorComponent } from "app/project/project-creator/project-creator.component";
import { ProjectListComponent } from "app/project/project-list/project-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterializeModule } from "angular2-materialize/dist/materialize-module";
import { AppRoutingModule } from "app/app-routing.module";
import { UtilModule } from "app/util/util.module";
import { ProjectService } from "./service/project.service";

@NgModule({
  declarations: [ProjectCreatorComponent, ProjectListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterializeModule,
    AppRoutingModule,
    UtilModule
  ],
  exports: [],
  providers: [ProjectService]
})
export class ProjectModule {}
