import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation.interface';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.scss']
})
export class ReservationUpdateComponent implements OnInit {
  reservation: Reservation;

  constructor(
    private reservationService: ReservationsService,
    private route: ActivatedRoute,
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

  updateReservation(): void {
    const reservation: Reservation = {
      id: this.reservation.id,
      firstName: this.reservation.firstName,
      lastName: this.reservation.lastName,
      phone: this.reservation.phone,
      latitude: Number(this.reservation.latitude),
      longitude: Number(this.reservation.longitude),
      note: this.reservation.note
    }

    this.reservationService.updateReservation(reservation);

    this.router.navigate(['reservations/detail/' + reservation.id]); 

  }

  markerDragEnd($event) {
    // console.log($event.coords.lat);
    // console.log($event.coords.lng);
    this.reservation.latitude = $event.coords.lat;
    this.reservation.longitude = $event.coords.lng;
  }

}
