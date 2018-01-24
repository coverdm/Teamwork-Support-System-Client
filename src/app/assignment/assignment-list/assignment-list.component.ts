import { Component, OnInit } from '@angular/core';
import { Assignment } from '@models/assignment.model';
import { Worker } from '@models/worker.model';
import { Name } from '@models/profile.model';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})
export class AssignmentListComponent implements OnInit {

  assignments: Assignment[] = [
  ];

  todo: Array<Assignment> = new Array();
  in_progress: Array<Assignment> = new Array();
  finished: Array<Assignment> = new Array();

  constructor() { }

  ngOnInit() {
    this.sortAssignments();
  }

  sortAssignments() {

    for (let index = 0; index < this.assignments.length; index++) {
      if (this.assignments[index].status === 'CREATED') {
        this.todo.push(this.assignments[index]);
      } else if (this.assignments[index].status === 'IN_PROGRESS') {
        this.in_progress.push(this.assignments[index]);
      } else {
        this.finished.push(this.assignments[index]);
      }
    }
  }

}
