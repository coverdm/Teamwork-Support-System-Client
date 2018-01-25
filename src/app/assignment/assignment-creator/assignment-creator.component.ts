import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Assignment } from '../model/assignment.model';
import { MaterializeDirective } from 'angular2-materialize';
import { AssignmentService } from '../service/assignment.service';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { Router } from '@angular/router';
import { WorkerService } from 'app/workers/service/worker.service';
import { MinProfile } from 'app/profile/model/min-profile.model';
import { Worker, WorkerId } from '../../workers/model/worker.model';

@Component({
  selector: 'app-assignment-creator',
  templateUrl: './assignment-creator.component.html',
  styleUrls: ['./assignment-creator.component.scss'],
  providers: [WorkerService, AssignmentService]
})
export class AssignmentCreatorComponent implements OnInit {

  formAssignment: FormGroup;
  difficults: Array<string>;
  workers: Worker[];
  minProfiles: MinProfile[];

  constructor(private formBuilder: FormBuilder,
              private workerService: WorkerService,
              private assignmentService: AssignmentService,
              private router: Router) { }

  ngOnInit() {

    this.difficults = ['EASY', 'MEDIUM', 'HARD'];

    this.formAssignment = this.formBuilder.group({
      title: [''],
      description: [''],
      taskDifficult: [''],
      workers: [''],
      deadline: ['', [Validators.required]],
    });

    // this.workerService.getWorkers().subscribe(workers => {
    //   this.workers = workers;
    //   this.profileService.getMinProfiles(workers).subscribe(minProfiles => {
    //     this.minProfiles = minProfiles;
    //     this.combineProfilesWithWorkers();
    //   });
    // });

  }

  combineProfilesWithWorkers() {
    for (let index = 0; index < this.workers.length; index++) {
      this.workers[index].name = this.minProfiles[index].name;
      this.workers[index].avatar_url = this.minProfiles[index].avatar;
    }
  }

  createAssignment(assignment: Assignment) {

    const date = new Date(this.formAssignment.controls['deadline'].value);

    const workers = this.formAssignment.controls['workers'].value;

    let workerIds = [];

    for (let index = 0; index < workers.length; index++) {
      workerIds.push(new WorkerId(workers[index].workerId));
    }

    assignment.workers = workerIds;
    assignment.deadline = date.getTime();
    assignment.difficult = 'EASY';

    this.assignmentService.createAssignment(assignment)
    .subscribe(assignment => this.router.navigate(['app/project/assignment-details', assignment.taskId.taskId]));
  }
}
