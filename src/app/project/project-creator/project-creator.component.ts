import {ProjectProperties} from '../model/project-item.model';
import { Component, OnInit, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MaterializeAction } from "angular2-materialize";
import { ProjectService } from "../service/project.service";

import { DialogComponent } from "../../util/dialog/dialog.component";
import { DialogProperties } from "../../util/dialog/dialog-properties.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-project-creator",
  templateUrl: "./project-creator.component.html",
  styleUrls: ["./project-creator.component.scss"],
  providers: [ProjectService]
})
export class ProjectCreatorComponent implements OnInit {

  title: string = '#ProjectCreator'

  projectCreatorForm: FormGroup;
  dialogProperties: DialogProperties = new DialogProperties(
    "Creating project container"
  );
  openDialog: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) {
    this.projectCreatorForm = formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  closedDialog(event) {
    if (event) this.openDialog = false;

    this.dialogProperties.isError ? null : this.router.navigate(["/app"]);
  }

  createProject(projectProperties: ProjectProperties) {

    this.openDialog = true;
    this.dialogProperties.showLoader = true;

    this.projectService.createProject(projectProperties).subscribe(
      response => {
        this.dialogProperties.message = "Created project successfully";
        this.dialogProperties.isError = false;
      },
      error => {
        if (error.status === 400) {
          this.dialogProperties.message = "Problems with creating project";
          this.dialogProperties.isError = true;
        }
      }
    );

    this.dialogProperties.showLoader = false;

  }

  ngOnInit() {}
}
