webpackJsonp([16],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(409);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    return AccountPageModule;
}());
AccountPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]
        ]
    })
], AccountPageModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_itemtypes_service_itemtypes_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userstorage_userstorage__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountPage = (function () {
    function AccountPage(navCtrl, navParams, navigationService, itemtypesService, userstorage, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.itemtypesService = itemtypesService;
        this.userstorage = userstorage;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.users = 'logIn';
        this.accounts = [];
        this.loadAccounts();
        this.userRole = this.navigationService.getUserRoles();
    }
    AccountPage.prototype.loadAccounts = function () {
        this.accounts = this.navigationService.getAccounts();
    };
    AccountPage.prototype.showToast = function (value) {
        var toast = this.toastCtrl.create({
            message: value,
            duration: 1000
        });
        toast.present();
    };
    AccountPage.prototype.ifAccountExist = function (account) {
        this.loadAccounts();
        this.existing = false;
        for (var x = 0; x < this.accounts.length; x++) {
            if (account.name == this.accounts[x].name) {
                this.showToast('用户名已被注册');
                this.existing = true;
            }
        }
    };
    AccountPage.prototype.onSignUp = function (value) {
        var _this = this;
        if (this.existing == false) {
            this.itemtypesService.addAccounts(value.name, value.password).subscribe(function () {
                _this.showToast('注册成功');
                _this.existing = true;
                _this.loadAccounts();
            });
        }
        else {
            this.showToast('用户名已被注册');
        }
    };
    AccountPage.prototype.ifAccountUnExist = function (account) {
        this.loadAccounts();
        this.unExisting = false;
        for (var x = 0; x < this.accounts.length; x++) {
            if (account.name == this.accounts[x].name) {
                break;
            }
            else if (x == this.accounts.length - 1) {
                this.unExisting = true;
                this.showToast('用户不存在');
            }
        }
    };
    AccountPage.prototype.onlogIn = function (account) {
        if (this.unExisting == true) {
            this.showToast('用户不存在');
        }
        else if (this.unExisting == false) {
            for (var x = 0; x < this.accounts.length; x++) {
                if (account.name == this.accounts[x].name && account.password == this.accounts[x].password) {
                    var user = this.setUser(this.accounts[x]);
                    this.userstorage.saveUser(user);
                    this.viewCtrl.dismiss(this.accounts[x].name);
                    break;
                }
                else if (x == this.accounts.length - 1) {
                    this.showToast('密码错误');
                }
            }
        }
    };
    AccountPage.prototype.setUser = function (userInfo) {
        return userInfo;
    };
    return AccountPage;
}());
AccountPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"G:\ionic\mall\src\pages\account\account.html"*/'<ion-content padding style="background-image:url(./assets/pic/bjtp.jpg);background-repeat:no-repeat;background-size:100%;">\n\n  <div padding>\n    <ion-segment [(ngModel)]="users">\n      <ion-segment-button value="logIn">\n        已注册账户\n      </ion-segment-button>\n      <ion-segment-button value="signUp">\n        新用户注册\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <!--第一组-->\n\n  <div [ngSwitch]="users">\n    <ion-list *ngSwitchCase="\'logIn\'">\n      <form (ngSubmit)=\'onlogIn(f.value)\' #f=\'ngForm\'>\n        <ion-item>\n          <ion-label floating>账号</ion-label>\n          <ion-input type=\'number\' name=\'name\' ngModel required (change)=\'ifAccountUnExist(f.value)\'></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>密码</ion-label>\n          <ion-input type=\'password\' name=\'password\' ngModel required></ion-input>\n        </ion-item>\n        <button ion-button block type=\'submit\' [disabled]=\'!f.valid\'>登录</button>\n      </form>\n    </ion-list>\n\n    <!--第二组-->\n\n    <ion-list *ngSwitchCase="\'signUp\'">\n      <form (ngSubmit)=\'onSignUp(f.value)\' #f=\'ngForm\'>\n        <ion-item>\n          <ion-label floating>账号</ion-label>\n          <ion-input type=\'number\' name=\'name\' ngModel required (change)=\'ifAccountExist(f.value)\'></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>密码</ion-label>\n          <ion-input type=\'password\' name=\'password\' ngModel required></ion-input>\n        </ion-item>\n        <button ion-button block type=\'submit\' [disabled]=\'!f.valid\'>注册新账户</button>\n      </form>\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"G:\ionic\mall\src\pages\account\account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_itemtypes_service_itemtypes_service__["a" /* ItemtypesService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_userstorage_userstorage__["a" /* UserstorageProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=16.main.js.map