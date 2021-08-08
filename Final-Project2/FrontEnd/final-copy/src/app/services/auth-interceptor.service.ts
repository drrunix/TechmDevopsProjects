import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import PubSub from 'pubsub-js'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private inject:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    return next.handle(req).pipe( tap(() => {},
    (err: any) => {
    if (err instanceof HttpErrorResponse) {
      console.log("inside")
      if (err.status === 401) {
        PubSub.publish('log-error',"invalid")
        console.log("401 occured")
       return;
      }
      if(err.status===404){
         console.log(err);
         console.log("logout");
         return;
      }
      
    }
  }));
}
}
