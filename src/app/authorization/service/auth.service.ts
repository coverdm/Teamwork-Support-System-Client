import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { LoginModel } from '../model/login.model';
import { AuthModel } from '../model/auth.model';
import { RegisterModel } from '../model/register.model';

@Injectable()
export class AuthService {

  url_register = 'http://localhost:8080/api/auth/register';
  url_login = 'http://localhost:8080/api/auth/login';

  constructor(private http: Http) { }

  login(loginModel: LoginModel): Observable<AuthModel> {

    const body = JSON.stringify(loginModel);

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url_login, body, options)
    .map((response: Response) => <AuthModel> response.json())
    .do(e => console.log(e));
  }

  register(registerModel: RegisterModel): Observable<Response> {
    const body = JSON.stringify(registerModel);

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url_register, body, options)
      .map((data) => data.json(), (err) => err);
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }

  public logout(){
    localStorage.getItem("userId") ? localStorage.removeItem("userId") : null;
    localStorage.getItem("token") ? localStorage.removeItem("token") : null;
  }
}
