import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;
  token : any;
  httpClient: any;

  constructor(private http: HttpClient) { }

  postService( url: string = '',payload: any = null, tokenRequired: boolean = false, httpOptions:any=null) {
    // console.log(url);
    // console.log(tokenRequired);
    return this.http.post(this.baseUrl+url, payload, tokenRequired && httpOptions);
  }
  getService( url: string = '' , tokenRequired: boolean = false, httpOptions:any=null) {
    // console.log(url);
    // console.log(tokenRequired);
    return this.http.get(this.baseUrl+url, tokenRequired && httpOptions);
  }
  // putService( url: string, payload: any,httpOptions:any=null){

  //   return this.http.put(this.baseUrl+url, payload, httpOptions)
  // }
}