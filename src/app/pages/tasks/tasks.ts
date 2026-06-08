import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  sidebarOpen = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  goDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goTasks() {
    this.router.navigate(['/tasks']);
  }

  goPlanner() {
    this.router.navigate(['/ai-planner']);
  }

  goTeam() {
    this.router.navigate(['/team']);
  }

  goCalendar() {
    this.router.navigate(['/calendar']);
  }

  goDocuments() {
    this.router.navigate(['/documents']);
  }

}