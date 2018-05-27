webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-router/app-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_login_signup_login_signup_component__ = __webpack_require__("../../../../../src/app/views/login-signup/login-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/views/my-profile/my-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__views_login_signup_login_signup_component__["a" /* LoginSignupComponent */],
    },
    {
        path: 'my-profile/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__views_my_profile_my_profile_component__["a" /* MyProfileComponent */]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head-band {\n    background-color: purple;\n    height: 40px;\n}\n\n.head-band-icon {\n    margin-top:10px;\n    margin-left:45%;\n    font-size: 18px;\n    color: #ffffff;\n}\n\n.right {\n    float: right;\n    padding-right: 25px;\n    padding-top: 10px;\n    font-size: 14px;\n    font-weight: bolder;\n    color: #ffffff;\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-12 col-lg-12 col-sm-12 head-band\">\n      <i class=\"fa fa-sticky-note head-band-icon\"> Planguru</i>\n      <span class=\"right\" (click)=\"logout()\" [hidden]=\"loggedOut\">Logout</span>\n    </div> \n    </div>\n</section>\n\n<div class=\"content-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.loggedOut = true;
        this._router.navigate(['login/']);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.token = localStorage.getItem('jwtToken');
        if (!this.token) {
            this.loggedOut = true;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_router_app_router_module__ = __webpack_require__("../../../../../src/app/app-router/app-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_router_state_params__ = __webpack_require__("../../../../ng-router-state-params/router-state-params.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_login_signup_login_signup_component__ = __webpack_require__("../../../../../src/app/views/login-signup/login-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/views/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__);
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
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_login_signup_login_signup_component__["a" /* LoginSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__views_my_profile_my_profile_component__["a" /* MyProfileComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_router_app_router_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_8_ng_router_state_params__["a" /* RouterStateParamsService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
var ApiService = /** @class */ (function () {
    function ApiService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        // this.srcApiUrl = environment.baseUrl + environment.apiUrl + 'source/';
    }
    ApiService.prototype.login = function (email, password) {
        var login_data = {
            email: email,
            password: password
        };
        return this.http
            .post('http://127.0.0.1:3000/api/login', login_data)
            .map(function (response) {
            return response.json();
        });
    };
    ApiService.prototype.signup = function (email, password, name, timezone) {
        var login_data = {
            name: name,
            email: email,
            password: password,
            timezone: timezone
        };
        return this.http
            .post('http://127.0.0.1:3000/api/signup', login_data)
            .map(function (response) {
            return response.json();
        });
    };
    ApiService.prototype.getUser = function (userId) {
        var token = localStorage.getItem('jwtToken');
        if (!token) {
            token = '';
        }
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': token })
        };
        return this.httpClient
            .get('http://127.0.0.1:3000/api/user/' + userId, httpOptions)
            .map(function (response) {
            // console.log(response);
            return response;
        });
    };
    ApiService.prototype.updateTZ = function (userId, timezone) {
        var timezoneObj = {
            timezone: timezone
        };
        return this.httpClient
            .post('http://127.0.0.1:3000/api/updatetz/' + userId, timezoneObj)
            .map(function (response) {
            // console.log(response);
            return response;
        });
    };
    ApiService.prototype.makeReservation = function (userId, loggedIn, timeSlot, userName, loggedIn_name) {
        var objToSend = {
            userId: userId,
            userName: userName,
            loggedIn_name: loggedIn_name,
            loggedIn: loggedIn,
            timeSlot: timeSlot
        };
        return this.httpClient
            .post('http://127.0.0.1:3000/api/reserve/', objToSend)
            .map(function (response) {
            // console.log(response);
            return response;
        });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/views/login-signup/login-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n    margin-bottom: 10px;\n}\n\n.title span {\n    color: grey;\n}\n\n.bottom-text {\ncolor: grey;\nposition: relative;\ntop:50px;\nleft: 30px;\n}\n\n.bottom-text a {\n    color: purple;\n}\n\n.btn-custom {\n    border-radius: 50%;\n    background-color: purple;\n    font-size: 18px;\n    font-weight:bold;\n    float: left;\n    margin-left: 20px;\n    color: #d4bdbd;\n}\n\n.forgot-text{\n    position: relative;\n    margin-top: 10px;\n    left: 75px;\n}\n\n.forgot-text a {\n    color: purple !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/login-signup/login-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currentRoute=='login'\">\n  <div [hidden]=\"!loading\" class=\"loading loading-big\"></div>\n  <div class=\"row set-mid\" [hidden]=\"loading\">\n    <div class=\"title\">\n      <h4>Hello!</h4>\n      <span>Please Log In to Your Account.</span>\n    </div>\n    <input type=\"text\" id=\"email\" class=\"form-control form-custom\" [(ngModel)]=\"email_ip\" placeholder=\"Email Address\" required=\"required\"\n    />\n    <input type=\"password\" id=\"password\" class=\"form-control form-custom\" [(ngModel)]=\"password_ip\" placeholder=\"Password\" required=\"required\"\n    />\n    <div class=\"row\">\n      <button class=\"btn btn-custom\" (click)=\"login()\">Login</button>\n      <div class=\"forgot-text\">\n        <a href=\"#\">Forgot Password? </a>\n      </div>\n    </div>\n    <span class=\"bottom-text\">\n      Still without account?\n      <a (click)=\"navigate('signup')\">Signup</a>\n    </span>\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"currentRoute == 'signup'\">\n  <div [hidden]=\"!loading\" class=\"loading loading-big\"></div>\n  <div class=\"row set-mid\" [hidden]=\"loading\">\n    <div class=\"title\">\n      <h4>Signup</h4>\n      <span>Create an account to use planguru without limits. For free.</span>\n    </div>\n    <input type=\"text\" id=\"new_name\" class=\"form-control form-custom\" [(ngModel)]=\"name_ip\" placeholder=\"Name\" required=\"required\"\n    />\n    <input type=\"text\" id=\"new_email\" class=\"form-control form-custom\" [(ngModel)]=\"email_ip\" placeholder=\"Email Address\" required=\"required\"\n    />\n    <input type=\"password\" id=\"new_password\" class=\"form-control form-custom\" [(ngModel)]=\"password_ip\" placeholder=\"Password\"\n      required=\"required\" />\n    <div class=\"row\">\n      <button class=\"btn btn-custom\" (click)=\"signup()\">Signup</button>\n    </div>\n    <span class=\"bottom-text\">\n      Already have an account?\n      <a (click)=\"navigate('login')\">Login</a>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/login-signup/login-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginSignupComponent = /** @class */ (function () {
    function LoginSignupComponent(_router, apiService, toastr, vcr) {
        this._router = _router;
        this.apiService = apiService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginSignupComponent.prototype.navigate = function (route) {
        if (route === 'signup') {
            this.currentRoute = 'signup';
            // this._router.navigate(['/login?signup=' + true]);
        }
        else {
            this.currentRoute = 'login';
        }
    };
    LoginSignupComponent.prototype.login = function () {
        var _this = this;
        if (this.email_ip && this.password_ip) {
            this.loading = true;
            this.apiService.login(this.email_ip, this.password_ip).subscribe(function (response) {
                _this.resp = response;
            }, function (error) {
                console.log('Error :: ' + error);
            }, function () {
                _this.loading = false;
                if (!_this.resp.status) {
                    _this.toastr.error(_this.resp.message);
                }
                else if (_this.resp.status) {
                    // console.log(this.resp);
                    localStorage.setItem('jwtToken', _this.resp.data.token);
                    localStorage.setItem('userId', _this.resp.data.user._id);
                    _this.loggedOut = false;
                    localStorage.setItem('logged_in_user', _this.resp.data.user.name);
                    _this._router.navigate(['my-profile/' + _this.resp.data.user._id]);
                }
            });
        }
        else {
            this.toastr.error('Please enter email and password!');
        }
    };
    LoginSignupComponent.prototype.signup = function () {
        var _this = this;
        if (this.email_ip && this.password_ip) {
            this.loading = true;
            this.apiService.signup(this.email_ip, this.password_ip, this.name_ip, this.timezone).subscribe(function (response) {
                _this.resp = response;
            }, function (error) {
                console.log('Error :: ' + error);
            }, function () {
                _this.loading = false;
                console.log(_this.resp);
                if (!_this.resp.status) {
                    _this.toastr.error(_this.resp.message);
                }
                else if (_this.resp.status) {
                    _this.toastr.success('New User Created');
                    _this.email_ip = '';
                    _this.password_ip = '';
                    _this.currentRoute = 'login';
                    _this._router.navigate(['my-profile']);
                }
            });
        }
        else {
            this.toastr.error('Please enter email and password!');
        }
    };
    LoginSignupComponent.prototype.ngOnInit = function () {
        this.loggedIn = localStorage.getItem('userId');
        this.token = localStorage.getItem('jwtToken');
        if (this.loggedIn && this.token) {
            this._router.navigate(['my-profile/' + this.loggedIn]);
        }
        this.loading = false;
        this.currentRoute = 'login';
        this.email_ip = '';
        this.password_ip = '';
    };
    LoginSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-signup',
            template: __webpack_require__("../../../../../src/app/views/login-signup/login-signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/login-signup/login-signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], LoginSignupComponent);
    return LoginSignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/my-profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-color {\n    color: grey;\n}\n\n.btn {\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header container\" [hidden]=\"loading\">\n  <h3>\n   Welcome {{name}}!\n  </h3>\n  \n</section>\n<div class=\"loading loading-big\" [hidden]=\"!loading\"></div>"

/***/ }),

/***/ "../../../../../src/app/views/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__ = __webpack_require__("../../../../ng-router-state-params/router-state-params.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(routerStateParamsService, apiService, _router) {
        this.routerStateParamsService = routerStateParamsService;
        this.apiService = apiService;
        this._router = _router;
    }
    MyProfileComponent.prototype.getUserData = function (userId) {
        var _this = this;
        this.apiService.getUser(userId).subscribe(function (response) {
            _this.resp = response;
        }, function (error) {
            console.log('Error :: ' + error);
        }, function () {
            _this.loading = false;
            var mainScope = _this;
            if (!_this.resp.status) {
                _this._router.navigate(['login/']);
            }
            else if (_this.resp.status) {
                _this.name = _this.resp.data.name;
            }
        });
    };
    MyProfileComponent.prototype.ngOnInit = function () {
        this.userId = this.routerStateParamsService.getParams().source.value.id;
        this.loading = true;
        this.name = null;
        this.getUserData(this.userId);
    };
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__("../../../../../src/app/views/my-profile/my-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__["a" /* RouterStateParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__["a" /* RouterStateParamsService */]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], MyProfileComponent);
    return MyProfileComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map