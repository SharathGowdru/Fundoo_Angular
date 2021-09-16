import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl=environment.BaseUrl;
  token : any;

  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean){
    //  this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        // 'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.BaseUrl + url, data,options);
  }
}