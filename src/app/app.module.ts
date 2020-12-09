import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from './shared/services/auth.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { TreeComponent } from './components/reservations/tree/tree.component';
import { TreeDetailsComponent } from './components/reservations/tree-details/tree-details.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeDetailsComponent,
    AboutComponent,
    ReservationsComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
