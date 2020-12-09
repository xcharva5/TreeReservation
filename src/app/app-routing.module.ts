import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', redirectTo: 'about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
