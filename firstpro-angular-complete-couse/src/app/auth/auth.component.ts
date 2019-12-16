import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AlertComponent} from '../shared/alert/alert.component';
import {PlaceholderDirective} from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;

  constructor(private authService: AuthService, private route: Router, private cptFactoryResolver: ComponentFactoryResolver) {
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
      this.showErrorAlert(errorMsg);
      this.isLoading = false;
    });
    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(msg: string) {
    const cptFactory = this.cptFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContRef = this.alertHost.viewContainerRef;

    hostViewContRef.clear();
    hostViewContRef.createComponent(cptFactory);
  }
}
