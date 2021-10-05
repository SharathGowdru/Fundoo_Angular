import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject('');
  receiveData = this.messageSource.asObservable();

  constructor() { }

  sendData(message: any) {
    this.messageSource.next(message)
  }

}