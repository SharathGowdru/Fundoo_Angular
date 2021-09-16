import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
  register(data: any) {
    console.log("Entered data is", data);
    return this.httpService.Post("/user/userSignUp", data, null, false);
  }
  login(data: any) {
    console.log("Entered data is", data);
    return this.httpService.Post("/user/login", data, null, false);
  }
  forgetpassword(data : any){
    console.log("Entered data is", data);
    return this.httpService.Post("/user/reset", data, null, false);
  }
  // resetpassword(token : any, data : any){
  //   console.log("Entered data is", data);
  //   return this.httpService.Post("/user/reset-password", data, null, false);
  // }
}