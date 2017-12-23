import { Component, OnInit } from '@angular/core';
import {ProjectService} from '@services/project-list-provider.service';
import {ProjectItem, ProjectProperties} from '@models/project-item.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {

  projectItems: ProjectItem[] = [];

  constructor(private plp: ProjectService) {
    this.plp.getProjectList().subscribe(res => this.projectItems = res);

    console.log(this.projectItems);
  }

  ngOnInit() {
  }

  isProjectListEmpty(): boolean {
    return this.projectItems.length === 0;
  }

}
