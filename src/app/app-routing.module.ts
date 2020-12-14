import { ReservationNewComponent } from './components/reservations/reservation-new/reservation-new.component';
import { ReservationDetailComponent } from './components/reservations/reservation-detail/reservation-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ReservationUpdateComponent } from './components/reservations/reservation-update/reservation-update.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'reservations/new', component: ReservationNewComponent },
  { path: 'reservations/detail/:id', component: ReservationDetailComponent },
  { path: 'reservations/update/:id', component: ReservationUpdateComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', redirectTo: 'about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
