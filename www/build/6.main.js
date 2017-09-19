webpackJsonp([6],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_ins__ = __webpack_require__(421);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInsPageModule", function() { return ProductInsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductInsPageModule = (function () {
    function ProductInsPageModule() {
    }
    return ProductInsPageModule;
}());
ProductInsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_ins__["a" /* ProductInsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_ins__["a" /* ProductInsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__product_ins__["a" /* ProductInsPage */]
        ]
    })
], ProductInsPageModule);

//# sourceMappingURL=product-ins.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_itemtypes_service_itemtypes_service__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductInsPage = (function () {
    function ProductInsPage(navCtrl, navParams, itemtypesService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemtypesService = itemtypesService;
        this.toastCtrl = toastCtrl;
    }
    ProductInsPage.prototype.proIns = function (value) {
        var _this = this;
        this.itemtypesService.addItemTypes(value.name).subscribe(function () {
            _this.showToast();
        });
    };
    ProductInsPage.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: '增加成功',
            duration: 1000
        });
        toast.present();
    };
    return ProductInsPage;
}());
ProductInsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-product-ins',template:/*ion-inline-start:"G:\ionic\mall\src\pages\product-ins\product-ins.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>产品增加</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      <form (ngSubmit)=\'proIns(f.value)\' #f=\'ngForm\'>\n        <ion-item>\n          <ion-label floating>产品类别</ion-label>\n          <ion-input type=\'text\' name=\'name\' ngModel required></ion-input>\n        </ion-item>\n        <button ion-button block type=\'submit\' [disabled]=\'!f.valid\'>提交</button>\n      </form>\n\n</ion-content>\n'/*ion-inline-end:"G:\ionic\mall\src\pages\product-ins\product-ins.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_itemtypes_service_itemtypes_service__["a" /* ItemtypesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], ProductInsPage);

//# sourceMappingURL=product-ins.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map