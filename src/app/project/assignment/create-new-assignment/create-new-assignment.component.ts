import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Assignment } from '@models/assignment.model';
import { WorkerService } from '@services/worker.service';
import { MaterializeDirective } from 'angular2-materialize';
// import { } from 'angular-materializecss-datepicker';

@Component({
  selector: 'app-create-new-assignment',
  templateUrl: './create-new-assignment.component.html',
  styleUrls: ['./create-new-assignment.component.scss'],
  providers: [WorkerService]
})
export class CreateNewAssignmentComponent implements OnInit {

  formAssignment: FormGroup;
  selectOptions: Array<string>;
  workers: Array<string> = ['Dawid Matuszak', 'Maciek Gruchała', 'Mateusz Stanek'];
  selectedWorkers: Array<string> = new Array<string>();

  constructor(private formBuilder: FormBuilder,
    private workerService: WorkerService) { }

  ngOnInit() {

    this.selectOptions = ['EASY', 'MEDIUM', 'HARD'];

    this.formAssignment = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.maxLength(120), Validators.minLength(3)]],
      taskDifficult: ['', Validators.required],
      workers: [''],
      deadline: ['', [Validators.required]]
    });

  }

  createAssignment(assignment: Assignment) {
    console.log(assignment.deadline);
  }

  addWorkerToList(event) {

    if (!this.selectedWorkers.includes(event)) {
      this.selectedWorkers.push(event);
    }
  }

  removeWorkerFromList(index) {
    this.selectedWorkers.splice(index, 1);
  }

}
