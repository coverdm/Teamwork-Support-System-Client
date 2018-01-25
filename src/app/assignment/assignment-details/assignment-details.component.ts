import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../service/assignment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Assignment } from '../model/assignment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.scss'],
  providers: [AssignmentService]
})
export class AssignmentDetailsComponent implements OnInit {
  
  edit: boolean;
  assignment: Assignment;
  detailsForms: FormGroup;

  constructor(private assignmentService: AssignmentService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.detailsForms = this.formBuilder.group({
      assignmentId: [''],
      title: [''],
      description: [''],
      workers: [''],
      difficult: [''],
      created: [''],
      deadline: [''],
      status: ['']
    });

    this.activatedRoute.params.subscribe(params => {
     console.log(params.assignmentId);
      this.assignmentService.getAssignment(params.assignmentId)
        .subscribe(assignment => console.log(assignment))
    });
    
    
    

  }

}
