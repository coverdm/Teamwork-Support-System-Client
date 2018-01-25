import { MinProfile } from "../model/min-profile.model";
import { Profile } from "../model/profile.model";
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Worker } from "../../workers/model/worker.model";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class ProfileService {
  
  SERVER = "http://localhost:8080";
  API_PROFILE = this.SERVER + "/api/profile";
  ADD_PROFILE_URL = this.API_PROFILE + "/create";
  UPDATE_PROFILE_URL = this.API_PROFILE + "/update";
  DELETE_PROFILE_URL = this.API_PROFILE + "/delete";
  GET_PROFILE_URL = this.API_PROFILE;
  API_MIN_PROFILE = this.SERVER + "/api/profile/minProfile";

  constructor(private http: Http) {}

  getCurrentLoggedUserProfile(): Observable<Profile> {
    const headers = new Headers({ "Content-Type": "application/json" });
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));

    const options = new RequestOptions({ headers: headers });

    return this.http
      .get(
        this.GET_PROFILE_URL + "?profileId=" + localStorage.getItem("userId"),
        options
      )
      .map((res: Response) => <Profile>res.json());
  }

  getProfile(userId: string): Observable<Profile> {

    const headers = new Headers({ "Content-Type": "application/json" });
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));

    const options = new RequestOptions({ headers: headers });

    return this.http
      .get(
        this.GET_PROFILE_URL + "?profileId=" + userId,
        options
      )
      .map((res: Response) => <Profile>res.json());
  }

  getMinProfile(userId: string): Observable<MinProfile> {
    const headers = new Headers({ "Content-Type": "application/json" });
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));

    const options = new RequestOptions({ headers: headers });

    return this.http
      .get(this.API_MIN_PROFILE + "?profileId=" + userId, options)
      .map((res: Response) => <Profile>res.json());
  }

  getMinProfiles(workersIds: Array<Worker>): Observable<MinProfile[]> {
    let url = "http://localhost:8080/api/profile/minProfiles?";

    for (let index = 0; index < workersIds.length; index++) {
      url += "profileId=" + workersIds[index].workerId + "&";
    }

    url = url.slice(0, url.lastIndexOf("&"));

    const headers = new Headers({ "Content-Type": "application/json" });
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));

    const options = new RequestOptions({ headers: headers });

    let minProfile;

    return this.http
      .get(url, options)
      .map((response: Response) => (minProfile = response.json()));
  }

  addProfile(profile: Profile): Observable<Profile> {
    const body = JSON.stringify(profile);
    const headers = new Headers({ "Content-Type": "application/json" });

    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));

    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(
        this.ADD_PROFILE_URL + "?profileId=" + localStorage.getItem("userId"),
        body,
        options
      )
      .map((response: Response) => <Profile>response.json());
  }
}
