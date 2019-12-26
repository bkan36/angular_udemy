import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
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

  constructor(private store: Store<fromApp.AppState>) {
  }

  setLogoutTimer(expDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.store.dispatch(new AuthAction.Logout());
    }, expDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpTimer) {
      clearTimeout(this.tokenExpTimer);
      this.tokenExpTimer = null;
    }
  }
}
