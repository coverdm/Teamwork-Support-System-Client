import { Component, OnInit } from '@angular/core';
import { Worker } from '@models/worker.model';
import { Contact } from '@models/contact.model';
import { WorkerService } from '@services/worker.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  providers: [WorkerService]
})
export class WorkersComponent implements OnInit {

  workers: Worker[];

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    this.workerService.updateWorkersList().subscribe( workers => console.log(workers));
  }

}
