import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpassword!: FormGroup;
  submitted = false;
  token: any;
 
  constructor(private formBuilder: FormBuilder, public snackBar: MatSnackBar,  private activeRoute: ActivatedRoute,private user: UserService) { }
  
    openSnackBar(message: string, duration: number) {
      let config = new MatSnackBarConfig();
      if (duration != 0) {
        config.duration = duration;
      }
      this.snackBar.open(message, undefined, config);
    }
    fontcolors = ['color : #4285F4', 
                  'color : #EA4335', 
                  'color : #FBBC05', 
                  'color : #4285F4', 
                  'color : #EA4335',
                  'color : #FBBC05'];
    fontletters = ['F', 'u', 'n', 'D', 'o', 'o'];

  ngOnInit(): void {
    this.resetpassword = this.formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }

  get f() { return this.resetpassword.controls; }

  onSubmit() {
    if (this.resetpassword.valid) {
      this.openSnackBar('Processing', 2000);
      let reqData = {
        password:this.resetpassword.value.password,
        confirmPassword:this.resetpassword.value.confirmPassword
      }
      this.user.resetpassword(this.token,reqData).subscribe(
        (response : any) => {
          this.openSnackBar('Password Reset Successfull', 3000);
        },
        error => {
         console.log("Reser Password failed",error);
        });
      }
    }
  }