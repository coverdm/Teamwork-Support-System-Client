import { Component, OnInit } from '@angular/core';
import { Assignment } from '@models/assignment.model';
import { Worker } from '@models/worker.model';
import { Name } from '@models/profile.model';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  assignments: Assignment[] = [
    {title: 'Ratpack - implementacja', description: 'Jakies badanie co i jak trzeba sie zaznajomic  badanie co i jak trzeba sie zaznajomic',
    workers: [new Worker('dawid_matuszak@outlook.com', new Name('Dawid', 'Matuszak'),
    'Project Manager', '../../../../assets/avatar6.jpg')], taskDifficult: 'EASY',
    created: new Date(), deadline: new Date(), status: 'IN_PROGRESS'},

    {title: 'Hibernate - implementacja',
    description: 'Jakies badanie co i jak trzeba sie zaznajomic Jaasdasda co i jak trzeba sie zaznajomic ',
    workers: [new Worker('dawid_matuszak@outlook.com', new Name('Dawid', 'Matuszak'),
    'Project Manager', '../../../../assets/avatar6.jpg')], taskDifficult: 'EASY',
    created: new Date(), deadline: new Date(), status: 'CREATED'},

    {title: 'JPA - implementacja',
    description: 'Jakies badanie co i jak trzeba sie zaznajomic  badanie co i jak trzeba sie zaznajomic',
    workers: [new Worker('dawid_matuszak@outlook.com', new Name('Dawid', 'Matuszak'),
    'Project Manager', '../../../../assets/avatar6.jpg')], taskDifficult: 'EASY',
    created: new Date(), deadline: new Date(), status: 'FINISHED'},

    {title: 'Spring - implementacja',
    description: 'Jakies badanie co i jak trzeba sie zaznajomic Jaasdasda co i jak trzeba sie zaznajomic ',
    workers: [new Worker('dawid_matuszak@outlook.com', new Name('Dawid', 'Matuszak'),
    'Project Manager', '../../../../assets/avatar6.jpg')], taskDifficult: 'EASY',
    created: new Date(), deadline: new Date(), status: 'CREATED'}
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
