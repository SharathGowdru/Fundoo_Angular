import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
token: any;
baseUrl = environment.baseUrl;
httpClient: any;

  constructor(private httpService: HttpService,private http: HttpClient) {
    this.token = localStorage.getItem('Token');
   }

  register(data: any) {
    console.log("Entered data is", data);
    return this.httpService.postService("/user/userSignUp", data, false, false);
  }
  login(data: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    console.log("Entered data is", data);
    return this.httpService.postService("/user/login", data, false, httpAuthOptions);    
  }
  forgetpassword(data : any){
    console.log("Entered data is", data);
    return this.httpService.postService("/user/reset", data, false, false);
  }
  resetpassword(token : any, data : any){
    console.log("Entered data is", data);
    return this.httpService.postService("/user/reset-password", data, false, false);
  }
  logout(){
    // console.log(this.token);
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.postService("/user/logout",false, true, httpAuthOptions);
  }
}
