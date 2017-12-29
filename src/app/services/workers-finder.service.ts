import { Injectable } from '@angular/core';
import { Profile } from '@models/profile.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkersFinderService {

  avatar_url = '../../../assets/avatar.png';
  avatar_woman_1 =  '../../../assets/avatar9.jpg';
  avatar_man_1 =  '../../../assets/avatar4.jpg';
  avatar_man_2 =  '../../../assets/avatar5.png';
  avatar_man_3 =  '../../../assets/avatar6.jpg';

  SERVER = 'localhost:8080';
  GET_PROFILE_URL = this.SERVER + '/api/profile';

  constructor(private http: Http) { }

  find(profileId: string): Observable<Profile> {

    const headers = new Headers({ 'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.GET_PROFILE_URL + '?profileId=' + profileId, options)
      .map((response: Response) => <Profile> response.json());
  }
}
