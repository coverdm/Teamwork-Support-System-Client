import { Injectable } from '@angular/core';
import { Worker } from '@models/worker.model';
import { Contact } from '@models/contact.model';
import { Subject } from 'rxjs/Subject';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkerService {

  // TODO Remove in production
  //   private workers: Array<Worker> = [
  //     new Worker(1, 'Dawid', 'Matuszak', 'Project Manager', '../../../assets/avatar.png',
  //       ['Project Manager', 'Senior Java Developer'], ['Spring', 'Hibernate', 'JPA'],
  //       new Contact(null, null), 'dawid_matuszak@outlook.com'),

  //     new Worker(1, 'Mateusz', 'Stanek', 'Team Leader', '../../../assets/avatar4.jpg',
  //       ['Project Manager', 'Senior Java Developer'], ['.NET', 'Angular', 'HTML5'],
  //       new Contact(null, null), 'mateusz_stanek@gmail.com'),

  //     new Worker(1, 'Marcin', 'Tatus', 'Javascript Developer', '../../../assets/avatar5.png',
  //       ['Project Manager', 'Senior Java Developer'], ['Angular', 'React', 'HTML5', 'CSS3'],
  //       new Contact(null, null), 'marcin_tatus@onet.pl'),

  //      new Worker(1, 'Michal', 'Golabek', 'Graphics Designer', '../../../assets/avatar6.jpg',
  //       ['Project Manager', 'Senior Java Developer'], ['Photoshop', 'InDesign', 'Ilustrator', 'Adobe Mouse'],
  //       new Contact(null, null), 'michal_golabek@kurnik.pl'),

  //     new Worker(1, 'Klaudia', 'Januszka', 'Python Developer', '../../../assets/avatar9.jpg',
  //       ['Project Manager', 'Senior Java Developer'], ['Python API', 'CSS', 'Photoshop'],
  //       new Contact(null, null), 'klaudia_januszka@buziaczek.pl')
  //   ];

    // workers_in_project: Array<Worker> = [this.$workers[0], this.$workers[1], this.$workers[2]];
    // private data = new Subject();

  constructor(private http: Http) {
  }

  public get $workers(): Array<Worker> {
    return this.$workers;
  }

  public find(email: string): Worker {

    console.log(this.$workers);

    for (let i = 0; i < this.$workers.length; i++) {
      if (this.$workers[i].$email === email) {
        return this.$workers[i];
      }
    }

    return null;
  }

  // public updateWorkersList() {
  //   this.data.next(this.workers_in_project);
  //   return this.data;
  // }

  // TODO add new worker
  public sendRequestToJoin(email): void {
    // this.workers_in_project.push(this.find(email.email));
  }

  public addUserToProject(email: string) {

    const uuid = localStorage.getItem('uuid');

    return this.http.get('http://localhost:8080/api/project/' + uuid + '?userId=' + email)
      .map((response: Response) => response.json());
  }

  public getWorkers(): Observable<Worker[]> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const options = new RequestOptions({ headers: headers });

    return this.http.get('http://localhost:8080/api/project/' + localStorage.getItem('uuid') + '/participants', options)
    .map((response: Response) => <Worker[]> response.json());
  }

}
