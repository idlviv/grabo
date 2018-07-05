(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dashboard-dashboard-module-ngfactory"],{

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

function View_BreadcrumbComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 19, "a", [["mat-button", ""]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](4, { primary: 0, breadcrumb: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](5, { outlets: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](6, 3), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](7, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](10, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](11, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](12, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](13, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](14, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["folder"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](16, 0, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](17, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](18, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["keyboard_arrow_right"]))], function (_ck, _v) { var currVal_6 = _ck(_v, 6, 0, "/products", "ch", _ck(_v, 5, 0, _ck(_v, 4, 0, _ck(_v, 2, 0, _v.context.$implicit._id), _ck(_v, 3, 0, _v.context.$implicit._id)))); _ck(_v, 1, 0, currVal_6); var currVal_7 = _ck(_v, 10, 0, true); var currVal_8 = _ck(_v, 11, 0, "accent"); _ck(_v, 7, 0, currVal_7, currVal_8); _ck(_v, 14, 0); _ck(_v, 18, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).href; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12).disabled ? (0 - 1) : 0); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12).disabled || null); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12).disabled.toString(); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 14).inline; _ck(_v, 13, 0, currVal_9); var currVal_10 = _v.context.$implicit.name; _ck(_v, 16, 0, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 18).inline; _ck(_v, 17, 0, currVal_11); }); }
function View_BreadcrumbComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 10, "a", [["disabled", ""], ["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](4, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](5, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](7, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](8, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["insert_photo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](10, 0, [" ", ""]))], function (_ck, _v) { var currVal_4 = _ck(_v, 4, 0, true); var currVal_5 = _ck(_v, 5, 0, "accent"); _ck(_v, 1, 0, currVal_4, currVal_5); var currVal_6 = ""; _ck(_v, 6, 0, currVal_6); _ck(_v, 8, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6).disabled ? (0 - 1) : 0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6).disabled || null); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6).disabled.toString(); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 8).inline; _ck(_v, 7, 0, currVal_7); var currVal_8 = _co.productName; _ck(_v, 10, 0, currVal_8); }); }
function View_BreadcrumbComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hierarchyCategory; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.productName; _ck(_v, 4, 0, currVal_1); }, null); }
function View_BreadcrumbComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 18, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 0, null, null, 15, "a", [["mat-button", ""]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 9)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](3, 2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](4, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](7, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](8, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](9, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](10, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](11, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, [" \u041A\u0430\u0442\u0430\u043B\u043E\u0433"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](14, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](15, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["keyboard_arrow_right"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _ck(_v, 3, 0, "/products", "ch"); _ck(_v, 2, 0, currVal_6); var currVal_7 = _ck(_v, 7, 0, true); var currVal_8 = _ck(_v, 8, 0, "accent"); _ck(_v, 4, 0, currVal_7, currVal_8); _ck(_v, 11, 0); _ck(_v, 15, 0); var currVal_11 = !_co.processing; _ck(_v, 18, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 2).href; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 9).disabled ? (0 - 1) : 0); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 9).disabled || null); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 9).disabled.toString(); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 9)._animationMode === "NoopAnimations"); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 11).inline; _ck(_v, 10, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).inline; _ck(_v, 14, 0, currVal_10); }); }
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
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-detail-side/products-detail-side.component.ngfactory.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/products/products-detail-side/products-detail-side.component.ngfactory.js ***!
  \******************************************************************************************************/
/*! exports provided: Input_1, ɵangular_packages_core_core_b_2, RenderType_ProductsDetailSideComponent, View_ProductsDetailSideComponent_0, View_ProductsDetailSideComponent_Host_0, ProductsDetailSideComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProductsDetailSideComponent", function() { return RenderType_ProductsDetailSideComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductsDetailSideComponent_0", function() { return View_ProductsDetailSideComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductsDetailSideComponent_Host_0", function() { return View_ProductsDetailSideComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailSideComponentNgFactory", function() { return ProductsDetailSideComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony import */ var _products_detail_side_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-detail-side.component.scss.shim.ngstyle */ "./src/app/components/products/products-detail-side/products-detail-side.component.scss.shim.ngstyle.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _products_detail_side_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products-detail-side.component */ "./src/app/components/products/products-detail-side/products-detail-side.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_ProductsDetailSideComponent = [_products_detail_side_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_ProductsDetailSideComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductsDetailSideComponent, data: {} });

function View_ProductsDetailSideComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "a", [["mat-button", ""]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { name: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](3, 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](4, 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](5, { primary: 0, breadcrumb: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](6, { outlets: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](7, 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](11, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](12, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, 0, [" ", "\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_6 = _ck(_v, 2, 0, _v.context.$implicit.name); var currVal_7 = _ck(_v, 7, 0, "/products", "ch", _ck(_v, 6, 0, _ck(_v, 5, 0, _ck(_v, 3, 0, _co.category_id, "details", _v.context.$implicit._id), _ck(_v, 4, 0, _co.category_id, "details", _v.context.$implicit._id)))); _ck(_v, 1, 0, currVal_6, currVal_7); var currVal_8 = _ck(_v, 11, 0, true); var currVal_9 = _ck(_v, 12, 0, "accent-background"); _ck(_v, 8, 0, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).disabled ? (0 - 1) : 0); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).disabled || null); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).disabled.toString(); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_10 = _v.context.$implicit.name; _ck(_v, 14, 0, currVal_10); }); }
function View_ProductsDetailSideComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ProductsDetailSideComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.siblings; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ProductsDetailSideComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-products-detail-side", [], null, null, null, View_ProductsDetailSideComponent_0, RenderType_ProductsDetailSideComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _products_detail_side_component__WEBPACK_IMPORTED_MODULE_9__["ProductsDetailSideComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductsDetailSideComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-products-detail-side", _products_detail_side_component__WEBPACK_IMPORTED_MODULE_9__["ProductsDetailSideComponent"], View_ProductsDetailSideComponent_Host_0, { siblings: "siblings", category_id: "category_id" }, {}, []);



/***/ }),

/***/ "./src/app/components/products/products-detail-side/products-detail-side.component.scss.shim.ngstyle.js":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/products/products-detail-side/products-detail-side.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************************************/
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

var ProductsDetailSideComponent = /** @class */ (function () {
    function ProductsDetailSideComponent() {
    }
    ProductsDetailSideComponent.prototype.ngOnInit = function () {
    };
    return ProductsDetailSideComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-detail/products-detail.component.ngfactory.js":
/*!********************************************************************************************!*\
  !*** ./src/app/components/products/products-detail/products-detail.component.ngfactory.js ***!
  \********************************************************************************************/
/*! exports provided: ActivatedRoute_1, ActivatedRouteSnapshot_4, UrlSegmentGroup_8, Observable_2, RenderType_ProductsDetailComponent, View_ProductsDetailComponent_0, View_ProductsDetailComponent_Host_0, ProductsDetailComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProductsDetailComponent", function() { return RenderType_ProductsDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductsDetailComponent_0", function() { return View_ProductsDetailComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductsDetailComponent_Host_0", function() { return View_ProductsDetailComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailComponentNgFactory", function() { return ProductsDetailComponentNgFactory; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute_1", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot_4", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRouteSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup_8", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["UrlSegmentGroup"]; });

/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable_2", function() { return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]; });

/* harmony import */ var _products_detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-detail.component.scss.shim.ngstyle */ "./src/app/components/products/products-detail/products-detail.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _products_detail_side_products_detail_side_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products-detail-side/products-detail-side.component.ngfactory */ "./src/app/components/products/products-detail-side/products-detail-side.component.ngfactory.js");
/* harmony import */ var _products_detail_side_products_detail_side_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../products-detail-side/products-detail-side.component */ "./src/app/components/products/products-detail-side/products-detail-side.component.ts");
/* harmony import */ var _shared_product_item_detail_product_item_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/product-item-detail/product-item-detail.component.ngfactory */ "./src/app/components/shared/product-item-detail/product-item-detail.component.ngfactory.js");
/* harmony import */ var _shared_product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/product-item-detail/product-item-detail.component */ "./src/app/components/shared/product-item-detail/product-item-detail.component.ts");
/* harmony import */ var _products_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products-detail.component */ "./src/app/components/products/products-detail/products-detail.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_ProductsDetailComponent = [_products_detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_ProductsDetailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductsDetailComponent, data: {} });

function View_ProductsDetailComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 9, "div", [["class", "row"], ["fxLayout", "column"], ["fxLayout.gt-xs", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"]], { layout: [0, "layout"], layoutGtXs: [1, "layoutGtXs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, null, 3, "div", [["class", "cell"], ["fxFlex.gt-xs", "200px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["ADD_FLEX_STYLES"]]], { flexGtXs: [0, "flexGtXs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](4, 0, null, null, 1, "app-products-detail-side", [], null, null, null, _products_detail_side_products_detail_side_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ProductsDetailSideComponent_0"], _products_detail_side_products_detail_side_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ProductsDetailSideComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](5, 114688, null, 0, _products_detail_side_products_detail_side_component__WEBPACK_IMPORTED_MODULE_7__["ProductsDetailSideComponent"], [], { siblings: [0, "siblings"], category_id: [1, "category_id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](6, 0, null, null, 3, "div", [["class", "cell"], ["fxFlex.gt-xs", "100%-200px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](7, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["ADD_FLEX_STYLES"]]], { flexGtXs: [0, "flexGtXs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](8, 0, null, null, 1, "app-product-item-detail", [], null, null, null, _shared_product_item_detail_product_item_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_ProductItemDetailComponent_0"], _shared_product_item_detail_product_item_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_ProductItemDetailComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](9, 114688, null, 0, _shared_product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductItemDetailComponent"], [], { product: [0, "product"], category_id: [1, "category_id"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; var currVal_1 = "row"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "200px"; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.siblings; var currVal_4 = _co.category_id; _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_5 = "100%-200px"; _ck(_v, 7, 0, currVal_5); var currVal_6 = _co.product; var currVal_7 = _co.category_id; _ck(_v, 9, 0, currVal_6, currVal_7); }, null); }
function View_ProductsDetailComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-products-detail", [], null, null, null, View_ProductsDetailComponent_0, RenderType_ProductsDetailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 114688, null, 0, _products_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductsDetailComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"], _services_catalog_service__WEBPACK_IMPORTED_MODULE_12__["CatalogService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductsDetailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-products-detail", _products_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductsDetailComponent"], View_ProductsDetailComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/products/products-detail/products-detail.component.scss.shim.ngstyle.js":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/products/products-detail/products-detail.component.scss.shim.ngstyle.js ***!
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
    return ProductsDetailComponent;
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
/* harmony import */ var _shared_product_item_brief_product_item_brief_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/product-item-brief/product-item-brief.component.ngfactory */ "./src/app/components/shared/product-item-brief/product-item-brief.component.ngfactory.js");
/* harmony import */ var _shared_product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/product-item-brief/product-item-brief.component */ "./src/app/components/shared/product-item-brief/product-item-brief.component.ts");
/* harmony import */ var _shared_catalog_item_component_catalog_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/catalog-item-component/catalog-item-component.ngfactory */ "./src/app/components/shared/catalog-item-component/catalog-item-component.ngfactory.js");
/* harmony import */ var _shared_catalog_item_component_catalog_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/catalog-item-component/catalog-item-component */ "./src/app/components/shared/catalog-item-component/catalog-item-component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















var styles_ProductsListComponent = [_products_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_ProductsListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductsListComponent, data: {} });

function View_ProductsListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 3, "div", [["class", "cell"], ["fxFlex.gt-md", "20"], ["fxFlex.md", "33.3"], ["fxFlex.sm", "50"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["ADD_FLEX_STYLES"]]], { flexSm: [0, "flexSm"], flexMd: [1, "flexMd"], flexGtMd: [2, "flexGtMd"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, null, 1, "app-product-item-brief", [], null, null, null, _shared_product_item_brief_product_item_brief_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ProductItemBriefComponent_0"], _shared_product_item_brief_product_item_brief_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ProductItemBriefComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 114688, null, 0, _shared_product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemBriefComponent"], [], { product: [0, "product"], category_id: [1, "category_id"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "50"; var currVal_1 = "33.3"; var currVal_2 = "20"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit; var currVal_4 = _co.category_id; _ck(_v, 3, 0, currVal_3, currVal_4); }, null); }
function View_ProductsListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 3, "div", [["class", "cell"], ["fxFlex.gt-md", "20"], ["fxFlex.md", "33.3"], ["fxFlex.sm", "50"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["ADD_FLEX_STYLES"]]], { flexSm: [0, "flexSm"], flexMd: [1, "flexMd"], flexGtMd: [2, "flexGtMd"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, null, 1, "app-catalog-item", [], null, null, null, _shared_catalog_item_component_catalog_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_CatalogItemComponent_0"], _shared_catalog_item_component_catalog_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_CatalogItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 114688, null, 0, _shared_catalog_item_component_catalog_item_component__WEBPACK_IMPORTED_MODULE_9__["CatalogItemComponent"], [], { descendant: [0, "descendant"] }, null)], function (_ck, _v) { var currVal_0 = "50"; var currVal_1 = "33.3"; var currVal_2 = "20"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 3, 0, currVal_3); }, null); }
function View_ProductsListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 5, "div", [["class", "row"], ["fxLayout", "column"], ["fxLayout.gt-xs", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"]], { layout: [0, "layout"], layoutGtXs: [1, "layoutGtXs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_ProductsListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_ProductsListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](5, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; var currVal_1 = "row"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.products; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.descendants; _ck(_v, 5, 0, currVal_3); }, null); }
function View_ProductsListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-products-list", [], null, null, null, View_ProductsListComponent_0, RenderType_ProductsListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 114688, null, 0, _products_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductsListComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"], _services_catalog_service__WEBPACK_IMPORTED_MODULE_13__["CatalogService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_14__["SharedService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductsListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-products-list", _products_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductsListComponent"], View_ProductsListComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-detail/products-detail.component */ "./src/app/components/products/products-detail/products-detail.component.ts");




// import { ProductItemDetailComponent } from '../shared/product-item-detail/product-item-detail.component';

var productsRoutes = [
    {
        path: 'ch',
        component: _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"],
        children: [
            {
                path: '',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductsListComponent"],
            },
            {
                path: '',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            {
                path: ':category_id',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductsListComponent"],
            },
            {
                path: ':category_id',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            {
                path: ':category_id/details/:product_id',
                component: _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductsDetailComponent"],
            },
            {
                path: ':category_id/details/:product_id',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"],
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

function View_ProductsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [["name", "breadcrumb"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, "breadcrumb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); _ck(_v, 5, 0); }, null); }
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

/***/ "./src/app/components/products/products.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/products/products.module.ts ***!
  \********************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
// import { ProductsDetailMainComponent } from './products-detail-main/products-detail-main.component';
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/components/shared/catalog-item-component/catalog-item-component.ngfactory.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/shared/catalog-item-component/catalog-item-component.ngfactory.js ***!
  \**********************************************************************************************/
/*! exports provided: Input_1, ɵangular_packages_core_core_b_2, RenderType_CatalogItemComponent, View_CatalogItemComponent_0, View_CatalogItemComponent_Host_0, CatalogItemComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CatalogItemComponent", function() { return RenderType_CatalogItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CatalogItemComponent_0", function() { return View_CatalogItemComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CatalogItemComponent_Host_0", function() { return View_CatalogItemComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogItemComponentNgFactory", function() { return CatalogItemComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony import */ var _catalog_item_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog-item-component.scss.shim.ngstyle */ "./src/app/components/shared/catalog-item-component/catalog-item-component.scss.shim.ngstyle.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _catalog_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catalog-item-component */ "./src/app/components/shared/catalog-item-component/catalog-item-component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_CatalogItemComponent = [_catalog_item_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_CatalogItemComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_CatalogItemComponent, data: {} });

function View_CatalogItemComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 28, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 4, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "div", [["class", "product-cl-image-wrapper-outer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "div", [["class", "product-cl-image-wrapper-inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "img", [["alt", "product picture"], ["class", "product-cl-image"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 0, 19, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["ADD_FLEX_STYLES"]]], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 15, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["ADD_FLEX_STYLES"]]], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 13, "a", [["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](18, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](19, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](20, { primary: 0, breadcrumb: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](21, { outlets: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](22, 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](26, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](27, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](28, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = ""; _ck(_v, 12, 0, currVal_2); var currVal_3 = ""; _ck(_v, 14, 0, currVal_3); var currVal_10 = _ck(_v, 22, 0, "/products", "ch", _ck(_v, 21, 0, _ck(_v, 20, 0, _ck(_v, 18, 0, _co.descendant._id), _ck(_v, 19, 0, _co.descendant._id)))); _ck(_v, 17, 0, currVal_10); var currVal_11 = _ck(_v, 26, 0, true); var currVal_12 = _ck(_v, 27, 0, "accent-background"); _ck(_v, 23, 0, currVal_11, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", (((_co.config.imgPath + _co.config.cloudinary.cloud_name) + "/") + _co.descendant.assets[0]), ""); _ck(_v, 8, 0, currVal_0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).align === "end"); _ck(_v, 9, 0, currVal_1); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).disabled ? (0 - 1) : 0); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).disabled || null); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).disabled.toString(); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16)._animationMode === "NoopAnimations"); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).target; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).href; _ck(_v, 15, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_13 = _co.descendant.name; _ck(_v, 28, 0, currVal_13); }); }
function View_CatalogItemComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-catalog-item", [], null, null, null, View_CatalogItemComponent_0, RenderType_CatalogItemComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _catalog_item_component__WEBPACK_IMPORTED_MODULE_13__["CatalogItemComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CatalogItemComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-catalog-item", _catalog_item_component__WEBPACK_IMPORTED_MODULE_13__["CatalogItemComponent"], View_CatalogItemComponent_Host_0, { descendant: "descendant" }, {}, []);



/***/ }),

/***/ "./src/app/components/shared/catalog-item-component/catalog-item-component.scss.shim.ngstyle.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/shared/catalog-item-component/catalog-item-component.scss.shim.ngstyle.js ***!
  \******************************************************************************************************/
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

/***/ "./src/app/components/shared/catalog-item-component/catalog-item-component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/catalog-item-component/catalog-item-component.ts ***!
  \************************************************************************************/
/*! exports provided: CatalogItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogItemComponent", function() { return CatalogItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");


var CatalogItemComponent = /** @class */ (function () {
    function CatalogItemComponent() {
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    CatalogItemComponent.prototype.ngOnInit = function () {
    };
    return CatalogItemComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/product-item-brief/product-item-brief.component.ngfactory.js":
/*!************************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-brief/product-item-brief.component.ngfactory.js ***!
  \************************************************************************************************/
/*! exports provided: Input_1, ɵangular_packages_core_core_b_2, RenderType_ProductItemBriefComponent, View_ProductItemBriefComponent_0, View_ProductItemBriefComponent_Host_0, ProductItemBriefComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProductItemBriefComponent", function() { return RenderType_ProductItemBriefComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductItemBriefComponent_0", function() { return View_ProductItemBriefComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductItemBriefComponent_Host_0", function() { return View_ProductItemBriefComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemBriefComponentNgFactory", function() { return ProductItemBriefComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony import */ var _product_item_brief_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-item-brief.component.scss.shim.ngstyle */ "./src/app/components/shared/product-item-brief/product-item-brief.component.scss.shim.ngstyle.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_item_brief_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-item-brief.component */ "./src/app/components/shared/product-item-brief/product-item-brief.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_ProductItemBriefComponent = [_product_item_brief_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_ProductItemBriefComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductItemBriefComponent, data: {} });

function View_ProductItemBriefComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 26, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 18, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 16, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["ADD_FLEX_STYLES"]]], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 14, "a", [["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](15, { name: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](16, 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](17, 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](18, { primary: 0, breadcrumb: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](19, { outlets: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](20, 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](24, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](25, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](26, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = ""; _ck(_v, 11, 0, currVal_2); var currVal_9 = _ck(_v, 15, 0, _co.product.name); var currVal_10 = _ck(_v, 20, 0, "/products", "ch", _ck(_v, 19, 0, _ck(_v, 18, 0, _ck(_v, 16, 0, _co.category_id, "details", _co.product._id), _ck(_v, 17, 0, _co.category_id, "details", _co.product._id)))); _ck(_v, 14, 0, currVal_9, currVal_10); var currVal_11 = _ck(_v, 24, 0, true); var currVal_12 = _ck(_v, 25, 0, "accent-background"); _ck(_v, 21, 0, currVal_11, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).transform(_co.product)); _ck(_v, 4, 0, currVal_0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).align === "end"); _ck(_v, 8, 0, currVal_1); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).disabled ? (0 - 1) : 0); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).disabled || null); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).disabled.toString(); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13)._animationMode === "NoopAnimations"); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).target; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).href; _ck(_v, 12, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_13 = _co.product.name; _ck(_v, 26, 0, currVal_13); }); }
function View_ProductItemBriefComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-product-item-brief", [], null, null, null, View_ProductItemBriefComponent_0, RenderType_ProductItemBriefComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _product_item_brief_component__WEBPACK_IMPORTED_MODULE_13__["ProductItemBriefComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductItemBriefComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-product-item-brief", _product_item_brief_component__WEBPACK_IMPORTED_MODULE_13__["ProductItemBriefComponent"], View_ProductItemBriefComponent_Host_0, { product: "product", category_id: "category_id" }, {}, []);



/***/ }),

/***/ "./src/app/components/shared/product-item-brief/product-item-brief.component.scss.shim.ngstyle.js":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-brief/product-item-brief.component.scss.shim.ngstyle.js ***!
  \********************************************************************************************************/
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

/***/ "./src/app/components/shared/product-item-brief/product-item-brief.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-brief/product-item-brief.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductItemBriefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemBriefComponent", function() { return ProductItemBriefComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ProductItemBriefComponent = /** @class */ (function () {
    function ProductItemBriefComponent() {
    }
    ProductItemBriefComponent.prototype.ngOnInit = function () {
    };
    return ProductItemBriefComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/product-item-detail/product-item-detail.component.ngfactory.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-detail/product-item-detail.component.ngfactory.js ***!
  \**************************************************************************************************/
/*! exports provided: Input_1, ɵangular_packages_core_core_b_2, RenderType_ProductItemDetailComponent, View_ProductItemDetailComponent_0, View_ProductItemDetailComponent_Host_0, ProductItemDetailComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProductItemDetailComponent", function() { return RenderType_ProductItemDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductItemDetailComponent_0", function() { return View_ProductItemDetailComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductItemDetailComponent_Host_0", function() { return View_ProductItemDetailComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemDetailComponentNgFactory", function() { return ProductItemDetailComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony import */ var _product_item_detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-item-detail.component.scss.shim.ngstyle */ "./src/app/components/shared/product-item-detail/product-item-detail.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _product_item_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-item-detail.component */ "./src/app/components/shared/product-item-detail/product-item-detail.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_ProductItemDetailComponent = [_product_item_detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_ProductItemDetailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductItemDetailComponent, data: {} });

function View_ProductItemDetailComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 34, "div", [["class", "row"], ["fxLayout", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], { layout: [0, "layout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 32, "div", [["class", "cell"], ["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ADD_FLEX_STYLES"]]], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 30, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 24, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 7, "div", [["class", "row"], ["fxLayout", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], { layout: [0, "layout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 5, "div", [["class", "cell"], ["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ADD_FLEX_STYLES"]]], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["TITLE GRABOFLEX START"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["MAIN TEXT \u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043C\u0443\u043B\u044C\u0442\u0438\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u043F\u043E\u0440\u0442\u0437\u0430\u043B\u043E\u0432, \u0433\u0434\u0435 \u0432\u0430\u0436\u043D\u043E \u0438\u043C\u0435\u0442\u044C \u0434\u043E\u043B\u0433\u043E\u0432\u0435\u0447\u043D\u0443\u044E \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0443\u044E \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0443 \u0434\u043B\u044F \u0438\u0433\u0440. \u041F\u043B\u043E\u0442\u043D\u044B\u0439 \u0432\u0441\u043F\u0435\u043D\u0435\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0439 \u043D\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0445\u043E\u0434\u044C\u0431\u044B. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F \u043F\u043E\u043B\u0430 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u0438\u0433\u0440 \u0432 \u0434\u0435\u0442\u0441\u043A\u0438\u0445 \u0441\u0430\u0434\u0430\u0445. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 9, "div", [["class", "row"], ["fxLayout", "column"], ["fxLayout.gt-sm", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], { layout: [0, "layout"], layoutGtSm: [1, "layoutGtSm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 3, "div", [["class", "cell"], ["fxFlex.gt-sm", "50"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ADD_FLEX_STYLES"]]], { flexGtSm: [0, "flexGtSm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ADDITIONAL SECTOR1 \u041F\u0430\u0440\u043A\u0435\u0442\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 Grabo StrongAir Elite, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043D\u0430\u0433\u0440\u0443\u0437\u043E\u043A, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u043C\u0443\u043B\u044C\u0442\u0438\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u043F\u043E\u0440\u0442\u0437\u0430\u043B\u043E\u0432. \u0412\u0435\u0440\u0445\u043D\u044F\u044F \u0447\u0430\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0442\u0440\u0451\u0445\u0441\u043B\u043E\u0439\u043D\u044B\u0439 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u043F\u0430\u0440\u043A\u0435\u0442 \u0442\u043E\u043B\u0449\u0438\u043D\u043E\u0439 22 \u043C\u043C, \u0441\u043E \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u044B\u043C \u0441\u0440\u0435\u0434\u043D\u0438\u043C \u0441\u043B\u043E\u0435\u043C \u0438 \u0438\u0437\u043D\u043E\u0441\u043E\u0441\u0442\u043E\u0439\u043A\u0438\u043C \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u043C \u043B\u0430\u043A\u043E\u043C. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0441\u0432\u043E\u0435\u043C\u0443 \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u043C\u0443 \u044D\u043D\u0435\u0440\u0433\u043E\u043F\u043E\u0433\u043B\u0430\u0449\u0430\u044E\u0449\u0435\u043C\u0443 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044E, \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0441\u0443\u0441\u0442\u0430\u0432\u044B \u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u0430, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044E \u0432\u044B\u0434\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 3, "div", [["class", "cell"], ["fxFlex.gt-sm", "50"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ADD_FLEX_STYLES"]]], { flexGtSm: [0, "flexGtSm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ADDITIONAL SECTOR2 \u041F\u0430\u0440\u043A\u0435\u0442\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 Grabo StrongAir Elite, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043D\u0430\u0433\u0440\u0443\u0437\u043E\u043A, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u043C\u0443\u043B\u044C\u0442\u0438\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u043F\u043E\u0440\u0442\u0437\u0430\u043B\u043E\u0432. \u0412\u0435\u0440\u0445\u043D\u044F\u044F \u0447\u0430\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0442\u0440\u0451\u0445\u0441\u043B\u043E\u0439\u043D\u044B\u0439 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u043F\u0430\u0440\u043A\u0435\u0442 \u0442\u043E\u043B\u0449\u0438\u043D\u043E\u0439 22 \u043C\u043C, \u0441\u043E \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u044B\u043C \u0441\u0440\u0435\u0434\u043D\u0438\u043C \u0441\u043B\u043E\u0435\u043C \u0438 \u0438\u0437\u043D\u043E\u0441\u043E\u0441\u0442\u043E\u0439\u043A\u0438\u043C \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u043C \u043B\u0430\u043A\u043E\u043C. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0441\u0432\u043E\u0435\u043C\u0443 \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u043C\u0443 \u044D\u043D\u0435\u0440\u0433\u043E\u043F\u043E\u0433\u043B\u0430\u0449\u0430\u044E\u0449\u0435\u043C\u0443 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044E, \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0441\u0443\u0441\u0442\u0430\u0432\u044B \u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u0430, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044E \u0432\u044B\u0434\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 4, "div", [["class", "row"], ["fxLayout", "column"], ["fxLayout.gt-xs", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], { layout: [0, "layout"], layoutGtXs: [1, "layoutGtXs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 2, "div", [["class", "cell"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DESIGN ZONE \u041F\u0430\u0440\u043A\u0435\u0442\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 Grabo StrongAir Elite, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043D\u0430\u0433\u0440\u0443\u0437\u043E\u043A, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u043C\u0443\u043B\u044C\u0442\u0438\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u043F\u043E\u0440\u0442\u0437\u0430\u043B\u043E\u0432. \u0412\u0435\u0440\u0445\u043D\u044F\u044F \u0447\u0430\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0442\u0440\u0451\u0445\u0441\u043B\u043E\u0439\u043D\u044B\u0439 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u043F\u0430\u0440\u043A\u0435\u0442 \u0442\u043E\u043B\u0449\u0438\u043D\u043E\u0439 22 \u043C\u043C, \u0441\u043E \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u044B\u043C \u0441\u0440\u0435\u0434\u043D\u0438\u043C \u0441\u043B\u043E\u0435\u043C \u0438 \u0438\u0437\u043D\u043E\u0441\u043E\u0441\u0442\u043E\u0439\u043A\u0438\u043C \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u043C \u043B\u0430\u043A\u043E\u043C. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0441\u0432\u043E\u0435\u043C\u0443 \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u043C\u0443 \u044D\u043D\u0435\u0440\u0433\u043E\u043F\u043E\u0433\u043B\u0430\u0449\u0430\u044E\u0449\u0435\u043C\u0443 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044E, \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0441\u0443\u0441\u0442\u0430\u0432\u044B \u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u0430, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044E \u0432\u044B\u0434\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, 0, 1, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], [], null, null)], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 1, 0, currVal_0); var currVal_1 = ""; _ck(_v, 3, 0, currVal_1); var currVal_2 = ""; _ck(_v, 11, 0, currVal_2); var currVal_3 = ""; _ck(_v, 13, 0, currVal_3); var currVal_4 = "column"; var currVal_5 = "row"; _ck(_v, 19, 0, currVal_4, currVal_5); var currVal_6 = "50"; _ck(_v, 21, 0, currVal_6); var currVal_7 = "50"; _ck(_v, 25, 0, currVal_7); var currVal_8 = "column"; var currVal_9 = "row"; _ck(_v, 29, 0, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).align === "end"); _ck(_v, 33, 0, currVal_10); }); }
function View_ProductItemDetailComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-product-item-detail", [], null, null, null, View_ProductItemDetailComponent_0, RenderType_ProductItemDetailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _product_item_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductItemDetailComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductItemDetailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-product-item-detail", _product_item_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductItemDetailComponent"], View_ProductItemDetailComponent_Host_0, { product: "product", category_id: "category_id" }, {}, []);



/***/ }),

/***/ "./src/app/components/shared/product-item-detail/product-item-detail.component.scss.shim.ngstyle.js":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-detail/product-item-detail.component.scss.shim.ngstyle.js ***!
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

/***/ "./src/app/components/shared/product-item-detail/product-item-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-detail/product-item-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemDetailComponent", function() { return ProductItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ProductItemDetailComponent = /** @class */ (function () {
    function ProductItemDetailComponent() {
    }
    ProductItemDetailComponent.prototype.ngOnInit = function () {
    };
    return ProductItemDetailComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-dashboard-dashboard-module-ngfactory~components-products-products-module-ngfactory.js.map