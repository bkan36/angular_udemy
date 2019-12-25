import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, throwError} from 'rxjs';
import {User} from './user.model';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthAction from './store/auth.actions';



export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
//  user = new BehaviorSubject<User>(null);
  private tokenExpTimer: any;

  constructor(private http: HttpClient, private route: Router, private store: Store<fromApp.AppState>) {
  }

  signup(email: string, pwd: string) {
    return this.http
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIkey,
        {
          email,
          password: pwd,
          returnSecureToken: true
        }).pipe(catchError(this.handlerError), tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      }));
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
     // this.user.next(loadedUser);
      this.store.dispatch(new AuthAction.Login({
        email: loadedUser.email,
        userId: loadedUser.id,
        token: loadedUser.token,
        expirationDate: new Date(userData._tokenExpirationDate)
      }));

      const expDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expDuration);
    }
  }

  login(email: string, pwd: string) {
    return this.http
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIkey,
        {
          email,
          password: pwd,
          returnSecureToken: true
        }).pipe(
        catchError(this.handlerError),
        tap(resData => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
      );
  }

  logout() {
    this.route.navigate(['/auth']);
    // this.user.next(null);
    this.store.dispatch(new AuthAction.Logout());
    localStorage.removeItem('userData');
    if (this.tokenExpTimer) {
      clearTimeout(this.tokenExpTimer);
    }
    this.tokenExpTimer = null;
  }

  autoLogout(expDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.logout();
    }, expDuration);
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    // this.user.next(user);
    const user = new User(email, userId, token, expDate);
    this.store.dispatch(new AuthAction.Login({
      email,
      userId,
      token,
      expirationDate: expDate
    }));
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
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
