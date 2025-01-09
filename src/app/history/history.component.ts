import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  history: any[] = [];
  constructor(private localService: LocalService) {}

  ngOnInit(): void {
    const searchHistory = this.localService.getData('users') || null;
    this.history = searchHistory ? JSON.parse(searchHistory) : [];
  }

  clearHistory() {
    this.localService.removeData('users');
    this.history = [];
  }
}
