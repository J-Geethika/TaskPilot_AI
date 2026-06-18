import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../shared/services/task.services';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks implements OnInit {

  constructor(
    private router: Router,
    private taskService: TaskService
  ) {}

  // ======================
  // DATA LAYER (SOURCE OF TRUTH)
  // ======================
  tickets: any[] = [];
  
  todoTickets: any[] = [];
  inProgressTickets: any[] = [];
  testingTickets: any[] = [];
  doneTickets: any[] = [];
  filteredTaskList: any[] = [];

totalTickets = 0;

  // ======================
  // SEARCH / FILTER
  // ======================
  searchText = '';
  selectedPriority = '';
  selectedStatus = '';

  // ======================
  // MODAL
  // ======================
  showModal = false;

  newTicket = {
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
    status: 'To Do',
    assignedToUserId: 1
  };

  // ======================
  // INIT
  // ======================
  ngOnInit() {
    this.loadTasks();
}

  loadTasks() {
    this.taskService.getAllTasks().subscribe({
      next: (data: any) => {
        console.log("RAW API RESPONSE:", data);

        this.tickets = data || [];
        this.updateTaskView();

        console.log("LOADED TICKETS:", this.tickets);
      },
      error: (err) => {
        console.error("API ERROR:", err);
      }
    });
  }

  // ======================
  // CENTRAL FILTER ENGINE
  // ======================
  filteredTickets() {
    return this.tickets.filter(ticket => {

      const matchesSearch =
        (ticket.title || '').toLowerCase().includes(this.searchText.toLowerCase()) ||
        (ticket.taskId || '').toString().includes(this.searchText);

      const matchesPriority =
        !this.selectedPriority || ticket.priority === this.selectedPriority;

      const matchesStatus =
        !this.selectedStatus || ticket.status === this.selectedStatus;

      return matchesSearch && matchesPriority && matchesStatus;
    });
  }



  updateTaskView(){
    this.filteredTaskList = this.tickets.filter(ticket => {
      const matchesSearch =
        (ticket.title || '').toLowerCase().includes(this.searchText.toLowerCase()) ||
        (ticket.taskId || '').toString().includes(this.searchText);
      const matchesPriority =
        !this.selectedPriority || ticket.priority === this.selectedPriority;
      const matchesStatus =
        !this.selectedStatus || ticket.status === this.selectedStatus;
      return matchesSearch && matchesPriority && matchesStatus;
    });

    this.todoTickets = this.filteredTaskList.filter(
      t => (t.status || '').trim().toLowerCase() === 'to do'
    );
    this.inProgressTickets = this.filteredTaskList.filter(
      t => (t.status || '').trim().toLowerCase() === 'in progress'
    );
    this.testingTickets = this.filteredTaskList.filter(
      t => (t.status || '').trim().toLowerCase() === 'testing'
    );
    this.doneTickets = this.filteredTaskList.filter(
      t => (t.status || '').trim().toLowerCase() === 'done'
    );
    this.totalTickets = this.filteredTaskList.length;
  }

  // ======================
  // KANBAN GROUPING
  // ======================
  getTodoTickets() {
    return this.filteredTickets().filter(
      t => (t.status || '').trim().toLowerCase() === 'to do'
    );
  }

  getInProgressTickets() {
    return this.filteredTickets().filter(
      t => (t.status || '').trim().toLowerCase() === 'in progress'
    );
  }

  getTestingTickets() {
    return this.filteredTickets().filter(
      t => (t.status || '').trim().toLowerCase() === 'testing'
    );
  }

  getDoneTickets() {
    return this.filteredTickets().filter(
      t => (t.status || '').trim().toLowerCase() === 'done'
    );
  }

  // ======================
  // STATS
  // ======================
  getTotalTickets() {
    return this.tickets.length;
  }

  getOpenTickets() {
    return this.getTodoTickets().length;
  }

  getProgressTickets() {
    return this.getInProgressTickets().length;
  }

  getCompletedTickets() {
    return this.getDoneTickets().length;
  }

  // ======================
  // CREATE TICKET
  // ======================
  addTicket() {

    if (!this.newTicket.title.trim() || !this.newTicket.description.trim()) {
      alert('Fill required fields');
      return;
    }

    this.taskService.createTask(this.newTicket).subscribe({
      next: (response: any) => {

        console.log("CREATED:", response);

        this.tickets.push(response);

        this.closeModal();

        this.newTicket = {
          title: '',
          description: '',
          dueDate: '',
          priority: 'Medium',
          status: 'To Do',
          assignedToUserId: 1
        };
      },
      error: (err) => {
        console.error(err);
        alert('Task creation failed');
      }
    });
  }

  // ======================
  // UI ACTIONS
  // ======================
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onFilterChange() {}

  // ======================
  // NAVIGATION
  // ======================
  goDashboard() { this.router.navigate(['/dashboard']); }
  goTasks() { this.router.navigate(['/tasks']); }
  goPlanner() { this.router.navigate(['/ai-planner']); }
  goDocuments() { this.router.navigate(['/documents']); }
  goProfile() { this.router.navigate(['/profile']); }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}