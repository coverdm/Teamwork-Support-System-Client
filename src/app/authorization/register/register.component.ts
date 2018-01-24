import { matchingPasswords } from "../service/password.validator";
import { RegisterModel } from "../model/register.model";
import { Component, OnInit, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../service/auth.service";
import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  registerModel: RegisterModel;
  preloader: boolean;
  problemWithRegistration: boolean;

  modalActions = new EventEmitter<string | MaterializeAction>();

  openModal() {
    this.modalActions.emit({ action: "modal", params: ["open"] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ["close"] });
  }

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.preloader = true;
    this.problemWithRegistration = false;

    this.form = fb.group(
      {
        email: ["", Validators.email],
        password: [
          "",
          [
            Validators.required,
            Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9]).{3,20}$")
          ]
        ],
        confirmPassword: ["", Validators.required]
      },
      { validator: matchingPasswords("password", "confirmPassword") }
    );
  }

  ngOnInit() {}

  onSubmit(value: RegisterModel) {

    this.preloader = true;

    setTimeout(() => {
      const register = this.auth
        .register(value)
        .subscribe(
          res => res,
          err =>
            err.status === 424
              ? (this.problemWithRegistration = true)
              : (this.problemWithRegistration = false)
        );

      this.preloader = false;
    }, 1000);
  }
}
