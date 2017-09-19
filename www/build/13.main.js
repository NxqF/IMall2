webpackJsonp([13],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(414);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homepage_data_homepage_data__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, homepageData) {
        this.navCtrl = navCtrl;
        this.homepageData = homepageData;
        this.page = homepageData.page;
        this.slide = homepageData.slide;
    }
    HomePage.prototype.goItemTypes = function () {
        this.navCtrl.push('ItemtypesPage');
    };
    HomePage.prototype.goProductTypes = function (x) {
        this.navCtrl.push('ProducttypesPage', { 'x': x._id, 'name': x.name });
    };
    HomePage.prototype.goParams = function (x) {
        this.navCtrl.push('ParamsPage', { 'x': x.productTypesId });
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"G:\ionic\mall\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-searchbar placeholder=\'search\' type=\'text\' (click)=\'goItemTypes()\'></ion-searchbar>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div class="wi-top-cont clearfix">\n        <div class="wi-average-wrap row">\n            <div class="wi-main-flex2 font-s col" (click)=\'goProductTypes(page[0])\'>\n                <div class="wi-main-item">\n                    <div class="wi-top-pic">\n                        <img src="http://s-378506.gotocdn.com/pic/logo/sj.png"></div>\n                </div>\n                手机数码\n            </div>\n            <div class="wi-main-flex2 font-s col" (click)=\'goProductTypes(page[1])\'>\n                <div class="wi-main-item">\n                    <div class="wi-top-pic">\n                        <img src="http://s-378506.gotocdn.com/pic/logo/dn.png"></div>\n                </div>\n                电脑配件\n            </div>\n            <div class="wi-main-flex2 font-s col" (click)=\'goProductTypes(page[2])\'>\n                <div class="wi-main-item">\n                    <div class="wi-top-pic">\n                        <img src="http://s-378506.gotocdn.com/pic/logo/book.png"></div>\n                </div>\n                图书\n            </div>\n            <div class="wi-main-flex2 font-s col" (click)=\'goProductTypes(page[3])\'>\n                <div class="wi-main-item">\n                    <div class="wi-top-pic">\n                        <img src="http://s-378506.gotocdn.com/pic/logo/hzp.png"></div>\n                </div>\n                美妆个护\n            </div>\n            <div class="wi-main-flex2 font-s col" (click)=\'goProductTypes(page[4])\'>\n                <div class="wi-main-item">\n                    <div class="wi-top-pic">\n                        <img src="http://s-378506.gotocdn.com/pic/logo/jiadian.png"></div>\n                </div>\n                家用电器\n            </div>\n        </div>\n    </div>\n\n    <ion-slides class="mainSlide" autoplay=\'3000\' loop=\'true\' pager=\'true\'>\n            <ion-slide (click)=\'goParams(page[item.id])\'  *ngFor="let item of slide;">\n                <img src={{item.pic}} alt="">\n            </ion-slide>\n        </ion-slides>\n\n    <div class="title">\n        精选市场\n    </div>\n\n    <ion-grid no-padding>\n        <ion-row>\n            <ion-col col-5 (click)=\'goParams(page[9])\'>\n                <img src="http://s-378506.gotocdn.com/pic/banner/hga1.jpg" alt="">\n            </ion-col>\n            <ion-col col-7>\n                <ion-row>\n                    <ion-col (click)=\'goParams(page[10])\' class="bline"><img src="http://s-378506.gotocdn.com/pic/banner/hgb3.jpg" alt=""></ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="bline" (click)=\'goParams(page[15])\'><img src="http://s-378506.gotocdn.com/pic/banner/hgc4.jpg" alt=""></ion-col>\n                    <ion-col class="bline" (click)=\'goParams(page[16])\'><img src="http://s-378506.gotocdn.com/pic/banner/hgd2.jpg" alt=""></ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid no-padding>\n        <ion-row align-items-center>\n            <ion-col class="title">品牌活动</ion-col>\n            <ion-col col-7>\n                <ion-slides class="subSlide" direction=\'vertical\' autoplay=\'3000\' loop=\'true\' no-padding>\n                    <ion-slide (click)=\'goParams(page[12])\'>\n                        <span class="font-xs">·明天，ecco参加天猫超级品牌日</span>\n                    </ion-slide>\n                    <ion-slide (click)=\'goParams(page[14])\'>\n                        <span class="font-xs">·后天，茅台参加天猫超级品牌日</span>\n                    </ion-slide>\n                    <ion-slide (click)=\'goParams(page[13])\'>\n                        <span class="font-xs">·大后天，斯凯奇参加超级品牌日</span>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid no-padding>\n        <ion-row>\n            <ion-col col-5 (click)=\'goParams(page[8])\'>\n                <img src="http://s-378506.gotocdn.com/pic/banner/hga2.jpg" alt="">\n            </ion-col>\n            <ion-col col-7>\n                <ion-row>\n                    <ion-col (click)=\'goParams(page[11])\' class="bline"><img src="http://s-378506.gotocdn.com/pic/banner/hgb2.jpg" alt=""></ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="bline" (click)=\'goParams(page[18])\'><img src="http://s-378506.gotocdn.com/pic/banner/hgc3.jpg" alt=""></ion-col>\n                    <ion-col class="bline" (click)=\'goParams(page[17])\'><img src="http://s-378506.gotocdn.com/pic/banner/hgd3.jpg" alt=""></ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"G:\ionic\mall\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_homepage_data_homepage_data__["a" /* HomepageData */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map