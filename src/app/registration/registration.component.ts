import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService} from 'src/app/Services/user.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private user: UserService, public snackBar: MatSnackBar) { }
   

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: ['advance', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  fontcolors = ['color : #4285F4', 
                'color : #EA4335', 
                'color : #FBBC05', 
                'color : #4285F4', 
                'color : #EA4335',
                'color : #FBBC05'];
  fontletters = ['F', 'u', 'n', 'D', 'o', 'o'];

  onSubmit() {
    console.log("On registered",this.registerForm.value)
    if (this.registerForm.invalid) {
      console.log("Its invalid Form");
      return;
    } 
    else {
      console.log(" it is valid")
      let reqPay={

        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        confirmPassword:this.registerForm.value.confirmPassword,
        service:this.registerForm.value.service

      }
      this.user.register(reqPay).subscribe(response =>{
        console.log(response);
        this.snackBar.open("Registered!!!"," ",{ duration: 2000});
      }, error => {
        console.log("error in register", error);
        this.snackBar.open("Registration Failed!!"," ",{ duration: 2000});
      });
    }
  }
}