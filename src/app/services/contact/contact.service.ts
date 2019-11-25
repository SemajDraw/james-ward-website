import { Injectable } from '@angular/core';
import {Email} from '../../models/email';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendEmail(email: Email): Observable<any> {
    return;
  }
}
