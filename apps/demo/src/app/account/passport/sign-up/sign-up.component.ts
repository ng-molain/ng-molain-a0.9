import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'demo-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  banners = [
    {
      img: './assets/images/cover1.jpg',
      title: '多种终端覆盖抢占用户市场',
      intro: '支持PC、TV客户端、手机APP、微网校在线授课'
    },
    {
      img: './assets/images/cover2.jpg',
      title: '5分钟网校上线',
      intro: '创建独立的品牌，可绑定自主域名，注册直接使用'
    },
    {
      img: './assets/images/cover3.jpg',
      title: '免费体验在线教育全部功能',
      intro: '报名交易、在线授课、考试题库、社区答疑、教学运营'
    },
  ];

  form: FormGroup;

  error;
  visible;
  http;
  count;
  submit;
  getCaptcha;
  _submitForm;

  constructor(
    private fb: FormBuilder
  ) {
    this._createForm();
  }

  // #region fields

  get mail() {
    return this.form.controls.mail;
  }
  get password() {
    return this.form.controls.password;
  }
  get confirm() {
    return this.form.controls.confirm;
  }
  get mobile() {
    return this.form.controls.mobile;
  }
  get captcha() {
    return this.form.controls.captcha;
  }

  ngOnInit() {
  }

  private _createForm() {
    const form = this.fb.group({
      mail: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          // UserRegisterComponent.checkPassword.bind(this),
        ],
      ],
      confirm: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          // UserRegisterComponent.passwordEquar,
        ],
      ],
      mobilePrefix: ['+86'],
      mobile: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      captcha: [null, [Validators.required]],
    });

    this.form = form;
  }

}
