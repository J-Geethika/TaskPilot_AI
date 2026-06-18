import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl = 'https://localhost:44329/api/tasks';

  constructor(private http: HttpClient) {}

  createTask(data: any) {
    return this.http.post(
      `${this.apiUrl}/create`,
      data
    );
  }

  /*getAllTasks() {

  let token = '';

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token') || '';
  }

  return this.http.get(
    `${this.apiUrl}/getall`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}
 return this.http.get(`${this.apiUrl}/getall`);}*/

getAllTasks() {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token');

    return this.http.get(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return this.http.get(this.apiUrl);
}
}