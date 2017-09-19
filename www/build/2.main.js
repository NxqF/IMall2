webpackJsonp([2],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customerservice__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_itemtype_filter_pipe__ = __webpack_require__(426);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerservicePageModule", function() { return CustomerservicePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CustomerservicePageModule = (function () {
    function CustomerservicePageModule() {
    }
    return CustomerservicePageModule;
}());
CustomerservicePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__customerservice__["a" /* CustomerservicePage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_itemtype_filter_pipe__["a" /* ItemTypeFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customerservice__["a" /* CustomerservicePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__customerservice__["a" /* CustomerservicePage */]
        ]
    })
], CustomerservicePageModule);

//# sourceMappingURL=customerservice.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerservicePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerservicePage = (function () {
    function CustomerservicePage(navCtrl, navParams, navigationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.filter = [{ role: '' }];
        this.loadAccounts();
        this.filterSet();
    }
    CustomerservicePage.prototype.loadAccounts = function () {
        this.accounts = this.navigationService.getAccounts();
    };
    CustomerservicePage.prototype.push = function (i) {
        this.navCtrl.push('ChatPage', { 'Account': i, 'userRole': 'admin' });
    };
    CustomerservicePage.prototype.filterSet = function () {
        this.filter.splice(0, 1, { role: '5951c3063afd231d8437173e' });
    };
    return CustomerservicePage;
}());
CustomerservicePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-customerservice',template:/*ion-inline-start:"G:\ionic\mall\src\pages\customerservice\customerservice.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>客服中心</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor=\'let item of accounts| itemtypefilter:filter[0];let i = index\' (click)=\'push(item)\'>\n      <ion-avatar item-left>\n        <img [src]=\'item.userImgUrl\'>\n      </ion-avatar>\n      <h2>{{item.userName}}</h2>\n      <p>与账号{{item.name}}的对话列表</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"G:\ionic\mall\src\pages\customerservice\customerservice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */]])
], CustomerservicePage);

//# sourceMappingURL=customerservice.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemTypeFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ItemTypeFilterPipe = (function () {
    function ItemTypeFilterPipe() {
    }
    ItemTypeFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {ItemType} product The product to compare to the filter.
     * @param {ItemType} filter The filter to apply.
     * @return {boolean} True if book satisfies filters, false if not.
     */
    ItemTypeFilterPipe.prototype.applyFilter = function (product, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (product[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return true;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (product[field] !== filter[field]) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    return ItemTypeFilterPipe;
}());
ItemTypeFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'itemtypefilter',
        pure: false
    })
], ItemTypeFilterPipe);

//# sourceMappingURL=itemtype-filter.pipe.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map