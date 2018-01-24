import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Assignment } from '@models/assignment.model';

@Injectable()
export class AssignmentService {

  URL_GET_ASSIGNMENT = 'http://localhost:8080/api/project/' + localStorage.getItem('uuid') + '/task';
  URL_CREATE_NEW_ASSIGNMENT = 'http://localhost:8080/api/project/' + localStorage.getItem('uuid') + '/task/create';
  URL_GET_ASSIGNMENTS = 'http://localhost:8080/api/project/' + localStorage.getItem('uuid') + '/tasks';
  URL_DELETE_ASSIGNMENT = 'http://localhost:8080/api/project/' + localStorage.getItem('uuid') + '/task/delete';
  URL_ASSIGN_WORKERS = 'http://localhost:8080/api/project/' + localStorage.getItem('uuid') + '/task/workers';
  URL_UPDATE_ASSIGNMENT = 'http://localhost:8080/api/project/' + localStorage.getItem('uuid') + '/task/update';

  constructor(private http: Http) { }

  getAssignment(assignmentId: string): Observable<Assignment> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.URL_GET_ASSIGNMENT + '?taskId=' + assignmentId, options)
      .map((res: Response) => <Assignment[]>res.json())
      .catch(this.handleError);
  }

  getAssignments(): Observable<Assignment[]> {
    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.URL_GET_ASSIGNMENTS, options)
      .map((res: Response) => <Assignment[]>res.json())
      .catch(this.handleError);
  }

  createAssignment(assignment: Assignment): Observable<Assignment> {

    const body = JSON.stringify(assignment);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const options = new RequestOptions({ headers: headers });

    console.log(body);

    return this.http.post(this.URL_CREATE_NEW_ASSIGNMENT, body, options)
      .map((response: Response) => response.json())
    .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
