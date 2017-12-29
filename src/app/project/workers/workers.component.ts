import { Component, OnInit } from '@angular/core';
import { Worker } from '@models/worker.model';
import { Contact } from '@models/contact.model';
import { WorkerService } from '@services/worker.service';
import { ProfileService } from '@services/profile.service';
import { Profile } from '@models/profile.model';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  providers: [WorkerService, ProfileService]
})
export class WorkersComponent implements OnInit {

  workers: Worker[];
  profiles: Profile[];

  constructor(private workerService: WorkerService, private profileService: ProfileService) { }

  ngOnInit() {
    this.workerService.getWorkers().subscribe(workers => {
      this.workers = workers;
      for (let i = 0; i < this.workers.length; i++) {
        this.profileService.find(this.workers[i].id).subscribe();
      }
    });
  }
}
