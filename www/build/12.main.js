webpackJsonp([12],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(415);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = (function () {
    function IntroPageModule() {
    }
    return IntroPageModule;
}());
IntroPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]
        ]
    })
], IntroPageModule);

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroPage = (function () {
    function IntroPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    IntroPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create('PopoverPage');
        popover.onDidDismiss(function (data) {
            if (data != null) {
                _this.color = data;
            }
        });
        popover.present({
            ev: myEvent
        });
    };
    return IntroPage;
}());
IntroPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"G:\ionic\mall\src\pages\intro\intro.html"*/'<ion-header class={{color}}>\n\n  <ion-navbar>\n    <ion-title>项目介绍</ion-title>\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n          <span class="readMode">阅读模式</span><ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-left padding-right class={{color}}>\n\n  <ion-list>\n    <ion-item>\n      <h2>1、项目技术栈</h2>\n    </ion-item>\n    <ion-item>\n        <p>此项目使用ionic2框架开发，基于最新的angular，使用TypeScript进行开发，网络端使用了express搭建的WebApi，连接mongodb实现数据绑定。</p>\n    </ion-item>\n    <ion-item>\n        <h2>2、项目实现度</h2>\n      </ion-item>\n      <ion-item>\n          <p>作为1款商城类应用，已实现产品展示，选择，选购，绑定用户数据等基本功能（支付接口由于个人开发者无法申请，如果有人请我开店我就做上去，手动滑稽），\n            还有其他小功能如登录状态缓存、阿里小蜜、技术文档等。产品量不多，重复的编辑工作就不做了，产品和个人信息皆通过数据库存储。</p>\n      </ion-item>\n      <ion-item>\n          <h2>3、待改进计划(更新于2017.9.15)</h2>\n        </ion-item>\n        <ion-item>\n            <p>增加产品详情介绍页，产品评价，产品排序，注册验证，个人信息完善，定位功能，可能会修改数据表的结构等。\n            </p>\n        </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"G:\ionic\mall\src\pages\intro\intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map