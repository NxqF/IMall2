webpackJsonp([5],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopcart__ = __webpack_require__(414);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopcartPageModule", function() { return ShopcartPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShopcartPageModule = (function () {
    function ShopcartPageModule() {
    }
    return ShopcartPageModule;
}());
ShopcartPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shopcart__["a" /* ShopcartPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shopcart__["a" /* ShopcartPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__shopcart__["a" /* ShopcartPage */]
        ]
    })
], ShopcartPageModule);

//# sourceMappingURL=shopcart.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_itemtypes_service_itemtypes_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userstorage_userstorage__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopcartPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopcartPage = (function () {
    function ShopcartPage(navCtrl, navParams, navigationService, loadingCtrl, itemtypesService, userstorage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.loadingCtrl = loadingCtrl;
        this.itemtypesService = itemtypesService;
        this.userstorage = userstorage;
        this.toastCtrl = toastCtrl;
        this.shopCartNum = 0;
        this.totalPrice = 0;
    }
    ShopcartPage.prototype.ngDoCheck = function () {
        this.getShopCart();
        this.getShopCartNum();
        this.getTotalPrice();
    };
    ShopcartPage.prototype.getShopCart = function () {
        this.shopCart = this.navigationService.getShopCart();
    };
    ShopcartPage.prototype.getShopCartNum = function () {
        this.shopCartNum = this.navigationService.getShopCartNum();
    };
    ShopcartPage.prototype.getTotalPrice = function () {
        this.totalPrice = this.navigationService.getTotalPrice();
    };
    ShopcartPage.prototype.deleteProduct = function (x) {
        this.navigationService.deleteProduct(x);
    };
    ShopcartPage.prototype.valueDefine = function (event, i) {
        if (event.target.value > 99) {
            this.shopCart[i].num = 100;
        }
    };
    ShopcartPage.prototype.addToList = function () {
        var user = this.userstorage.getUser();
        if (!user) {
            var toast = this.toastCtrl.create({
                message: '未登录',
                duration: 1000
            });
            toast.present();
        }
        else {
            var loader = this.loadingCtrl.create({
                content: "添加至购物车...",
                duration: 500
            });
            loader.present();
            console.log(user._id, this.shopCart, this.totalPrice);
            this.addToShopList(user._id, this.shopCart, this.totalPrice);
            this.clearProduct();
        }
    };
    ShopcartPage.prototype.clearProduct = function () {
        var temp = this;
        setTimeout(function () {
            temp.navigationService.clearProduct();
        }, 1000);
    };
    ShopcartPage.prototype.addToShopList = function (userId, shoplist, totalprice) {
        this.itemtypesService.addToShopList(userId, shoplist, totalprice).subscribe();
    };
    return ShopcartPage;
}());
ShopcartPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-shopcart',template:/*ion-inline-start:"H:\ionic\mall\src\pages\shopcart\shopcart.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>购物车</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item-group *ngFor="let items of shopCart;let i =index">\n      <ion-item-divider color="light">{{items.name}}\n        <button ion-button item-right icon-only clear (click)=\'deleteProduct(i)\'>\n        <ion-icon name="md-trash"></ion-icon>\n      </button>\n      </ion-item-divider>\n      <div *ngFor="let item of items.params;">\n        <ion-item>{{item}}</ion-item>\n      </div>\n      <ion-item class="red">单价:{{items.prices}}元</ion-item>\n      <ion-item>\n        <ion-label>数量:</ion-label>\n        <ion-input type="number" [(ngModel)]=shopCart[i].num (change)=\'valueDefine($event,i)\'></ion-input>\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n\n  <div *ngIf=\'shopCartNum!=0\' padding>\n    <span>总费用</span>\n    <span class="orangeRed">￥{{totalPrice}}</span>\n    <button ion-button full (click)="addToList()" >结算</button>\n  </div>\n\n\n  <ion-card *ngIf=\'shopCartNum==0\'>\n    <ion-card-content>\n      <p>还未添加商品至购物车!</p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"H:\ionic\mall\src\pages\shopcart\shopcart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_itemtypes_service_itemtypes_service__["a" /* ItemtypesService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_userstorage_userstorage__["a" /* UserstorageProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], ShopcartPage);

//# sourceMappingURL=shopcart.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map