import { Component, OnInit } from "@angular/core";
import { GithubRequestService } from "../githubHttp/github-request.service";
import { User } from "../user";

@Component({
  selector: "app-github-search",
  templateUrl: "./github-search.component.html",
  styleUrls: ["./github-search.component.css"],
})
export class GithubSearchComponent implements OnInit {
  user: User;
  name: string = "Iamkosgei";
  reposArray;

  loadingRepo:Boolean=false
  loadingProfile:Boolean=false

  constructor(
    private githubRequestService: GithubRequestService,
  ) {}

  ngOnInit() {
    this.getUser();
    this.getRepos();
  }

  getUser(name?: string) {
    this.loadingProfile =true;
    this.githubRequestService
      .profileRequest(name == null ? this.name : name)
      .subscribe((result) => {
        var res = JSON.parse(JSON.stringify(result))
        this.user = new User(
          res.name,
          res.bio,
          res.followers,
          res.following,
          res.login,
          res.location,
          res.email,
          res.public_repos,
          res.avatar_url,
          
          res.blog,res.company
        );
        this.loadingProfile =false;
      }, (error)=>{
        this.loadingProfile = false;

      });
  }

  getRepos(name?: string) {
    this.loadingRepo =true;
    this.githubRequestService
      .searchRepos(name == null ? this.name : name)
      .subscribe((result) => {
        this.reposArray = result;

        this.loadingRepo = false;
      }, (error)=>{
        this.loadingRepo = false;

      }
      );
  }

  onSubmit(name) {
    if (name.trim().length != 0) {
      this.getUser(name);
      this.getRepos(name);
    }
  }
}
