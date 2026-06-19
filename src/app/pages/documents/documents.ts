import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface DocumentItem {
  documentId: number;
  fileName: string;
  contentType: string;
  fileSize: string;
  userId: number;
  filePath: string;
}

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './documents.html',
  styleUrl: './documents.css'
})
export class Documents {

  // UI STATE LAYER
  sidebarOpen = false;
  showModal = false;
  searchText = '';

  // CORE DATA LAYER
  documents: DocumentItem[] = [
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

  // FORM MODEL
  newDocument: Partial<DocumentItem> = {
    fileName: '',
    contentType: 'PDF',
    fileSize: '',
    userId: 0
  };

  constructor(private router: Router) {}

  /* ================= UI CONTROL ================= */

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  /* ================= NAVIGATION LAYER ================= */

  goDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  goTasks(): void {
    this.router.navigate(['/tasks']);
  }

  goPlanner(): void {
    this.router.navigate(['/ai-planner']);
  }

  goTeam(): void {
    this.router.navigate(['/team']);
  }

  goDocuments(): void {
    this.router.navigate(['/documents']);
  }

  goProfile(): void {
    this.router.navigate(['/profile']);
  }

  /* ================= BUSINESS LOGIC ================= */

  uploadDocument(): void {

    if (!this.newDocument.fileName?.trim()) {
      alert('Please enter file name');
      return;
    }

    const newDoc: DocumentItem = {
      documentId: this.documents.length + 1,
      fileName: this.newDocument.fileName!,
      contentType: this.newDocument.contentType || 'PDF',
      fileSize: this.newDocument.fileSize || '1 MB',
      userId: Number(this.newDocument.userId || 0),
      filePath: '#'
    };

    this.documents = [...this.documents, newDoc];

    this.resetForm();
    this.closeModal();
  }

  resetForm(): void {
    this.newDocument = {
      fileName: '',
      contentType: 'PDF',
      fileSize: '',
      userId: 0
    };
  }

  /* ================= SEARCH OPTIMIZATION ================= */

  filteredDocuments(): DocumentItem[] {
    const query = this.searchText.toLowerCase().trim();

    if (!query) return this.documents;

    return this.documents.filter(doc =>
      doc.fileName.toLowerCase().includes(query)
    );
  }

  /* ================= ACTION LAYER ================= */

  previewDocument(doc: DocumentItem): void {
    alert(`Previewing: ${doc.fileName}`);
  }

  downloadDocument(doc: DocumentItem): void {
    alert(`Downloading: ${doc.fileName}`);
  }

  deleteDocument(id: number): void {
    if (confirm('Delete this document?')) {
      this.documents = this.documents.filter(d => d.documentId !== id);
    }
  }
}