import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  constructor(private router: Router) {}

  goDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goTasks() {
    this.router.navigate(['/tasks']);
  }

  goPlanner() {
    this.router.navigate(['/planner']);
  }

  goAnalytics() {
    this.router.navigate(['/analytics']);
  }

  goProfile() {
    this.router.navigate(['/profile']);
  }

  createTask() {
    this.router.navigate(['/tasks']);
  }

  openAIPlanner() {
    this.router.navigate(['/planner']);
  }

}