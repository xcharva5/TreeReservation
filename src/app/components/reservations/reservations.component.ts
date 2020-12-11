import { LocationService } from './../../services/location.service';
import { Reservation } from './../../models/reservation.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

export const RESERVATIONS: Reservation[] = [
  {
    id: 1,
    firstName: "Ondra",
    lastName: "Charvat",
    phone: "+420608932909",
    email: "andycharvat@gmail.com",
    posX: 48.9633986,
    posY: 16.7621608,
    note: "Specialni zasilka!"
  },
  {
    id: 2,
    firstName: "Tomas",
    lastName: "Unverdorben",
    phone: "+420123456789",
    email: "unver@gmail.com",
    posX: 48.9635100,
    posY: 16.7621328,
    note: "Pan domaci"
  },
  {
    id: 3,
    firstName: "Jenda",
    lastName: "Holecek",
    phone: "+420987654321",
    email: "djhateo@best.com",
    posX: 48.9635769,
    posY: 16.7624761,
    note: "El Maestro"
  }
]

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations = RESERVATIONS;
  
  constructor(
    public auth: AuthService, 
    public location: LocationService, 
    public router: Router, 
    public route: ActivatedRoute) { 

    }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      if (!user) {
        this.router.navigate(['reservations'], { relativeTo: this.route }); 
      }
    })
  }

  createReservation(): void {
    const loc = this.location.getLocation().then(response => {
      const reservation = { id: 4, firstName: "Test", lastName: "Test", phone: "+000123456789", posX: response.lat, posY: response.lng };
      this.reservations.push(reservation);
    });
  }

}
