import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Role } from "src/app/core/models/role";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  authForm: FormGroup;
  submitted = false;
  loading = false;
  error = undefined;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ["admin@gmail.com", Validators.required],
      password: ["admin@123", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  adminSet() {
    this.authForm.get("email").setValue("admin@gmail.com");
    this.authForm.get("password").setValue("admin@123");
  }
  doctorSet() {
    this.authForm.get("email").setValue("doctor@gmail.com");
    this.authForm.get("password").setValue("doctor@123");
  }
  patientSet() {
    this.authForm.get("email").setValue("patient@gmail.com");
    this.authForm.get("password").setValue("patient@123");
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = "";
    if (this.authForm.invalid) {
      this.error = "E-mail and Password not valid !";
      return;
    } else {
      this.subs.sink = this.authService
        .login(this.f['email'].value, this.f['password'].value)
        .subscribe(
          res => {
            const role = this.authService.currentUserValue.data.role;
                if (role === Role.Admin) {
                  this.router.navigate(["/admin/dashboard/main"]);
                } else if (role === Role.Doctor) {
                  this.router.navigate(["/doctor/dashboard"]);
                } else if (role === Role.Patient) {
                  this.router.navigate(["/patient/dashboard"]);
                } else {
                  this.router.navigate(["/authentication/signin"]);
                }
                this.loading = false;
          },
            err => {
              if(err.status == 401){
                  this.error = "Login or password is incorrect!";
                  } else {
                    this.error = "Enable VPN please!"
                  }
                  this.submitted = false;
                  this.loading = false;
            },
        );
    }
  }
}
