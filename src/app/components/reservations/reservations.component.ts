import { LocationService } from './../../services/location.service';
import { Reservation } from './../../models/reservation.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations: Reservation[];
  
  constructor(
    public auth: AuthService, 
    public location: LocationService, 
    public router: Router, 
    public route: ActivatedRoute,
    private reservationService: ReservationsService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      if (!user) {
        this.router.navigate(['reservations'], { relativeTo: this.route }); 
      }
    })

    this.reservationService.getAllReservations().subscribe(data => {
      this.reservations = data.map(res => {
        return {
          id: res.payload.doc.id,
          ...res.payload.doc.data() as {}
        } as Reservation
      })
    })
  }
}
