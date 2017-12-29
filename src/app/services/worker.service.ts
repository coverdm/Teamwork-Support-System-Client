import { Injectable } from '@angular/core';
import { Worker } from '@models/worker.model';
import { Contact } from '@models/contact.model';
import { Subject } from 'rxjs/Subject';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkerService {

  constructor(private http: Http) {
  }

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

    return this.http.get('http://localhost:8080/api/project/' + localStorage.getItem('uuid') + '/workers', options)
    .map((response: Response) => <Worker[]> response.json());
  }
}