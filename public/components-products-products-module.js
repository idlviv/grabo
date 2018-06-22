(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-products-products-module"],{

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<!--<div *ngIf=\"currentCategory\">-->\r\n  <a mat-button\r\n     [routerLink]=\"['/products', 'ch']\"\r\n     [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <mat-icon>home</mat-icon> Каталог<mat-icon>keyboard_arrow_right</mat-icon></a>\r\n  <div *ngIf=\"!processing\" >\r\n    <a *ngFor=\"let hierarchyCategoryItem of hierarchyCategory\" mat-button\r\n       [routerLink]=\"['/products', 'ch', {outlets: {primary: [hierarchyCategoryItem._id], breadcrumb: [hierarchyCategoryItem._id]}}]\"\r\n       [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n      <mat-icon>folder</mat-icon> {{hierarchyCategoryItem.name}}<mat-icon>keyboard_arrow_right</mat-icon></a>\r\n    <!--<a mat-button disabled [routerLink]=\"['/catalog', currentCategory._id, {outlets: {breadcrumb: [currentCategory._id]}}]\"-->\r\n    <!--[routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n    <!--{{currentCategory.name}}-->\r\n    <!--</a>-->\r\n    <a *ngIf=\"productName\" mat-button\r\n       [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\" disabled>\r\n      <mat-icon>insert_photo</mat-icon> {{productName}}</a>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.ts ***!
  \************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(route, catalogService, productService) {
        this.route = route;
        this.catalogService = catalogService;
        this.productService = productService;
        this.processing = true;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var $paramMap = this.route.paramMap;
        var $queryParamMap = this.route.queryParamMap;
        this.processing = true;
        // const c = $paramMap.pipe(res => combineLatest(res, $queryParamMap));
        // c.subscribe(res => console.log('res', res);)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])($paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (paramMap) {
            _this.processing = true;
            _this.category_id = paramMap.get('category_id');
            if (!_this.category_id) {
                return _this.catalogService.getAllParents('products');
            }
            return _this.catalogService.getAllParents(_this.category_id);
        })), $queryParamMap)
            .subscribe(function (result) {
            // result.data[0].hierarchy to splice home => common => mainCategory
            // this.currentCategory =  result.data[0];
            _this.productName = result[1].get('name');
            _this.hierarchyCategory = result[0].data[0].hierarchy;
            _this.hierarchyCategory.push(result[0].data[0]);
            _this.hierarchyCategory.splice(0, 3);
            _this.processing = false;
        }, function (err) { return console.log('Помилка breadcrumb', err); });
        ////////////////////////////
        // this.route.paramMap.pipe(
        //   mergeMap(paramMap => {
        //     this.category_id = paramMap.get('category_id');
        //     this.product_id = paramMap.get('product_id');
        //
        //     // const $getProduct = this.productService.getProductById(this.product_id);
        //
        //     console.log('bread this.category_id', this.category_id);
        //     console.log('bread this.product_id', this.product_id);
        //     if (!this.category_id) {
        //       return forkJoin(
        //         this.catalogService.getAllParents('products'),
        //         this.productService.getProductById(this.product_id)
        //       );
        //       // return this.catalogService.getAllParents('products');
        //     }
        //     return forkJoin(
        //       this.catalogService.getAllParents(this.category_id),
        //       this.productService.getProductById(this.product_id)
        //     );
        //   })
        // )
        //   .subscribe(result => {
        //       console.log('result bread hierarchy', result[0].data);
        //       console.log('result bread product', result[1].data);
        //       // result.data[0].hierarchy to splice home => common => mainCategory
        //       // this.currentCategory =  result.data[0];
        //       this.product = result[1].data;
        //       this.hierarchyCategory = result[0].data[0].hierarchy;
        //       this.hierarchyCategory.push(result[0].data[0]);
        //       this.hierarchyCategory.splice(0, 3);
        //       console.log('hierarchyCategory', this.hierarchyCategory);
        //
        //     },
        //     err => console.log('Помилка breadcrumb', err)
        //   );
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/components/products/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/components/products/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__["CatalogService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-brief/products-brief.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/products/products-brief/products-brief.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <mat-card-header>\n  </mat-card-header>\n\n{{product | json}}\n  <mat-card-content>\n\n\n  </mat-card-content>\n  <mat-card-actions>\n    <div fxFlex>\n    <a mat-button\n       [routerLink]=\"['/products', 'ch', {outlets: {primary: [category_id, 'details', product._id],\n     breadcrumb: [category_id, 'details', product._id]}}]\"\n       [queryParams]=\"{name: product.name}\"\n       [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\n      {{product.name}}\n    </a>\n    </div>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/products/products-brief/products-brief.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/products/products-brief/products-brief.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products-brief/products-brief.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/products/products-brief/products-brief.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductsBriefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsBriefComponent", function() { return ProductsBriefComponent; });
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

var ProductsBriefComponent = /** @class */ (function () {
    function ProductsBriefComponent() {
    }
    ProductsBriefComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsBriefComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsBriefComponent.prototype, "category_id", void 0);
    ProductsBriefComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-brief',
            template: __webpack_require__(/*! ./products-brief.component.html */ "./src/app/components/products/products-brief/products-brief.component.html"),
            styles: [__webpack_require__(/*! ./products-brief.component.scss */ "./src/app/components/products/products-brief/products-brief.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsBriefComponent);
    return ProductsBriefComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-catalog/products-catalog.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/products/products-catalog/products-catalog.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n<mat-card-header>\n    <!--<mat-card-title class=\"product-title bold\">{{descendant.name}}</mat-card-title>-->\n    <!--<mat-card-subtitle></mat-card-subtitle>-->\n  </mat-card-header>\n  <div class=\"product-cl-image-wrapper-outer\">\n    <div class=\"product-cl-image-wrapper-inner\">\n      <img src=\"{{config.imgPath + config.cloudinary.cloud_name + '/' + descendant.assets[0]}}\"\n           alt=\"product picture\" class=\"product-cl-image\">\n    </div>\n  </div>\n\n\n  <mat-card-content>\n    <!--<div class=\"container product-content\">-->\n    <!--<div class=\"row product-description\">-->\n    <!--<div class=\"item muted\" fxFlexAlign=\"center\">-->\n    <!--{{product.description}}-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"row muted\" fxLayout=\"row\">-->\n    <!--<p class=\"product-info-title text-align-left item muted\" fxFlex=\"50\">Ширина-->\n    <!--<span class=\"product-info-value\">{{product.dimensions.width}}</span> см-->\n    <!--</p>-->\n    <!--<p class=\"product-info-title text-align-right item muted\" fxFlex=\"50\">Висота-->\n    <!--<span class=\"product-info-value\">{{product.dimensions.height}}</span> см-->\n    <!--</p>-->\n    <!--</div>-->\n    <!--<div class=\"row muted\" fxLayout=\"row\">-->\n    <!--<p fxFlex=\"25\"></p>-->\n    <!--<p class=\"product-info-title text-align-right item muted\" fxFlex=\"75\">Артикул-->\n    <!--<span class=\"product-info-value\">{{product.sku}}</span>-->\n    <!--</p>-->\n    <!--</div>-->\n\n    <!--<div class=\"row muted\" fxLayout=\"row\">-->\n    <!--<p class=\"product-icon-title text-align-left item muted\" fxFlex=\"26\"><mat-icon>remove_red_eye</mat-icon>-->\n    <!--<span class=\"product-icon-value\">{{product.views}}</span>-->\n    <!--</p>-->\n    <!--<p class=\"product-icon-title text-align-center item muted\" fxFlex=\"48\"><mat-icon>today</mat-icon>-->\n    <!--<span class=\"product-icon-value\">{{product.createdAt | date: 'dd.MM.yy'}}</span>-->\n    <!--</p>-->\n    <!--<p class=\"product-icon-title text-align-right item muted\" fxFlex=\"26\"><mat-icon>comment</mat-icon>-->\n    <!--<span class=\"product-icon-value\">{{product.comments.length}}</span>-->\n    <!--</p>-->\n\n    <!--</div>-->\n    <!--</div>-->\n\n\n\n  </mat-card-content>\n  <mat-card-actions>\n    <div fxFlex></div>\n    <div fxFlex>\n      <a mat-button\n         [routerLink]=\"['/products', 'ch', {outlets: {primary: [descendant._id], breadcrumb: [descendant._id]}}]\"\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        {{descendant.name}}\n      </a>\n    </div>\n\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/products/products-catalog/products-catalog.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/products/products-catalog/products-catalog.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products-catalog/products-catalog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/products/products-catalog/products-catalog.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductsCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCatalogComponent", function() { return ProductsCatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsCatalogComponent = /** @class */ (function () {
    function ProductsCatalogComponent() {
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ProductsCatalogComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsCatalogComponent.prototype, "descendant", void 0);
    ProductsCatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-catalog',
            template: __webpack_require__(/*! ./products-catalog.component.html */ "./src/app/components/products/products-catalog/products-catalog.component.html"),
            styles: [__webpack_require__(/*! ./products-catalog.component.scss */ "./src/app/components/products/products-catalog/products-catalog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsCatalogComponent);
    return ProductsCatalogComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-detail-main/products-detail-main.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/products/products-detail-main/products-detail-main.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"cell\">\n    <mat-card>\n      <mat-card-header>\n        <!--category_id {{category_id}}-->\n      </mat-card-header>\n      <!--product {{product | json}}-->\n\n\n      <mat-card-content>\n        <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n          <div class=\"cell\">\n            <h1>TITLE GRABOFLEX START</h1>\n            <p>MAIN TEXT Экономичное решение для небольших мультифункциональных спортзалов,\n              где важно иметь долговечную и безопасную площадку для игр. Плотный\n              вспененный слой на обратной стороне обеспечивает соответствующий\n              комфорт ходьбы. Рекомендуем для покрытия пола небольших спортивных\n              помещений, а также и помещений для игр в детских садах.\n            </p>\n          </div>\n        </div>\n        <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n          <div class=\"cell\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <p>ADDITIONAL SECTOR1 Паркетная система Grabo StrongAir Elite, специально разработанная для больших нагрузок,\n              предназначена для мультифункциональных спортзалов. Верхняя часть системы представляет\n              собой трёхслойный спортивный паркет толщиной 22 мм, со стабильным средним слоем и износостойким\n              спортивным лаком. Благодаря своему отличному энергопоглащающему основанию, система эффективно защищает\n              суставы спортсмена, максимально способствует достижению выдающихся спортивных результатов.\n            </p>\n          </div>\n          <div class=\"cell\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <p>ADDITIONAL SECTOR2 Паркетная система Grabo StrongAir Elite, специально разработанная для больших нагрузок,\n              предназначена для мультифункциональных спортзалов. Верхняя часть системы представляет\n              собой трёхслойный спортивный паркет толщиной 22 мм, со стабильным средним слоем и износостойким\n              спортивным лаком. Благодаря своему отличному энергопоглащающему основанию, система эффективно защищает\n              суставы спортсмена, максимально способствует достижению выдающихся спортивных результатов.\n            </p>\n          </div>\n        </div>\n\n          <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n            <div class=\"cell\">\n              <p>DESIGN ZONE Паркетная система Grabo StrongAir Elite, специально разработанная для больших нагрузок,\n                предназначена для мультифункциональных спортзалов. Верхняя часть системы представляет\n                собой трёхслойный спортивный паркет толщиной 22 мм, со стабильным средним слоем и износостойким\n                спортивным лаком. Благодаря своему отличному энергопоглащающему основанию, система эффективно защищает\n                суставы спортсмена, максимально способствует достижению выдающихся спортивных результатов.\n              </p>\n            </div>\n          </div>\n\n\n      </mat-card-content>\n      <mat-card-actions>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/products/products-detail-main/products-detail-main.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/products/products-detail-main/products-detail-main.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products-detail-main/products-detail-main.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/products/products-detail-main/products-detail-main.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProductsDetailMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailMainComponent", function() { return ProductsDetailMainComponent; });
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

var ProductsDetailMainComponent = /** @class */ (function () {
    function ProductsDetailMainComponent() {
    }
    ProductsDetailMainComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsDetailMainComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsDetailMainComponent.prototype, "category_id", void 0);
    ProductsDetailMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-detail-main',
            template: __webpack_require__(/*! ./products-detail-main.component.html */ "./src/app/components/products/products-detail-main/products-detail-main.component.html"),
            styles: [__webpack_require__(/*! ./products-detail-main.component.scss */ "./src/app/components/products/products-detail-main/products-detail-main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsDetailMainComponent);
    return ProductsDetailMainComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-detail-side/products-detail-side.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/products/products-detail-side/products-detail-side.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a *ngFor=\"let sibling of siblings\" mat-button\n   [routerLink]=\"['/products', 'ch', {outlets: {primary: [category_id, 'details', sibling._id],\n     breadcrumb: [category_id, 'details', sibling._id]}}]\"\n   [queryParams]=\"{name: sibling.name}\"\n   [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\n  {{sibling.name}}\n</a>"

/***/ }),

/***/ "./src/app/components/products/products-detail-side/products-detail-side.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/products/products-detail-side/products-detail-side.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products-detail-side/products-detail-side.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/products/products-detail-side/products-detail-side.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProductsDetailSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailSideComponent", function() { return ProductsDetailSideComponent; });
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

var ProductsDetailSideComponent = /** @class */ (function () {
    function ProductsDetailSideComponent() {
    }
    ProductsDetailSideComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsDetailSideComponent.prototype, "siblings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsDetailSideComponent.prototype, "category_id", void 0);
    ProductsDetailSideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-detail-side',
            template: __webpack_require__(/*! ./products-detail-side.component.html */ "./src/app/components/products/products-detail-side/products-detail-side.component.html"),
            styles: [__webpack_require__(/*! ./products-detail-side.component.scss */ "./src/app/components/products/products-detail-side/products-detail-side.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsDetailSideComponent);
    return ProductsDetailSideComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-detail/products-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/products/products-detail/products-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\">-->\n  <!--<div class=\"cell\">-->\n    <!--<mat-card>-->\n      <!--<mat-card-header>-->\n        <!--category_id {{category_id}}-->\n      <!--</mat-card-header>-->\n      <!--product {{product | json}}-->\n\n\n      <!--<mat-card-content>-->\n\n\n      <!--</mat-card-content>-->\n      <!--<mat-card-actions>-->\n      <!--</mat-card-actions>-->\n    <!--</mat-card>-->\n  <!--</div>-->\n<!--</div>-->\n<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n  <div class=\"cell\" fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"15\">\n    <app-products-detail-side [siblings]=\"siblings\" [category_id]=\"category_id\"></app-products-detail-side>\n  </div>\n  <div class=\"cell\" fxFlex.gt-xs=\"80\" fxFlex.gt-md=\"85\">\n    <app-products-detail-main [product]=\"product\" [category_id]=\"category_id\"></app-products-detail-main>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/products/products-detail/products-detail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/products/products-detail/products-detail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products-detail/products-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/products/products-detail/products-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailComponent", function() { return ProductsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsDetailComponent = /** @class */ (function () {
    function ProductsDetailComponent(route, productService, catalogService) {
        this.route = route;
        this.productService = productService;
        this.catalogService = catalogService;
    }
    ProductsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (paramMap) {
            _this.category_id = paramMap.get('category_id');
            _this.product_id = paramMap.get('product_id');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(_this.productService.getProductById(_this.product_id), _this.productService.getProductsByCategory(_this.category_id));
        }))
            .subscribe(function (result) {
            // console.log('result', result);
            _this.product = result[0].data;
            console.log('detail product', _this.product);
            _this.siblings = result[1].data;
            console.log('detail descendants', _this.siblings);
        });
    };
    ProductsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-detail',
            template: __webpack_require__(/*! ./products-detail.component.html */ "./src/app/components/products/products-detail/products-detail.component.html"),
            styles: [__webpack_require__(/*! ./products-detail.component.scss */ "./src/app/components/products/products-detail/products-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__["CatalogService"]])
    ], ProductsDetailComponent);
    return ProductsDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div *ngFor=\"let product of products\"  class=\"cell\"\r\n       fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"20\">\r\n    <app-products-brief [product]=\"product\" [category_id]=\"category_id\"></app-products-brief>\r\n  </div>\r\n  <div *ngFor=\"let descendant of descendants\" class=\"cell\"\r\n       fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"20\">\r\n    <!--<p>Показати: {{itemsToShow}}</p>-->\r\n    <app-products-catalog [descendant]=\"descendant\"></app-products-catalog>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(route, productService, catalogService, sharedService) {
        this.route = route;
        this.productService = productService;
        this.catalogService = catalogService;
        this.sharedService = sharedService;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        // this.route.paramMap
        //   .subscribe(
        //     paramMap => console.log(paramMap.get('category'))
        //   );
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (paramMap) {
            _this.category_id = paramMap.get('category_id');
            console.log('list this.category_id', _this.category_id);
            if (!_this.category_id) {
                return _this.catalogService.getDescendants('products');
            }
            return _this.catalogService.getDescendants(_this.category_id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (result) {
            _this.descendants = result.data;
            // this.sharedService.sharingEvent(['category_id', this.category_id]);
            if (!_this.descendants.length) {
                // this.sharedService.sharingEvent(['descendants', null]);
                // console.log('NOdescendants', this.descendants);
                return _this.productService.getProductsByCategory(_this.category_id);
            }
            else {
                // this.sharedService.sharingEvent(['descendants', this.descendants, 'category', this.category_id]);
                // console.log('YESdescendants', this.descendants);
                return _this.productService.getProductsByCategory(null);
            }
        }))
            .subscribe(function (products) { return _this.products = products.data; }, function (err) { return console.log('error', err); });
    };
    ProductsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(/*! ./products-list.component.html */ "./src/app/components/products/products-list/products-list.component.html"),
            styles: [__webpack_require__(/*! ./products-list.component.scss */ "./src/app/components/products/products-list/products-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__["CatalogService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/products/products-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-detail/products-detail.component */ "./src/app/components/products/products-detail/products-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ProductDetailsComponent } from './product-details/product-details.component';



var productsRoutes = [
    {
        path: 'ch',
        component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        children: [
            {
                path: '',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductsListComponent"],
            },
            {
                path: '',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            {
                path: ':category_id',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductsListComponent"],
            },
            {
                path: ':category_id',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            {
                path: ':category_id/details/:product_id',
                component: _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductsDetailComponent"],
            },
            {
                path: ':category_id/details/:product_id',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
        ],
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(productsRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet name=\"breadcrumb\"></router-outlet>\r\n</div>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
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

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/products/products.module.ts ***!
  \********************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/index.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/components/products/products-routing.module.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _products_catalog_products_catalog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products-catalog/products-catalog.component */ "./src/app/components/products/products-catalog/products-catalog.component.ts");
/* harmony import */ var _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products-detail/products-detail.component */ "./src/app/components/products/products-detail/products-detail.component.ts");
/* harmony import */ var _products_brief_products_brief_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products-brief/products-brief.component */ "./src/app/components/products/products-brief/products-brief.component.ts");
/* harmony import */ var _products_detail_side_products_detail_side_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products-detail-side/products-detail-side.component */ "./src/app/components/products/products-detail-side/products-detail-side.component.ts");
/* harmony import */ var _products_detail_main_products_detail_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products-detail-main/products-detail-main.component */ "./src/app/components/products/products-detail-main/products-detail-main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { ProductDetailsComponent } from './product-details/product-details.component';







var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _products_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductsRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__["CloudinaryModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [
                _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductsListComponent"],
                // ProductDetailsComponent,
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"],
                _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
                _products_catalog_products_catalog_component__WEBPACK_IMPORTED_MODULE_9__["ProductsCatalogComponent"],
                _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductsDetailComponent"],
                _products_brief_products_brief_component__WEBPACK_IMPORTED_MODULE_11__["ProductsBriefComponent"],
                _products_detail_side_products_detail_side_component__WEBPACK_IMPORTED_MODULE_12__["ProductsDetailSideComponent"],
                _products_detail_main_products_detail_main_component__WEBPACK_IMPORTED_MODULE_13__["ProductsDetailMainComponent"],
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-products-products-module.js.map