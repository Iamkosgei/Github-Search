import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../githubHttp/github-request.service';
import { User } from '../user';
import {Response, Http} from '@angular/http';




@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  user:User;
  name:string = "Iamkosgei";
  reposArray:any;

  constructor(private githubRequestService:GithubRequestService,private http:Http) { }

  ngOnInit() {
    
    this.githubRequestService.profileRequest("Iamkosgei")
    this.user = this.githubRequestService.user

    this.reposArray = this.githubRequestService.searchRepos("Iamkosgei")
    this.githubRequestService.searchRepos("Iamkosgei")
    
  }
  onSubmit(name)
  {
    if(name.trim().length != 0)
    {
      this.githubRequestService.profileRequest(name)
      this.user = this.githubRequestService.user

      this.reposArray =this.githubRequestService.searchRepos(name);

      // console.log(this.reposArray)
      
    }  
    
  }
}
