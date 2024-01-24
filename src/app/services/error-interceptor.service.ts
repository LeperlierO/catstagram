import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError((err) => {
        alert(err.status);
        if(err.status === 401){
          // refresh token or go login
        }
        else if(err.status === 405){
          // some custom message
        }
        else if(err.status === 400){
          // ...
        }
        else{
          // global message for error
        }

        return throwError(err);
      })
    )
  }
}
