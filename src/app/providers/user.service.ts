import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
  constructor() {
    console.log('UserService UserService')
  }
}
