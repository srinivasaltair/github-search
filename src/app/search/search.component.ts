import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  result: any = null;
  searchText: string = '';
  loadingUser: boolean = false;
  usersHistory: any = [];

  constructor(
    private appService: AppService,
    private localService: LocalService
  ) {}

  clearSearchText() {
    this.searchText = '';
  }

  searchUser() {
    this.loadingUser = true;
    const localData = this.localService.getData('users') || null;
    this.usersHistory = localData ? JSON.parse(localData) : [];
    this.appService.getGithubUser(this.searchText).subscribe({
      next: (res: any) => {
        this.result = res;
        this.loadingUser = false;
        this.usersHistory.unshift(res);
        this.localService.saveData('users', JSON.stringify(this.usersHistory));
      },
      error: (err) => {
        this.loadingUser = false;
        if (err.status === 404) {
          console.log('user not found');
          const notFoundUser = {
            name: this.searchText,
            avatar_url: '',
            userNotFound: true,
            email: null,
          };
          this.usersHistory.unshift(notFoundUser);
          this.localService.saveData(
            'users',
            JSON.stringify(this.usersHistory)
          );
        }
        console.error('Error: ', err);
      },
    });
  }
}
