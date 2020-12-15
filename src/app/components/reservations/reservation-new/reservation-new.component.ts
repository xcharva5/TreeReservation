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
    address: ['', Validators.required],
    treeNumber: ['', Validators.required],
    ribbon: ['', Validators.required],
    phone: [''],
    note: [''],
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
      address: this.reservation.address,
      treeNumber: Number(this.reservation.treeNumber),
      ribbon: this.reservation.ribbon,
      phone: this.reservation.phone,
      note: this.reservation.note,
      dateCreated: this.reservation.dateCreated,
      latitude: Number(this.reservation.latitude),
      longitude: Number(this.reservation.longitude),
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
      address: "",
      treeNumber: 0,
      ribbon: "",
      phone: "",
      note: "",
      dateCreated: this.getDate(new Date()),
      latitude: 48.9635122,
      longitude: 16.7623097,
    }
  }

  private getDate(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }
}
