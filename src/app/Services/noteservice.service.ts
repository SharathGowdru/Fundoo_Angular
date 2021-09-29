import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token: any;
  private refresh = new Subject<void>();
  constructor(private http: HttpService) { 

    this.token = localStorage.getItem('Token');
    
  }
  getRefreshedData() {
    return this.refresh;
  }
  url = environment.baseUrl;

  createNote(data: any): Observable<any> {
    console.log(data,this.token);
    
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    return this.http.postService('/notes/addNotes',data, true, httpAuthOptions);
  }
  
  getAllCards(): Observable<any> {
    console.log(this.token);
    
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    return this.http.getService('/notes/getNotesList', true, httpAuthOptions);
  }

  updateNote(data: any){
    
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.http.postService('/notes/updateNotes',data, true, httpAuthOptions);
  }

  TrashNoteService(data: any){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.http.postService('/notes/trashNotes',data, true, httpAuthOptions);
  }

  getTrashNoteService(){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.http.getService('/notes/getTrashNotesList', true, httpAuthOptions);

  }

  changeColorService(data:any){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.http.postService('/notes/changesColorNotes',data,true, httpAuthOptions);
  }
}
