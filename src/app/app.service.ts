import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../env/env';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getGithubUser(username: string) {
    const headers = { Authorization: `Bearer ${env.githubAuthToken}` };
    return this.http.get(`https://api.github.com/users/${username}`, {
      headers,
    });
  }
}
