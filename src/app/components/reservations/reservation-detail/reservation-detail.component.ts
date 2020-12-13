import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent implements OnInit {
  reservation: Reservation;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationsService,
    public auth: AuthService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.reservationService.getReservation(params.get('id')).subscribe(data => {
        this.reservation = {
          id: data.payload.id,
          ...data.payload.data() as {}
        } as Reservation        
      })
    });
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
    this.router.navigate(['reservations']); 
  }

}
