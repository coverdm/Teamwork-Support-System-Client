import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AuthModel } from '@models/auth.model.ts';
import { RegisterModel } from '@models/register.model.ts';
import { LoginModel } from '@models/login.model.ts';

@Injectable()
export class AuthService {

  url_register = 'http://localhost:8080/api/auth/register';
  url_login = 'http://localhost:8080/api/auth/login';

  constructor(private http: Http) { }

  login(loginModel: LoginModel): Observable<AuthModel> {

    const body = JSON.stringify({
      'email': loginModel.email,
      'password': loginModel.password
    });

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url_login, body, options)
    .map((response: Response) => <AuthModel> response.json())
    .do(e => console.log(e));
  }

  register(registerModel: RegisterModel): Observable<Response> {
    const body = JSON.stringify({
      'email': registerModel.email,
      'password': registerModel.confirmPassword,
      'confirmPassword': registerModel.confirmPassword,
      'username': 'jakisUsername'
    });

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    console.log(body);

    return this.http.post(this.url_register, body, options)
      .map((data) => data.json(), (err) => err);
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
