import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'github-search';
  results: Array<any> = [];

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/search']);
  }
  // onSearch(username: string) {
  //   this.appService.getGithubUser(username).subscribe((result) => {
  //     console.log(result);
  //   });
  // }
}
