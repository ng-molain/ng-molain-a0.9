import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPassportComponent } from '@ng-molain/demo/layout';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpResultComponent } from './sign-up-result/sign-up-result.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';

const routes: Routes = [
    {
        path: '', component: LayoutPassportComponent, children: [
            { path: 'account/signIn', component: SignInComponent },
            { path: 'account/signUp', component: SignUpComponent },
            { path: 'account/signUpResult', component: SignUpResultComponent },
            { path: 'account/lockScreen', component: LockScreenComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PassportRoutingModule {
}