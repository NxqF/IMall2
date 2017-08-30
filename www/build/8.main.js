webpackJsonp([8],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__params__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamsPageModule", function() { return ParamsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ParamsPageModule = (function () {
    function ParamsPageModule() {
    }
    return ParamsPageModule;
}());
ParamsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__params__["a" /* ParamsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__params__["a" /* ParamsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__params__["a" /* ParamsPage */]
        ]
    })
], ParamsPageModule);

//# sourceMappingURL=params.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParamsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParamsPage = (function () {
    function ParamsPage(navCtrl, navParams, navigationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.getParams();
        this.paramsFilter();
    }
    ParamsPage.prototype.getParams = function () {
        this.params = this.navigationService.getParams();
    };
    ParamsPage.prototype.paramsFilter = function () {
        var x = this.navParams.get('x');
        for (var y = 0; y < this.params.length; y++) {
            this.params[y].option = this.params[y].params[0];
            if (this.params[y].productTypesId != x) {
                this.params.splice(y, 1);
                y -= 1;
            }
        }
    };
    ParamsPage.prototype.goPrices = function () {
        for (var y = 0; y < this.params.length; y++) {
            this.params[y].options = this.params[y].name + ':' + this.params[y].option;
        }
        this.navCtrl.push('PricesPage', { 'params': this.params });
    };
    return ParamsPage;
}());
ParamsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-params',template:/*ion-inline-start:"H:\ionic\mall\src\pages\params\params.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>参数</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list radio-group *ngFor="let items of params;let i=index;" [(ngModel)]="params[i].option">\n    <ion-list-header no-lines>\n      {{items.name}}\n    </ion-list-header>\n    <ion-item *ngFor=\'let item of items.params\'>\n      <ion-label>{{item}}</ion-label>\n      <ion-radio value="{{item}}"></ion-radio>\n    </ion-item>\n  </ion-list>\n  <button ion-button (click)=\'goPrices()\' full>go</button>\n</ion-content>'/*ion-inline-end:"H:\ionic\mall\src\pages\params\params.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */]])
], ParamsPage);

//# sourceMappingURL=params.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map