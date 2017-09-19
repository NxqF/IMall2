webpackJsonp([4],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shoplist__ = __webpack_require__(424);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoplistPageModule", function() { return ShoplistPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShoplistPageModule = (function () {
    function ShoplistPageModule() {
    }
    return ShoplistPageModule;
}());
ShoplistPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shoplist__["a" /* ShoplistPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shoplist__["a" /* ShoplistPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__shoplist__["a" /* ShoplistPage */]
        ]
    })
], ShoplistPageModule);

//# sourceMappingURL=shoplist.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userstorage_userstorage__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoplistPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoplistPage = (function () {
    function ShoplistPage(navCtrl, navParams, navigationService, userstorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.userstorage = userstorage;
        this.setUser();
        this.LoadShopList();
    }
    ShoplistPage.prototype.LoadShopList = function () {
        var _this = this;
        this.navigationService.getShopList().subscribe(function (shopList) {
            _this.shopList = shopList;
            _this.filterMsg();
        });
    };
    ShoplistPage.prototype.setUser = function () {
        var user = this.navParams.get('Account');
        if (!user) {
            var user = this.userstorage.getUser();
        }
        if (user) {
            this.userId = user._id;
        }
    };
    ShoplistPage.prototype.filterMsg = function () {
        this.fShopList = [];
        var list = this.shopList;
        for (var x = 0; x < list.length; x++) {
            if (list[x].userId == this.userId) {
                this.fShopList.push(list[x]);
            }
        }
        console.log(this.fShopList);
    };
    return ShoplistPage;
}());
ShoplistPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-shoplist',template:/*ion-inline-start:"G:\ionic\mall\src\pages\shoplist\shoplist.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>购物列表</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let itemss of fShopList;let i =index">\n    <ion-card>\n      <div class="card-bar">\n        <div class="bar-padding">\n          <span>下单时间:{{itemss.created_at}}</span>\n        </div>\n      </div>\n      <ion-list class="content-mg">\n          <ion-item *ngFor="let items of itemss.shoplist;let i =index" class="botLine">\n              <ion-thumbnail item-start>\n                <img src={{items.mainpic[0]}} alt="">\n              </ion-thumbnail>\n              <div style="-webkit-line-clamp: 2;\n              -webkit-box-orient: vertical;overflow: hidden;\n              text-overflow: ellipsis;\n              display: -webkit-box;">\n                <p> {{items.name}} </p>\n                <p class="gray"> {{items.params}}</p>\n              </div>\n              <button ion-button clear item-end class="price"><p>¥{{items.prices}}</p></button>\n              <button ion-button clear item-end class="num">\n                <span>数量：{{items.num}}</span>\n            </button>\n          </ion-item>\n      </ion-list>\n\n\n      <div class="card-bar">\n        <div class="bar-padding">\n          <span>总价：</span><span class="price-num">{{itemss.totalprice}}</span>\n        </div>\n      </div>\n\n    </ion-card>\n\n  </div>\n  <!-- <div class="card-bar">\n        <div class="bar-padding">\n          <span>下单时间:{{itemss.created_at}}</span>\n        </div>\n      </div>\n\n      <div class="content-mg">\n\n        <div *ngFor="let items of itemss.shoplist;let i =index" class="back">\n          <div>{{items.name}}</div>\n          <div>\n            <span *ngFor="let item of items.params;" class="params">{{item}} | </span>\n          </div>\n          <div>\n            <span>¥{{items.prices}} x {{items.num}}台</span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class="card-bar">\n        <div class="bar-padding">\n          <span>总价：</span><span class="price-num">{{itemss.totalprice}}</span>\n        </div>\n      </div>\n     -->\n\n  <!-- <ion-list>\n      <ion-item *ngFor="let items of shopCart;let i =index">\n          <ion-thumbnail item-start >\n              <img src={{items.mainpic[0]}} alt="">\n          </ion-thumbnail>\n          <div style="-webkit-line-clamp: 2;\n                      -webkit-box-orient: vertical;overflow: hidden;\n                      text-overflow: ellipsis;\n                      display: -webkit-box;">\n              <p style="font-size:1.5rem"> {{items.name}} </p>\n              <p class="gray"> {{items.params}}</p>\n          </div>\n          <button ion-button clear item-end class="price"><p>¥{{items.prices}}</p></button>\n          <button ion-button clear item-end class="trash" (click)=\'deleteProduct(i)\'><ion-icon name="md-trash"></ion-icon></button>\n          <button ion-button clear item-end class="num">\n              <p>数量:</p>\n              <input type="number" [(ngModel)]=shopCart[i].num (change)=\'valueDefine($event,i)\'>\n          </button>\n      </ion-item>\n  </ion-list> -->\n\n</ion-content>'/*ion-inline-end:"G:\ionic\mall\src\pages\shoplist\shoplist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_userstorage_userstorage__["a" /* UserstorageProvider */]])
], ShoplistPage);

//# sourceMappingURL=shoplist.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map