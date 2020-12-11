import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reservation-new',
  templateUrl: './reservation-new.component.html',
  styleUrls: ['./reservation-new.component.scss']
})
export class ReservationNewComponent implements OnInit {
  reservationForm;

  constructor(private formBuilder: FormBuilder) {
    this.reservationForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      phone: '',
      latitude: '',
      longitude: '',
      note: ''
    })
  }

  ngOnInit(): void {
  }

}
