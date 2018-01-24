import {AuthService} from '../service/auth.service';
import {LoginModel} from '../model/login.model';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  title: string = 'Authentication';

  form: FormGroup;
  problemWithLogin: boolean;
  preloader: boolean;

  modalActions = new EventEmitter<string | MaterializeAction>();

  constructor(private fb: FormBuilder, private auth: AuthService) {

    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {

    this.preloader = true;
    this.problemWithLogin = false;

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    console.log('userId: ' + userId);
    console.log('token: ' + token);

    if (userId) {
      localStorage.removeItem('userId');
      console.log('Removed userId.' + ' ' + 'Actual state: ' + userId);
    }

    if (token) {
        localStorage.removeItem('token');
        console.log('Removed token.' + ' ' + 'Actual state: ' + token);
    }

  }

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

  login(loginModel: LoginModel) {

    this.preloader = true;
    this.problemWithLogin = false;

    setTimeout(() => {

      this.auth.login(loginModel).subscribe(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.id);
      }, error => {

        if (error.status === 401) {
          this.problemWithLogin = true;
          console.log('im in');
        }

        console.log(error.status);
      });

      this.preloader = false;

    }, 1000);

  }

}
