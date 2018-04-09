webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__ = __webpack_require__("./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__["LocalStorageModule"].withConfig({
                    prefix: 'my-app',
                    storageType: 'localStorage'
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'icomoon';\n  font-weight: normal;\n  font-style: normal;\n}\n/* =======================================================\n*\n*   Template Style \n* Edit this section\n*\n* ======================================================= */\nbody {\n  font-family: \"Roboto\", Arial, sans-serif;\n  font-weight: 300;\n  font-size: 20px;\n  line-height: 1.6;\n  color: rgba(0, 0, 0, 0.5);\n}\n@media screen and (max-width: 992px) {\n  body {\n    font-size: 16px;\n  }\n}\na {\n  color: #7ac143;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\na:hover, a:active, a:focus {\n  color: #7ac143;\n  outline: none;\n}\np {\n  margin-bottom: 1.5em;\n}\nh1, h2, h3, h4, h5, h6 {\n  color: #000;\n  font-family: \"Merriweather\", Times, serif;\n  font-weight: 700;\n  margin: 0 0 30px 0;\n}\nfigure {\n  margin-bottom: 2.5em;\n  float: left;\n  width: 100%;\n}\nfigure figcaption {\n  font-size: 16px;\n  width: 80%;\n  margin: 20px auto 0px auto;\n  color: #b3b3b3;\n  font-style: italic;\n  font-family: \"Merriweather\", Times, serif;\n}\n@media screen and (max-width: 480px) {\n  figure figcaption {\n    width: 100%;\n  }\n}\n::-webkit-selection {\n  color: #fff;\n  background: #7ac143;\n}\n::-moz-selection {\n  color: #fff;\n  background: #7ac143;\n}\n::selection {\n  color: #fff;\n  background: #7ac143;\n}\n#fh5co-page {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n#fh5co-aside {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  width: 15%;\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  overflow-y: scroll;\n  background: #e6e6e6;\n  z-index: 1001;\n  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);\n  -ms-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);\n  -o-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n#fh5co-aside.border {\n  border-right: 1px solid #e6e6e6;\n}\n@media screen and (max-width: 1200px) {\n  #fh5co-aside {\n    width: 30%;\n  }\n}\n#fh5co-aside #fh5co-logo {\n  text-align: center;\n}\n#fh5co-aside #fh5co-main-menu ul {\n  text-align: center;\n  margin: 0;\n  padding: 0;\n}\n@media screen and (max-width: 768px) {\n  #fh5co-aside #fh5co-main-menu ul {\n    margin: 0 0 2em 0;\n  }\n}\n#fh5co-aside #fh5co-main-menu ul li {\n  margin: 0 0 10px 0;\n  padding: 0;\n  list-style: none;\n}\n#fh5co-aside #fh5co-main-menu ul li a {\n  color: rgba(0, 0, 0, 0.5);\n  text-decoration: none;\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  font-size: 15px;\n  font-weight: 300;\n  position: relative;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  padding: 10px 10px;\n  letter-spacing: .2em;\n  font-family: \"Merriweather\", Times, serif;\n}\n#fh5co-aside #fh5co-main-menu ul li a:after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  bottom: 7px;\n  left: 10px;\n  right: 10px;\n  background-color: #7ac143;\n  visibility: hidden;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n#fh5co-aside #fh5co-main-menu ul li a:hover {\n  text-decoration: none;\n  color: black;\n}\n#fh5co-aside #fh5co-main-menu ul li a:hover:after {\n  visibility: visible;\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n#fh5co-aside #fh5co-main-menu ul li.fh5co-active a {\n  color: black;\n}\n#fh5co-aside #fh5co-main-menu ul li.fh5co-active a:after {\n  visibility: visible;\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n#fh5co-aside .fh5co-footer {\n  position: absolute;\n  bottom: 40px;\n  font-size: 14px;\n  text-align: center;\n  width: 100%;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.6);\n}\n@media screen and (max-width: 768px) {\n  #fh5co-aside .fh5co-footer {\n    position: relative;\n    bottom: 0;\n  }\n}\n#fh5co-aside .fh5co-footer span {\n  display: block;\n}\n#fh5co-aside .fh5co-footer ul {\n  padding: 0;\n  margin: 0;\n  text-align: center;\n}\n#fh5co-aside .fh5co-footer ul li {\n  padding: 0;\n  margin: 0;\n  display: inline;\n  list-style: none;\n}\n#fh5co-aside .fh5co-footer ul li a {\n  color: rgba(0, 0, 0, 0.7);\n  padding: 4px;\n}\n#fh5co-aside .fh5co-footer ul li a:hover, #fh5co-aside .fh5co-footer ul li a:active, #fh5co-aside .fh5co-footer ul li a:focus {\n  text-decoration: none;\n  outline: none;\n  color: #7ac143;\n}\n#fh5co-main {\n  width: 85%;\n  float: right;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n@media screen and (max-width: 1200px) {\n  #fh5co-main {\n    width: 70%;\n  }\n}\n@media screen and (max-width: 768px) {\n  #fh5co-main {\n    width: 100%;\n  }\n}\n#fh5co-main .fh5co-narrow-content {\n  position: relative;\n  width: 80%;\n  margin: 0 auto;\n  padding: 4em 0;\n}\n@media screen and (max-width: 768px) {\n  #fh5co-main .fh5co-narrow-content {\n    width: 100%;\n    padding: 3.5em 1em;\n  }\n}\n.fh5co-gallery {\n  position: relative;\n  margin-bottom: 7em;\n  float: left;\n  width: 100%;\n}\n.fh5co-gallery .gallery-item {\n  width: 25%;\n  position: relative;\n  overflow: hidden;\n  display: block;\n  float: left;\n  z-index: 110;\n}\n.fh5co-gallery .gallery-item img {\n  position: relative;\n  max-width: 100%;\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n  -webkit-transition: 0.9s;\n  transition: 0.9s;\n}\n@media screen and (max-width: 1200px) {\n  .fh5co-gallery .gallery-item {\n    width: 33.3333%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .fh5co-gallery .gallery-item {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 480px) {\n  .fh5co-gallery .gallery-item {\n    width: 100%;\n  }\n}\n.fh5co-gallery .gallery-item .overlay {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 11;\n  vertical-align: middle;\n  padding-top: 30%;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.fh5co-gallery .gallery-item .overlay h2, .fh5co-gallery .gallery-item .overlay span {\n  position: relative;\n  z-index: 12;\n  margin-bottom: 0;\n  text-align: center;\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.fh5co-gallery .gallery-item .overlay h2 {\n  color: #fff;\n  font-size: 26px;\n  font-weight: 300;\n  margin-bottom: 10px;\n  bottom: -15px;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-gallery .gallery-item .overlay h2 {\n    font-size: 18px;\n  }\n}\n.fh5co-gallery .gallery-item .overlay span {\n  color: #7ac143;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 11px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  font-weight: 400;\n  bottom: -5px;\n  visibility: hidden;\n  opacity: 0;\n}\n.fh5co-gallery .gallery-item .overlay:before {\n  content: '';\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.fh5co-gallery .gallery-item:hover img {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n.fh5co-gallery .gallery-item:hover .overlay {\n  visibility: visible;\n  opacity: 1;\n}\n.fh5co-gallery .gallery-item:hover .overlay:before {\n  content: '';\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.fh5co-gallery .gallery-item:hover .overlay h2 {\n  bottom: 0px;\n}\n.fh5co-gallery .gallery-item:hover .overlay span {\n  visibility: visible;\n  opacity: 1;\n  bottom: 0px;\n}\nbody.offcanvas {\n  overflow-x: hidden;\n}\nbody.offcanvas #fh5co-aside {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  width: 270px;\n  background: #fff;\n  z-index: 999;\n  position: fixed;\n}\nbody.offcanvas #fh5co-main, body.offcanvas .fh5co-nav-toggle {\n  top: 0;\n  -webkit-transform: translateX(270px);\n  transform: translateX(270px);\n}\n.fh5co-services {\n  margin-top: 5px;\n}\n.fh5co-services ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.work-pagination {\n  padding: 3em 0;\n}\n.work-pagination a {\n  color: #000;\n}\n.work-pagination a:hover {\n  color: #7ac143;\n  text-decoration: none;\n}\n@media screen and (max-width: 480px) {\n  .work-pagination span {\n    display: none;\n  }\n}\n.fh5co-border-bottom {\n  border-bottom: 1px solid #f0f0f0;\n}\n.fh5co-testimonial {\n  padding: 3em 0;\n  background: #7ac143;\n  position: relative;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-testimonial {\n    padding: 3em 0;\n  }\n}\n.fh5co-testimonial .item {\n  color: white;\n  padding-left: 3em;\n  padding-right: 3em;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-testimonial .item {\n    padding-left: 0em;\n    padding-right: 0em;\n  }\n}\n.fh5co-testimonial .item figure {\n  text-align: center;\n}\n.fh5co-testimonial .item figure img {\n  max-width: inherit;\n  width: 90px;\n  margin: 0 auto;\n  border-radius: 50%;\n}\n.fh5co-testimonial .item p {\n  font-size: 30px;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-testimonial .item p {\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .fh5co-testimonial .item p {\n    font-size: 20px;\n  }\n}\n.fh5co-testimonial .item .author {\n  font-size: 16px;\n  display: block;\n}\n.fh5co-counters {\n  padding: 1em 0;\n  background: #e6e6e6;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.fh5co-counters .fh5co-counter {\n  font-size: 50px;\n  display: block;\n  color: #fff;\n  font-family: \"Roboto\", Arial, sans-serif;\n  width: 100%;\n  font-weight: 700;\n  margin-bottom: .5em;\n}\n.fh5co-counters .fh5co-counter-label {\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-family: \"Merriweather\", Times, serif;\n  letter-spacing: 5px;\n  margin-bottom: 2em;\n  display: block;\n}\n.fh5co-lead {\n  font-size: 24px;\n  line-height: 1.5;\n}\n.fh5co-heading-colored {\n  color: #7ac143;\n}\n.fh5co-cards {\n  padding: 1em 0;\n  background: #e6e6e6;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-cards {\n    padding: 1em 0;\n  }\n}\n.fh5co-cards .fh5co-flex-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  -moz-flex-wrap: wrap;\n}\n.fh5co-cards .fh5co-flex-wrap > div {\n  width: 49.5%;\n  margin-right: 1%;\n  background: #fff;\n  padding: 30px;\n  margin-bottom: 10px;\n}\n.fh5co-cards .fh5co-flex-wrap > div:nth-of-type(1) {\n  float: left;\n}\n.fh5co-cards .fh5co-flex-wrap > div:nth-of-type(2) {\n  float: right;\n  margin-right: 0%;\n}\n@media screen and (max-width: 992px) {\n  .fh5co-cards .fh5co-flex-wrap > div {\n    width: 100%;\n    margin-right: 0;\n  }\n}\n.fh5co-cards .fh5co-flex-wrap .fh5co-card p:last-child {\n  margin-bottom: 0;\n}\n.fh5co-cards .fh5co-flex-wrap .fh5co-card h5 {\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: .2em;\n  padding: 4px 8px;\n  background: #ebebeb;\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n}\n.fh5co-counter .fh5co-number {\n  font-size: 100px;\n  color: #7ac143;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  line-height: .7;\n}\n.fh5co-counter .fh5co-number.fh5co-left {\n  float: left;\n  width: 30%;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-counter .fh5co-number.fh5co-left {\n    width: 100%;\n    line-height: 1.2;\n  }\n}\n.fh5co-counter .fh5co-text {\n  float: right;\n  text-align: left;\n  width: 70%;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-counter .fh5co-text {\n    width: 100%;\n    text-align: center;\n  }\n}\n.fh5co-counter .fh5co-text h3 {\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n.fh5co-counter .fh5co-text h3.border-bottom:after {\n  content: \"\";\n  width: 50px;\n}\n.fh5co-social {\n  padding: 0;\n  margin: 0;\n  text-align: center;\n}\n.fh5co-social li {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n}\n.fh5co-social li a {\n  font-size: 22px;\n  color: #000;\n  padding: 10px;\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n  border-radius: 7px;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-social li a {\n    padding: 10px 8px;\n  }\n}\n.fh5co-social li a:hover {\n  color: #7ac143;\n}\n.fh5co-social li a:hover, .fh5co-social li a:active, .fh5co-social li a:focus {\n  outline: none;\n  text-decoration: none;\n  color: #7ac143;\n}\n#map {\n  width: 100%;\n  height: 700px;\n}\n@media screen and (max-width: 768px) {\n  #map {\n    height: 200px;\n  }\n}\n.fh5co-more-contact {\n  background: #fafafa;\n}\n.fh5co-feature {\n  text-align: left;\n  width: 100%;\n  float: left;\n  padding: 20px;\n}\n.fh5co-feature .fh5co-icon {\n  float: left;\n  width: 10%;\n  display: block;\n  margin-top: 5px;\n}\n.fh5co-feature .fh5co-icon i {\n  color: #7ac143;\n  font-size: 70px;\n}\n@media screen and (max-width: 1200px) {\n  .fh5co-feature .fh5co-icon i {\n    font-size: 40px;\n  }\n}\n.fh5co-feature.fh5co-feature-sm .fh5co-icon i {\n  color: #7ac143;\n  font-size: 28px;\n}\n@media screen and (max-width: 1200px) {\n  .fh5co-feature.fh5co-feature-sm .fh5co-icon i {\n    font-size: 28px;\n  }\n}\n.fh5co-feature .fh5co-text {\n  float: right;\n  width: 80%;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-feature .fh5co-text {\n    width: 82%;\n  }\n}\n@media screen and (max-width: 480px) {\n  .fh5co-feature .fh5co-text {\n    width: 72%;\n  }\n}\n.fh5co-feature .fh5co-text h2, .fh5co-feature .fh5co-text h3 {\n  margin: 0;\n  padding: 0;\n}\n.fh5co-feature .fh5co-text h3 {\n  font-weight: 300;\n  margin-bottom: 20px;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 14px;\n  letter-spacing: .2em;\n  text-transform: uppercase;\n}\n.fh5co-heading {\n  font-size: 45px;\n  margin-bottom: 1em;\n}\n.fh5co-heading.fh5co-light {\n  color: #fff;\n}\n.fh5co-heading span {\n  display: block;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-heading {\n    font-size: 30px;\n    margin-bottom: 1em;\n  }\n}\n.fh5co-staff img {\n  margin-bottom: 1.5em;\n  border-radius: 7px;\n}\n.fh5co-staff h3 {\n  margin: 0 0 10px 0;\n}\n.fh5co-staff h4 {\n  margin: 0 0 20px 0;\n  font-weight: 300;\n  color: rgba(0, 0, 0, 0.4);\n}\n.chart {\n  width: 160px;\n  height: 160px;\n  margin: 0 auto 30px auto;\n  position: relative;\n  text-align: center;\n}\n.chart span {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  margin-top: -30px;\n  width: 100%;\n}\n.chart span strong {\n  display: block;\n}\n.chart canvas {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n/* Owl Override Style */\n.owl-carousel .owl-controls,\n.owl-carousel-posts .owl-controls {\n  margin-top: 0;\n}\n.owl-carousel .owl-controls .owl-nav .owl-next,\n.owl-carousel .owl-controls .owl-nav .owl-prev,\n.owl-carousel-posts .owl-controls .owl-nav .owl-next,\n.owl-carousel-posts .owl-controls .owl-nav .owl-prev {\n  top: 50%;\n  margin-top: -29px;\n  z-index: 9999;\n  position: absolute;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.owl-carousel-posts .owl-controls .owl-nav .owl-next,\n.owl-carousel-posts .owl-controls .owl-nav .owl-prev {\n  top: 24%;\n}\n.owl-carousel .owl-controls .owl-nav .owl-next,\n.owl-carousel-posts .owl-controls .owl-nav .owl-next {\n  right: -40px;\n}\n.owl-carousel .owl-controls .owl-nav .owl-next:hover,\n.owl-carousel-posts .owl-controls .owl-nav .owl-next:hover {\n  margin-right: -10px;\n}\n.owl-carousel .owl-controls .owl-nav .owl-prev,\n.owl-carousel-posts .owl-controls .owl-nav .owl-prev {\n  left: -40px;\n}\n.owl-carousel .owl-controls .owl-nav .owl-prev:hover,\n.owl-carousel-posts .owl-controls .owl-nav .owl-prev:hover {\n  margin-left: -10px;\n}\n.owl-carousel-posts .owl-controls .owl-nav .owl-next {\n  right: -50px;\n}\n@media screen and (max-width: 768px) {\n  .owl-carousel-posts .owl-controls .owl-nav .owl-next {\n    right: 0px;\n  }\n}\n.owl-carousel-posts .owl-controls .owl-nav .owl-prev {\n  left: -50px;\n}\n@media screen and (max-width: 768px) {\n  .owl-carousel-posts .owl-controls .owl-nav .owl-prev {\n    left: 0px;\n  }\n}\n.owl-carousel-posts .owl-controls .owl-nav .owl-next i,\n.owl-carousel-posts .owl-controls .owl-nav .owl-prev i,\n.owl-carousel-fullwidth .owl-controls .owl-nav .owl-next i,\n.owl-carousel-fullwidth .owl-controls .owl-nav .owl-prev i {\n  color: #444;\n}\n.owl-carousel-posts .owl-controls .owl-nav .owl-next:hover i,\n.owl-carousel-posts .owl-controls .owl-nav .owl-prev:hover i,\n.owl-carousel-fullwidth .owl-controls .owl-nav .owl-next:hover i,\n.owl-carousel-fullwidth .owl-controls .owl-nav .owl-prev:hover i {\n  color: #000;\n}\n.owl-carousel-fullwidth.fh5co-light-arrow .owl-controls .owl-nav .owl-next i,\n.owl-carousel-fullwidth.fh5co-light-arrow .owl-controls .owl-nav .owl-prev i {\n  color: #fff;\n}\n.owl-carousel-fullwidth.fh5co-light-arrow .owl-controls .owl-nav .owl-next:hover i,\n.owl-carousel-fullwidth.fh5co-light-arrow .owl-controls .owl-nav .owl-prev:hover i {\n  color: #fff;\n}\n@media screen and (max-width: 768px) {\n  .owl-theme .owl-controls .owl-nav {\n    display: none;\n  }\n}\n.owl-theme .owl-controls .owl-nav [class*=\"owl-\"] {\n  background: none !important;\n}\n.owl-theme .owl-controls .owl-nav [class*=\"owl-\"] i {\n  font-size: 30px;\n}\n.owl-theme .owl-controls .owl-nav [class*=\"owl-\"] i:hover, .owl-theme .owl-controls .owl-nav [class*=\"owl-\"] i:focus {\n  background: none !important;\n}\n.owl-theme .owl-controls .owl-nav [class*=\"owl-\"]:hover, .owl-theme .owl-controls .owl-nav [class*=\"owl-\"]:focus {\n  background: none !important;\n}\n.owl-theme .owl-dots {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n}\n.owl-carousel-fullwidth.owl-theme .owl-dots {\n  bottom: 0;\n  margin-bottom: -2.5em;\n}\n.owl-theme .owl-dots .owl-dot span {\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  border: 3px solid transparent;\n}\n.owl-theme .owl-dots .owl-dot span:hover {\n  background: none;\n  border: 3px solid #7ac143;\n}\n.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {\n  background: transparent;\n  height: 10px;\n  border: 2px solid #fff;\n}\n.btn {\n  margin-right: 4px;\n  margin-bottom: 4px;\n  font-family: \"Roboto\", Arial, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  border-radius: 50px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 8px 20px !important;\n}\n.btn.btn-sm {\n  padding: 4px 15px !important;\n}\n.btn.btn-md {\n  padding: 8px 20px !important;\n}\n.btn.btn-lg {\n  padding: 18px 36px !important;\n}\n.btn:hover, .btn:active, .btn:focus {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  outline: none !important;\n}\n.btn-primary {\n  background: #7ac143;\n  color: #fff;\n  border: 2px solid #7ac143;\n}\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  background: #88c756 !important;\n  border-color: #88c756 !important;\n}\n.btn-primary.btn-outline {\n  background: transparent;\n  color: #7ac143;\n  border: 2px solid #7ac143;\n}\n.btn-primary.btn-outline:hover, .btn-primary.btn-outline:focus, .btn-primary.btn-outline:active {\n  background: #7ac143;\n  color: #fff;\n}\n.btn-success {\n  background: #5cb85c;\n  color: #fff;\n  border: 2px solid #5cb85c;\n}\n.btn-success:hover, .btn-success:focus, .btn-success:active {\n  background: #4cae4c !important;\n  border-color: #4cae4c !important;\n}\n.btn-success.btn-outline {\n  background: transparent;\n  color: #5cb85c;\n  border: 2px solid #5cb85c;\n}\n.btn-success.btn-outline:hover, .btn-success.btn-outline:focus, .btn-success.btn-outline:active {\n  background: #5cb85c;\n  color: #fff;\n}\n.btn-info {\n  background: #5bc0de;\n  color: #fff;\n  border: 2px solid #5bc0de;\n}\n.btn-info:hover, .btn-info:focus, .btn-info:active {\n  background: #46b8da !important;\n  border-color: #46b8da !important;\n}\n.btn-info.btn-outline {\n  background: transparent;\n  color: #5bc0de;\n  border: 2px solid #5bc0de;\n}\n.btn-info.btn-outline:hover, .btn-info.btn-outline:focus, .btn-info.btn-outline:active {\n  background: #5bc0de;\n  color: #fff;\n}\n.btn-warning {\n  background: #f0ad4e;\n  color: #fff;\n  border: 2px solid #f0ad4e;\n}\n.btn-warning:hover, .btn-warning:focus, .btn-warning:active {\n  background: #eea236 !important;\n  border-color: #eea236 !important;\n}\n.btn-warning.btn-outline {\n  background: transparent;\n  color: #f0ad4e;\n  border: 2px solid #f0ad4e;\n}\n.btn-warning.btn-outline:hover, .btn-warning.btn-outline:focus, .btn-warning.btn-outline:active {\n  background: #f0ad4e;\n  color: #fff;\n}\n.btn-danger {\n  background: #d9534f;\n  color: #fff;\n  border: 2px solid #d9534f;\n}\n.btn-danger:hover, .btn-danger:focus, .btn-danger:active {\n  background: #d43f3a !important;\n  border-color: #d43f3a !important;\n}\n.btn-danger.btn-outline {\n  background: transparent;\n  color: #d9534f;\n  border: 2px solid #d9534f;\n}\n.btn-danger.btn-outline:hover, .btn-danger.btn-outline:focus, .btn-danger.btn-outline:active {\n  background: #d9534f;\n  color: #fff;\n}\n.btn-outline {\n  background: none;\n  border: 2px solid gray;\n  font-size: 16px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.btn-outline:hover, .btn-outline:focus, .btn-outline:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.form-control {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background: transparent;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  height: 54px;\n  font-size: 18px;\n  font-weight: 300;\n  border-radius: 7px;\n}\n.form-control:active, .form-control:focus {\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-color: #7ac143;\n}\n#message {\n  height: 130px;\n}\n.fh5co-nav-toggle {\n  cursor: pointer;\n  text-decoration: none;\n}\n.fh5co-nav-toggle.active i::before, .fh5co-nav-toggle.active i::after {\n  background: #000;\n}\n.fh5co-nav-toggle.dark.active i::before, .fh5co-nav-toggle.dark.active i::after {\n  background: #000;\n}\n.fh5co-nav-toggle:hover, .fh5co-nav-toggle:focus, .fh5co-nav-toggle:active {\n  outline: none;\n  border-bottom: none !important;\n}\n.fh5co-nav-toggle i {\n  position: relative;\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n  width: 30px;\n  height: 2px;\n  color: #000;\n  font: bold 14px/.4 Helvetica;\n  text-transform: uppercase;\n  text-indent: -55px;\n  background: #000;\n  -webkit-transition: all .2s ease-out;\n  transition: all .2s ease-out;\n}\n.fh5co-nav-toggle i::before, .fh5co-nav-toggle i::after {\n  content: '';\n  width: 30px;\n  height: 2px;\n  background: #000;\n  position: absolute;\n  left: 0;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.fh5co-nav-toggle.dark i {\n  position: relative;\n  color: #000;\n  background: #000;\n  -webkit-transition: all .2s ease-out;\n  transition: all .2s ease-out;\n}\n.fh5co-nav-toggle.dark i::before, .fh5co-nav-toggle.dark i::after {\n  background: #000;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.fh5co-nav-toggle i::before {\n  top: -7px;\n}\n.fh5co-nav-toggle i::after {\n  bottom: -7px;\n}\n.fh5co-nav-toggle:hover i::before {\n  top: -10px;\n}\n.fh5co-nav-toggle:hover i::after {\n  bottom: -10px;\n}\n.fh5co-nav-toggle.active i {\n  background: transparent;\n}\n.fh5co-nav-toggle.active i::before {\n  top: 0;\n  -webkit-transform: rotateZ(45deg);\n  transform: rotateZ(45deg);\n}\n.fh5co-nav-toggle.active i::after {\n  bottom: 0;\n  -webkit-transform: rotateZ(-45deg);\n  transform: rotateZ(-45deg);\n}\n.fh5co-nav-toggle {\n  position: fixed;\n  left: 0;\n  top: 0px;\n  z-index: 9999;\n  cursor: pointer;\n  opacity: 1;\n  visibility: hidden;\n  padding: 20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-nav-toggle {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n@media screen and (max-width: 480px) {\n  .col-xxs-12 {\n    float: none;\n    width: 100%;\n  }\n}\n.row-bottom-padded-lg {\n  padding-bottom: 7em;\n}\n@media screen and (max-width: 768px) {\n  .row-bottom-padded-lg {\n    padding-bottom: 1em;\n  }\n}\n.row-bottom-padded-md {\n  padding-bottom: 4em;\n}\n@media screen and (max-width: 768px) {\n  .row-bottom-padded-md {\n    padding-bottom: 1em;\n  }\n}\n.row-bottom-padded-sm {\n  padding-bottom: 1em;\n}\n@media screen and (max-width: 768px) {\n  .row-bottom-padded-sm {\n    padding-bottom: 1em;\n  }\n}\n.js .animate-box {\n  opacity: 0;\n}\n/*merged from another temp*/\n.container-fluid {\n  margin-left: 15%;\n  margin-right: 5%;\n}\n@media screen and (max-width: 1200px) {\n  .container-fluid {\n    margin-left: 30%;\n  }\n}\n.site-title {\n  padding: 0;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  width: 300px;\n}\n.site-title h2 {\n  color: #888;\n  font-size: 16px;\n/*  padding-top: 40px;*/\n  margin-left: 5%;\n  margin-top: 70px;\n  width: 280px;\n/*  position:fixed;*/\n}\n.main-menu {\n  margin-top: 0px;\n  margin-left: 0px;\n  width: 800px;\n}\n.navbar {\n  float: right;\n  padding: 0 !important;\n  margin-top: 60px;\n}\n.single-page-nav{\n  margin-left: 30px;\n}\n.nav-link {\n  padding: 10px 15px;\n  font-size: 18px;\n}\n#searchimg{\n  margin-left: 0px;\n  margin-top: 70px;\n}\n#search{\n  margin-top: 60px;\n  margin-left: 5px;\n  height: 50px;\n  display: inline-block;\n  line-height: 34px;\n  font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  vertical-align: top;\n    line-height: 1.25;\n  width: 50%\n}\n@media (max-width:990px) {\n  .main-menu {\n    margin: 0px;\n  }\n}\n@media (max-width:767px) {\n  .nav-link {\n    padding: 5px 10px;\n    font-size: 16px;\n  }\n}\n.button1 {\n     background-color: white;\n     color: black;\n     border: 2px solid #555555; \n     margin: 0px 0px;\n }\na.delete { display:none;position:absolute;top:0;right:0;width:30px;height:30px;text-indent:-999px;background:white; }\n.gallery-item:hover a.delete { display:block; }\n/*# sourceMappingURL=style.css.map */\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n\n<!DOCTYPE html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\"> <!--<![endif]-->\n\t<head>\n\t<meta charset=\"utf-8\">\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t<title>Bamboo Album</title>\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  \t<!-- Facebook and Twitter integration -->\n\t<meta property=\"og:title\" content=\"\"/>\n\t<meta property=\"og:image\" content=\"\"/>\n\t<meta property=\"og:url\" content=\"\"/>\n\t<meta property=\"og:site_name\" content=\"\"/>\n\t<meta property=\"og:description\" content=\"\"/>\n\t<meta name=\"twitter:title\" content=\"\" />\n\t<meta name=\"twitter:image\" content=\"\" />\n\t<meta name=\"twitter:url\" content=\"\" />\n\t<meta name=\"twitter:card\" content=\"\" />\n\n\t<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\n\t<link rel=\"shortcut icon\" href=\"favicon.ico\">\n\n\t<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic,700' rel='stylesheet' type='text/css'>\n\t<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>\n\t\n\t<!-- Animate.css -->\n\n\n\t<!-- Modernizr JS -->\n\t<!-- FOR IE9 below -->\n\t<!--[if lt IE 9]>\n\t<script src=\"js/respond.min.js\"></script>\n\t<![endif]-->\n\n\t</head>\n\t<body>\n\t\t\n\t\n\t\t\n\t<header id=\"top\">\n\n\t<div class=\"container-fluid\">\n    \n        <div class=\"row\">\n        \n            <div class=\"col-lg-4 col-md-12 site-title\">\n                <h2>An intellegent application that sorts photos automatically and smartly</h2>  \n            </div>\n\t\n            <div class=\"col-lg- col-md-1 main-menu\">\n                <input type=\"text\" id=\"search\" autocomplete=\"off\" aria-label=\"Search your photos\" aria-autocomplete=\"list\" ariapopup=\"true\" placeholder=\"Search your photos\">\n                <a href=\"javascript:void(0)\" (click)=\"add_tag()\" >\n                <img id=\"searchimg\" src=\"./../assets/images/searchicon.png\" >\n            \t</a>\n                <nav class=\"navbar navbar-light\">\n                  <ul class=\"nav navbar-nav single-page-nav\">\n\n                    <!-- <li class=\"nav-item\">\n                      <a class=\"nav-link\" (click)=\"add_tag()\" >add</a>\n                    </li> -->\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"myfunction()\">upload photos</a>\n                    </li>\n\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"delete_tags()\">delete all tags</a>\n                    </li>\n\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"delete_all()\">delete all photos</a>\n                    </li>\n\n                  </ul>\n                </nav>\n\n            </div>\n\n        </div>\n\n        <a *ngFor=\"let tag of MyTags\">\n        <button class=\"btn rounded-btn button1\">{{tag}}</button>\n        </a>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n            \t<hr class=\"sigma-hr\">\n            </div>\n        </div>\n\n    </div>\n    \n</header>\n\t\t\n\t\t\n\t\t\n\t<div id=\"fh5co-page\">\n\t\t<a href=\"#\" class=\"js-fh5co-nav-toggle fh5co-nav-toggle\"><i></i></a>\n\t\t<aside id=\"fh5co-aside\" role=\"complementary\" class=\"border js-fullheight\">\n\n\t\t\t<h1 id=\"fh5co-logo\"><a href=\"index.html\"><img src=\"./../assets/images/BambooAlbum.png\"></a></h1>\n\t\t\t<nav id=\"fh5co-main-menu\" role=\"navigation\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li class=\"fh5co-active\">Bamboo Album</li>\n\t\t\t\t\t<li class=\"fh5co-active\"><a href=\"index.html\">Albums</a></li>\n\t\t\t\t\t<!-- <li><a href=\"portfolio.html\">Photos</a></li> -->\n\n\n\n\t\t\t\t</ul>\n\t\t\t</nav>\n\n\t\t</aside>\n\n\t\t<div id=\"fh5co-main\">\n\t\t\t<div class=\"fh5co-gallery\">\n\n\t\t\t\n\t\t\t\t<a class=\"gallery-item\" *ngFor=\"let pic of MyPhotoList\">\n\t\t\t\t\t<img src=\"{{pic}}\" height=\"305\" width=\"305\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"delete\" (click)=\"delete_photo(pic)\">Delete</a>\n\t\t\t\t</a> \n\t\t\t\t\n  \t\t\t\t<!-- <a class=\"gallery-item\" *ngFor=\"let pic of MyPhotoList\">\n\t\t\t\t\t<img src=\"{{pic}}\" height=\"305\" width=\"305\">\n\t\t\t\t\t<button>delete</button>\n\t\t\t\t</a>\n  \t\t\t\t -->\n\t\t\t</div> \n\t\t</div>\n\t\n\n\t</div>\n\t</body>\n</html>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(http, toastr, localStorageService) {
        this.http = http;
        this.toastr = toastr;
        this.localStorageService = localStorageService;
        this.MyPhotoList = [];
        this.MyTags = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.get_all_photos();
    };
    HomePageComponent.prototype.myfunction = function () {
        window.open("popup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=800,left=800,width=800,height=800");
    };
    HomePageComponent.prototype.add_tag = function () {
        var tag = "";
        tag = document.getElementById("search").value;
        if (tag === "") {
            this.showSuccess();
        }
        else {
            console.log(tag);
            this.MyTags.push(tag);
            document.getElementById("search").value = "";
            this.send_tags();
        }
    };
    HomePageComponent.prototype.showSuccess = function () {
        this.toastr.error('Cannot enter an empty tag', '', {
            timeOut: 3000
        });
    };
    HomePageComponent.prototype.send_tags = function () {
        var _this = this;
        var options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') };
        var myObj = { 'userId': 'finaltest', 'tags': this.MyTags };
        var myJSON = JSON.stringify(myObj);
        var request = this.http.post("/photo/filter", myJSON, options)
            .map(function (response) {
            _this.MyPhotoList = response['urls'];
            console.log(response);
        });
        request.subscribe();
    };
    HomePageComponent.prototype.get_all_photos = function () {
        var _this = this;
        var options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') };
        var myObj = { 'userId': 'finaltest' };
        var myJSON = JSON.stringify(myObj);
        var request = this.http.post("/photo/all", myJSON, options)
            .map(function (response) {
            _this.MyPhotoList = response['urls'];
            console.log(response);
        });
        request.subscribe();
    };
    HomePageComponent.prototype.delete_tags = function () {
        this.MyTags = [];
        this.get_all_photos();
    };
    HomePageComponent.prototype.delete_photo = function (delete_url) {
        var options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') };
        var myObj = { 'userId': 'finaltest', 'url': delete_url };
        var myJSON = JSON.stringify(myObj);
        var request = this.http.post("/photo/delete", myJSON, options)
            .map(function (response) {
            console.log(response);
        });
        request.subscribe();
        this.get_all_photos();
    };
    HomePageComponent.prototype.delete_all = function () {
        for (var i = 0; i < this.MyPhotoList.length; i++) {
            this.delete_photo(this.MyPhotoList[i]);
        }
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n\n<div class=\"login-page\" >\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n            <img src=\"./../assets/images/BambooAlbum.png\" width=\"150px\" class=\"user-avatar\" >\n            <h1>Bamboo Album Login</h1>\n            <form role=\"form\">\n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" [(ngModel)]=\"username\" name='username' class=\"form-control input-underline input-lg\" placeholder=\"Username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\"  [(ngModel)]=\"password\" name ='password' class=\"form-control input-underline input-lg\" placeholder=\"Password\">\n                    </div>\n                    <div *ngIf=\"no_info\" class=\"alert alert-danger\">\n                    Username and password is required\n                    </div>\n                    <div *ngIf=\"incorrect\" class=\"alert alert-danger\">\n                    Incorrect username and password, please try again\n                    </div>\n                </div>\n                <button class=\"btn rounded-btn button1\"  (click)=\"sendrequest()\"> Log in </button>\n                <button class=\"btn rounded-btn button1\"  (click)=\"nav_to_register()\"> Register </button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n\n.help-block {\n  font-size: 16px; }\n\n.button1 {\n  border: 2px solid #555555;\n  margin: 0px 20px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.username = '';
        this.password = '';
        this.no_info = false;
        this.incorrect = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.no_info = false;
        this.incorrect = false;
    };
    LoginComponent.prototype.sendrequest = function () {
        var _this = this;
        this.no_info = false;
        this.incorrect = false;
        if (this.username === '' || this.password === '') {
            this.no_info = true;
            this.username = "";
            this.password = "";
        }
        else {
            var options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') };
            var myObj = { 'userId': this.username, 'password': this.password };
            var myJSON = JSON.stringify(myObj);
            var request = this.http.post("/login", myJSON, options)
                .map(function (response) {
                if (response['info'] === "success") {
                    localStorage.setItem("is_logged_in", "true");
                    _this.router.navigateByUrl("/home");
                }
                else {
                    _this.incorrect = true;
                    _this.username = "";
                    _this.password = "";
                }
            });
            request.subscribe();
        }
    };
    LoginComponent.prototype.nav_to_register = function () {
        this.router.navigateByUrl("/register");
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n\n<div class=\"login-page\" >\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n            <img src=\"./../assets/images/BambooAlbum.png\" width=\"150px\" class=\"user-avatar\" >\n            <h1>Bamboo Album Login</h1>\n            <form role=\"form\">\n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" [(ngModel)]=\"username\" name='username' class=\"form-control input-underline input-lg\" placeholder=\"Username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\"  [(ngModel)]=\"password\" name ='password' class=\"form-control input-underline input-lg\" placeholder=\"Password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\"  [(ngModel)]=\"password_again\" name ='password_again' class=\"form-control input-underline input-lg\" placeholder=\"Confirm Password\">\n                    </div>\n                    <div *ngIf=\"no_info\" class=\"alert alert-danger\">\n                    Username and password is required\n                    </div>\n                    <div *ngIf=\"incorrect\" class=\"alert alert-danger\">\n                    Password does not match the confirm password\n                    </div>\n                </div>\n                <button class=\"btn rounded-btn \"  (click)=\"register()\"> Register </button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n\n.help-block {\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
        this.username = '';
        this.password = '';
        this.password_again = "";
        this.no_info = false;
        this.incorrect = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.no_info = false;
        this.incorrect = false;
        if (this.username === '' || this.password === '' || this.password_again === '') {
            this.no_info = true;
            this.username = "";
            this.password = "";
            this.password_again = "";
        }
        else if (this.password_again !== this.password) {
            this.incorrect = true;
            this.username = "";
            this.password = "";
            this.password_again = "";
        }
        else {
            var options = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') };
            var myObj = { 'userId': this.username, 'password': this.password };
            var myJSON = JSON.stringify(myObj);
            var request = this.http.post("http://localhost:3000/register", myJSON, options)
                .map(function (response) {
                if (response['info'] === "success") {
                    _this.router.navigateByUrl("/login");
                }
            });
            request.subscribe();
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map