import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  
  fontcolors = ['color : #4285F4', 
                'color : #EA4335', 
                'color : #FBBC05', 
                'color : #4285F4', 
                'color : #EA4335',
                'color : #FBBC05']
  fontletters = ['F', 'u', 'n', 'D', 'o', 'o']

  constructor(private formBuilder: FormBuilder, private user: UserService) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }
  get f() { return this.loginForm.controls; }

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
          localStorage.setItem('Token', response['id']);
          console.log(response);
        }
      );
    }
  }