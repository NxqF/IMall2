webpackJsonp([10],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(407);
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

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
            this.userName = "\u6B22\u8FCE " + this.user.name + " (\u70B9\u51FB\u9000\u51FA\u767B\u5F55)";
        }
    };
    ContactPage.prototype.logIn = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AccountPage');
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.userName = "\u6B22\u8FCE " + data + " (\u70B9\u51FB\u9000\u51FA\u767B\u5F55)";
                _this.getUser();
            }
            else
                (_this.userName = '请登录',
                    _this.getUser(),
                    _this.clearUser());
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
            var toast = this.toastCtrl.create({
                message: '请登录',
                duration: 1000
            });
            toast.present();
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
            var toast = this.toastCtrl.create({
                message: '请登录',
                duration: 1000
            });
            toast.present();
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
    return ContactPage;
}());
ContactPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"H:\ionic\mall\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      用户\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-item (click)=\'logIn()\'>\n      <ion-icon name="contact" item-left large color=\'primary\'></ion-icon>\n      <p>{{userName}}</p>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-item (click)=\'askService()\'>\n      <ion-icon name="people" item-left large color=\'primary\'></ion-icon>\n      <p>客服中心</p>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-item (click)=\'askProblem()\'>\n      <ion-icon name="help" item-left large color=\'primary\'></ion-icon>\n      <p>常见问题</p>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-item (click)=\'showShopList()\'>\n      <ion-icon name="cart" item-left large color=\'primary\'></ion-icon>\n      <p>购物清单</p>\n    </ion-item>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"H:\ionic\mall\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_userstorage_userstorage__["a" /* UserstorageProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map