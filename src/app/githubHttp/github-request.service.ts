import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class GithubRequestService {
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    // access_token: environment.apiKey,
    Accept: "application/json",
  });

  constructor(private http: HttpClient) {}

  profileRequest(newName) {
    interface ApiResponse {
      name: string;
      bio: string;
      followers: number;
      following: number;
      login: string;
      location: string;
      email: string;
      public_repos: number;
      avatar_url: string;
      blog: string;
      company: string;
    }

    return this.http.get<ApiResponse>(
      `https://api.github.com/users/${newName}`,
      {
        headers: this.headers,
      }
    );
  }

  searchRepos(name) {
    return this.http.get(`https://api.github.com/users/${name}/repos`, {
      headers: this.headers,
    });
  }
}
