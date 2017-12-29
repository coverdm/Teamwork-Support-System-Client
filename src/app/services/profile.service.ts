import { Injectable } from '@angular/core';
import { Profile } from '@models/profile.model';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ProfileService {

  SERVER = 'http://localhost:8080';
  API_PROFILE = this.SERVER + '/api/profile';
  ADD_PROFILE_URL = this.API_PROFILE + '/create';
  UPDATE_PROFILE_URL = this.API_PROFILE + '/update';
  DELETE_PROFILE_URL = this.API_PROFILE + '/delete';
  GET_PROFILE_URL = this.API_PROFILE;

  constructor(private http: Http) { }

  find(profileId: string): Observable<Profile> {

    const headers = new Headers({ 'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.GET_PROFILE_URL + '?profileId=' + profileId, options)
      .map((response: Response) => <Profile> response.json());
  }

  getProfile(): Observable<Profile> {

    const headers = new Headers({ 'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.GET_PROFILE_URL + '?profileId=' + localStorage.getItem('userId'), options)
      .map((res: Response) => <Profile> res.json());
  }

  addProfile(profile: Profile): Observable<Profile> {

    const body = JSON.stringify(profile);
    const headers = new Headers({ 'Content-Type': 'application/json'});

    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const options = new RequestOptions({ headers: headers });
  
    return this.http.post(this.ADD_PROFILE_URL + '?profileId=' + localStorage.getItem('userId'), body, options)
      .map((response: Response) => <Profile> response.json());
  }
}
