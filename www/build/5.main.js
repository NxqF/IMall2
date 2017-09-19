webpackJsonp([5],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopcart__ = __webpack_require__(423);
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

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
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
    function ShopcartPage(navCtrl, navParams, navigationService, loadingCtrl, itemtypesService, userstorage, toastCtrl, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.loadingCtrl = loadingCtrl;
        this.itemtypesService = itemtypesService;
        this.userstorage = userstorage;
        this.toastCtrl = toastCtrl;
        this.event = event;
        this.shopCartNum = 0;
        this.totalPrice = 0;
        this.priceNum = 10;
        // this.prices = this.navigationService.getPrices()
        this.loadPrices();
    }
    ShopcartPage.prototype.loadPrices = function () {
        var _this = this;
        this.navigationService.loadPrices();
        this.event.subscribe('prices', function (data) {
            _this.prices = data;
            _this.priceSession = _this.prices.slice(0, 10);
        });
    };
    ShopcartPage.prototype.loadPrcieSession = function () {
        this.priceNum += 10;
        this.priceSession = this.prices.slice(0, this.priceNum);
    };
    ShopcartPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.loadPrcieSession();
            infiniteScroll.complete();
        }, 500);
    };
    ShopcartPage.prototype.ionViewDidEnter = function () {
        this.scrollToTop();
    };
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
        this.totalPrice = Math.round(this.totalPrice);
    };
    ShopcartPage.prototype.deleteProduct = function (x) {
        this.navigationService.deleteProduct(x);
    };
    ShopcartPage.prototype.valueDefine = function (event, i) {
        if (event.target.value > 99) {
            this.shopCart[i].num = 100;
        }
        if (event.target.value < 1) {
            this.shopCart[i].num = 1;
        }
    };
    ShopcartPage.prototype.addToList = function () {
        var user = this.userstorage.getUser();
        if (!user) {
            var toast = this.toastCtrl.create({
                message: '请先登录',
                duration: 1000
            });
            toast.present();
            this.navCtrl.parent.select(2);
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
    ShopcartPage.prototype.goParams = function (x) {
        this.navCtrl.push('ParamsPage', { 'x': x });
    };
    ShopcartPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return ShopcartPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Content */])
], ShopcartPage.prototype, "content", void 0);
ShopcartPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-shopcart',template:/*ion-inline-start:"G:\ionic\mall\src\pages\shopcart\shopcart.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>购物车</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="lightwhite" padding>\n\n    <ion-fab right bottom>\n        <button ion-fab mini (click)=\'scrollToTop()\' class="fab"><ion-icon name="arrow-up"></ion-icon></button>\n    </ion-fab>\n\n\n    <ion-list>\n        <ion-item *ngFor="let items of shopCart;let i =index" class="promarbot">\n            <ion-thumbnail item-start (click)=\'goParams(items.productTypesId)\'>\n                <img src={{items.mainpic[0]}} alt="">\n            </ion-thumbnail>\n            <div (click)=\'goParams(items.productTypesId)\' style="-webkit-line-clamp: 2;\n                        -webkit-box-orient: vertical;overflow: hidden;\n                        text-overflow: ellipsis;\n                        display: -webkit-box;">\n                <p style="font-size:1.5rem"> {{items.name}} </p>\n                <p class="gray"> {{items.params}}</p>\n            </div>\n            <button ion-button clear item-end class="price"><p>¥{{items.prices}}</p></button>\n            <button ion-button clear item-end class="trash" (click)=\'deleteProduct(i)\'><ion-icon name="md-trash"></ion-icon></button>\n            <button ion-button clear item-end class="num">\n                <p>数量:</p>\n                <input type="number" [(ngModel)]=shopCart[i].num (change)=\'valueDefine($event,i)\'>\n            </button>\n        </ion-item>\n    </ion-list>\n\n    <ion-grid class="subprice" *ngIf=\'shopCartNum!=0\'>\n        <ion-row (click)="addToList()" align-items-center style="text-align:center;">\n            <ion-col padding class="subl">合计：<span class="red">¥{{totalPrice}}</span> </ion-col>\n            <ion-col class="subr" padding>结算({{shopCartNum}})</ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <div class="item item-divider Tips tCenter" *ngIf=\'shopCartNum==0\'>\n        <div class="tipsmartop">\n            <span class="vline grayline marbottom"></span>\n            <ion-icon name="ios-cart-outline"></ion-icon>\n            <span class="vline grayline marbottom"></span>\n            <div class="spadding">\n                <p class="martop">购物车还是空的，</p>\n                <p class="martop">去挑几件中意的商品吧</p>\n            </div>\n        </div>\n    </div>\n\n    <div class="item favor lightwhite tCenter">\n        <span class="vline grayline leftline-width"></span>\n        <ion-icon color="primary" name="ios-heart-outline" class="heart"></ion-icon>\n        <span> 猜你喜欢</span>\n        <span class="vline grayline rightline-width"></span>\n    </div>\n\n    <div class="row bqitem1">\n        <div class="col bline" *ngFor="let items of priceSession;let i =index" (click)=\'goParams(items.productTypesId)\'>\n            <img src={{items.mainpic[0]}}>\n            <div class="textwrap marbottom" style="-webkit-box-orient: vertical;">\n                <p>{{items.name}}</p>\n            </div>\n            <span class="red">¥{{items.prices}}</span>\n            <span class="line-th">¥{{items.prices*2}}</span>\n        </div>\n        <div *ngIf=\'prices\' class="maxwidth">\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf=\'priceNum<prices.length\'>\n                <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="产品加载中····"></ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n    </div>\n\n    <div *ngIf=\'prices\'>\n        <a class="item item-divider spadding" *ngIf=\'priceNum>=prices.length\'>\n            <div class="endwidth">\n                <div class="endpic">\n                    <img src="http://s-378506.gotocdn.com/pic/other/end.jpg" alt="">\n                </div>\n                <p class="endtitle tCenter">喵，已经看到最后啦</p>\n            </div>\n        </a>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"G:\ionic\mall\src\pages\shopcart\shopcart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_itemtypes_service_itemtypes_service__["a" /* ItemtypesService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_userstorage_userstorage__["a" /* UserstorageProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], ShopcartPage);

//# sourceMappingURL=shopcart.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map