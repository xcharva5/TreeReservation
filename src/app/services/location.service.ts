import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  public getLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(response => {
        resolve({ lat: response.coords.latitude, lng: response.coords.longitude })
        reject("Wrong")
      })
    })
  }
}
