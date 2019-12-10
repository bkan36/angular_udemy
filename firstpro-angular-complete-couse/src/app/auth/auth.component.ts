import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {errorObject} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';
import {auditTime} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private route: Router) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const pwd = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, pwd);
    } else {
      authObs = this.authService.signup(email, pwd);
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.route.navigate(['/recipes']);
    }, errorMsg => {
      console.log(errorMsg);
      this.error = errorMsg;
      this.isLoading = false;
    });
    form.reset();
  }
}
