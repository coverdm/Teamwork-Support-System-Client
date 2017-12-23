import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkersFinderService } from '@services/workers-finder.service';
import { WorkerService } from '@services/worker.service';
import { Worker } from '@models/worker.model';

@Component({
  selector: 'app-add-new-worker',
  templateUrl: './add-new-worker.component.html',
  styleUrls: ['./add-new-worker.component.scss']
})
export class AddNewWorkerComponent implements OnInit {

  newWorkerForm: FormGroup;
  showLoadedWorker: boolean;
  loadedWorker: Worker;

  constructor(private formBuilder: FormBuilder,
              private workersFinderService: WorkersFinderService,
              private workerService: WorkerService) { }

  ngOnInit() {
    this.newWorkerForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
    this.onChange();
  }

  onChange() {
    this.newWorkerForm.valueChanges.subscribe(val => {
      if (val.email.length > 5)  {
        this.loadedWorker = this.workersFinderService.find(val.email);
      }
    });
  }

  public sendRequestToJoin(workers_email): void {
    this.workerService.sendRequestToJoin(workers_email);
  }
}
