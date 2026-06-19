import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  sidebarOpen = false;


  constructor(private router: Router) {}

  // Sidebar Toggle
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  // Dashboard Navigation
  goDashboard() {
    this.router.navigate(['/dashboard']);
  }

  // Tasks Page
  goTasks() {
    this.router.navigate(['/tasks']);
  }

  // AI Planner Page
  goPlanner() {
    this.router.navigate(['/ai-planner']);
  }

  // Analytics Page
  goAnalytics() {
    this.router.navigate(['/analytics']);
  }

  // Profile Page
  goProfile() {
    this.router.navigate(['/profile']);
  }

  // Settings Page
  goSettings() {
    this.router.navigate(['/settings']);
  }

  // Create Task Button
  createTask() {
    this.router.navigate(['/tasks']);
  }

  //Log Out Button
  logout() {
    this.router.navigate(['/login']);
  }

  // AI Assistant Button
  openAIPlanner() {
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