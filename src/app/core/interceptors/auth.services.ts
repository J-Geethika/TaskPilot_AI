import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44329/api/auth'; // your backend URL

  constructor(private http: HttpClient) {}

  /*login(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }*/

    login(data: any) {
  return this.http.post(`${this.apiUrl}/login`, data);
}
register(user: any) {
  return this.http.post(`${this.apiUrl}/register`, user);}
}