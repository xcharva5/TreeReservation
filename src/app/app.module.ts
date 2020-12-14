import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { HeaderComponent } from './components/header/header.component';
import { ReservationItemComponent } from './components/reservations/reservation-item/reservation-item.component';
import { ReservationDetailComponent } from './components/reservations/reservation-detail/reservation-detail.component';
import { ReservationNewComponent } from './components/reservations/reservation-new/reservation-new.component';
import { ReservationUpdateComponent } from './components/reservations/reservation-update/reservation-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ReservationsComponent,
    HeaderComponent,
    ReservationItemComponent,
    ReservationDetailComponent,
    ReservationNewComponent,
    ReservationUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAy_xZnYj9zNy1E8WzSX2HUdglDSPK_TEs'
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
