import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { ProjectItem, ProjectProperties } from '@models/project-item.model';
import 'rxjs/add/operator/do';

@Injectable()
export class ProjectService {

  url_project_provider = 'http://localhost:8080/api/project/getAll';
  url_project_create = 'http://localhost:8080/api/project/create';

  constructor(private http: Http) { }

  createProject(projectProperties: ProjectProperties): Observable<ProjectItem> {

    const data = JSON.stringify({'name': projectProperties.name, 'description': projectProperties.description});

    this.url_project_create += '?userId=' + localStorage.getItem('userId');

        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        const options = new RequestOptions({ headers: headers });

        return this.http.post(this.url_project_create, data, options)
          .map((response: Response) => <ProjectItem> response.json())
          .do(e => console.log(e));
  }

  getProjectList(): Observable<ProjectItem[]> {

    this.url_project_provider += '?userId=' + localStorage.getItem('userId');

    console.log(this.url_project_provider);

    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.url_project_provider, options)
      .map((response: Response) => <ProjectItem[]> response.json())
      .do(e => console.log(e));
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }

}
