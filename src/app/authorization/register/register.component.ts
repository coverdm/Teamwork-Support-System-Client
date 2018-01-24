import { matchingPasswords } from "../service/password.validator";
import { RegisterModel } from "../model/register.model";
import { Component, OnInit, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../service/auth.service";
import { MaterializeAction } from "angular2-materialize";
import { DialogComponent } from "../../util/dialog/dialog.component";
import { DialogProperties } from "../../util/dialog/dialog-properties.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  title: string = "Registration";
  registerForm: FormGroup;
  openDialog: boolean;
  dialogProperties: DialogProperties = new DialogProperties(
    "Performing registration"
  );

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = formBuilder.group(
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

  closedDialog(event) {
    if (event) this.openDialog = false;
    this.dialogProperties.isError ? null : this.router.navigate(["/login"]);
  }

  onSubmit(value: RegisterModel) {
    this.openDialog = true;
    this.dialogProperties.showLoader = true;

    this.authService.register(value).subscribe(
      response => response,
      err => {
        if (err.status === 424) {
          this.dialogProperties.isError = true;
          this.dialogProperties.message = "Problem with registration";
        } else {
          this.dialogProperties.isError = false;
          this.dialogProperties.message = "Registration went successfully";
        }
      }
    );

    this.dialogProperties.showLoader = false;
  }
}
