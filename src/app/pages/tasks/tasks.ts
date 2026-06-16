import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../shared/services/task';
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
export class Tasks implements OnInit {

  constructor(private router: Router,private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }
  loadTasks() {
    this.taskService.getAllTasks().subscribe({
      next: (data : any) => {
        this.tickets = data;
      },
      error: (error) =>  {
        console.log(error);
      }
    });
  }
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
  dueDate: '',
  priority: 'Medium',
  status: 'To Do',
  assignedToUserId: 1
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
  this.newTicket.title.trim() === ''
) {
      alert('Please fill all required fields');
      return;
    }

    this.taskService.createTask(this.newTicket).subscribe({
      next  :(response) => {
        alert('Task created successfully');
        this.newTicket = {
          title: '',
          description: '',
          dueDate: '',
          priority: 'Medium',
          status: 'To Do',
          assignedToUserId: 1 
        };
        this.closeModal();
      },
      error:(error)=>{
        console.log(error);
        alert('Error creating task'); 
      }
        });

   

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