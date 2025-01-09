import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN =
  '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';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getGithubUser(username: string) {
    const headers = { Authorization: `Bearer ${TOKEN}` };
    return this.http.get(`https://api.github.com/users/${username}`, {
      headers,
    });
  }
}
