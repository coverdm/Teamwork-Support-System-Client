import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Response, Headers } from '@angular/http';

@Injectable()
export class NotificationsService {

  notifications: any = [
    {type: 'new_user', link: '/profile="dawid_matuszak@outlook.com', text: 'mateusz_stanek@gmail.com joined to team'},
    {type: 'meeting', link: '/meetings=32', text: 'Meeting at 3.45 PM'},
    {type: 'task_problem', link: '/taskRoom=asdas', text: 'dawid_matuszak@outlook.com alerts problem with task'},
    {type: 'new_user', link: '/profile="dawid_matuszak@outlook.com', text: 'dawid_matuszak@outlook.com joined to team'}
  ];

  url: string;

  constructor(private http:Http) { }

  getNotifications(): Observable<Notification[]> {
    return this.http.get(name)
      .map((res: Response) => <Notification[]>res.json())
      .catch(this.handleError);
  }
  
  addNotifications(notification: Notification) {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  
    this.http.post(this.url, body, options);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
