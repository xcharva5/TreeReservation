import { ReservationsService } from './../../../services/reservations.service';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.interface';
import { ActivatedRoute, Router } from '@angular/router';
// import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-reservation-new',
  templateUrl: './reservation-new.component.html',
  styleUrls: ['./reservation-new.component.scss']
})
export class ReservationNewComponent implements OnInit {
  firstName = "";
  lastName = "";
  phone = "";
  latitude = 48.9635122;
  longitude = 16.7623097;
  note = "";

  constructor(
    private reservationService: ReservationsService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    // this.markerManager.createEventObservable("dragend", this.marker).subscribe(() => {
    //   console.log("marker drag");
    // })
  }

  createReservation(): void {
    const reservation: Reservation = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      latitude: Number(this.latitude),
      longitude: Number(this.longitude),
      note: this.note
    }

    this.reservationService.createReservation(reservation);
    
    this.firstName = "";
    this.lastName = "";
    this.phone = "";
    this.latitude = 0;
    this.longitude = 0;
    this.note = "";

    this.router.navigate(['reservations']); 
  }

  markerDragEnd($event) {
    // console.log($event.coords.lat);
    // console.log($event.coords.lng);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
  }

  

}
