import { Injectable } from '@angular/core';
import { Worker } from '@models/worker.model';
import { Contact } from '@models/contact.model';
import { Subject } from 'rxjs/Subject';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {JobOffer} from '@models/jobOffer.model';

@Injectable()
export class WorkerService {

  port = '8080';
  url_server = 'http://localhost' + ':' + this.port;
  url_send_job_offer: string = this.url_server + '/api/project/' + localStorage.getItem('uuid') + '/workers/add';

  constructor(private http: Http) {
  }

  public sendJobOffer(jobOffer: JobOffer) {

    const body = JSON.stringify({
      'userId': jobOffer.userId,
      'projectRole': jobOffer.role,
    });

    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url_send_job_offer, body, options)
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
