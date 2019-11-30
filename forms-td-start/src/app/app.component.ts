import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  defaultQuestion = 'pet';
  answer: string;
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    anwser: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    /*this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });  this approach will overwrite the whole form at each click of suggestUserName button*/
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    }); /* this is the best way  */
  }

  /*onSubmit(form: NgForm) {
    console.log(form.form.controls.email.value);
  }*/

  onSubmit() {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.anwser = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;

    this.signupForm.reset();
  }

}
