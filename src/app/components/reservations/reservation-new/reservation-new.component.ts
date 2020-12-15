import { ReservationsService } from './../../../services/reservations.service';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.interface';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-new',
  templateUrl: './reservation-new.component.html',
  styleUrls: ['./reservation-new.component.scss']
})
export class ReservationNewComponent implements OnInit {
  public reservation: Reservation;

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
    datePickup: ['', Validators.required],
    note: ['']
  });

  constructor(
    private reservationService: ReservationsService,
    public router: Router,
    private fb: FormBuilder, 
  ) { }

  ngOnInit(): void { 
    this.reservation = this.getEmptyReservation();
  }

  public createReservation(): void {
    this.reservationService.createReservation({
      firstName: this.reservation.firstName,
      lastName: this.reservation.lastName,
      phone: this.reservation.phone,
      latitude: Number(this.reservation.latitude),
      longitude: Number(this.reservation.longitude),
      note: this.reservation.note,
      dateCreated: this.reservation.dateCreated,
      datePickUp: this.reservation.datePickUp,      
    });
    
    this.reservation = this.getEmptyReservation();
    this.router.navigate(['reservations']); 
  }

  public markerDragEnd($event) {
    this.reservation.latitude = $event.coords.lat;
    this.reservation.longitude = $event.coords.lng;
  }

  private getEmptyReservation(): Reservation {
    return {
      firstName: "",
      lastName: "",
      phone: "",
      latitude: 48.9635122,
      longitude: 16.7623097,
      note: "",
      dateCreated: this.getDate(new Date()),
      datePickUp: this.getDate(new Date())
    }
  }

  private getDate(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }
}
