(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dashboard-dashboard-module"],{

/***/ "./src/app/components/dashboard/dashboard-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/components/dashboard/product-create/product-create.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-sidenav/dashboard-sidenav.component */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts");
/* harmony import */ var _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var dashboardRoutes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [
            {
                path: '',
                component: _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_2__["ProductCreateComponent"],
            },
            {
                path: '',
                component: _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["DashboardSidenavComponent"],
                outlet: 'dashboardSidenav',
            },
            {
                path: 'product-create',
                component: _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_2__["ProductCreateComponent"],
            },
            {
                path: 'product-edit/:_id',
                component: _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_2__["ProductCreateComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'profile',
                component: _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(dashboardRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!--<mat-toolbar class=\"mat-elevation-z2\">-->\r\n      <mat-toolbar-row *ngFor=\"let dashboardSidenavItem of dashboardSidenavItems\" class=\"sidenav-mat-toolbar-row\">\r\n        <a [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\" mat-button\r\n           [routerLink]=\"['/dashboard', dashboardSidenavItem._id]\">{{dashboardSidenavItem.name}}</a>\r\n      </mat-toolbar-row>\r\n    <!--</mat-toolbar>-->\r\n\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DashboardSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSidenavComponent", function() { return DashboardSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardSidenavComponent = /** @class */ (function () {
    function DashboardSidenavComponent(router, catalogService) {
        this.router = router;
        this.catalogService = catalogService;
    }
    DashboardSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalogService.getDescendants('dashboard')
            .subscribe(function (menuItems) {
            _this.dashboardSidenavItems = menuItems.data;
            console.log('dashboardSidenavItems', _this.dashboardSidenavItems);
        });
    };
    DashboardSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-sidenav',
            template: __webpack_require__(/*! ./dashboard-sidenav.component.html */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-sidenav.component.scss */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"]])
    ], DashboardSidenavComponent);
    return DashboardSidenavComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav  class=\"sidenav\" #sidenav mode=\"side\" [opened]=\"media.isActive('gt-sm')\">\r\n    <!--<p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>-->\r\n    <!--<p>-->\r\n\r\n    <!--<div class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\">-->\r\n      <!--<button mat-button (click)=\"sidenav.toggle()\">-->\r\n        <!--<mat-icon>arrow_left</mat-icon>-->\r\n      <!--</button>-->\r\n    <!--</div>-->\r\n    <div class=\"container-sidenav\">\r\n      <mat-toolbar class=\"mat-elevation-z2\">\r\n        <mat-toolbar-row fxShow=\"true\" fxHide.gt-sm=\"true\" class=\"sidenav-mat-toolbar-row\">\r\n          <a  mat-button (click)=\"sidenav.toggle()\"><mat-icon>arrow_left</mat-icon></a>\r\n        </mat-toolbar-row>\r\n        <router-outlet name=\"dashboardSidenav\"></router-outlet>\r\n      </mat-toolbar>\r\n    </div>\r\n      <!--<mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">-->\r\n        <!--<label>Mode:</label>-->\r\n        <!--<mat-radio-button value=\"over\">Over</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"side\">Side</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"push\">Push</mat-radio-button>-->\r\n      <!--</mat-radio-group>-->\r\n    <!--</p>-->\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n\r\n    <!--<p><button mat-button (click)=\"sidenav.toggle()\" >Меню</button></p>-->\r\n    <!--<p>-->\r\n\r\n    <!--*ngIf=\"!sidenav.opened\"-->\r\n    <div *ngIf=\"!sidenav.opened\" class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\">\r\n    <button mat-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon>arrow_right</mat-icon>\r\n    </button>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n      <!--<mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">-->\r\n        <!--<label>Mode:</label>-->\r\n        <!--<mat-radio-button value=\"over\">Over</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"side\">Side</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"push\">Push</mat-radio-button>-->\r\n      <!--</mat-radio-group>-->\r\n    <!--</p>-->\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(media) {
        this.media = media;
        this.state = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.media.asObservable()
        //   .subscribe((change: MediaChange) => {
        //     this.state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
        //   });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/components/dashboard/product-create/product-create.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/components/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-sidenav/dashboard-sidenav.component */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/user.module */ "./src/app/components/user/user.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/components/dashboard/product-edit/product-edit.component.ts");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/index.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"],
                _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_10__["CloudinaryModule"]
            ],
            declarations: [_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_2__["ProductCreateComponent"], _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["DashboardSidenavComponent"], _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProductEditComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/product-create/product-create.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/product-create/product-create.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <div class=\"item full-width-container\">\r\n      <mat-card  class=\"form-block\">\r\n        <mat-card-header></mat-card-header>\r\n        <mat-card-title></mat-card-title>\r\n\r\n        <mat-card-content>\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"cell\">\r\n                <h2 class=\"mat-h2\">Новий виріб</h2>\r\n              </div>\r\n            </div>\r\n\r\n          <form [formGroup]=\"productCreateForm\" #f=\"ngForm\" (submit)=\"onProductCreateSubmit()\">\r\n\r\n            <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n              <div class=\"cell\">\r\n                <button type=\"button\" mat-raised-button (click)=\"addCategory()\">Додати категорію</button>\r\n\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n                <div formArrayName=\"categories\" class=\"cell\" fxFlex.gt-xs=\"50\"\r\n                     *ngFor=\"let categoryBlock of productCreateForm.get('categories')['controls']; let i = index\">\r\n                  <!--<div [formGroupName]=\"i\">-->\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Категорія\" formControlName=\"{{i}}\" required\r\n                                  (selectionChange)=\"onSelectCategory($event)\">\r\n                        <mat-optgroup *ngFor=\"let category of categories\" [label]=\"category.name\">\r\n                          <mat-option *ngIf=\"category.numOfChildren === 0\" [value]=\"category._id\">\r\n                            {{ category.name }}\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let subCategory of category.children\" [value]=\"subCategory._id\">\r\n                            {{ subCategory.name }}\r\n                          </mat-option>\r\n                        </mat-optgroup>\r\n                      </mat-select>\r\n                      <mat-hint *ngIf=\"i > 0\" align=\"end\" class=\"remove-field\" (click)=\"removeCategory(i)\">Видалити категорію</mat-hint>\r\n                      <mat-error *ngIf=\"productCreateForm.get('categories').at(i).errors?.required &&\r\n                        productCreateForm.get('categories').at(i).touched\">\r\n                        Виберіть категорію\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  <!--</div>-->\r\n                </div>\r\n\r\n              <div class=\"cell\" fxFlex.gt-xs=\"50\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Найменування\" formControlName=\"name\" required>\r\n                    <mat-error\r\n                      *ngIf=\"(productCreateForm.get('name').errors?.minlength ||\r\n                      productCreateForm.get('name').errors?.maxlength ||\r\n                      productCreateForm.get('name').errors?.required) &&\r\n                      productCreateForm.get('name').touched\">\r\n                      Довжина повинна бути від 4 до 30 символів\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cell\" fxLayout=\"row\" fxFlex=\"50\">\r\n\r\n              <div class=\"item\" fxFlex=\"30\">\r\n                <div formGroupName=\"dimensions\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Ширина\" formControlName=\"width\">\r\n                    <span matSuffix>см</span>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('dimensions.width').errors?.maxlength &&\r\n                      productCreateForm.get('dimensions').get('width').touched\">\r\n                      Використовуйте не більше ніж три символа\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('dimensions').get('width').errors?.pattern &&\r\n                      productCreateForm.get('dimensions').get('width').touched\">\r\n                      Використовуйте тількі цифри\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\" fxFlex=\"30\">\r\n                <div formGroupName=\"dimensions\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Висота\" formControlName=\"height\">\r\n                    <span matSuffix>см</span>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('dimensions.height').errors?.maxlength &&\r\n                      productCreateForm.get('dimensions').get('height').touched\">\r\n                      Використовуйте не більше ніж три символа\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('dimensions').get('height').errors?.pattern &&\r\n                      productCreateForm.get('dimensions').get('height').touched\">\r\n                      Використовуйте тількі цифри\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n                <div class=\"item\" fxFlex=\"40\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Артикул\" formControlName=\"sku\" required>\r\n                    <mat-error\r\n                      *ngIf=\"(productCreateForm.get('sku').errors?.minlength ||\r\n                        productCreateForm.get('sku').errors?.maxlength ||\r\n                        productCreateForm.get('sku').errors?.required) &&\r\n                        productCreateForm.get('sku').touched\">\r\n                      Довжина повинна бути 6 символів\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('sku').errors?.pattern &&\r\n                      productCreateForm.get('sku').touched\">\r\n                      Використовуйте тількі цифри і букви\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n            </div>\r\n\r\n              <div class=\"cell\" fxLayout=\"row\" fxFlex=\"50\">\r\n\r\n                <div class=\"item \" fxFlex=\"30\">\r\n                  <!--{{productCreateForm.get('price').errors | json}}-->\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Ціна\" formControlName=\"price\" >\r\n                    <span matSuffix>грн</span>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('price').errors?.pattern &&\r\n                      productCreateForm.get('price').touched\">\r\n                      Використовуйте тількі цифри більші 0\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"item\" fxFlex=\"30\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Знижка\" formControlName=\"discount\" >\r\n                    <span matSuffix>%</span>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('discount').errors?.pattern &&\r\n                      productCreateForm.get('discount').touched\">\r\n                      Використовуйте тількі цифри більші 0\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"item\" fxFlex=\"40\">\r\n                  <div class=\"flex-left-container\">\r\n                    <mat-checkbox class=\"flex-left-item\" formControlName=\"onMainPage\">На головній</mat-checkbox>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"cell\" fxFlex.gt-xs=\"50\">\r\n                <mat-form-field>\r\n                  <textarea matInput placeholder=\"Опис\" formControlName=\"description\" required></textarea>\r\n                  <mat-error\r\n                    *ngIf=\"(productCreateForm.get('description').errors?.minlength ||\r\n                      productCreateForm.get('description').errors?.maxlength ||\r\n                      productCreateForm.get('description').errors?.required) &&\r\n                      productCreateForm.get('description').touched\">\r\n                    Довжина повинна бути від 4 до 200 символів\r\n                  </mat-error>\r\n                  <mat-error\r\n                    *ngIf=\"productCreateForm.get('description').errors?.pattern &&\r\n                      productCreateForm.get('description').touched\">\r\n                    Використовуйте тількі цифри і букви\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"row\" fxLayout=\"row\" fxFlex=\"100\">\r\n                <div formArrayName=\"files\" class=\"cell\" fxFlex=\"25\" fxFlex.lt-md=\"50\"\r\n                     *ngFor=\"let fileBlock of productCreateForm.get('files')['controls']; let i = index\">\r\n                  <div class=\"preview-img-wrapper\">\r\n                    <cl-image *ngIf=\"processingLoadFile !== i\"\r\n                              public-id=\"{{productCreateForm.get('files').value[i] || defaultProductImgPath}}\"\r\n                              secure=\"true\">\r\n                      <cl-transformation width=\"180\" height=\"180\" crop=\"thumb\">\r\n                                         <!--radius=\"20\">-->\r\n                      </cl-transformation>\r\n                      <!--<cl-transformation overlay=\"cloudinary_icon\" gravity=\"south_east\" x=\"5\" y=\"5\" width=\"50\" opacity=\"60\" effect=\"brightness:200\">-->\r\n                      <!--</cl-transformation>-->\r\n                      <!--<cl-transformation angle=\"10\">-->\r\n                      <!--</cl-transformation>-->\r\n                    </cl-image>\r\n\r\n                    <!--<img *ngIf=\"processingLoadFile !== i\" src=\"{{'https://res.cloudinary.com/hmm6pjfgk/image/upload/' +-->\r\n                    <!--productCreateForm.get('files').value[i]}}\" alt=\"productImage\">-->\r\n                    <img *ngIf=\"processingLoadFile === i\" src=\"{{productCreateForm.get('files').value[i]}}\" alt=\"productImage\">\r\n                    <div *ngIf=\"processingLoadFile === i\" class=\"preview-div-processing\">\r\n                      <div class=\"spinner-wrapper\">\r\n                        <mat-spinner [diameter]=\"24\"></mat-spinner>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <p *ngIf=\"processingLoadFile !== i\" class=\"remove-field text-center\" (click)=\"removeFile(i)\">\r\n                    Видалити зображення</p>\r\n\r\n                </div>\r\n                <div class=\"cell\" fxFlex=\"25\" fxFlex.lt-md=\"50\"\r\n                     *ngIf=\"productCreateForm.get('files').value.length < 4\">\r\n                  <div class=\"preview-img-wrapper\">\r\n                    <img src=\"{{defaultProductImgPath}}\" alt=\"productImage\">\r\n                    <input #inputFile type=\"file\" (change)=\"addPictures($event)\"\r\n                           accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png\" style=\"display:none;\">\r\n\r\n                    <div class=\"preview-div-processing\">\r\n                      <div class=\"button-wrapper\">\r\n                        <button mat-mini-fab color=\"primary\" type=\"button\"\r\n                                (click)=\"inputFile.click();\r\n                                this.productCreateForm.get('sku').disable();\r\n                                this.productCreateForm.get('categories').at(0).disable();\"\r\n                                [disabled]=\"!productCreateForm.get('sku').disabled &&\r\n                                !productCreateForm.get('sku').valid || processingLoadFile >= 0\">\r\n                          <mat-icon>add</mat-icon>\r\n                        </button>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div class=\"submit-button-wrapper\">\r\n              <!--<span fxFlex></span>-->\r\n              <button *ngIf=\"!editMode\" mat-raised-button class=\"full-width\" color=\"primary\"\r\n                      [disabled]=\"!productCreateForm.valid || processingLoadFile >= 0\">Створити</button>\r\n              <button *ngIf=\"editMode\" mat-raised-button class=\"full-width\" color=\"primary\"\r\n                      [disabled]=\"!productCreateForm.valid || processingLoadFile >= 0\">Зберегти</button>\r\n            </div>\r\n\r\n          </form>\r\n          </div>\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/product-create/product-create.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/product-create/product-create.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/product-create/product-create.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/product-create/product-create.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(catalogService, productService, matSnackBar, route) {
        this.catalogService = catalogService;
        this.productService = productService;
        this.matSnackBar = matSnackBar;
        this.route = route;
        this.processingLoadFile = -1;
        this.defaultProductImgPath = _app_config__WEBPACK_IMPORTED_MODULE_6__["config"].defaultProductImgPath;
        this.editMode = false;
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([this.initCategories()]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
            ]),
            dimensions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                width: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3),
                ]),
                height: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3),
                ]),
            }),
            sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ]+'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6),
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\d*\\.?\\d+$'),
            ]),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\d*\\.?\\d+$'),
            ]),
            files: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            onMainPage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []),
        });
        this.catalogService.getAllDescendants('products', 0)
            .subscribe(function (categories) {
            _this.categories = categories.data;
        }, function (err) { return _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
        this.route.paramMap
            .subscribe(function (paramMap) {
            if (paramMap.get('_id')) {
                _this.edited_id = paramMap.get('_id');
                _this.editMode = true;
                _this.productService.getProductById(_this.edited_id)
                    .subscribe(function (product) {
                    for (var i = 1; i < product.data.categories.length; i++) {
                        _this.addCategory();
                    }
                    for (var i = 0; i < product.data.files.length; i++) {
                        _this.addFile();
                    }
                    _this.productCreateForm.patchValue(product.data);
                }, function (err) { return console.log('Помилка завантаження товару для редагування', err); });
            }
        });
    };
    ProductCreateComponent.prototype.resetForm = function () {
        if (this.productCreateFormDirective) {
            // enabling disabled fields
            this.productCreateForm.get('sku').enable();
            this.productCreateForm.get('categories')['controls'][0].enable();
            // deleting needless controls
            // categories controls array has one item on init
            for (var i = this.productCreateForm.get('categories')['controls'].length; i > 1; i--) {
                this.removeCategory(i - 1);
            }
            // files controls array don't has elems on init
            for (var i = this.productCreateForm.get('files')['controls'].length; i > 0; i--) {
                this.removeFile(i - 1);
            }
            this.productCreateFormDirective.resetForm();
        }
    };
    ProductCreateComponent.prototype.addPictures = function (event) {
        var _this = this;
        this.processingLoadFile = this.productCreateForm.get('files').value.length;
        var file = event.target.files[0];
        var checkFile = this.productService.checkFile(file);
        if (!checkFile.success) {
            this.matSnackBar.open(checkFile.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            this.processingLoadFile = -1;
        }
        else {
            var filesLinks_1 = this.productCreateForm.get('files').value;
            filesLinks_1.push(_app_config__WEBPACK_IMPORTED_MODULE_6__["config"].defaultProductImgPath);
            this.addFile();
            this.productCreateForm.get('files').setValue(filesLinks_1);
            this.productService.productAddImage(file, this.productCreateForm.get('sku').value)
                .subscribe(function (result) {
                // this.previewProductImages.pop();
                filesLinks_1.pop();
                filesLinks_1.push(result.data);
                _this.productCreateForm.get('files').setValue(filesLinks_1);
                console.log('this.productCreateForm.get(\'files\').value', _this.productCreateForm.get('files').value);
                // this.previewProductImages = filesLinks;
                // console.log('this.previewProductImages', this.previewProductImages);
                console.log(result);
                _this.processingLoadFile = -1;
            }, function (err) {
                _this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
                _this.removeFile(_this.productCreateForm.get('files').value.length - 1);
                // this.previewProductImages.pop();
                filesLinks_1.pop();
                _this.processingLoadFile = -1;
            });
        }
    };
    ProductCreateComponent.prototype.onProductCreateSubmit = function () {
        var _this = this;
        // remove duplicates
        var uniqueCategories = [];
        this.productCreateForm.getRawValue().categories
            .forEach(function (item) {
            if (uniqueCategories.indexOf(item) === -1) {
                uniqueCategories.push(item);
            }
        });
        this.product = {
            categories: uniqueCategories,
            sku: this.productCreateForm.getRawValue().sku,
            name: this.productCreateForm.get('name').value,
            price: this.productCreateForm.get('price').value,
            discount: this.productCreateForm.get('discount').value,
            files: this.productCreateForm.get('files').value,
            description: this.productCreateForm.get('description').value,
            onMainPage: this.productCreateForm.get('onMainPage').value || false,
            dimensions: {
                width: this.productCreateForm.get('dimensions.width').value,
                height: this.productCreateForm.get('dimensions.height').value,
            }
        };
        if (this.editMode) {
            // edit
            this.product._id = this.edited_id;
            this.productService.productEdit(this.product)
                .subscribe(function (result) {
                _this.matSnackBar.open(result.message, '', { duration: 3000 });
                _this.resetForm();
                _this.editMode = false;
            }, function (err) { return _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
        }
        else {
            this.productService.productCreate(this.product)
                .subscribe(function (result) {
                _this.matSnackBar.open(result.message, '', { duration: 3000 });
                _this.resetForm();
            }, function (err) { return _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
        }
    };
    ProductCreateComponent.prototype.onSelectCategory = function (event) {
        if (event.source.ngControl.name === '0') {
            this.createSku(event.value);
        }
    };
    ProductCreateComponent.prototype.createSku = function (category) {
        var _this = this;
        var getPrefix$ = this.catalogService.getPrefix(category);
        var getSkuList$ = this.productService.getSkuList(category);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(getPrefix$, getSkuList$).subscribe(function (result) {
            var prefix = result[0].data.prefix;
            var skuList = result[1].data
                .map(function (item) { return item.sku; }) // create [] from {}
                .filter(function (item) { return item.slice(0, 2) === prefix; }) // take elems with needed prefix
                .map(function (item) { return +item.slice(2); }); // concat prefix, take only numbers
            console.log('skuList', skuList);
            var freeNumber = 1;
            for (var i = 0; i < skuList.length; i++) {
                if (skuList[i] - (i + 1) >= 1) {
                    freeNumber = i + 1;
                    break;
                }
                if (i === skuList.length - 1) {
                    freeNumber = skuList.length + 1;
                }
            }
            var sku = freeNumber.toString();
            while (sku.length < 4) {
                sku = '0' + sku;
            }
            sku = prefix + sku;
            _this.productCreateForm.patchValue({ sku: sku });
        }, function (err) { return _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
    };
    ProductCreateComponent.prototype.addCategory = function () {
        var control = this.productCreateForm.get('categories');
        control.push(this.initCategories());
    };
    ProductCreateComponent.prototype.removeCategory = function (i) {
        var control = this.productCreateForm.get('categories');
        control.removeAt(i);
    };
    ProductCreateComponent.prototype.initCategories = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
    };
    ProductCreateComponent.prototype.addFile = function () {
        var control = this.productCreateForm.get('files');
        control.push(this.initFiles());
    };
    ProductCreateComponent.prototype.removeFile = function (i) {
        var control = this.productCreateForm.get('files');
        control.removeAt(i);
    };
    ProductCreateComponent.prototype.initFiles = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('file', []);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"])
    ], ProductCreateComponent.prototype, "productCreateFormDirective", void 0);
    ProductCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__(/*! ./product-create.component.html */ "./src/app/components/dashboard/product-create/product-create.component.html"),
            styles: [__webpack_require__(/*! ./product-create.component.scss */ "./src/app/components/dashboard/product-create/product-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_catalog_service__WEBPACK_IMPORTED_MODULE_3__["CatalogService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/product-edit/product-edit.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/product-edit/product-edit.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/product-edit/product-edit.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/product-edit/product-edit.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/product-edit/product-edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboard/product-edit/product-edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
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

var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent() {
    }
    ProductEditComponent.prototype.ngOnInit = function () {
    };
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/components/dashboard/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.scss */ "./src/app/components/dashboard/product-edit/product-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-dashboard-dashboard-module.js.map