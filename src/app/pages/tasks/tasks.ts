import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks {

  constructor(private router: Router) {}

  // ======================
  // Sidebar
  // ======================

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  // ======================
  // Navigation
  // ======================

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

  goProfile() {
    this.router.navigate(['/profile']);
  }

  // ======================
  // Search & Filters
  // ======================

  searchText = '';
  selectedPriority = '';
  selectedStatus = '';

  // ======================
  // Modal
  // ======================

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  // ======================
  // New Ticket Form
  // ======================

  newTicket = {
    title: '',
    description: '',
    priority: 'Medium',
    status: 'To Do',
    assignedTo: ''
  };

  // ======================
  // Ticket Data
  // ======================

  tickets = [
    {
      id: 'TK-101',
      title: 'Login Page Design',
      description: 'Create Angular Login UI',
      priority: 'High',
      status: 'To Do',
      assignedTo: 'Geethika'
    },
    {
      id: 'TK-102',
      title: 'Database Setup',
      description: 'Create SQL Server Tables',
      priority: 'Medium',
      status: 'In Progress',
      assignedTo: 'Raja'
    },
    {
      id: 'TK-103',
      title: 'Dashboard UI',
      description: 'Build Dashboard Components',
      priority: 'High',
      status: 'Testing',
      assignedTo: 'Geethika'
    },
    {
      id: 'TK-104',
      title: 'Authentication Module',
      description: 'Verify Login Functionality',
      priority: 'Medium',
      status: 'Testing',
      assignedTo: 'Miruthula'
    },
    {
      id: 'TK-105',
      title: 'Project Setup',
      description: 'Angular Environment Setup',
      priority: 'Low',
      status: 'Done',
      assignedTo: 'Gopika'
    }
  ];

  // ======================
  // Add Ticket
  // ======================

  addTicket() {

    if (
      this.newTicket.title.trim() === '' ||
      this.newTicket.assignedTo.trim() === ''
    ) {
      alert('Please fill all required fields');
      return;
    }

    const newId =
      'TK-' + (100 + this.tickets.length + 1);

    this.tickets.unshift({
      id: newId,
      title: this.newTicket.title,
      description: this.newTicket.description,
      priority: this.newTicket.priority,
      status: this.newTicket.status,
      assignedTo: this.newTicket.assignedTo
    });

    this.newTicket = {
      title: '',
      description: '',
      priority: 'Medium',
      status: 'To Do',
      assignedTo: ''
    };

    this.closeModal();
  }

  // ======================
  // Search + Filter
  // ======================

  filteredTickets() {

    return this.tickets.filter(ticket =>

      (
        ticket.title.toLowerCase().includes(this.searchText.toLowerCase())
        ||
        ticket.id.toLowerCase().includes(this.searchText.toLowerCase())
      )

      &&

      (
        this.selectedPriority === ''
        ||
        ticket.priority === this.selectedPriority
      )

      &&

      (
        this.selectedStatus === ''
        ||
        ticket.status === this.selectedStatus
      )
    );
  }

  // ======================
  // Kanban Columns
  // ======================

  getTodoTickets() {
    return this.filteredTickets().filter(
      ticket => ticket.status === 'To Do'
    );
  }

  getInProgressTickets() {
    return this.filteredTickets().filter(
      ticket => ticket.status === 'In Progress'
    );
  }

  getTestingTickets() {
    return this.filteredTickets().filter(
      ticket => ticket.status === 'Testing'
    );
  }

  getDoneTickets() {
    return this.filteredTickets().filter(
      ticket => ticket.status === 'Done'
    );
  }

  // ======================
  // Statistics
  // ======================

  getTotalTickets() {
    return this.tickets.length;
  }

  getOpenTickets() {
    return this.tickets.filter(
      t => t.status === 'To Do'
    ).length;
  }

  getProgressTickets() {
    return this.tickets.filter(
      t => t.status === 'In Progress'
    ).length;
  }

  getCompletedTickets() {
    return this.tickets.filter(
      t => t.status === 'Done'
    ).length;
  }

}