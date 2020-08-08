import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    console.log('LoginService LoginService')
  }

  async login(email, password) {
    const { user, jwt } = await this.http.post<any>(`http://localhost:3000/api/auth/login`, { email, password }).toPromise();
    localStorage.setItem('jwt', jwt);
    return user;
  }
}
