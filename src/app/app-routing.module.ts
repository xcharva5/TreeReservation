import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', redirectTo: 'about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
