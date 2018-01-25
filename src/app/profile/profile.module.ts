import { AppRoutingModule } from "../app-routing.module";
import { ProfileCreatorComponent } from "./profile-creator/profile-creator.component";
import { ProfileViewComponent } from "./profile-view/profile-view.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterializeModule } from "angular2-materialize/dist/materialize-module";
import { ProfileService } from "./service/profile.service";
import { UtilModule } from "app/util/util.module";
import { MatSelectModule, MatIconModule, MatInputModule, MatAutocompleteModule } from "@angular/material";

@NgModule({
  declarations: [ProfileViewComponent, ProfileCreatorComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterializeModule,
    UtilModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [ProfileViewComponent],
  providers: [ProfileService]
})
export class ProfileModule {}
