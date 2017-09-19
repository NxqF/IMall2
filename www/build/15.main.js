webpackJsonp([15],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyer__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerPageModule", function() { return BuyerPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyerPageModule = (function () {
    function BuyerPageModule() {
    }
    return BuyerPageModule;
}());
BuyerPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__buyer__["a" /* BuyerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buyer__["a" /* BuyerPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__buyer__["a" /* BuyerPage */]
        ]
    })
], BuyerPageModule);

//# sourceMappingURL=buyer.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyerPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyerPage = (function () {
    function BuyerPage(navCtrl, navParams, navigationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.filter = [{ role: '' }];
        this.loadAccounts();
    }
    BuyerPage.prototype.loadAccounts = function () {
        this.accounts = this.navigationService.getAccounts();
    };
    BuyerPage.prototype.push = function (i) {
        this.navCtrl.push('ShoplistPage', { 'Account': i });
    };
    return BuyerPage;
}());
BuyerPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-buyer',template:/*ion-inline-start:"G:\ionic\mall\src\pages\buyer\buyer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>买家</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor=\'let item of accounts;let i = index\' (click)=\'push(item)\'>\n      <ion-avatar item-left>\n        <img [src]=\'item.userImgUrl\'>\n      </ion-avatar>\n      <h2>{{item.userName}}</h2>\n      <p>{{item._id}}购买列表</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"G:\ionic\mall\src\pages\buyer\buyer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */]])
], BuyerPage);

//# sourceMappingURL=buyer.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map