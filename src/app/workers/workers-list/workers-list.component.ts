import { Component, OnInit } from "@angular/core";
import { WorkerService } from "../service/worker.service";
import { ProfileService } from "../../profile/service/profile.service";
import { MinProfile } from "../../profile/model/min-profile.model";
import { Worker } from "../model/worker.model";

@Component({
  selector: "app-workers",
  templateUrl: "./workers-list.component.html",
  styleUrls: ["./workers-list.component.scss"],
  providers: [WorkerService, ProfileService]
})
export class WorkersListComponent implements OnInit {
  
  workers: Worker[];
  minProfiles: MinProfile[];

  constructor(
    private workerService: WorkerService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.workerService.getWorkers().subscribe(workers => {
      this.workers = workers;
      this.profileService.getMinProfiles(workers).subscribe(response => {
        this.minProfiles = response;
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
}
