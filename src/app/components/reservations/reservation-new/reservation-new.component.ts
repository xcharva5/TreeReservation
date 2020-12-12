import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-new',
  templateUrl: './reservation-new.component.html',
  styleUrls: ['./reservation-new.component.scss']
})
export class ReservationNewComponent implements OnInit {
  firstName = "";
  lastName = "";
  phone = "";
  latitude = "";
  longitude = "";
  note = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
