webpackJsonp([7],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prices__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesPageModule", function() { return PricesPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PricesPageModule = (function () {
    function PricesPageModule() {
    }
    return PricesPageModule;
}());
PricesPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__prices__["a" /* PricesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prices__["a" /* PricesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__prices__["a" /* PricesPage */]
        ]
    })
], PricesPageModule);

//# sourceMappingURL=prices.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PricesPage = (function () {
    function PricesPage(navCtrl, navParams, navigationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.prices = this.navigationService.getPrices();
        this.price = this.PricesFilter();
    }
    PricesPage.prototype.PricesFilter = function () {
        var params = this.navParams.get('params'), num;
        for (var x = 0; x < this.prices.length; x++) {
            num = 0;
            for (var y = 0; y < params.length; y++) {
                if (params[y].options == this.prices[x].params[y]) {
                    num += 1;
                }
                if (num == params.length) {
                    return this.prices.slice(x, x + 1);
                }
            }
        }
    };
    PricesPage.prototype.goShopCart = function () {
        this.price[0].num = 1;
        this.navigationService.loadShopCart(this.price[0]);
        this.navCtrl.pop();
        this.navCtrl.parent.select(1);
    };
    return PricesPage;
}());
PricesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-prices',template:/*ion-inline-start:"H:\ionic\mall\src\pages\prices\prices.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>价格</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item-group *ngFor="let items of price;">\n      <ion-item-divider color="light">{{items.name}}</ion-item-divider>\n      <div *ngFor="let item of items.params;">\n        <ion-item>{{item}}</ion-item>\n      </div>\n      <ion-item class="red">单价:{{items.prices}}元</ion-item>\n    </ion-item-group>\n\n  </ion-card>\n\n  <ion-list>\n    <ion-row>\n      <ion-col>\n        <button ion-button full (click)="goShopCart()">\n          加入购物车\n        </button></ion-col>\n      <ion-col>\n        <button ion-button full color="light" navPop>\n          修改参数\n      </button></ion-col>\n    </ion-row>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"H:\ionic\mall\src\pages\prices\prices.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */]])
], PricesPage);

//# sourceMappingURL=prices.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map