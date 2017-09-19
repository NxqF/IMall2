webpackJsonp([14],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = (function () {
    function ContactPageModule() {
    }
    return ContactPageModule;
}());
ContactPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]
        ]
    })
], ContactPageModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userstorage_userstorage__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());
var ContactPage = (function () {
    function ContactPage(navCtrl, modalCtrl, navigationService, userstorage, toastCtrl, event) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navigationService = navigationService;
        this.userstorage = userstorage;
        this.toastCtrl = toastCtrl;
        this.event = event;
        this.userName = '请登录';
        this.getUser();
    }
    ContactPage.prototype.ionViewDidEnter = function () {
        if (this.user) {
            this.userName = "HI," + this.user.name;
        }
    };
    ContactPage.prototype.logIn = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AccountPage');
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.userName = "HI," + data;
                _this.getUser();
            }
            else
                (_this.userName = '请登录',
                    _this.clearUser(),
                    _this.getUser());
        });
        modal.present();
    };
    ContactPage.prototype.askProblem = function () {
        var modal = this.modalCtrl.create('ProblemPage');
        modal.present();
    };
    ContactPage.prototype.showShopList = function () {
        var user = this.userstorage.getUser();
        if (!user) {
            this.logIn();
        }
        else {
            if (user.role == '5951c2b53afd231d8437173d') {
                var modal = this.modalCtrl.create('ShoplistPage');
                modal.present();
            }
            else if (user.role == '5951c3063afd231d8437173e') {
                var modal = this.modalCtrl.create('BuyerPage');
                modal.present();
            }
        }
    };
    ContactPage.prototype.getUser = function () {
        this.user = this.userstorage.getUser();
    };
    ContactPage.prototype.clearUser = function () {
        this.userstorage.clearUser();
    };
    ContactPage.prototype.askService = function () {
        var user = this.userstorage.getUser();
        if (!user) {
            this.logIn();
        }
        else {
            if (user.role == '5951c2b53afd231d8437173d') {
                var modal = this.modalCtrl.create('ChatPage');
                modal.present();
            }
            else if (user.role == '5951c3063afd231d8437173e') {
                var modal = this.modalCtrl.create('CustomerservicePage');
                modal.present();
            }
        }
    };
    ContactPage.prototype.pageUnBuild = function () {
        var toast = this.toastCtrl.create({
            message: '没有符合条件的订单',
            duration: 1000
        });
        toast.present();
    };
    ContactPage.prototype.showIntro = function () {
        var modal = this.modalCtrl.create('IntroPage');
        modal.present();
    };
    ContactPage.prototype.proEdit = function () {
        this.navCtrl.push('ProductInsPage');
    };
    ContactPage.prototype.proDel = function () {
        this.navCtrl.push('ProductDelPage');
    };
    return ContactPage;
}());
ContactPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"G:\ionic\mall\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      用户\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-grid no-padding *ngIf=\'user==null\'>\n        <ion-row align-items-center class="rnopad" (click)=\'logIn()\' >\n          <ion-col col-3 >\n            <img src="./assets/pic/avatar-out.png" alt="">\n          </ion-col>\n          <ion-col col-4>\n              <p>点击登录</p>\n          </ion-col>\n        </ion-row>\n      <ion-row  class="font-s history" text-center>\n        <ion-col><ion-icon name=\'ios-star-outline\'></ion-icon><p>商品收藏</p></ion-col>\n        <ion-col><ion-icon name=\'ios-pricetags-outline\'></ion-icon><p>店铺收藏</p></ion-col>\n        <ion-col><ion-icon name=\'ios-bookmarks-outline\'></ion-icon><p>内容收藏</p></ion-col>\n        <ion-col><ion-icon name=\'ios-paw-outline\'></ion-icon><p>足迹</p></ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid no-padding  *ngIf=\'user\'>\n      <ion-row align-items-center class="rnopad" (click)=\'logIn()\'>\n        <ion-col col-3 >\n          <img src="./assets/pic/avatar-in.png" alt="">\n        </ion-col>\n        <ion-col col-4>\n            <p>{{userName}}</p>\n        </ion-col>\n        <ion-col col-5 no-padding>\n          <div class="taonum">\n            <ion-icon name="heart" class="taomar"></ion-icon> 淘气值0 >\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class="font-s pad-5" text-center>\n        <ion-col><h2>0</h2><p>商品收藏</p></ion-col>\n        <ion-col><h2>0</h2><p>店铺收藏</p></ion-col>\n        <ion-col><h2>0</h2><p>内容收藏</p></ion-col>\n        <ion-col><h2>0</h2><p>足迹</p></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header class="tooltitle">\n      <ion-grid no-padding>\n        <ion-row justify-content-between >\n          <ion-col col-3 class="font-x">我的订单</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-grid>\n      <ion-row align-items-center text-center>\n        <ion-col col-4 (click)=\'showShopList()\'>\n          <ion-icon name=\'cube\' color=primary class="pad-5"></ion-icon>\n          <p>待发货</p>\n        </ion-col>\n        <ion-col col-4 (click)=\'pageUnBuild()\'>\n          <ion-icon name=\'paper-plane\' color=primary class="pad-5"></ion-icon>\n          <p>待收货</p>\n        </ion-col>\n        <ion-col col-4 (click)=\'pageUnBuild()\'>\n          <ion-icon name=\'chatbubbles\' color=primary class="pad-5"></ion-icon>\n          <p>待评价</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n  <ion-card>\n      <ion-card-header class="tooltitle">\n        <ion-grid no-padding>\n          <ion-row justify-content-between >\n            <ion-col col-3 class="font-x">必备工具</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n  \n      <ion-grid>\n        <ion-row align-items-center text-center>\n          <ion-col col-4  (click)=\'askService()\'>\n            <ion-icon name=\'headset\' color=primary class="pad-5"></ion-icon>\n            <p>阿里小蜜</p>\n          </ion-col>\n          <ion-col col-4 (click)=\'askProblem()\'>\n            <ion-icon name=\'search\' color=primary  class="pad-5"></ion-icon>\n            <p>知识库</p>\n          </ion-col>\n          <ion-col col-4 (click)="showIntro()">\n              <ion-icon name=\'book\' color=primary  class="pad-5"></ion-icon>\n              <p>使用说明</p>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n  <ion-card *ngIf=\'user&&user.role=="5951c3063afd231d8437173e"\'>\n    <ion-card-header class="tooltitle">\n      <ion-grid no-padding>\n        <ion-row justify-content-between >\n          <ion-col col-3 class="font-x">编辑工具</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-grid>\n      <ion-row align-items-center text-center>\n        <ion-col col-4  (click)=\'proEdit()\'>\n          <ion-icon name=\'add\' color=primary class="pad-5"></ion-icon>\n          <p>增加商品</p>\n        </ion-col>\n        <ion-col col-4 (click)=\'proDel()\'>\n          <ion-icon name=\'trash\' color=primary  class="pad-5"></ion-icon>\n          <p>删除商品</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n    \n\n</ion-content>'/*ion-inline-end:"G:\ionic\mall\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_userstorage_userstorage__["a" /* UserstorageProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map