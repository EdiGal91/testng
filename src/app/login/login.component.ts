import { Component, OnInit } from '@angular/core';
import { LoginService } from '../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private login: LoginService
  ) { }

  ngOnInit(): void {
  }

  changeEmail(event){
    this.email = event.target.value
    console.log(this.email)
  }

  changePassword(event) {
    this.password = event.target.value
    console.log(this.password)
  }

  myFunction() {
    this.login.login(this.email, this.password)
    console.log('myFunction')
  }

}
