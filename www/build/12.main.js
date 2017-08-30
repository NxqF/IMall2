webpackJsonp([12],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(404);
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

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
                this.showToast('User was already exist');
                this.existing = true;
            }
        }
    };
    AccountPage.prototype.onSignUp = function (value) {
        var _this = this;
        if (this.existing == false) {
            this.itemtypesService.addAccounts(value.name, value.password).subscribe(function () {
                _this.showToast('User SignUp success');
                _this.existing = true;
                _this.loadAccounts();
            });
        }
        else {
            this.showToast('User was already exist');
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
                this.showToast('User was unExist');
            }
        }
    };
    AccountPage.prototype.onlogIn = function (account) {
        if (this.unExisting == true) {
            this.showToast('User was unExist');
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
                    this.showToast('password was incorrect');
                }
            }
        }
    };
    AccountPage.prototype.setUser = function (userInfo) {
        return userInfo;
    };
    AccountPage.prototype.removeAccount = function (id) {
        var _this = this;
        for (var x = 0; x < this.accounts.length; x++) {
            if (id.name == this.accounts[x].name && id.password == this.accounts[x].password) {
                this.itemtypesService.deleteAccounts(this.accounts[x]._id).subscribe(function () {
                    _this.showToast('User was already delete');
                });
            }
            else if (x == this.accounts.length) {
                this.showToast('User was unExist');
            }
        }
    };
    return AccountPage;
}());
AccountPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"H:\ionic\mall\src\pages\account\account.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>账户中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div padding>\n    <ion-segment [(ngModel)]="users">\n      <ion-segment-button value="logIn">\n        已注册账户\n      </ion-segment-button>\n      <ion-segment-button value="signUp">\n        注册新账户\n      </ion-segment-button>\n      <ion-segment-button value="delAccount">\n        删除账户\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <!--第一组-->\n\n  <div [ngSwitch]="users">\n    <ion-list *ngSwitchCase="\'logIn\'">\n      <form (ngSubmit)=\'onlogIn(f.value)\' #f=\'ngForm\'>\n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type=\'number\' name=\'name\' ngModel required (change)=\'ifAccountUnExist(f.value)\'></ion-input>\n          <!--(change)=\'ifAccountUnExist(f.value)\'-->\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type=\'password\' name=\'password\' ngModel required></ion-input>\n        </ion-item>\n        <button ion-button block type=\'submit\' [disabled]=\'!f.valid\'>log In</button>\n      </form>\n    </ion-list>\n\n    <!--第二组-->\n\n    <ion-list *ngSwitchCase="\'signUp\'">\n      <form (ngSubmit)=\'onSignUp(f.value)\' #f=\'ngForm\'>\n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type=\'number\' name=\'name\' ngModel required (change)=\'ifAccountExist(f.value)\'></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type=\'password\' name=\'password\' ngModel required></ion-input>\n        </ion-item>\n        <button ion-button block type=\'submit\' [disabled]=\'!f.valid\'>Create  Account</button>\n      </form>\n    </ion-list>\n\n    <!--第三组-->\n\n    <ion-list *ngSwitchCase="\'delAccount\'">\n      <form (ngSubmit)=\'removeAccount(f.value)\' #f=\'ngForm\'>\n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type=\'number\' name=\'name\' ngModel required ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type=\'password\' name=\'password\' ngModel required></ion-input>\n        </ion-item>\n        <button ion-button block type=\'submit\' [disabled]=\'!f.valid\'>Delete  Account</button>\n      </form>\n    </ion-list>\n    \n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"H:\ionic\mall\src\pages\account\account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_itemtypes_service_itemtypes_service__["a" /* ItemtypesService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_userstorage_userstorage__["a" /* UserstorageProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map