import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  // token: any;
  
  fontcolors = ['color : #4285F4', 
                'color : #EA4335', 
                'color : #FBBC05', 
                'color : #4285F4', 
                'color : #EA4335',
                'color : #FBBC05']
  fontletters = ['F', 'u', 'n', 'D', 'o', 'o']

  constructor(private formBuilder: FormBuilder,public snackBar: MatSnackBar, private user: UserService, private router: Router) { 
    // this.token = localStorage.getItem("token");
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }
  get f() { return this.loginForm.controls; }

  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0)
    {
      config.duration = duration; 
    }
    this.snackBar.open(message, undefined, config);
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    let data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }
    this.user.login(data).subscribe
      (
        (response: any) => {
          this.snackBar.open('login success'," ",{ duration: 2000});
          localStorage.setItem('Token', response['id']);
          // localStorage.setItem( 'email',response['email']);
          this.router.navigate(['dashboard']);
          // localStorage.setItem( 'password',response['password']);
          console.log(response);
        },
        error =>{
          this.openSnackBar ('Login failed '+error.error.message,2000);
        }
      );
    }
  } 