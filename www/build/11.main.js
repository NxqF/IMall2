webpackJsonp([11],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itemtypes__ = __webpack_require__(416);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemtypesPageModule", function() { return ItemtypesPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemtypesPageModule = (function () {
    function ItemtypesPageModule() {
    }
    return ItemtypesPageModule;
}());
ItemtypesPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__itemtypes__["a" /* ItemtypesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__itemtypes__["a" /* ItemtypesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__itemtypes__["a" /* ItemtypesPage */]
        ]
    })
], ItemtypesPageModule);

//# sourceMappingURL=itemtypes.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemtypesPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemtypesPage = (function () {
    function ItemtypesPage(navCtrl, navigationService, event) {
        this.navCtrl = navCtrl;
        this.navigationService = navigationService;
        this.event = event;
        this.loadItemTypes();
    }
    ItemtypesPage.prototype.loadItemTypes = function () {
        var _this = this;
        this.navigationService.loadItemTypes();
        this.event.subscribe('itemTypes', function (data) {
            _this.itemTypes = data;
            _this.storeMsg = _this.itemTypes;
        });
    };
    ItemtypesPage.prototype.changeItemTypes = function () {
        this.itemTypes = this.storeMsg;
    };
    ItemtypesPage.prototype.goProductTypes = function (x) {
        this.navCtrl.push('ProducttypesPage', { 'x': x._id, 'name': x.name });
    };
    ItemtypesPage.prototype.setItems = function (ev) {
        this.changeItemTypes();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.itemTypes = this.itemTypes.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ItemtypesPage.prototype.onSetItem = function (en) {
        this.setItems(en);
    };
    return ItemtypesPage;
}());
ItemtypesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-itemtypes',template:/*ion-inline-start:"G:\ionic\mall\src\pages\itemtypes\itemtypes.html"*/'<ion-header>\n    \n      <ion-navbar>\n          <ion-searchbar placeholder=\'分类筛选\'  (ionInput)="onSetItem($event)" type=\'text\'></ion-searchbar>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    <ion-content padding>\n    \n        <div class="lrPad">\n            <div class="title">现有分类</div>\n            <div class="flex">\n                <div class="grbd" *ngFor="let item of itemTypes;let i = index;" (click)=\'goProductTypes(item)\'>{{item.name}}</div>\n            </div>\n        </div>\n\n    </ion-content>\n    '/*ion-inline-end:"G:\ionic\mall\src\pages\itemtypes\itemtypes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], ItemtypesPage);

//# sourceMappingURL=itemtypes.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map