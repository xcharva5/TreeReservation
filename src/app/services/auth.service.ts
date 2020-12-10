import { Injectable } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    this.router.navigate(['reservations'], { relativeTo: this.route });
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['login']);
  }

  private updateUserData({ uid, email, displayName }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName
    }

    return userRef.set(data, { merge: true });
  }

  //   async register(email: string, password: string) {
//     var result = await this.afAuth.createUserWithEmailAndPassword("andycharvat@gmail.com", "OndraCharvat05")
//     this.sendEmailVerification();
//   }

//   async sendEmailVerification() {
//     return this.afAuth.currentUser.then(u => u.sendEmailVerification())
//     .then(() => {
//       this.router.navigate(['/verify-email']);
//     })
//   }

//   async sendPasswordResetEmail(passwordResetEmail: string) {
//     return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
//  }


}
