import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  addressLatitude = 48.9638511;
  addressLongitude = 16.7623553;
  addressMapType = "satellite";
  addressZoom = 17;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
