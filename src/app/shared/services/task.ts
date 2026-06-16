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

  getAllTasks() {
    return this.http.get(
      `${this.apiUrl}/getall`
    );
  }
}