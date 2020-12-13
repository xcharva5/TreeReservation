import { ReservationsService } from './../../../services/reservations.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-new',
  templateUrl: './reservation-new.component.html',
  styleUrls: ['./reservation-new.component.scss']
})
export class ReservationNewComponent implements OnInit {
  defaultLat = 48.9635122;
  defaultLng = 16.7623097;

  firstName = "";
  lastName = "";
  phone = "";
  latitude = 0;
  longitude = 0;
  note = "";

  marker;

  constructor(
    private reservationService: ReservationsService,
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.marker  = (<HTMLInputElement>document.getElementById('marker'));
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
    console.log(this.marker);
  }

  

}
