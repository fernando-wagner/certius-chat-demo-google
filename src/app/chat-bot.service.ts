import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { GetSessionBody } from './get.session.body';
import { SendMessageBody } from './send.message.body';
import { GetSessionResponse } from './get.session.response';
import { Observable, of, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { MessageOutput } from './messageoutput';

//const url: string = 'https://21d84d49.us-south.apigw.appdomain.cloud/ibm_bot_client/call';
const url: string = 'https://21d84d49.us-south.apigw.appdomain.cloud/google_bot_client/call';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  
  constructor(protected http: HttpClient) { }

  getSession(): Observable<GetSessionResponse> {
    let body: GetSessionBody = new GetSessionBody(); 
    console.log(body);
    console.log(url);
    return this.http.post<GetSessionResponse>(url, body, {observe: 'body', responseType: 'json'}).pipe(
      catchError(this.handleError)
    );
  }


  sendMessage(message: string, sessionId: string): Observable<MessageOutput> {
    let body: SendMessageBody = new SendMessageBody();
    body.message = message;
    body.sessionId = sessionId;
    console.log(body);
    console.log(url);
    return this.http.post<MessageOutput>(url, body, {observe: 'body', responseType: 'json'}).pipe(
      catchError(this.handleErrorSendMess)
    );
  }

  private handleErrorSendMess(error: HttpErrorResponse) {
    window.location.reload();
    return this.handleError(error);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
