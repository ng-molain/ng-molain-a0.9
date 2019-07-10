import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassportRoutingModule } from './passport-routing.module';

import { SharedModule } from '@ng-molain/demo/shared';
import { AppLayoutModule } from '@ng-molain/demo/layout';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpResultComponent } from './sign-up-result/sign-up-result.component';
import { SignOutResultComponent } from './sign-out-result/sign-out-result.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppLayoutModule,
    PassportRoutingModule,
  ],
  declarations: [
    SignUpComponent, 
    SignInComponent, 
    SignUpResultComponent, 
    SignOutResultComponent, 
    LockScreenComponent
  ],
})
export class PassportModule { }
