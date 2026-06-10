import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './documents.html',
  styleUrl: './documents.css'
})
export class Documents {

  sidebarOpen = false;
  showModal = false;

  constructor(private router: Router) {}

  // Sidebar Toggle
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  // Navigation
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

  // Search
  searchText = '';

  // Existing Documents
  documents = [
    {
      documentId: 1,
      fileName: 'ProjectRequirements.pdf',
      contentType: 'PDF',
      fileSize: '2.4 MB',
      userId: 1,
      filePath: '#'
    },
    {
      documentId: 2,
      fileName: 'DatabaseDesign.docx',
      contentType: 'DOCX',
      fileSize: '1.1 MB',
      userId: 2,
      filePath: '#'
    },
    {
      documentId: 3,
      fileName: 'DashboardUI.png',
      contentType: 'IMAGE',
      fileSize: '850 KB',
      userId: 1,
      filePath: '#'
    }
  ];

  // New Document Form
  newDocument = {
    fileName: '',
    contentType: 'PDF',
    fileSize: '',
    userId: 0
  };

  // Open Upload Modal
  openModal() {
    this.showModal = true;
  }

  // Close Upload Modal
  closeModal() {
    this.showModal = false;
  }

  // Upload Document
  uploadDocument() {

    if (!this.newDocument.fileName) {
      alert('Please enter file name');
      return;
    }

    const newDoc = {
      documentId: this.documents.length + 1,
      fileName: this.newDocument.fileName,
      contentType: this.newDocument.contentType,
      fileSize: this.newDocument.fileSize || '1 MB',
      userId: Number(this.newDocument.userId),
      filePath: '#'
    };

    this.documents.push(newDoc);

    this.newDocument = {
      fileName: '',
      contentType: 'PDF',
      fileSize: '',
      userId: 0
    };

    this.closeModal();
  }

  // Search Filter
  filteredDocuments() {
    return this.documents.filter(doc =>
      doc.fileName
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }

  // Preview
  previewDocument(doc: any) {
    alert('Previewing: ' + doc.fileName);
  }

  // Download
  downloadDocument(doc: any) {
    alert('Downloading: ' + doc.fileName);
  }

  // Delete
  deleteDocument(id: number) {
    if (confirm('Delete this document?')) {
      this.documents = this.documents.filter(
        doc => doc.documentId !== id
      );
    }
  }
}