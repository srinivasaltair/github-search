import { Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'history', component: HistoryComponent },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
];
