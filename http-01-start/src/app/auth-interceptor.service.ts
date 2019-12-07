import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('0..10..00..0...1.1.10..1101');
    const editRequest = req.clone({
      headers: req.headers.append('Auth', 'xlk')
    });
    return next.handle(editRequest).pipe(tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }

}


