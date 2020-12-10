import { Reservation } from './../../../models/reservation.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.scss']
})
export class ReservationItemComponent implements OnInit {
  @Input() reservation: Reservation;

  constructor() { }

  ngOnInit(): void {
  }

}
