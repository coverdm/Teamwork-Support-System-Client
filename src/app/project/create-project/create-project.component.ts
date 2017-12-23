import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MaterializeAction} from 'angular2-materialize';
import { ProjectProperties } from '@models/project.model.ts';
import { ProjectService } from '@services/project-list-provider.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  providers: [ProjectService]
})
export class CreateProjectComponent implements OnInit {

  problems: boolean;
  form: FormGroup;

  modalActions = new EventEmitter<string | MaterializeAction>();

  constructor(private fb: FormBuilder, private projectService: ProjectService) {

    this.problems = false;

    this.form = fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

  createProject(projectProperties: ProjectProperties) {
      this.projectService.createProject(projectProperties).subscribe(res => console.log);
  }

  ngOnInit() {
  }

}
