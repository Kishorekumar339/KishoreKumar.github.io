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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <app-header></app-header>\n\n  <main id=\"about\">\n\n    <h1 class=\"lg-heading\">\n      About <span style=\"color:rgb(240, 80, 106)\">Me</span>\n    </h1>\n    <br>\n    <h2 class=\"sm-heading\"></h2>\n    <br>\n    <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n      <br>\n      <div fxFlex=\"15%\">\n        <button class=\"button\"><a href=\"../../assets\\images\\projects\\Kishorekumar_resume.docx\" target=\"_blank\">Resume</a></button>\n        <div class=\"icon\">\n          <a href=\"https://www.linkedin.com/in/kishore-kumar-207219198/\" target=\"_blank\"><i class=\"fab fa-linkedin fa-2x\"></i></a>\n        </div>\n        <div class=\"icon\">\n          <a href=\"https://github.com/Kishorekumar339\" target=\"_blank\"><i class=\"fab fa-github fa-2x\"></i></a>\n        </div>\n        <div class=\"icons\">\n          <a href=\"\" target=\"_blank\">\n            <i class=\"fab fa-twitter fa-2x\"></i>\n          </a>\n        </div>\n      </div>\n      <br>\n      <div fxFlex=\"55%\">\n        <mat-card class=\"about1-card\">\n          <mat-card-content>\n            <p>My Name is Kishore Kumar, I have 3+ Years of Experince in front end web applications Development Using Angular framework\n              with HTML5, CSS3,Javascript,Node Js, Bootstrap, php, jQuery and more technologies.<br></p>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"container\"\n         fxLayout=\"row\"\n         fxLayout.xs=\"column\"\n         fxLayoutGap=\"0.5%\"\n         fxLayoutAlign=\"center\">\n      <div fxFlex=\"33%\">\n        <mat-card class=\"about-card\">\n          <mat-card-header class=\"about-header\">\n            <mat-card-title class=\"about-title\">Academics</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <p>Post graduation in business analyst in IT<br> - Montreal college of information technology</p>\n            <p>Bachelor's in Computer Science <br> - JNTUH university in India</p>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div fxFlex=\"33%\">\n        <mat-card class=\"about-card\">\n          <mat-card-header class=\"about-header\">\n            <mat-card-title class=\"about-title\">Most used technologies</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <p>Angular2+, Angular JS, Angular material, Bootstrap</p>\n            <p>Javascript, TypeScript, Node Js, NPM.</p>\n            <p>HTML5, CSS3,WordPress, Photoshop.</p>\n            <p>PHP, Query, SQL, git</p>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div fxFlex=\"34%\">\n        <mat-card class=\"about-card\">\n          <mat-card-header class=\"about-header\">\n            <mat-card-title class=\"about-title\">Work Experience</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <p>Front end web developer, Northern Itlabs. Canada</p>\n            <p>Angular Front end Web developer, CIBC BANK. Canada</p>\n            <p>FRONT END DEVELOPER, GMGT Technologies. India </p>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n\n  </main>\n\n  <app-footer></app-footer>\n\n</body>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*$home-image: url(../assets/images/lightscreen.jpg);*/\n.about1-card {\n  border-radius: 15px;\n  width: 100%;\n  height: 75%;\n  display: inline-block;\n  text-align: left;\n  margin-bottom: 2rem;\n  background: rgba(73, 73, 73, 0.5);\n  padding: 1rem;\n  color: #fff;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }\n.about1-card p {\n    font-size: 20px; }\n.about-card {\n  border-radius: 15px;\n  width: 95%;\n  height: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-bottom: 2rem;\n  background: rgba(73, 73, 73, 0.5);\n  padding: 1rem;\n  border-bottom: #2808f5 5px solid;\n  color: #fff;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }\n.about-card p {\n    font-size: 15px;\n    text-align: left; }\n.about-title {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 2rem; }\n.about-header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 5%; }\na {\n  padding: 0.4rem; }\na:hover {\n    color: #f0506a;\n    transition: all 0.5s ease-out; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body></body>\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: 'project', component: _project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_14__["BlogComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"] },
    { path: '', redirectTo: 'main', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_14__["BlogComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/blog/blog.component.scss")]
        })
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"bg-img\">\n  <app-header></app-header>\n\n    <main id=\"contact\">\n      <h1 class=\"lg-heading\">\n        Connect With <span style=\"color:rgb(240, 80, 106)\">Me</span>\n      </h1>\n      <br>\n\n      <div class=\"icons\">\n        <a href=\"https://www.linkedin.com/in/kishore-kumar-207219198/\" target=\"_blank\">\n          <i class=\"fab fa-linkedin fa-3x\"></i>\n        </a>\n      </div>\n      <div class=\"icons\">\n        <a href=\"https://github.com/Kishorekumar339\" target=\"_blank\">\n          <i class=\"fab fa-github fa-3x\"></i>\n        </a>\n      </div>\n      <div class=\"icons\">\n        <a href=\"\" target=\"_blank\">\n          <i class=\"fab fa-twitter fa-3x\"></i>\n        </a>\n      </div>\n      <br>\n      <br>\n\n      <div>\n        <p style=\"font-style:italic;\">My Email: Kishore339k@gmail.com</p>\n      </div>\n<br>\n\n      <div class=\"contact\">\n        <div class=\"container\">\n          <div class=\"jumbotron\">\n            <h3><i class=\"fa fa-envelope-o fa-2x\" style=\"margin-right: 1rem;\"></i>Send me an Email!</h3>\n            <br>\n            <form (ngSubmit)=\"onSubmit()\" #contact [ngFormOptions]=\"{ updateOn: 'submit'}\">\n              <div class=\"form-group\">\n                <i class=\"fa fa-user\"></i>\n                <label for=\"name\"></label>\n                <input required [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\" id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Your name\">\n                <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n                  Name is required\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <i class=\"fa fa-envelope-o\"></i>\n                <label for=\"emailAddress\"></label>\n                <input required [(ngModel)]=\"model.emailAddress\" name=\"emailAddress\" #emailAddress=\"ngModel\" id=\"emailAddress\" type=\"email\" class=\"form-control\" placeholder=\"Your email address\">\n                <div [hidden]=\"emailAddress.valid || emailAddress.pristine\" class=\"alert alert-danger\">\n                  Email Address is required\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <i class=\"fa fa-tag\"></i>\n                <label for=\"subject\"></label>\n                <input required [(ngModel)]=\"model.subject\" name=\"subject\" #subject=\"ngModel\" id=\"subject\" type=\"text\" class=\"form-control\" placeholder=\"Subject of your email\">\n                <div [hidden]=\"subject.valid || subject.pristine\" class=\"alert alert-danger\">\n                  Subject is required\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <i class=\"fa fa-pencil\"></i>\n                <label for=\"message\"></label>\n                <textarea required [(ngModel)]=\"model.message\" name=\"message\" #message=\"ngModel\" id=\"message\" class=\"form-control\" placeholder=\"Your Message to me\"></textarea>\n                <div [hidden]=\"message.valid || message.pristine\" class=\"alert alert-danger\">\n                  Message is required\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button btn-sucess\">Send</button>\n            </form>\n          </div>\n        </div>\n      </div>\n\n    </main>\n  <app-footer></app-footer>\n</body>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  line-height: 1.6;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  padding: 1rem; }\n\n.container {\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.jumbotron {\n  border-radius: 15px;\n  width: auto;\n  height: auto;\n  margin-bottom: 2rem;\n  background: rgba(73, 73, 73, 0.5);\n  border-bottom: #2808f5 5px solid;\n  color: #fff;\n  padding: 30px; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.model = {
            name: '',
            subject: '',
            emailAddress: '',
            message: ''
        };
    }
    ContactComponent.prototype.onSubmit = function () {
        console.log(this.model);
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  Copyright &copy; 2020\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"menu-btn\" (click)=\"closeMenu()\" [class.close]=\"menuBtn\">\n    <div class=\"btn-line\"></div>\n    <div class=\"btn-line\"></div>\n    <div class=\"btn-line\"></div>\n\n  </div>\n  <nav class=\"menu\" (click)=\"closeMenu()\" [class.show]=\"menu\">\n    <div class=\"menu-branding\" (click)=\"closeMenu()\" [class.show]=\"menuBranding\">\n      <br>\n      <div style=\"text-align: center;\">\n      <div class=\"icons\">\n        <a href=\"https://www.linkedin.com/in/kishore-kumar-207219198/\" target=\"_blank\">\n          <i class=\"fab fa-linkedin fa-3x\"></i>\n        </a>\n      </div>\n      <div class=\"icons\">\n        <a href=\"https://github.com/Kishorekumar339\" target=\"_blank\">\n          <i class=\"fab fa-github fa-3x\"></i>\n        </a>\n      </div>\n      <div class=\"icons\">\n        <a href=\"\" target=\"_blank\">\n          <i class=\"fab fa-twitter fa-3x\"></i>\n        </a>\n      </div>\n      </div>\n    </div>\n    <ul class=\"menu-nav\" (click)=\"closeMenu()\" [class.show]=\"menuNav\">\n      <li class=\"nav-item\" (click)=\"closeMenu()\" [class.show]=\"navItem\">\n        <a class=\"nav-link\" routerLink=\"/main\">\n              Home\n        </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"closeMenu()\" [class.show]=\"navItem\">\n        <a class=\"nav-link\" routerLink=\"/about\">\n              About Me\n        </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"closeMenu()\" [class.show]=\"navItem\">\n        <a class=\"nav-link\" routerLink=\"/project\">\n              My Projects\n        </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"closeMenu()\" [class.show]=\"navItem\">\n        <a class=\"nav-link\" routerLink=\"/contact\">\n              Connect With Me\n        </a>\n      </li>\n    </ul>\n  </nav>\n</header>\n</body>\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.menuBtn = false;
        this.menu = false;
        this.menuNav = false;
        this.menuBranding = false;
        this.navItem = false;
    }
    HeaderComponent.prototype.closeMenu = function () {
        this.menuBtn = !this.menuBtn;
        this.menu = !this.menu;
        this.menuNav = !this.menuNav;
        this.menuBranding = !this.menuBranding;
        this.navItem = !this.navItem;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <app-header></app-header>\n  <main>\n    <h1 class=\"lg-heading\">\n      Kishore <span style=\"color:rgb(240, 80, 106)\">Kumar</span>\n    </h1>\n    <br>\n    <h2 class=\"sm-heading\">\n      Front end Developer | Angular Developer\n    </h2>\n    <div style=\"text-align: center;\">\n    <div class=\"icons\">\n      <a href=\"https://www.linkedin.com/in/kishore-kumar-207219198/\" target=\"_blank\">\n        <i class=\"fab fa-linkedin fa-4x\"></i>\n      </a>\n    </div>\n    <div class=\"icons\">\n      <a href=\"https://github.com/Kishorekumar339\" target=\"_blank\">\n        <i class=\"fab fa-github fa-4x\"></i>\n      </a>\n      <div class=\"icons\">\n        <a href=\"\" target=\"_blank\">\n          <i class=\"fab fa-twitter fa-4x\"></i>\n        </a>\n      </div>\n    </div>\n    </div>\n  </main>\n  <app-footer></app-footer>\n</body>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<app-header></app-header>\n\n<br>\n\n<main>\n\n  <h1 class=\"lg-heading\">\n    My <span style=\"color:rgb(240, 80, 106)\">Projects</span>\n  </h1>\n  <br>\n  <h2 class=\"sm-heading\">\n    Check out some of my projects...\n  </h2>\n\n  <br>\n\n  <div class=\"container\"\n       style=\"height: 100%;\"\n       fxLayout=\"row\"\n       fxLayout.xs=\"column\"\n       fxLayoutGap=\"10px\"\n       fxLayoutAlign=\"space-evenly none\">\n       <div fxFlex=\"33%\">\n        <mat-card class=\"project-card\">\n          <mat-card-header class=\"project-header\">\n            <mat-card-title class=\"project-title\">web Application</mat-card-title>\n          </mat-card-header>\n          <img mat-card-image src=\"../../assets\\images\\projects\\download.jpg\" alt=\"Database Design\">\n          <mat-card-content>\n            <p>\n              working on web application using Angular.\n            </p>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    <div fxFlex=\"33%\">\n      <mat-card class=\"project-card\">\n        <mat-card-header class=\"project-header\">\n          <mat-card-title class=\"project-title\">Online Shoping</mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src=\"../../assets\\images\\projects\\SHOPING.PNG\" alt=\"Database Design\">\n        <mat-card-content>\n          <p>\n            Developed Online shoping Application using Angular.\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    <div fxFlex=\"33%\">\n      <mat-card class=\"project-card\">\n        <mat-card-header class=\"project-header\">\n          <mat-card-title class=\"project-title\">Online banking</mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src=\"../../assets\\images\\projects\\Angular_full_color_logo.svg.png\" alt=\"Database Design\">\n        <mat-card-content>\n          <p>\n            Worked with CIBC BANK as a front end developer .\n          </p>\n        </mat-card-content>\n       <!-- <mat-card-actions>\n          <button mat-button><a href=\"\"  target=\"_blank\">Website</a></button>\n          <button mat-button><a href=\"\"  target=\"_blank\">Code</a></button>\n        </mat-card-actions>-->\n      </mat-card>\n    </div>\n  \n  </div>\n<br>\n\n</main>\n\n<br>\n\n<app-footer></app-footer>\n\n</body>\n"

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*$home-image: url(../assets/images/lightscreen.jpg);*/\n.project-card {\n  padding: 40px;\n  border-radius: 15px;\n  margin-bottom: 2rem;\n  background: rgba(73, 73, 73, 0.5);\n  padding: 0.5rem;\n  border-bottom: #2808f5 5px solid;\n  color: #fff;\n  width: 100%;\n  height: 95%;\n  display: inline-block;\n  text-align: center;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }\n.project-title {\n  /*font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;*/\n  font-size: 2rem; }\n.project-header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 5%; }\n.resp-container {\n  position: relative;\n  overflow: hidden;\n  padding-top: 56.25%; }\n.resp-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0; }\n.project-card:hover, .project-card:focus {\n  background: #92bde7;\n  color: #fff;\n  outline: 0;\n  transition: background-color 2s ease-out; }\nmat-card img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 90%;\n  height: 60%; }\na {\n  padding: 0.4rem;\n  font-size: 1.5rem; }\na:hover {\n    color: #f0506a;\n    transition: all 0.5s ease-out; }\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/project/project.component.scss")]
        })
    ], ProjectComponent);
    return ProjectComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Saikishor Udari\Desktop\Portfolio-Angular-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map