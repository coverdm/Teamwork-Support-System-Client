import { AuthService } from "../service/auth.service";
import { LoginModel } from "../model/login.model";
import { Component, OnInit, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MaterializeAction } from "angular2-materialize";
import { DialogComponent } from "../../util/dialog/dialog.component";
import { DialogProperties } from "../../util/dialog/dialog-properties.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  title: string = "Authentication";
  dialogProperties: DialogProperties = new DialogProperties('Performing authentication');

  openDialog: boolean;

  loginForm: FormGroup;
  problemWithLogin: boolean;
  preloader: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
    this.openDialog = false;
    this.authService.logout();
    
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  closedDialog(event) {
    if (event) this.openDialog = false;
  }

  login(loginModel: LoginModel) {

    this.openDialog = true;
    this.dialogProperties.showLoader = true;

    this.authService.login(loginModel).subscribe(
      response => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.id);

        this.dialogProperties.message = "Authentication successfully";
        this.dialogProperties.isError = false;
      },
      error => {
        if (error.status === 401) {
          this.dialogProperties.message = "Authentication problem";
        }
      }
    );

    this.dialogProperties.showLoader = false;
  }

}
