import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../githubHttp/github-request.service';
import { User } from '../user';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  user:User;
  name:string = "Iamkosgei";

  constructor(private githubRequestService:GithubRequestService) { }

  ngOnInit() {
    
    this.githubRequestService.profileRequest("Iamkosgei")
    this.user = this.githubRequestService.user
    
  }
  onSubmit(name)
  {
    if(name.trim().length != 0)
    {
      this.githubRequestService.profileRequest(name)
      this.user = this.githubRequestService.user
    }

    
  
  }
}
