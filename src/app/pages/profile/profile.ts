import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  sidebarOpen = false;

  constructor(private router: Router){}

  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  goDashboard(){
    this.router.navigate(['/dashboard']);
  }

  goTasks(){
    this.router.navigate(['/tasks']);
  }

  goPlanner(){
    this.router.navigate(['/planner']);
  }

  goDocuments(){
    this.router.navigate(['/documents']);
  }

  goProfile(){
    this.router.navigate(['/profile']);
  }

  user = {
    userId: 1,
    fullName: 'J Geethika',
    email: 'geethika@gmail.com',
    userType: 'Admin',
    status: 'Active',
    createdAt: '2026-06-01'
  };

  stats = {
    totalTasks: 25,
    completedTasks: 15,
    pendingTasks: 10,
    documents: 8,
    aiTasks: 12
  };

  activityLogs = [
    {
      action:'Created Task',
      details:'Created Dashboard UI Task',
      date:'09-Jun-2026'
    },
    {
      action:'Uploaded Document',
      details:'DatabaseDesign.docx',
      date:'09-Jun-2026'
    },
    {
      action:'Generated AI Plan',
      details:'Angular Learning Roadmap',
      date:'08-Jun-2026'
    }
  ];
}