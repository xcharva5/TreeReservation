import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email = "";
  password = "";

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  createUser(): void {
    // this.auth.register(this.email, this.password);
  }

}
