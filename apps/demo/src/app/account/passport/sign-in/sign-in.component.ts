import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'demo-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  http;
  event;
  msg;
  open;
  _submitForm;

  form: FormGroup;
  error: {
    base: string,
    phone: string
  };

  constructor(
    private fb: FormBuilder
  ) {
    this._createLoginForm();
  }

  // #region fields

  get username() {
    return (<FormGroup>this.form.get('base')).controls.username;
  }

  get password() {
    return (<FormGroup>this.form.get('base')).controls.password;
  }

  get phoneNumber() {
    return (<FormGroup>this.form.get('phone')).controls.phoneNumber;
  }

  get authCode() {
    return (<FormGroup>this.form.get('phone')).controls.authCode;
  }

  get captcha() {
    return this.form.controls.captcha;
  }

  get rememberMe() {
    return this.form.controls.captcha;
  }

  ngOnInit() {
    
  }

  private _createLoginForm() {
    const baseForm = this.fb.group({
      username: [],
      password: [],
    });

    const phoneForm = this.fb.group({
      phoneNumber: [],
      authCode: []
    });

    const form = this.fb.group({
      base: baseForm,
      phone: phoneForm,
      captcha: [],
      rememberMe: [],
    });

    this.form = form;
  }

}
