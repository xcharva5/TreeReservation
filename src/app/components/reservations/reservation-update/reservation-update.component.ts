import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
    datePickup: ['', Validators.required],
    note: ['']
  });

  constructor(
    private reservationService: ReservationsService,
    private route: ActivatedRoute,
    public router: Router,
    private fb: FormBuilder, 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.reservationService.getReservation(params.get('id')).subscribe(data => {
        this.reservation = {
          id: data.payload.id,
          ...data.payload.data() as {}
        } as Reservation   
      });
    });
  }

  public updateReservation(): void {
    const reservation: Reservation = {
      id: this.reservation.id,
      firstName: this.reservation.firstName,
      lastName: this.reservation.lastName,
      phone: this.reservation.phone,
      latitude: Number(this.reservation.latitude),
      longitude: Number(this.reservation.longitude),
      note: this.reservation.note, 
      datePickUp: this.reservation.datePickUp
    }

    this.reservationService.updateReservation(reservation);
    this.router.navigate(['reservations/detail/' + reservation.id]); 

  }

  public markerDragEnd($event) {
    this.reservation.latitude = $event.coords.lat;
    this.reservation.longitude = $event.coords.lng;
  }

  public hasData(): boolean {
    return (
      this.reservation && 
      this.reservation.firstName &&
      this.reservation.lastName &&
      this.reservation.phone &&
      this.reservation.latitude &&
      this.reservation.longitude &&
      this.reservation.dateCreated
    ) ? true : false;
  }

}
