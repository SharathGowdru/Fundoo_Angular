import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetpassword!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.forgetpassword = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],

    });
  }
  get f() { return this.forgetpassword.controls; }

  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0) {
      config.duration = duration;
    }
    this.snackBar.open(message, undefined, config);
  }

  onSubmit() {
    if (this.forgetpassword.valid) {
      this.openSnackBar('Processing', 2000);
      let data = {
        email: this.forgetpassword.value.email
      }
      this.user.forgetpassword(data).subscribe(
        (response : any) => {
          this.openSnackBar('Password reset link has been sent to your Email', 2000);
        },
        error => {
          if (error['status'] == 0) {
            this.openSnackBar('Sending password reset link failed: Server offline', 2000,);
          }
          else {
            this.openSnackBar('Sending password reset link failed ', 2000);
          }
        });
    }
  }
}