webpackJsonp([7],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_del__ = __webpack_require__(420);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDelPageModule", function() { return ProductDelPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDelPageModule = (function () {
    function ProductDelPageModule() {
    }
    return ProductDelPageModule;
}());
ProductDelPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_del__["a" /* ProductDelPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_del__["a" /* ProductDelPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__product_del__["a" /* ProductDelPage */]
        ]
    })
], ProductDelPageModule);

//# sourceMappingURL=product-del.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_itemtypes_service_itemtypes_service__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDelPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDelPage = (function () {
    function ProductDelPage(navCtrl, navParams, navigationService, event, itemtypesService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.event = event;
        this.itemtypesService = itemtypesService;
        this.toastCtrl = toastCtrl;
        this.loadItemTypes();
    }
    ProductDelPage.prototype.loadItemTypes = function () {
        var _this = this;
        this.navigationService.loadItemTypes();
        this.event.subscribe('itemTypes', function (data) {
            _this.itemTypes = data;
        });
    };
    ProductDelPage.prototype.removeAccount = function (id) {
        var _this = this;
        this.itemtypesService.deleteItemTypes(id).subscribe(function () {
            _this.loadItemTypes();
            _this.showToast();
        });
    };
    ProductDelPage.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: '删除成功',
            duration: 1000
        });
        toast.present();
    };
    return ProductDelPage;
}());
ProductDelPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-product-del',template:/*ion-inline-start:"G:\ionic\mall\src\pages\product-del\product-del.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>productDel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button  ion-button icon-right *ngFor="let item of itemTypes ;let i = index" (click)=\'removeAccount(item._id)\'>\n    {{item.name}}\n    <ion-icon name="trash"></ion-icon>\n  </button>\n\n</ion-content>'/*ion-inline-end:"G:\ionic\mall\src\pages\product-del\product-del.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__providers_itemtypes_service_itemtypes_service__["a" /* ItemtypesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], ProductDelPage);

//# sourceMappingURL=product-del.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map