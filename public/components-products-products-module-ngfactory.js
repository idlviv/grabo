(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-products-products-module-ngfactory"],{

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.ngfactory.js ***!
  \**********************************************************************************/
/*! exports provided: ActivatedRoute_1, ActivatedRouteSnapshot_4, UrlSegmentGroup_8, Observable_2, RenderType_BreadcrumbComponent, View_BreadcrumbComponent_0, View_BreadcrumbComponent_Host_0, BreadcrumbComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BreadcrumbComponent", function() { return RenderType_BreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BreadcrumbComponent_0", function() { return View_BreadcrumbComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BreadcrumbComponent_Host_0", function() { return View_BreadcrumbComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponentNgFactory", function() { return BreadcrumbComponentNgFactory; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute_1", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot_4", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRouteSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup_8", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["UrlSegmentGroup"]; });

/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable_2", function() { return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]; });

/* harmony import */ var _breadcrumb_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb.component.scss.shim.ngstyle */ "./src/app/components/products/breadcrumb/breadcrumb.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















var styles_BreadcrumbComponent = [_breadcrumb_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_BreadcrumbComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 0, styles: styles_BreadcrumbComponent, data: {} });

function View_BreadcrumbComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 19, "a", [["mat-button", ""]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](4, { primary: 0, breadcrumb: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](5, { outlets: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](6, 3), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](7, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](10, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](11, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](12, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](13, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](14, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["folder"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](16, 0, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](17, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](18, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["keyboard_arrow_right"]))], function (_ck, _v) { var currVal_6 = _ck(_v, 6, 0, "/products", "ch", _ck(_v, 5, 0, _ck(_v, 4, 0, _ck(_v, 2, 0, _v.context.$implicit._id), _ck(_v, 3, 0, _v.context.$implicit._id)))); _ck(_v, 1, 0, currVal_6); var currVal_7 = _ck(_v, 10, 0, true); var currVal_8 = _ck(_v, 11, 0, "accent"); _ck(_v, 7, 0, currVal_7, currVal_8); _ck(_v, 14, 0); _ck(_v, 18, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).href; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12).disabled ? (0 - 1) : 0); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12).disabled || null); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12).disabled.toString(); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 14).inline; _ck(_v, 13, 0, currVal_9); var currVal_10 = _v.context.$implicit.name; _ck(_v, 16, 0, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 18).inline; _ck(_v, 17, 0, currVal_11); }); }
function View_BreadcrumbComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 10, "a", [["disabled", ""], ["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](4, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](5, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](7, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](8, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["insert_photo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](10, 0, [" ", ""]))], function (_ck, _v) { var currVal_4 = _ck(_v, 4, 0, true); var currVal_5 = _ck(_v, 5, 0, "accent"); _ck(_v, 1, 0, currVal_4, currVal_5); var currVal_6 = ""; _ck(_v, 6, 0, currVal_6); _ck(_v, 8, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6).disabled ? (0 - 1) : 0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6).disabled || null); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6).disabled.toString(); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 8).inline; _ck(_v, 7, 0, currVal_7); var currVal_8 = _co.productName; _ck(_v, 10, 0, currVal_8); }); }
function View_BreadcrumbComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 0, null, null, 15, "a", [["mat-button", ""]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 9)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](3, 2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](4, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](7, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](8, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](9, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](10, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](11, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, [" \u041A\u0430\u0442\u0430\u043B\u043E\u0433"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](14, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](15, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["keyboard_arrow_right"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](18, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _ck(_v, 3, 0, "/products", "ch"); _ck(_v, 2, 0, currVal_6); var currVal_7 = _ck(_v, 7, 0, true); var currVal_8 = _ck(_v, 8, 0, "accent"); _ck(_v, 4, 0, currVal_7, currVal_8); _ck(_v, 11, 0); _ck(_v, 15, 0); var currVal_11 = _co.hierarchyCategory; _ck(_v, 18, 0, currVal_11); var currVal_12 = _co.productName; _ck(_v, 20, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 2).href; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 9).disabled ? (0 - 1) : 0); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 9).disabled || null); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 9).disabled.toString(); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 9)._animationMode === "NoopAnimations"); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 11).inline; _ck(_v, 10, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).inline; _ck(_v, 14, 0, currVal_10); }); }
function View_BreadcrumbComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-breadcrumb", [], null, null, null, View_BreadcrumbComponent_0, RenderType_BreadcrumbComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 114688, null, 0, _breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_catalog_service__WEBPACK_IMPORTED_MODULE_13__["CatalogService"], _services_product_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BreadcrumbComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-breadcrumb", _breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"], View_BreadcrumbComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.scss.shim.ngstyle.js":
/*!******************************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.scss.shim.ngstyle.js ***!
  \******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



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






var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(route, catalogService, productService) {
        this.route = route;
        this.catalogService = catalogService;
        this.productService = productService;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var $paramMap = this.route.paramMap;
        var $queryParamMap = this.route.queryParamMap;
        // const c = $paramMap.pipe(res => combineLatest(res, $queryParamMap));
        // c.subscribe(res => console.log('res', res);)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])($paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (paramMap) {
            _this.category_id = paramMap.get('category_id');
            console.log('bread this.category_id', _this.category_id);
            if (!_this.category_id) {
                return _this.catalogService.getAllParents('products');
            }
            return _this.catalogService.getAllParents(_this.category_id);
        })), $queryParamMap)
            .subscribe(function (result) {
            console.log('result bread hierarchy', result[0]);
            console.log('result bread product', result[1].get('name'));
            // result.data[0].hierarchy to splice home => common => mainCategory
            // this.currentCategory =  result.data[0];
            _this.productName = result[1].get('name');
            _this.hierarchyCategory = result[0].data[0].hierarchy;
            _this.hierarchyCategory.push(result[0].data[0]);
            _this.hierarchyCategory.splice(0, 3);
            console.log('hierarchyCategory', _this.hierarchyCategory);
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
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/products/product-details/product-details.component.ngfactory.js":
/*!********************************************************************************************!*\
  !*** ./src/app/components/products/product-details/product-details.component.ngfactory.js ***!
  \********************************************************************************************/
/*! exports provided: ActivatedRoute_1, ActivatedRouteSnapshot_4, UrlSegmentGroup_8, Observable_2, RenderType_ProductDetailsComponent, View_ProductDetailsComponent_0, View_ProductDetailsComponent_Host_0, ProductDetailsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProductDetailsComponent", function() { return RenderType_ProductDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductDetailsComponent_0", function() { return View_ProductDetailsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductDetailsComponent_Host_0", function() { return View_ProductDetailsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponentNgFactory", function() { return ProductDetailsComponentNgFactory; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute_1", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot_4", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRouteSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup_8", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["UrlSegmentGroup"]; });

/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable_2", function() { return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]; });

/* harmony import */ var _product_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details.component.scss.shim.ngstyle */ "./src/app/components/products/product-details/product-details.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details.component */ "./src/app/components/products/product-details/product-details.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_ProductDetailsComponent = [_product_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_ProductDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductDetailsComponent, data: {} });

function View_ProductDetailsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](0, null, [" category_id ", " product ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"], [])], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.category_id; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).transform(_co.product)); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_ProductDetailsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-product-details", [], null, null, null, View_ProductDetailsComponent_0, RenderType_ProductDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 114688, null, 0, _product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], _services_catalog_service__WEBPACK_IMPORTED_MODULE_7__["CatalogService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-product-details", _product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"], View_ProductDetailsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/products/product-details/product-details.component.scss.shim.ngstyle.js":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/products/product-details/product-details.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/components/products/product-details/product-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/products/product-details/product-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(route, productService, catalogService) {
        this.route = route;
        this.productService = productService;
        this.catalogService = catalogService;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (paramMap) {
            _this.category_id = paramMap.get('category_id');
            _this.product_id = paramMap.get('product_id');
            return _this.productService.getProductById(_this.product_id);
        }))
            .subscribe(function (result) { return _this.product = result.data; });
    };
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-list-item/products-list-item.component.ngfactory.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/products/products-list-item/products-list-item.component.ngfactory.js ***!
  \**************************************************************************************************/
/*! exports provided: Input_1, ɵangular_packages_core_core_b_2, RenderType_ProductsListItemComponent, View_ProductsListItemComponent_0, View_ProductsListItemComponent_Host_0, ProductsListItemComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProductsListItemComponent", function() { return RenderType_ProductsListItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductsListItemComponent_0", function() { return View_ProductsListItemComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductsListItemComponent_Host_0", function() { return View_ProductsListItemComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListItemComponentNgFactory", function() { return ProductsListItemComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony import */ var _products_list_item_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-list-item.component.scss.shim.ngstyle */ "./src/app/components/products/products-list-item/products-list-item.component.scss.shim.ngstyle.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _products_list_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products-list-item.component */ "./src/app/components/products/products-list-item/products-list-item.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_ProductsListItemComponent = [_products_list_item_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_ProductsListItemComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductsListItemComponent, data: {} });

function View_ProductsListItemComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 28, "mat-card", [["class", "example-card mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "product-cl-image-wrapper-outer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "product-cl-image-wrapper-inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "img", [["alt", "product picture"], ["class", "product-cl-image"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 0, 1, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 0, 19, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["ADD_FLEX_STYLES"]]], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 15, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["ADD_FLEX_STYLES"]]], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 13, "a", [["mat-button", ""]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](17, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](18, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](19, { primary: 0, breadcrumb: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](20, { outlets: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](21, 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](25, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](26, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](28, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = ""; _ck(_v, 12, 0, currVal_2); var currVal_3 = ""; _ck(_v, 14, 0, currVal_3); var currVal_10 = _ck(_v, 21, 0, "/products", "ch", _ck(_v, 20, 0, _ck(_v, 19, 0, _ck(_v, 17, 0, _co.descendant._id), _ck(_v, 18, 0, _co.descendant._id)))); _ck(_v, 16, 0, currVal_10); var currVal_11 = _ck(_v, 25, 0, true); var currVal_12 = _ck(_v, 26, 0, "accent-background"); _ck(_v, 22, 0, currVal_11, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", (((_co.config.imgPath + _co.config.cloudinary.cloud_name) + "/") + _co.descendant.assets[0]), ""); _ck(_v, 6, 0, currVal_0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).align === "end"); _ck(_v, 9, 0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).href; var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).disabled ? (0 - 1) : 0); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).disabled || null); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).disabled.toString(); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27)._animationMode === "NoopAnimations"); _ck(_v, 15, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_13 = _co.descendant.name; _ck(_v, 28, 0, currVal_13); }); }
function View_ProductsListItemComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-products-list-item", [], null, null, null, View_ProductsListItemComponent_0, RenderType_ProductsListItemComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _products_list_item_component__WEBPACK_IMPORTED_MODULE_13__["ProductsListItemComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductsListItemComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-products-list-item", _products_list_item_component__WEBPACK_IMPORTED_MODULE_13__["ProductsListItemComponent"], View_ProductsListItemComponent_Host_0, { descendant: "descendant" }, {}, []);



/***/ }),

/***/ "./src/app/components/products/products-list-item/products-list-item.component.scss.shim.ngstyle.js":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/products/products-list-item/products-list-item.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/components/products/products-list-item/products-list-item.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/products/products-list-item/products-list-item.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductsListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListItemComponent", function() { return ProductsListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");


var ProductsListItemComponent = /** @class */ (function () {
    function ProductsListItemComponent() {
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ProductsListItemComponent.prototype.ngOnInit = function () {
    };
    return ProductsListItemComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: ActivatedRoute_1, ActivatedRouteSnapshot_4, UrlSegmentGroup_8, Observable_2, RenderType_ProductsListComponent, View_ProductsListComponent_0, View_ProductsListComponent_Host_0, ProductsListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProductsListComponent", function() { return RenderType_ProductsListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductsListComponent_0", function() { return View_ProductsListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductsListComponent_Host_0", function() { return View_ProductsListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponentNgFactory", function() { return ProductsListComponentNgFactory; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute_1", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot_4", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRouteSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup_8", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["UrlSegmentGroup"]; });

/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable_2", function() { return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]; });

/* harmony import */ var _products_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-list.component.scss.shim.ngstyle */ "./src/app/components/products/products-list/products-list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _products_list_item_products_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products-list-item/products-list-item.component.ngfactory */ "./src/app/components/products/products-list-item/products-list-item.component.ngfactory.js");
/* harmony import */ var _products_list_item_products_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../products-list-item/products-list-item.component */ "./src/app/components/products/products-list-item/products-list-item.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_ProductsListComponent = [_products_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_ProductsListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductsListComponent, data: {} });

function View_ProductsListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 3, "div", [["class", "cell"], ["fxFlex.gt-md", "20"], ["fxFlex.md", "33.3"], ["fxFlex.sm", "50"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["ADD_FLEX_STYLES"]]], { flexSm: [0, "flexSm"], flexMd: [1, "flexMd"], flexGtMd: [2, "flexGtMd"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, null, 1, "app-products-list-item", [], null, null, null, _products_list_item_products_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ProductsListItemComponent_0"], _products_list_item_products_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ProductsListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 114688, null, 0, _products_list_item_products_list_item_component__WEBPACK_IMPORTED_MODULE_7__["ProductsListItemComponent"], [], { descendant: [0, "descendant"] }, null)], function (_ck, _v) { var currVal_0 = "50"; var currVal_1 = "33.3"; var currVal_2 = "20"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 3, 0, currVal_3); }, null); }
function View_ProductsListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 3, "div", [["class", "row"], ["fxLayout", "column"], ["fxLayout.gt-xs", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"]], { layout: [0, "layout"], layoutGtXs: [1, "layoutGtXs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_ProductsListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; var currVal_1 = "row"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.descendants; _ck(_v, 3, 0, currVal_2); }, null); }
function View_ProductsListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-products-list", [], null, null, null, View_ProductsListComponent_0, RenderType_ProductsListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 114688, null, 0, _products_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductsListComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"], _services_catalog_service__WEBPACK_IMPORTED_MODULE_11__["CatalogService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductsListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-products-list", _products_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductsListComponent"], View_ProductsListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.scss.shim.ngstyle.js":
/*!************************************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



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
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/components/products/product-details/product-details.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");





var productsRoutes = [
    {
        path: 'ch',
        component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        children: [
            {
                path: '',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductsListComponent"],
            },
            {
                path: '',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            {
                path: ':category_id',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductsListComponent"],
            },
            {
                path: ':category_id',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            {
                path: ':category_id/details/:product_id',
                component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsComponent"],
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
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/products/products.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_ProductsComponent, View_ProductsComponent_0, View_ProductsComponent_Host_0, ProductsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProductsComponent", function() { return RenderType_ProductsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductsComponent_0", function() { return View_ProductsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductsComponent_Host_0", function() { return View_ProductsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponentNgFactory", function() { return ProductsComponentNgFactory; });
/* harmony import */ var _products_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component.scss.shim.ngstyle */ "./src/app/components/products/products.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ProductsComponent = [_products_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ProductsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductsComponent, data: {} });

function View_ProductsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [["name", "breadcrumb"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, "breadcrumb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 4, 0); }, null); }
function View_ProductsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-products", [], null, null, null, View_ProductsComponent_0, RenderType_ProductsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-products", _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], View_ProductsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/products/products.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/components/products/products.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



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

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.module.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/components/products/products.module.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: MatSnackBarContainer_9, SimpleSnackBar_11, MatSnackBar_45, MAT_SNACK_BAR_DEFAULT_OPTIONS_48, MatSnackBarModule_49, MatSnackBarContainerNgFactory_10, SimpleSnackBarNgFactory_12, MatDialogContainer_13, MatDialog_52, MAT_DIALOG_DEFAULT_OPTIONS_54, MAT_DIALOG_SCROLL_STRATEGY_55, MatDialogModule_56, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY_57, MatDialogContainerNgFactory_14, NgLocalization_15, NgLocaleLocalization_16, ɵangular_packages_common_common_a_18, CommonModule_19, DOCUMENT_31, Location_53, LOCALE_ID_17, APP_BOOTSTRAP_LISTENER_29, PLATFORM_ID_32, ComponentFactoryResolver_36, Injector_39, NgZone_40, ROUTES_20, RouterModule_66, ɵangular_packages_router_router_a_67, Router_68, ErrorStateMatcher_22, MatCommonModule_70, MATERIAL_SANITY_CHECKS_71, MatRippleModule_73, MatLineModule_80, MatPseudoCheckboxModule_95, MatOptionModule_96, MatInputModule_23, ObservableMedia_24, MediaService_25, BreakPointRegistry_26, MatchMedia_27, CoreModule_28, removeStyles_30, SERVER_TOKEN_85, Overlay_33, ScrollStrategyOptions_34, OverlayContainer_35, OverlayPositionBuilder_37, OverlayKeyboardDispatcher_38, OverlayModule_42, ɵc_43, ɵd_44, Directionality_41, BidiModule_69, LiveAnnouncer_46, BreakpointObserver_47, MutationObserverFactory_50, ObserversModule_51, MatStepperIntl_58, MatStepperModule_59, MAT_SELECT_SCROLL_STRATEGY_60, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY_61, MatSelectModule_62, MAT_MENU_SCROLL_STRATEGY_63, ɵd24_64, MatMenuModule_65, PlatformModule_72, MatButtonModule_74, MatIconModule_75, TextFieldModule_76, MatFormFieldModule_77, MatCardModule_78, MatToolbarModule_79, MatGridListModule_81, FlexModule_82, ExtendedModule_83, FlexLayoutModule_84, ScrollDispatchModule_86, MatSidenavModule_87, PortalModule_88, MatTabsModule_89, CdkTableModule_90, MatTableModule_91, MatProgressSpinnerModule_92, CdkStepperModule_93, MatRadioModule_94, MatCheckboxModule_97, CdkAccordionModule_98, MatExpansionModule_99, MatDividerModule_100, MatListModule_101, CloudinaryModule_103, ProductsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModuleNgFactory", function() { return ProductsModuleNgFactory; });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer_9", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBar_11", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["SimpleSnackBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBar_45", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS_48", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MAT_SNACK_BAR_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarModule_49", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"]; });

/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainerNgFactory_10", function() { return _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarContainerNgFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBarNgFactory_12", function() { return _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["SimpleSnackBarNgFactory"]; });

/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer_13", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialog_52", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS_54", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_55", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule_56", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY_57", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainerNgFactory_14", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgLocalization_15", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgLocaleLocalization_16", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_a_18", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonModule_19", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_31", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_53", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCALE_ID_17", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_5__["LOCALE_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APP_BOOTSTRAP_LISTENER_29", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_5__["APP_BOOTSTRAP_LISTENER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_ID_32", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentFactoryResolver_36", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ComponentFactoryResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_39", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgZone_40", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]; });

/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTES_20", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule_66", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_router_router_a_67", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_router_router_a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_68", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]; });

/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher_22", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule_70", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS_71", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MATERIAL_SANITY_CHECKS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule_73", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatLineModule_80", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLineModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule_95", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatPseudoCheckboxModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule_96", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"]; });

/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatInputModule_23", function() { return _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]; });

/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableMedia_24", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["ObservableMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaService_25", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakPointRegistry_26", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["BreakPointRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatchMedia_27", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule_28", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["CoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStyles_30", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["removeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN_85", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["SERVER_TOKEN"]; });

/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay_33", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions_34", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ScrollStrategyOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer_35", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder_37", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayPositionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher_38", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayKeyboardDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayModule_42", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵc_43", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ɵc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd_44", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ɵd"]; });

/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directionality_41", function() { return _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BidiModule_69", function() { return _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["BidiModule"]; });

/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiveAnnouncer_46", function() { return _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["LiveAnnouncer"]; });

/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver_47", function() { return _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["BreakpointObserver"]; });

/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MutationObserverFactory_50", function() { return _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObserversModule_51", function() { return _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"]; });

/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperIntl_58", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperModule_59", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"]; });

/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_60", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MAT_SELECT_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY_61", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule_62", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"]; });

/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY_63", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MAT_MENU_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd24_64", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["ɵd24"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuModule_65", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"]; });

/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlatformModule_72", function() { return _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"]; });

/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule_74", function() { return _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"]; });

/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconModule_75", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"]; });

/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextFieldModule_76", function() { return _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["TextFieldModule"]; });

/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule_77", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"]; });

/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardModule_78", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"]; });

/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatToolbarModule_79", function() { return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"]; });

/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridListModule_81", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"]; });

/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexModule_82", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__["FlexModule"]; });

/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendedModule_83", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["ExtendedModule"]; });

/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutModule_84", function() { return _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"]; });

/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule_86", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollDispatchModule"]; });

/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSidenavModule_87", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"]; });

/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalModule_88", function() { return _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"]; });

/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabsModule_89", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"]; });

/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule_90", function() { return _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__["CdkTableModule"]; });

/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTableModule_91", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"]; });

/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule_92", function() { return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"]; });

/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkStepperModule_93", function() { return _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__["CdkStepperModule"]; });

/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRadioModule_94", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__["MatRadioModule"]; });

/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule_97", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__["MatCheckboxModule"]; });

/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionModule_98", function() { return _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_39__["CdkAccordionModule"]; });

/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule_99", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__["MatExpansionModule"]; });

/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDividerModule_100", function() { return _angular_material_divider__WEBPACK_IMPORTED_MODULE_41__["MatDividerModule"]; });

/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListModule_101", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_42__["MatListModule"]; });

/* harmony import */ var _cloudinary_angular_5_x_src_cloudinary_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @cloudinary/angular-5.x/src/cloudinary.module */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.module.js");
/* harmony import */ var _cloudinary_angular_5_x_src_cloudinary_module__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_cloudinary_angular_5_x_src_cloudinary_module__WEBPACK_IMPORTED_MODULE_43__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryModule_103", function() { return _cloudinary_angular_5_x_src_cloudinary_module__WEBPACK_IMPORTED_MODULE_43__["CloudinaryModule"]; });

/* harmony import */ var _products_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./products.module */ "./src/app/components/products/products.module.ts");
/* harmony import */ var _products_component_ngfactory__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./products.component.ngfactory */ "./src/app/components/products/products.component.ngfactory.js");
/* harmony import */ var _products_list_products_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./products-list/products-list.component.ngfactory */ "./src/app/components/products/products-list/products-list.component.ngfactory.js");
/* harmony import */ var _breadcrumb_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component.ngfactory */ "./src/app/components/products/breadcrumb/breadcrumb.component.ngfactory.js");
/* harmony import */ var _product_details_product_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./product-details/product-details.component.ngfactory */ "./src/app/components/products/product-details/product-details.component.ngfactory.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/components/products/products-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/components/products/product-details/product-details.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




































































































var ProductsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵcmf"](_products_module__WEBPACK_IMPORTED_MODULE_44__["ProductsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵCodegenComponentFactoryResolver"], [[8, [_products_component_ngfactory__WEBPACK_IMPORTED_MODULE_45__["ProductsComponentNgFactory"], _products_list_products_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__["ProductsListComponentNgFactory"], _breadcrumb_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__["BreadcrumbComponentNgFactory"], _product_details_product_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_48__["ProductDetailsComponentNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["SimpleSnackBarNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_5__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](4608, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["ObservableMedia"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaService"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["BreakPointRegistry"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MatchMedia"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_5__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](4608, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["LiveAnnouncer"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["BreakpointObserver"], [3, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MAT_SNACK_BAR_DEFAULT_OPTIONS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](4608, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](4608, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["ɵd24"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _products_routing_module__WEBPACK_IMPORTED_MODULE_49__["ProductsRoutingModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_49__["ProductsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollDispatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollDispatchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_39__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_39__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_41__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_41__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_42__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_42__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _material_module__WEBPACK_IMPORTED_MODULE_50__["MaterialModule"], _material_module__WEBPACK_IMPORTED_MODULE_50__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _cloudinary_angular_5_x_src_cloudinary_module__WEBPACK_IMPORTED_MODULE_43__["CloudinaryModule"], _cloudinary_angular_5_x_src_cloudinary_module__WEBPACK_IMPORTED_MODULE_43__["CloudinaryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_51__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_51__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1073742336, _products_module__WEBPACK_IMPORTED_MODULE_44__["ProductsModule"], _products_module__WEBPACK_IMPORTED_MODULE_44__["ProductsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_6__["ROUTES"], function () { return [[{ path: "ch", component: _products_component__WEBPACK_IMPORTED_MODULE_52__["ProductsComponent"], children: [{ path: "", component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_53__["ProductsListComponent"] }, { path: "", component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_54__["BreadcrumbComponent"], outlet: "breadcrumb" }, { path: ":category_id", component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_53__["ProductsListComponent"] }, { path: ":category_id", component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_54__["BreadcrumbComponent"], outlet: "breadcrumb" }, { path: ":category_id/details/:product_id", component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_55__["ProductDetailsComponent"] }, { path: ":category_id/details/:product_id", component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_54__["BreadcrumbComponent"], outlet: "breadcrumb" }] }]]; }, [])]); });



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
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    return ProductsModule;
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
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-products-products-module-ngfactory.js.map