import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginFormComponent,
    ForgetPasswordComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginModule { }
