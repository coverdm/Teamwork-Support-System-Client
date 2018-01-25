import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../service/project.service";
import { ProjectItem, ProjectProperties } from "../model/project-item.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  title: string = "#Projects";
  projects: ProjectItem[] = [];

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.projectService
      .getProjectList()
      .subscribe(response => (this.projects = response));
  }

  isProjectListEmpty(): boolean {
    return this.projects.length === 0;
  }

  loadProject(index) {
    localStorage.setItem("uuid", this.projects[index].projectId.uuid);
    this.router.navigate(["app/project", this.projects[index].projectId.uuid]);
  }
}
