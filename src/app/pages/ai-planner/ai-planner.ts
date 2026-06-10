import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ai-planner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-planner.html',
  styleUrl: './ai-planner.css'
})
export class AiPlanner {

  sidebarOpen = false;

  goal = '';

  showPlan = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  generatePlan() {
    this.showPlan = true;
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

  goDocuments() {
    this.router.navigate(['/documents']);
  }

  goProfile() {
    this.router.navigate(['/profile']);
  }
}