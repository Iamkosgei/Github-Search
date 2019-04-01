import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { User } from '../user'
import { Repo } from '../repo';

import {Response, Http} from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  user: User;
  repos: Repo[];

  reposArray:any;

  public userName: string = "daneden"


  constructor(private http: HttpClient,private http1:Http) {
    this.user = new User("", "", 0, 0, "", "", "", 0, "", "", "");
  
  }

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
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/${newName}?access_token=${environment.apiKey}`).toPromise().then(response => {

        this.user.name = response.name
        this.user.bio = response.bio
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.login = response.login
        this.user.location = response.location
        this.user.email = response.email
        this.user.public_repos = response.public_repos
        this.user.avatar_url = response.avatar_url
        this.user.company = response.company
        this.user.blog = response.blog

        resolve()
      },
        error => {
          this.profileRequest("Iamkosgei")
          // reject(error)
        }
      )
    })

    return promise
  }

  searchRepos(name){
    let reposUrl = `https://api.github.com/users/${name}/repos?access_token=d0bf12319a2fef42eb8ae5f321fa859cfe7ed2b3`
       this.http1.get(reposUrl).subscribe((res3:Response) =>{
        this.reposArray = res3.json();
        //console.log(this.reposArray);
      })
  return this.reposArray;
  }
}