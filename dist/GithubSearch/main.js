(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-github-search></app-github-search>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GithubSearch';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _github_search_github_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github-search/github-search.component */ "./src/app/github-search/github-search.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _github_search_github_search_component__WEBPACK_IMPORTED_MODULE_5__["GithubSearchComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/github-search/github-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/github-search/github-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#welcome\n{\n    background:  url('bg.jpg') center center/cover no-repeat;\n    width: 100%;\n    color:#ffffff;\n    height:30vh;\n}\nh1\n{\n    color: white\n}\na {\n    color: black;\n    text-decoration: none\n}\n.fas-nav \n{\n    color: white\n}\n.nav-link{\n    color: white ;\n    }\n.nav-link:hover\n{\n    color: white;\n}\n.title \n{\n  font-size: 5rem\n}\n.content\n{\n    display: flex;\n}\n.main-content\n{\n    flex: 1;\n    margin-top: 5vh;\n    margin-right: 2rem;\n    margin-left: 2rem;\n}\n.repo-card{\n    margin-bottom: 1rem;\n}\n/* profile */\n.profile\n{\n    margin-top: 5vh;\n    flex: 1;\n    height: 30%\n}\n.prof-image\n{\n    width: 10rem;\n    border-radius: 50%\n}\n.card-header\n{\n    max-width: 40%;\n    text-align: center\n}\n.card-block\n{\n    padding: 2rem;\n    width: 60%\n}\n.fas-prof\n{\n    margin-right: 1rem;\n}\n@media(max-width :786px)\n{\n    .card-header\n{\n    max-width: 100%;\n   \n}\n.card-block\n{\n    padding: 2rem;\n    width: 100%\n}\n.navbar\n{\n    justify-content: center;\n    width: 100%\n    \n}\n.title \n{\n  font-size: 2rem\n}\n.content\n{\nflex-direction: column\n}\n.card-header\n{\n    width: 100%;\n   \n}\n.card-block\n{\n    width: 100%\n}\n.profile\n{\n    margin-top: 0;\n\n} \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0aHViLXNlYXJjaC9naXRodWItc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksd0RBQXlFO0lBQ3pFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7O0lBRUk7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaO0FBQ0o7QUFDQTs7SUFFSTtBQUNKO0FBQ0E7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7O0VBRUU7QUFDRjtBQUVBOztJQUVJLGFBQWE7QUFDakI7QUFFQTs7SUFFSSxPQUFPO0lBQ1AsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBLFlBQVk7QUFDWjs7SUFFSSxlQUFlO0lBQ2YsT0FBTztJQUNQO0FBQ0o7QUFFQTs7SUFFSSxZQUFZO0lBQ1o7QUFDSjtBQUVBOztJQUVJLGNBQWM7SUFDZDtBQUNKO0FBQ0E7O0lBRUksYUFBYTtJQUNiO0FBQ0o7QUFDQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFHQTs7SUFFSTs7SUFFQSxlQUFlOztBQUVuQjtBQUNBOztJQUVJLGFBQWE7SUFDYjtBQUNKO0FBQ0E7O0lBRUksdUJBQXVCO0lBQ3ZCOztBQUVKO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7SUFFSSxXQUFXOztBQUVmO0FBQ0E7O0lBRUk7QUFDSjtBQUNBOztJQUVJLGFBQWE7O0FBRWpCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9naXRodWItc2VhcmNoL2dpdGh1Yi1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3ZWxjb21lXG57XG4gICAgYmFja2dyb3VuZDogIHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmcuanBnXCIpIGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgaGVpZ2h0OjMwdmg7XG59XG5oMVxue1xuICAgIGNvbG9yOiB3aGl0ZVxufVxuYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxufVxuLmZhcy1uYXYgXG57XG4gICAgY29sb3I6IHdoaXRlXG59XG4ubmF2LWxpbmt7XG4gICAgY29sb3I6IHdoaXRlIDtcbiAgICB9XG4ubmF2LWxpbms6aG92ZXJcbntcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udGl0bGUgXG57XG4gIGZvbnQtc2l6ZTogNXJlbVxufVxuXG4uY29udGVudFxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluLWNvbnRlbnRcbntcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5cbi5yZXBvLWNhcmR7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLyogcHJvZmlsZSAqL1xuLnByb2ZpbGVcbntcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDMwJVxufSBcblxuLnByb2YtaW1hZ2VcbntcbiAgICB3aWR0aDogMTByZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlXG59XG5cbi5jYXJkLWhlYWRlclxue1xuICAgIG1heC13aWR0aDogNDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuLmNhcmQtYmxvY2tcbntcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIHdpZHRoOiA2MCVcbn1cbi5mYXMtcHJvZlxue1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn0gXG5cblxuQG1lZGlhKG1heC13aWR0aCA6Nzg2cHgpXG57XG4gICAgLmNhcmQtaGVhZGVyXG57XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgXG59XG4uY2FyZC1ibG9ja1xue1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgd2lkdGg6IDEwMCVcbn1cbi5uYXZiYXJcbntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJVxuICAgIFxufVxuLnRpdGxlIFxue1xuICBmb250LXNpemU6IDJyZW1cbn1cbi5jb250ZW50XG57XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uXG59XG4uY2FyZC1oZWFkZXJcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgIFxufVxuLmNhcmQtYmxvY2tcbntcbiAgICB3aWR0aDogMTAwJVxufVxuLnByb2ZpbGVcbntcbiAgICBtYXJnaW4tdG9wOiAwO1xuXG59IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/github-search/github-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/github-search/github-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"welcome\" class=\"d-flex justify-content-center align-items-center\">\n  <h1 class=\"title\">GITHUB SEARCH</h1>\n</div>\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-end\">\n  <form #searchForm=\"ngForm\" (ngSubmit)=\"onSubmit(name)\" class=\"form-inline d-flex justify-content-center\">\n    <input id=\"name\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Username\"\n      aria-label=\"Search\" />\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">\n      Search\n    </button>\n  </form>\n</nav>\n\n<div class=\"content\" ng>\n  <div *ngIf=\"loadingRepo && loadingProfile\" class=\"text-center\">\n    <div class=\"spinner-border\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n  <div class=\"profile d-flex justify-content-center\">\n    <div class=\"card flex-row flex-wrap\">\n      <div class=\"card-header border-0\">\n        <img class=\"prof-image\" src=\"{{ user?.avatar_url }}\" alt=\"\" />\n        <h5>{{ user?.name }}</h5>\n        <p>Bio: {{ user?.bio }}</p>\n        <ul class=\"list-group\">\n          <p>\n            Followers:\n            <span class=\"badge badge-primary badge-pill\">{{\n              user?.followers\n              }}</span>\n          </p>\n\n          <p>\n            Following:\n            <span class=\"badge badge-primary badge-pill\">{{\n              user?.following\n              }}</span>\n          </p>\n        </ul>\n      </div>\n      <div class=\"card-block\">\n        <p>\n          <i class=\"fas-prof fas fa-sign-in-alt\"></i> Login: {{ user?.login }}\n        </p>\n        <hr />\n        <p>\n          <i class=\"fas-prof fas fa-location-arrow\"></i>Location:\n          {{ user?.location }}\n        </p>\n        <hr />\n        <p>\n          <i class=\"fas-prof fas fa-envelope-open\"></i> Email: {{ user?.email }}\n        </p>\n        <hr />\n        <p>\n          <i class=\"fas-prof fas fa-code-branch\"></i>Public Repos:\n          {{ user?.public_repos }}\n        </p>\n        <hr />\n        <p>\n          <i class=\"fas-prof fas fa-building\"></i>Company: {{ user?.company }}\n        </p>\n        <hr />\n        <i class=\"fas-prof fab fa-html5\"></i>\n        Blog:<a href=\"{{ user?.blog }}\" target=\"_blank\"> {{ user?.blog }} </a>\n        <hr />\n      </div>\n    </div>\n  </div>\n\n  <!-- Page content -->\n  <div class=\"main-content\">\n    <div *ngFor=\"let repo of reposArray\" class=\"card repo-card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Title: {{ repo.name }}</h5>\n        <p class=\"card-text\">Description: {{ repo.description }}</p>\n        <div class=\"d-flex justify-content-around align-items-center\">\n          <a href=\"{{ repo.html_url }}\" target=\".blank\">\n            <button type=\"button\" class=\"btn btn-outline-success btn-sm\">\n              Repo Url\n            </button>\n          </a>\n          <span class=\"badge badge-success\">\n            Watchers: {{ repo.watchers_count }}</span>\n          <span class=\"badge badge-success\">Forks: {{ repo.forks_count }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/github-search/github-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/github-search/github-search.component.ts ***!
  \**********************************************************/
/*! exports provided: GithubSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubSearchComponent", function() { return GithubSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _githubHttp_github_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../githubHttp/github-request.service */ "./src/app/githubHttp/github-request.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");




var GithubSearchComponent = /** @class */ (function () {
    function GithubSearchComponent(githubRequestService) {
        this.githubRequestService = githubRequestService;
        this.name = "Iamkosgei";
        this.loadingRepo = false;
        this.loadingProfile = false;
    }
    GithubSearchComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getRepos();
    };
    GithubSearchComponent.prototype.getUser = function (name) {
        var _this = this;
        this.loadingProfile = true;
        this.githubRequestService
            .profileRequest(name == null ? this.name : name)
            .subscribe(function (result) {
            var res = JSON.parse(JSON.stringify(result));
            _this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"](res.name, res.bio, res.followers, res.following, res.login, res.location, res.email, res.public_repos, res.avatar_url, res.blog, res.company);
            _this.loadingProfile = false;
        }, function (error) {
            _this.loadingProfile = false;
        });
    };
    GithubSearchComponent.prototype.getRepos = function (name) {
        var _this = this;
        this.loadingRepo = true;
        this.githubRequestService
            .searchRepos(name == null ? this.name : name)
            .subscribe(function (result) {
            _this.reposArray = result;
            _this.loadingRepo = false;
        }, function (error) {
            _this.loadingRepo = false;
        });
    };
    GithubSearchComponent.prototype.onSubmit = function (name) {
        if (name.trim().length != 0) {
            this.getUser(name);
            this.getRepos(name);
        }
    };
    GithubSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-github-search",
            template: __webpack_require__(/*! ./github-search.component.html */ "./src/app/github-search/github-search.component.html"),
            styles: [__webpack_require__(/*! ./github-search.component.css */ "./src/app/github-search/github-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_githubHttp_github_request_service__WEBPACK_IMPORTED_MODULE_2__["GithubRequestService"]])
    ], GithubSearchComponent);
    return GithubSearchComponent;
}());



/***/ }),

/***/ "./src/app/githubHttp/github-request.service.ts":
/*!******************************************************!*\
  !*** ./src/app/githubHttp/github-request.service.ts ***!
  \******************************************************/
/*! exports provided: GithubRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubRequestService", function() { return GithubRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GithubRequestService = /** @class */ (function () {
    function GithubRequestService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            // access_token: environment.apiKey,
            Accept: "application/json",
        });
    }
    GithubRequestService.prototype.profileRequest = function (newName) {
        return this.http.get("https://api.github.com/users/" + newName, {
            headers: this.headers,
        });
    };
    GithubRequestService.prototype.searchRepos = function (name) {
        return this.http.get("https://api.github.com/users/" + name + "/repos", {
            headers: this.headers,
        });
    };
    GithubRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GithubRequestService);
    return GithubRequestService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, bio, followers, following, login, location, email, public_repos, avatar_url, blog, company) {
        this.name = name;
        this.bio = bio;
        this.followers = followers;
        this.following = following;
        this.login = login;
        this.location = location;
        this.email = email;
        this.public_repos = public_repos;
        this.avatar_url = avatar_url;
        this.blog = blog;
        this.company = company;
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiKey: "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"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kelvinkosgei/Desktop/developement/angular_projects/Github-Search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map