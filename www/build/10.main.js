webpackJsonp([10],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__params__ = __webpack_require__(417);
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

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
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
        this.getPrices();
        this.priceChange();
    }
    ParamsPage.prototype.getParams = function () {
        this.params = this.navigationService.getParams();
    };
    ParamsPage.prototype.getPrices = function () {
        this.prices = this.navigationService.getPrices();
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
    };
    ParamsPage.prototype.PricesFilter = function () {
        var num;
        for (var x = 0; x < this.prices.length; x++) {
            num = 0;
            for (var y = 0; y < this.params.length; y++) {
                if (this.params[y].options == this.prices[x].params[y] && this.params[y].productTypesId == this.prices[x].productTypesId) {
                    num += 1;
                }
                if (num == this.params.length) {
                    this.price = this.prices.slice(x, x + 1);
                    return;
                }
            }
        }
    };
    ParamsPage.prototype.goShopCart = function () {
        // this.price[0].num = 1
        this.navigationService.loadShopCart(this.price[0]);
        this.navCtrl.pop();
        this.navCtrl.parent.select(1);
    };
    ParamsPage.prototype.priceChange = function () {
        this.goPrices();
        this.PricesFilter();
    };
    return ParamsPage;
}());
ParamsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-params',template:/*ion-inline-start:"G:\ionic\mall\src\pages\params\params.html"*/'<ion-content padding>\n\n  <ion-slides style="height:32rem;width:100%" autoplay=\'3000\' loop=\'true\' pager=\'true\' *ngFor="let items of price;">\n    <ion-slide *ngFor="let item of items.mainpic;">\n      <img src={{item}} alt="">\n    </ion-slide>\n  </ion-slides> \n\n  <div class="list">\n    <div class="item boxs price" *ngFor="let items of price;">\n      <section >\n        <div class="wordwrap font1">{{items.name}}</div>\n      </section>\n      <section class="martop">\n        <span class="red font1">单价:{{items.prices}}元</span>\n        <span class="redback font2">优惠促销</span>\n      </section>\n      <section class="martop">\n        <span class="font2 gray">价格</span>\n        <span class="line-th font2">¥{{items.prices*2}}</span>\n      </section>\n      <section class="row" text-center>\n        <span class="col font2 gray">快递：12.00</span>\n        <span class="col font2 gray">月销量851件</span>\n        <span class="col font2 gray">天津</span>\n      </section>\n    </div>\n\n    <div class="boxs">\n      <ion-list>\n        <ion-item *ngFor="let items of params;let i=index;">\n          <ion-label>{{items.name}}</ion-label>\n          <ion-select [(ngModel)]="params[i].option" okText="确认" cancelText="取消" (ionChange)=\'priceChange()\'>\n            <ion-option *ngFor=\'let item of items.params\' value="{{item}}" >{{item}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n\n\n\n    <div class="item borclear boxs">\n      <span class="font2 redbor red">促销</span><span class="font2"> 满1件，享包邮；不包邮地区：台湾，香港，澳门，海外</span><br>\n      <span class="font2 redbor red">积分</span><span class="font2"> 购买可得99积分</span>\n    </div>\n    <div class="item lrpad borclear">\n      <span class="font2">正品保证 . 极速退款 . 七天退换</span>\n    </div>\n    <div class="item lrpad borclear">\n      <ion-icon name="cart"></ion-icon> <span class="font2">全国1028家以上门店同款在售</span>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-row>\n      <ion-col>\n        <button ion-button full color="light" navPop>看看别的</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button full (click)=\'goShopCart()\'>加入购物车</button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"G:\ionic\mall\src\pages\params\params.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */]])
], ParamsPage);

//# sourceMappingURL=params.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map