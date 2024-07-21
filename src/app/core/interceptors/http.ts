import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
export interface Http {
}
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('Request URL: ', req.url); // Log the request URL
  
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (req.url.includes('posts')) {
            console.log('Hello world');
          } else {
            console.log('URL does not include "posts"');
          }
  
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMsg = `Error: ${error.error.message}`;
          } else {
            // Server-side error
            errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
  
          console.error(errorMsg);
          return throwError(errorMsg);
        })
      );
    }
  }