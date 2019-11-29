import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://127.0.0.1:3000/';
  }

  sendEmail(email): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'send_email', email, {observe: 'response'})
        .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    return throwError(error.error.message || 'Server Error');
  }
}
