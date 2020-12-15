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
    address: ['', Validators.required],
    treeNumber: ['', Validators.required],
    ribbon: ['', Validators.required],
    phone: [''],
    note: [''],
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
      address: this.reservation.address,
      treeNumber: Number(this.reservation.treeNumber),
      ribbon: this.reservation.ribbon,
      phone: this.reservation.phone,
      note: this.reservation.note,
      dateCreated: this.reservation.dateCreated,
      latitude: Number(this.reservation.latitude),
      longitude: Number(this.reservation.longitude),
    }

    this.reservationService.updateReservation(reservation);
    this.router.navigate(['reservations/detail/' + reservation.id]); 
  }

  public markerDragEnd($event) {
    this.reservation.latitude = $event.coords.lat;
    this.reservation.longitude = $event.coords.lng;
  }
}
