import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';

import * as AuthActions from './auth.actions';
import {Router} from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

const handleAuthentication = (resData) => {
  const expDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
  return new AuthActions.AuthSuccess({
    email: resData.email,
    userId: resData.localId,
    token: resData.idToken,
    expirationDate: expDate
  });
};

const handleError = (errorRes: any) => {
  let error = 'Unknown error';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new AuthActions.AuthFail(error));
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
  return of(new AuthActions.AuthFail(error));
};


@Injectable()
export class AuthEffects {

  @Effect()
  authSignup = this.actions$.pipe(
    ofType(AuthActions.SIGNUP_START),
    switchMap((signupAction: AuthActions.SignupStart) => {
      return this.http.post<AuthResponseData>
      ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIkey,
        {
          email: signupAction.payload.email,
          password: signupAction.payload.password,
          returnSecureToken: true
        }).pipe(
        map(resData => {
          return handleAuthentication(resData);
        }),
        catchError(errorRes => {
          return handleError(errorRes);
        })
      );
    })
  );

  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http
        .post<AuthResponseData>
        ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIkey,
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true
          })
        .pipe(
          map(resData => {
            return handleAuthentication(resData);

          }),
          catchError(errorRes => {
            return handleError(errorRes);
          })
        );
    })
  );

  @Effect({dispatch: false})
  authRedirect = this.actions$.pipe(
    ofType(AuthActions.AUTHENTICATE_SUCCESS, AuthActions.LOGOUT),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  constructor(private actions$: Actions, private http: HttpClient, private router: Router) {
  }
}
