import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './features/login/forget-password/forget-password.component';
import { LoginFormComponent } from './features/login/login-form/login-form.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from "@angular/fire/compat/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: '', component: DashboardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
