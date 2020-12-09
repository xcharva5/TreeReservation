import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { TreeComponent } from './components/reservations/tree/tree.component';
import { TreeDetailsComponent } from './components/reservations/tree-details/tree-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeDetailsComponent,
    AboutComponent,
    ReservationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
