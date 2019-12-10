import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';
import {User} from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken;
  expireIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient) {
  }

  signup(email: string, pwd: string) {
    return this.http
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmWvAt7g21f3hfU6Q0bu0my_-7qDwlnKI',
        {
          email,
          password: pwd,
          returnSecureToken: true
        }).pipe(catchError(this.handlerError), tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expireIn);
      }));
  }

  login(email: string, pwd: string) {
    return this.http
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDmWvAt7g21f3hfU6Q0bu0my_-7qDwlnKI',
        {
          email,
          password: pwd,
          returnSecureToken: true
        }).pipe(catchError(this.handlerError), tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expireIn);
      }));
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expDate);
    this.user.next(user);
  }

  private handlerError(errorRes: HttpErrorResponse) {
    let error = 'Unknown error';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(error);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        error = 'This email exists already';
        break;
      case 'INVALID_PASSWORD':
        error = 'Invalid password!';
        break;
      case 'EMAIL_NOT_FOUND':
        error = 'This email does not exist';
        break;
      default:
        error = 'error occurred';
    }
    return throwError(error);
  }
}
