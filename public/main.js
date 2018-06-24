(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/dashboard/dashboard.module": [
		"./src/app/components/dashboard/dashboard.module.ts",
		"components-dashboard-dashboard-module~components-user-user-module",
		"components-dashboard-dashboard-module"
	],
	"./components/products/products.module": [
		"./src/app/components/products/products.module.ts",
		"components-products-products-module"
	],
	"./components/user/user.module": [
		"./src/app/components/user/user.module.ts",
		"components-dashboard-dashboard-module~components-user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
/* harmony import */ var _components_shared_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared/home/home.component */ "./src/app/components/shared/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    // {
    //   path: 'products',
    //   loadChildren: './components/product/product.module#ProductModule',
    //   // pathMatch: 'full'
    // },
    {
        path: 'products',
        loadChildren: './components/products/products.module#ProductsModule',
    },
    {
        path: 'blogs',
        component: _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"]
    },
    {
        path: 'dashboard',
        loadChildren: './components/dashboard/dashboard.module#DashboardModule',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { auth: 'user' },
    },
    {
        path: 'user',
        loadChildren: './components/user/user.module#UserModule'
    },
    { path: 'page-404', component: _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"] },
    { path: '', component: _components_shared_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    // { path: '', loadChildren: './components/home/home.module#HomeModule', pathMatch: 'full' },
    { path: '**', component: _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxHide.lt-md=\"true\">\r\n  <div class=\"row\">\r\n    <div class=\"cell\">\r\n      <img src=\"./assets/images/graboplast_logo373x90.png\" alt=\"graboplast logo\">\r\n    </div>\r\n    <div fxFlex></div>\r\n\r\n    <div class=\"cell\">\r\n      Контакти\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  <mat-toolbar class=\"mat-elevation-z4 header\" color=\"primary\">\r\n    <mat-toolbar-row>\r\n    <!--<div fxLayoutAlign=\"flex\"></div>-->\r\n    <a fxHide.gt-sm=\"true\" mat-button [routerLink]=\"['']\">\r\n      <img src=\"./assets/images/graboplast_logo207x50.png\" alt=\"graboplast logo\">\r\n\r\n\r\n      <!--<span class=\"mat-title toolbar-branding\">-->\r\n        <!--G<span class=\"mat-subheading-2 toolbar-branding\">rabo</span>-->\r\n      <!--</span>-->\r\n    </a>\r\n\r\n    <!--['/products/ch', {outlets: {primary: 'category/' + category0 + '/' + submenuItem.name,-->\r\n    <!--productsSubmenu:  'category/' + category0 + '/' + submenuItem.name}}]-->\r\n    <!--,productSidenav: mainMenuCommonItem._id}}]\"-->\r\n\r\n    <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n      <!--<a *ngFor=\"let mainMenuCommonItem\r\n of mainMenuCommonItems\r\n\" mat-button-->\r\n         <!--[routerLink]=\"['/products', 'cat', {outlets: {primary: [mainMenuCommonItem\r\n._id],-->\r\n          <!--productSidenav:  [mainMenuCommonItem\r\n._id]}}]\"-->\r\n         <!--[routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n        <!--{{mainMenuCommonItem\r\n.name}}-->\r\n      <!--</a>-->\r\n      <a *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\" mat-button\r\n         [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\"\r\n         [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n         {{mainMenuCommonItem.name}}\r\n      </a>\r\n\r\n      <!--Blog-->\r\n\r\n      <!--<a *ngFor=\"let mainMenuBlogsItem of mainMenuBlogsItems\" mat-button-->\r\n         <!--[routerLink]=\"['/blogs']\"-->\r\n         <!--[routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n        <!--{{mainMenuBlogsItem.name}}-->\r\n      <!--</a>-->\r\n\r\n    </div>\r\n    <div fxFlex></div>\r\n\r\n\r\n    <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n      <!--<a *ngIf=\"user && user?.role === 'guest' || user?.role === 'user'\" mat-button [routerLink]=\"['/user/profile']\"-->\r\n         <!--[routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n        <!--<mat-icon>account_circle</mat-icon><span> {{user.login}}</span></a>-->\r\n\r\n      <button *ngIf=\"user\"\r\n              mat-button [matMenuTriggerFor]=\"settingsMenu\" #settingsMenuTrigger=\"matMenuTrigger\"\r\n              (mouseover)=\"onSettingsMenuMouseover()\">\r\n        <mat-icon>settings</mat-icon><span> {{user.login}}</span>\r\n      </button>\r\n\r\n      <mat-menu #settingsMenu=\"matMenu\" xPosition=\"after\" yPosition=\"above\" [overlapTrigger]=\"false\">\r\n        <span (mouseleave)=\"onSettingsMenuMouseleave()\">\r\n\r\n        <a *ngIf=\"user\"\r\n           mat-menu-item [routerLink]=\"['/user/profile']\"\r\n           [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <mat-icon>account_circle</mat-icon><span>Профіль</span></a>\r\n        <a *ngIf=\"user && user?.role === 'manager' || user?.role === 'admin'\"\r\n           mat-menu-item [routerLink]=\"['/dashboard']\"\r\n           [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <mat-icon>settings</mat-icon><span>Dashboard</span></a>\r\n          <!--<button mat-menu-item >Cards</button>-->\r\n          <!--<button mat-menu-item >About</button>-->\r\n        </span>\r\n\r\n      </mat-menu>\r\n\r\n      <a *ngIf='!user'\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n         mat-button [routerLink]=\"['/user/login']\">Вхід</a>\r\n\r\n      <a *ngIf='user'\r\n         mat-button (click)=\"userLocalLogout()\"><mat-icon>exit_to_app</mat-icon> Вихід</a>\r\n    </div>\r\n\r\n    <div class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\">\r\n      <button mat-button (click)=\"sidenav.toggle()\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n    </div>\r\n    </mat-toolbar-row>\r\n\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container fxFlexFill>\r\n    <mat-sidenav #sidenav fxLayout=\"column\"\r\n                 position=\"end\" class=\"sidenav\" role=\"navigation\" mode=\"side\">\r\n\r\n      <!--<mat-toolbar class=\"mat-elevation-z2\">-->\r\n        <!--<mat-toolbar-row *ngFor=\"let dashboardSidenavItem of dashboardSidenavItems\" class=\"sidenav-mat-toolbar-row\">-->\r\n          <!--<a [routerLinkActive]=\"['accent-background']\" fxLayout=\"\"-->\r\n             <!--[routerLinkActiveOptions]=\"{exact: true}\" mat-button-->\r\n             <!--[routerLink]=\"['/dashboard', dashboardSidenavItem._id]\">{{dashboardSidenavItem.name}}</a>-->\r\n        <!--</mat-toolbar-row>-->\r\n      <!--</mat-toolbar>-->\r\n\r\n      <div fxLayout=\"column\">\r\n        <mat-nav-list>\r\n          <mat-list-item *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\">\r\n            <!--<mat-icon mat-list-icon>swap_horiz</mat-icon>-->\r\n            <a matLine\r\n               [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n               [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\" (click)=\"sidenav.toggle()\">\r\n              {{mainMenuCommonItem.name}}\r\n            </a>\r\n            <!--<button mat-icon-button>-->\r\n              <!--<mat-icon>info</mat-icon>-->\r\n            <!--</button>-->\r\n          </mat-list-item>\r\n\r\n          <!--Blog-->\r\n\r\n          <!--<mat-list-item *ngFor=\"let mainMenuBlogsItem of mainMenuBlogsItems\">-->\r\n            <!--<a  matLine-->\r\n             <!--[routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"-->\r\n             <!--[routerLink]=\"['/blogs']\" (click)=\"sidenav.toggle()\">-->\r\n             <!--{{mainMenuBlogsItem.name}}-->\r\n            <!--</a>-->\r\n          <!--</mat-list-item>-->\r\n\r\n          <mat-expansion-panel *ngIf=\"user\" class=\"mat-elevation-z0\">\r\n            <mat-expansion-panel-header class=\"sidenav-expansion-panel\">\r\n              <mat-panel-title>\r\n                <mat-list-item>\r\n                  <mat-icon matListIcon>settings</mat-icon>\r\n                  <span matLine>{{user.login}}</span>\r\n                </mat-list-item>\r\n              </mat-panel-title>\r\n              <!--&lt;!&ndash;<mat-panel-description>&ndash;&gt;-->\r\n              <!--&lt;!&ndash;This is a summary of the content&ndash;&gt;-->\r\n              <!--&lt;!&ndash;</mat-panel-description>&ndash;&gt;-->\r\n            </mat-expansion-panel-header>\r\n            <mat-list-item *ngIf=\"user\">\r\n            <mat-icon matListIcon>account_circle</mat-icon>\r\n            <a matLine [routerLink]=\"['/user/profile']\"\r\n               [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"sidenav.toggle()\">\r\n              Профіль</a>\r\n              </mat-list-item>\r\n            <mat-list-item *ngIf=\"user && user?.role === 'manager' || user?.role === 'admin'\">\r\n            <mat-icon matListIcon>settings</mat-icon>\r\n            <a matLine [routerLink]=\"['/dashboard']\"\r\n               [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"sidenav.toggle()\">\r\n              Dashboard</a>\r\n                </mat-list-item>\r\n          </mat-expansion-panel>\r\n\r\n\r\n          <mat-list-item *ngIf='!user'>\r\n            <a matLine\r\n               [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n               [routerLink]=\"['/user/login']\" (click)=\"sidenav.toggle()\">Вхід</a>\r\n          </mat-list-item>\r\n          <mat-list-item *ngIf='user'>\r\n            <a matLine\r\n               (click)=\"userLocalLogout()\" (click)=\"sidenav.toggle()\">\r\n              Вихід\r\n            </a>\r\n            <mat-icon matListIcon>exit_to_app</mat-icon>\r\n          </mat-list-item>\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n\r\n      <!--Example of grid-->\r\n\r\n    <!--<div class=\"container\">-->\r\n      <!--<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">-->\r\n        <!--<div class=\"cell\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"33.3\" fxFlex.gt-md=\"25\" *ngFor=\"let i of count\" >-->\r\n          <!--<div class=\"item\">{{i.text}}</div>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n      <!--<div class=\"container\">-->\r\n       <router-outlet></router-outlet>\r\n      <!--</div>-->\r\n\r\n\r\n    </mat-sidenav-content>\r\n\r\n  </mat-sidenav-container>\r\n  <mat-toolbar class=\"mat-elevation-z16 footer\" color=\"primary\">\r\n      <span class=\"mat-title toolbar-branding\">\r\n        G<span class=\"mat-subheading-2 toolbar-branding\">rabo</span>\r\n      </span>\r\n  </mat-toolbar>\r\n\r\n\r\n"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router, catalogService, sharedService) {
        this.userService = userService;
        this.router = router;
        this.catalogService = catalogService;
        this.sharedService = sharedService;
        this.hierarchyCategory = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.sharedService.getSharingEvent().pipe(
        //   mergeMap(data => {
        //     if (data[0] = 'category_id') {
        //       this.category_id = data[1];
        //       return this.catalogService.getAllParents(this.category_id);
        //     }
        //
        //     // if (data[0] === 'subCategoryItems') {
        //     //   this.subCategoryItems = data[1];
        //     //   this.category = data[3];
        //     // }
        //   })
        // ).subscribe(result => {
        //   console.log('result bread', result.data);
        //   // result.data[0].hierarchy to splice home => common => mainCategory
        //   this.currentCategory =  result.data[0];
        //   this.hierarchyCategory = result.data[0].hierarchy;
        //   // this.hierarchyCategory.splice(0, 3);
        //   // console.log('hierarchyCategory', this.hierarchyCategory);
        //
        // });
        var _this = this;
        // initial subscribe on user
        this.userService.getUserLocal()
            .subscribe(function (user) { return _this.user = user; });
        // initial login user, token will be taken from localStorage
        this.userService.userLocalLogin(null);
        // get main menu items
        this.catalogService.getMainMenu()
            .subscribe(function (menuItems) {
            _this.mainMenuCommonItems = menuItems.data.common;
            // this.mainMenuBlogsItems = menuItems.data.blogs;
            _this.mainMenuSystemItems = menuItems.data.system;
        }, function (err) {
            console.log(err.error);
        });
        // this.catalogService.getDescendants('common')
        //   .subscribe(menuItems => {
        //     this.mainCommonMenuItems = menuItems.data;
        // },
        //   err => {
        //     console.log(err.error);
        //   });
    };
    AppComponent.prototype.userLocalLogout = function () {
        this.userService.userLocalLogout();
        this.router.navigate(['/user', 'login']);
    };
    AppComponent.prototype.onSettingsMenuMouseover = function () {
        this.settingsMenuTrigger.openMenu();
    };
    AppComponent.prototype.onSettingsMenuMouseleave = function () {
        this.settingsMenuTrigger.closeMenu();
    };
    AppComponent.prototype.onSettingsSideMenuMouseover = function () {
        this.settingsSideMenuTrigger.openMenu();
    };
    AppComponent.prototype.onSettingsSideMenuMouseleave = function () {
        this.settingsSideMenuTrigger.closeMenu();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('settingsMenuTrigger'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"])
    ], AppComponent.prototype, "settingsMenuTrigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('settingsSideMenuTrigger'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"])
    ], AppComponent.prototype, "settingsSideMenuTrigger", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__["CatalogService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    serverUrl: '/',
    defaultAvatarPath: 'https://res.cloudinary.com/hmm6pjfgk/default-avatar180x180.png',
    defaultProductImgPath: 'https://res.cloudinary.com/hmm6pjfgk/default-product180x180.png',
    blogOptions: {
        showViews: true,
        showComments: true,
        commentsLength: 10,
    },
    imgPath: 'https://res.cloudinary.com/',
    cloudinary: {
        cloud_name: 'hmm6pjfgk'
    }
};


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
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/index.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var cloudinary_core_cloudinary_core_shrinkwrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! cloudinary-core/cloudinary-core-shrinkwrap */ "./node_modules/cloudinary-core/cloudinary-core-shrinkwrap.js");
/* harmony import */ var cloudinary_core_cloudinary_core_shrinkwrap__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(cloudinary_core_cloudinary_core_shrinkwrap__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/shared/confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var cloudinaryLib = {
    Cloudinary: cloudinary_core_cloudinary_core_shrinkwrap__WEBPACK_IMPORTED_MODULE_18__["Cloudinary"]
};
var cloudinaryCloudName = _app_config__WEBPACK_IMPORTED_MODULE_0__["config"].cloudinary.cloud_name;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"].forRoot(),
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_7__["RecaptchaFormsModule"],
                _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_17__["CloudinaryModule"].forRoot(cloudinaryLib, { cloud_name: cloudinaryCloudName }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production }),
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_11__["ValidateService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _services_message_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_7__["RecaptchaFormsModule"],
                _services_catalog_service__WEBPACK_IMPORTED_MODULE_14__["CatalogService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_15__["ProductService"],
                _services_shared_service__WEBPACK_IMPORTED_MODULE_16__["SharedService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
            ],
            exports: [],
            entryComponents: [
                _components_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmPopupComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/shared/confirm-popup/confirm-popup.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/confirm-popup/confirm-popup.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  confirm-popup works!\r\n  {{data.message}}\r\n</p>\r\n<button mat-button color=\"primary\" (click)=\"onClose(true, data.data)\">Так</button>\r\n<button mat-button color=\"danger\" (click)=\"onClose(false, null)\">Ні</button>"

/***/ }),

/***/ "./src/app/components/shared/confirm-popup/confirm-popup.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/confirm-popup/confirm-popup.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/confirm-popup/confirm-popup.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPopupComponent", function() { return ConfirmPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmPopupComponent = /** @class */ (function () {
    function ConfirmPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmPopupComponent.prototype.ngOnInit = function () {
    };
    ConfirmPopupComponent.prototype.onClose = function (choice, _id) {
        this.confirmPopupData = { data: { choice: choice, _id: _id } };
        this.dialogRef.close(this.confirmPopupData);
    };
    ConfirmPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-popup',
            template: __webpack_require__(/*! ./confirm-popup.component.html */ "./src/app/components/shared/confirm-popup/confirm-popup.component.html"),
            styles: [__webpack_require__(/*! ./confirm-popup.component.scss */ "./src/app/components/shared/confirm-popup/confirm-popup.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ConfirmPopupComponent);
    return ConfirmPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/shared/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n    <div class=\"cell\"\r\n         fxFlex.sm=\"60\" fxFlex.md=\"70\" fxFlex.gt-md=\"80\">\r\n      <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n        <div class=\"cell\"\r\n             fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.gt-md=\"25\"\r\n          *ngFor=\"let product of products\">\r\n          <!--<p>Показати: {{itemsToShow}}</p>-->\r\n          <app-product-item [product]=\"product\"></app-product-item>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cell\" fxFlex.sm=\"40\" fxFlex.md=\"30\" fxFlex.gt-md=\"20\">\r\n      <div class=\"item\">\r\n        <mat-card>\r\n          <div class=\"avatar-big-block\">\r\n            <img class=\"avatar-big\" src=\"./assets/images/default-avatar180x180.png\" alt=\"my photo\">\r\n          </div>\r\n          <mat-card-header>\r\n            <mat-card-title>Про себе</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <p class=\"text-justify muted\">text</p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/home/home.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/shared/home/home.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/shared/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(productService) {
        this.productService = productService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getMainPageProducts()
            .subscribe(function (result) { return _this.products = result.data; }, function (err) { return console.log('mainPageProducts load error', err); });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/shared/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/shared/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/message/message.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/message/message.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <span *ngIf=\"show\">\r\n    {{message.text}}\r\n  </span>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shared/message/message.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/message/message.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/message/message.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/message/message.component.ts ***!
  \****************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
        this.show = false;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = {};
        this.messageService.getMessage()
            .subscribe(function (message) {
            _this.message = message;
            _this.show = true;
            setTimeout(function () { return _this.show = false; }, message.timeout);
        });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/shared/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/components/shared/message/message.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/page-404/page-404.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/page-404/page-404.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-404 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/shared/page-404/page-404.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/page-404/page-404.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/page-404/page-404.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/page-404/page-404.component.ts ***!
  \******************************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-404',
            template: __webpack_require__(/*! ./page-404.component.html */ "./src/app/components/shared/page-404/page-404.component.html"),
            styles: [__webpack_require__(/*! ./page-404.component.scss */ "./src/app/components/shared/page-404/page-404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/components/shared/product-item/product-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/product-item/product-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <!--<div class=\"cell\" fxFlex.gt-xs=\"33\" fxFlex.gt-md=\"25\">-->\r\n\r\n    <!--<div class=\"item centered-container\">-->\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card-title class=\"product-title bold\">{{product.name}}</mat-card-title>\r\n          <!--<mat-card-subtitle></mat-card-subtitle>-->\r\n        </mat-card-header>\r\n        <div class=\"product-cl-image-wrapper-outer\">\r\n          <div class=\"product-cl-image-wrapper-inner\">\r\n            <img src=\"{{config.imgPath + config.cloudinary.cloud_name + '/' + product.files[0]}}\"\r\n                 alt=\"product picture\" class=\"product-cl-image\">\r\n          </div>\r\n          <!--<cl-image class=\"product-cl-image\"-->\r\n                    <!--public-id=\"{{product.files[0] || defaultProductImgPath}}\"-->\r\n                    <!--secure=\"true\">-->\r\n            <!--<cl-transformation-->\r\n              <!--quality=\"auto\" fetch_format=\"auto\" crop=\"thumb\">-->\r\n              <!--&lt;!&ndash;radius=\"20\">&ndash;&gt;-->\r\n            <!--</cl-transformation>-->\r\n            <!--&lt;!&ndash;<cl-transformation overlay=\"cloudinary_icon\" gravity=\"south_east\" x=\"5\" y=\"5\" width=\"50\" opacity=\"60\" effect=\"brightness:200\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</cl-transformation>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<cl-transformation angle=\"10\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</cl-transformation>&ndash;&gt;-->\r\n          <!--</cl-image>-->\r\n        </div>\r\n\r\n        <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n        <mat-card-content>\r\n          <div class=\"container product-content\">\r\n            <div class=\"row product-description\">\r\n              <div class=\"item muted\" fxFlexAlign=\"center\">\r\n                {{product.description}}\r\n              </div>\r\n              </div>\r\n            <div class=\"row muted\" fxLayout=\"row\">\r\n              <p class=\"product-info-title text-align-left item muted\" fxFlex=\"50\">Ширина\r\n                <span class=\"product-info-value\">{{product.dimensions.width}}</span> см\r\n              </p>\r\n              <p class=\"product-info-title text-align-right item muted\" fxFlex=\"50\">Висота\r\n                <span class=\"product-info-value\">{{product.dimensions.height}}</span> см\r\n              </p>\r\n            </div>\r\n            <div class=\"row muted\" fxLayout=\"row\">\r\n              <p fxFlex=\"25\"></p>\r\n              <p class=\"product-info-title text-align-right item muted\" fxFlex=\"75\">Артикул\r\n                <span class=\"product-info-value\">{{product.sku}}</span>\r\n              </p>\r\n            </div>\r\n\r\n            <div class=\"row muted\" fxLayout=\"row\">\r\n              <p class=\"product-icon-title text-align-left item muted\" fxFlex=\"26\"><mat-icon>remove_red_eye</mat-icon>\r\n                <span class=\"product-icon-value\">{{product.views}}</span>\r\n              </p>\r\n              <p class=\"product-icon-title text-align-center item muted\" fxFlex=\"48\"><mat-icon>today</mat-icon>\r\n                <span class=\"product-icon-value\">{{product.createdAt | date: 'dd.MM.yy'}}</span>\r\n              </p>\r\n              <p class=\"product-icon-title text-align-right item muted\" fxFlex=\"26\"><mat-icon>comment</mat-icon>\r\n                <span class=\"product-icon-value\">{{product.comments.length}}</span>\r\n              </p>\r\n\r\n              <!--<p class=\"product-info-title text-align-right item muted\" fxFlex=\"20\"><mat-icon>thumb_up</mat-icon>-->\r\n                <!--<span class=\"product-info-value\">{{product.likes}}</span>-->\r\n              <!--</p>-->\r\n              <!--<p class=\"product-info-title text-align-right item muted\" fxFlex=\"20\"><mat-icon>thumb_down</mat-icon>-->\r\n                <!--<span class=\"product-info-value\">{{product.dislikes}}</span>-->\r\n              <!--</p>-->\r\n            </div>\r\n            <!--<div class=\"row product-info-wrap\">-->\r\n              <!--<div class=\"item product-info-1 muted\">-->\r\n              <!--</div>-->\r\n              <!--<div class=\"item product-info-2 muted\">-->\r\n                <!--<p class=\"product-info-title\">Ширина-->\r\n                  <!--<span class=\"product-info-value\">{{product.dimensions.width}}</span> см-->\r\n                <!--</p>-->\r\n                <!--<p class=\"product-info-title\">Висота-->\r\n                  <!--<span class=\"product-info-value\">{{product.dimensions.height}}</span> см-->\r\n                <!--</p>-->\r\n                <!--<p class=\"product-info-title\">Артикул-->\r\n                  <!--<span class=\"product-info-value\">{{product.sku}}</span>-->\r\n                <!--</p>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          </div>\r\n\r\n\r\n\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <div fxFlex></div>\r\n          <div fxFlex *ngIf=\"user && user?.role === 'manager' || user?.role === 'admin'\">\r\n            <a mat-icon-button color=\"primary\"\r\n               (click)=\"openDialog({message: 'Видалити продукт ' + product.name, data: product._id})\">\r\n            <mat-icon>delete_forever</mat-icon>\r\n          </a>\r\n            <a mat-icon-button color=\"primary\" [routerLink]=\"['/dashboard', 'product-edit', product._id]\">\r\n              <mat-icon>edit</mat-icon>\r\n            </a>\r\n          </div>\r\n\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    <!--</div>-->\r\n\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/shared/product-item/product-item.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/product-item/product-item.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/product-item/product-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/product-item/product-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Router } from '@angular/router';


var ProductItemComponent = /** @class */ (function () {
    function ProductItemComponent(userService, productService, dialog) {
        this.userService = userService;
        this.productService = productService;
        this.dialog = dialog;
        this.defaultProductImgPath = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"].defaultProductImgPath;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ProductItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserLocal()
            .subscribe(function (user) { return _this.user = user; });
    };
    ProductItemComponent.prototype.onDelete = function (_id) {
        // console.log('delete _id', _id);
    };
    ProductItemComponent.prototype.openDialog = function (confirmPopupData) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmPopupComponent"], {
            width: '400px',
            data: confirmPopupData,
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
            // if (result.data) {
            if (result && result.data.choice) {
                _this.productService.productDelete(result.data._id)
                    .subscribe(function (result) { return console.log('result delete', result); }, function (err) { return console.log('err delete', err); });
            }
            // }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemComponent.prototype, "product", void 0);
    ProductItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-item',
            template: __webpack_require__(/*! ./product-item.component.html */ "./src/app/components/shared/product-item/product-item.component.html"),
            styles: [__webpack_require__(/*! ./product-item.component.scss */ "./src/app/components/shared/product-item/product-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ProductItemComponent);
    return ProductItemComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/shared/home/home.component.ts");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-item/product-item.component */ "./src/app/components/shared/product-item/product-item.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message/message.component */ "./src/app/components/shared/message/message.component.ts");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/index.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_9__["CloudinaryModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_4__["Page404Component"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"],
                _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemComponent"],
            ],
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_4__["Page404Component"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"],
                _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemComponent"],
                _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmPopupComponent"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService) {
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var requiredRole = next.data.auth; // from routing.module
        return this.userService.userCheckRole(requiredRole).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (permission) { return permission.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false); }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { MatIconModule } from '@angular/material/icon';

var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/catalog.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/catalog.service.ts ***!
  \*********************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogService = /** @class */ (function () {
    function CatalogService(http) {
        this.http = http;
    }
    CatalogService.prototype.getPrefix = function (category) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    category: category
                } })
        };
        return this.http.get('api/catalog/get-prefix', httpOptions);
    };
    CatalogService.prototype.getDescendants = function (item) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    item: item
                } })
        };
        return this.http.get('api/catalog/get-descendants', httpOptions);
    };
    CatalogService.prototype.getAllDescendants = function (category, depth) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    category: category, depth: depth
                } })
        };
        return this.http.get('api/catalog/get-all-descendants', httpOptions);
    };
    CatalogService.prototype.getMainMenu = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/catalog/get-main-menu', httpOptions);
    };
    // New
    CatalogService.prototype.getAllParents = function (category_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category_id', category_id)
        };
        return this.http.get('api/catalog/get-all-parents', httpOptions);
    };
    CatalogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CatalogService);
    return CatalogService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    MessageService.prototype.showMessage = function (text, style, timeout) {
        this.message.next({ text: text, style: style, timeout: timeout });
    };
    MessageService.prototype.getMessage = function () {
        return this.message.asObservable();
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"];
    }
    ProductService.prototype.getSkuList = function (category) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    category: category
                } })
        };
        return this.http.get('api/product/get-sku-list', httpOptions);
    };
    ProductService.prototype.getProducts = function (category) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category', category)
        };
        return this.http.get('api/product/get-products', httpOptions);
    };
    ProductService.prototype.getMainPageProducts = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-main-page-products', httpOptions);
    };
    ProductService.prototype.productAddImage = function (file, sku) {
        console.log('file', file);
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('sku', sku);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-image', formData, httpOptions);
    };
    ProductService.prototype.productCreate = function (product) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.post('api/product/create', product, httpOptions);
    };
    ProductService.prototype.productEdit = function (product) {
        console.log('prodEdit', product);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/product/edit', product, httpOptions);
    };
    ProductService.prototype.productDelete = function (_id) {
        console.log('config', _app_config__WEBPACK_IMPORTED_MODULE_3__["config"].serverUrl);
        console.log('this.config', this.config.serverUrl);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.delete('api/product/delete/' + _id, httpOptions);
    };
    ProductService.prototype.checkFile = function (file) {
        if (!file) {
            return ({ success: false, message: 'Виберіть файл' });
        }
        else if (file.size > 10500000) {
            return ({ success: false, message: 'Розмір файлу повинен бути менше 10Мб' });
        }
        else if (file.type !== 'image/jpg' &&
            file.type !== 'image/jpe' &&
            file.type !== 'image/jpeg' &&
            file.type !== 'image/bmp' &&
            file.type !== 'image/png' &&
            file.type !== 'image/webp') {
            return ({ success: false, message: 'Виберіть інший тип файлу' });
        }
        else {
            return ({ success: true, message: '' });
        }
    };
    // New
    ProductService.prototype.getProductsByCategory = function (category) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category', category)
        };
        return this.http.get('api/product/get-products-by-category', httpOptions);
    };
    ProductService.prototype.getProductById = function (_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_id', _id)
        };
        return this.http.get('api/product/get-product-by-id', httpOptions);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = /** @class */ (function () {
    function SharedService() {
        this._shareEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.shareEvent$ = this._shareEvent.asObservable();
    }
    SharedService.prototype.sharingEvent = function (x) {
        this._shareEvent.next(x);
    };
    SharedService.prototype.getSharingEvent = function () {
        return this.shareEvent$;
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this._logging = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    UserService.prototype.userPasswordResetEmail = function (email, recaptcha) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    email: email, recaptcha: recaptcha
                } })
        };
        return this.http.get('api/user/password-reset-check-email', httpOptions);
    };
    UserService.prototype.userPasswordResetCode = function (code, codeToken) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': codeToken
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    code: code,
                } })
        };
        return this.http.get('api/user/password-reset-check-code', httpOptions);
    };
    UserService.prototype.userPasswordReset = function (password, passwordResetToken) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': passwordResetToken
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    password: password,
                } })
        };
        return this.http.get('api/user/password-reset', httpOptions);
    };
    UserService.prototype.userEmailVerification = function () {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.get('api/user/email-verification-send', httpOptions);
    };
    UserService.prototype.userCreate = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post('api/user/create', user, httpOptions);
    };
    UserService.prototype.userLogin = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    login: user.login,
                    password: user.password
                } })
        };
        return this.http.get('api/user/login', httpOptions);
    };
    UserService.prototype.userGetProfile = function () {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
        };
        return this.http.get('api/user/profile', httpOptions);
    };
    UserService.prototype.userCheckRole = function (role) {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: "role=" + role })
        };
        return this.http.get('api/user/role', httpOptions);
    };
    UserService.prototype.userEdit = function (data) {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/user/edit', data, httpOptions);
    };
    UserService.prototype.userEditAvatar = function (file) {
        // uploadPic(file, user) {
        var formData = new FormData();
        // for (let i = 0; i < files.length; i++) {
        //   formData.append('file[]', files[i]);
        // }
        formData.append('file', file, file.name);
        // if role manager or admin, allow to change avatar for user_id
        // if not, user changes it for itself
        // let user_id = user._id;
        // formData.append('user_id', user_id);
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                // 'Content-Type':  'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/user/edit-avatar', formData, httpOptions);
    };
    UserService.prototype.checkFile = function (eventTarget) {
        if (!eventTarget.files[0]) {
            return ({ success: false, message: 'Виберіть файл' });
        }
        else if (eventTarget.files[0].size > 8400000) {
            return ({ success: false, message: 'Розмір файлу повинен бути менше 8Мб' });
        }
        else if (eventTarget.files[0].type !== 'image/jpg' &&
            eventTarget.files[0].type !== 'image/jpe' &&
            eventTarget.files[0].type !== 'image/jpeg' &&
            eventTarget.files[0].type !== 'image/bmp' &&
            eventTarget.files[0].type !== 'image/png' &&
            eventTarget.files[0].type !== 'image/webp') {
            return ({ success: false, message: 'Виберіть інший тип файлу' });
        }
        else {
            return ({ success: true, message: '' });
        }
    };
    // create Observable for user login watch
    UserService.prototype.userLocalLogin = function (token) {
        if (token) {
            this.userLocalSetToken('token', token);
        }
        var user = this.userLocalGetCredentials('token');
        this._logging.next(user);
    };
    UserService.prototype.userLocalLogout = function () {
        this.userLocalRemoveToken('token');
        var user = null;
        this._logging.next(user);
    };
    UserService.prototype.getUserLocal = function () {
        return this._logging.asObservable();
    };
    // end of observable
    /**
    * Token manipulations
    */
    UserService.prototype.userLocalSetToken = function (tokenKey, token) {
        localStorage.setItem(tokenKey, token);
    };
    UserService.prototype.userLocalRemoveToken = function (tokenKey) {
        localStorage.removeItem(tokenKey);
    };
    UserService.prototype.userLocalCheckExpiration = function (tokenKey) {
        var token = localStorage.getItem(tokenKey);
        if (!token) {
            return true;
        }
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        if (helper.isTokenExpired(token)) {
            this.userLocalRemoveToken(tokenKey);
        }
        return helper.isTokenExpired(token);
    };
    UserService.prototype.userLocalGetToken = function (tokenKey) {
        var token = localStorage.getItem(tokenKey);
        if (!token) {
            return '';
        }
        if (this.userLocalCheckExpiration(tokenKey)) {
            return '';
        }
        return token;
    };
    UserService.prototype.userLocalGetCredentials = function (tokenKey) {
        var token = this.userLocalGetToken(tokenKey);
        if (!token) {
            return null;
        }
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        return helper.decodeToken(token).sub;
    };
    UserService.prototype.userLocalGetExpirationDate = function (tokenKey) {
        var token = localStorage.getItem(tokenKey);
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        return helper.getTokenExpirationDate(token);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.matchPassword = function (abstractControl) {
        var password = abstractControl.get('password').value;
        var passwordConfirm = abstractControl.get('passwordConfirm').value;
        if (password === passwordConfirm) {
            abstractControl.get('passwordConfirm').setErrors(null);
            return null;
        }
        else {
            /**
             * set error to 'passwordConfirm' element
             */
            abstractControl.get('passwordConfirm').setErrors({ mismatch: true });
            /**
             * and don't set error (null) to formGroup
             */
            return null;
        }
    };
    ValidateService.prototype.maxTries = function (abstractControl) {
        // set error  to form control
        // !! abstractControl.value
        abstractControl.get('code').setErrors({ maxTries: true });
        return null; // set no errors to form
        // return {maxTries: true};
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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

module.exports = __webpack_require__(/*! C:\it\projects\grabo\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map