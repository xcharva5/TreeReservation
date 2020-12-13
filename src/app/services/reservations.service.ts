import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Reservation } from '../models/reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private firestore: AngularFirestore) { }

  getAllReservations() {
    return this.firestore.collection('reservations').snapshotChanges();
  }

  getReservation(id: string) {
    return this.firestore.doc('reservations/' + id).snapshotChanges();
  }


  createReservation(reservation: Reservation){
    return this.firestore.collection('reservations').add(reservation);
  }

  updateReservation(reservation: Reservation){
    // delete reservation.id;
    this.firestore.doc('reservations/' + reservation.id).update(reservation);
  }

  deleteReservation(id: string){
    this.firestore.doc('reservations/' + id).delete();
  }
}
