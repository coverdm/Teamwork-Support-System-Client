import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Assignment } from '@models/assignment.model';
import { WorkerService } from '@services/worker.service';
import { MaterializeDirective } from 'angular2-materialize';
import { Worker, WorkerId } from '@models/worker.model';
import { ProfileService } from '@services/profile.service';
import { MinProfile } from '@models/profile.model';
import { AssignmentService } from '@services/assignment.service';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assignment-creator',
  templateUrl: './assignment-creator.component.html',
  styleUrls: ['./assignment-creator.component.scss'],
  providers: [WorkerService, ProfileService, AssignmentService]
})
export class AssignmentCreatorComponent implements OnInit {

  formAssignment: FormGroup;
  difficults: Array<string>;
  workers: Worker[];
  minProfiles: MinProfile[];

  constructor(private formBuilder: FormBuilder,
              private workerService: WorkerService,
              private profileService: ProfileService,
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

    this.workerService.getWorkers().subscribe(workers => {
      this.workers = workers;
      this.profileService.getMinProfiles(workers).subscribe(minProfiles => {
        this.minProfiles = minProfiles;
        this.combineProfilesWithWorkers();
      });
    });

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
