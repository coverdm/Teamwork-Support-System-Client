import { Component, OnInit } from '@angular/core';
import { Worker } from '@models/worker.model';
import { Contact } from '@models/contact.model';
import { WorkerService } from '@services/worker.service';
import { ProfileService } from '@services/profile.service';
import { MinProfile } from '@models/profile.model';

@Component({
  selector: 'app-workers',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss'],
  providers: [WorkerService, ProfileService]
})
export class WorkersListComponent implements OnInit {

  workers: Worker[];
  minProfiles: MinProfile[];

  constructor(private workerService: WorkerService, private profileService: ProfileService) { }

  ngOnInit() {
    this.workerService.getWorkers().subscribe(workers => {
      this.workers = workers;
      this.profileService.getMinProfiles(workers).subscribe(minProfiles => {
        this.minProfiles = minProfiles; this.combineProfilesWithWorkers();
      });
    });
  }

  combineProfilesWithWorkers() {
    for (let index = 0; index < this.workers.length; index++) {
      this.workers[index].name = this.minProfiles[index].name;
      this.workers[index].avatar_url = this.minProfiles[index].avatar;
    }
  }

}
