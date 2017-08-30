webpackJsonp([1],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producttypes__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_producttype_filter_pipe__ = __webpack_require__(418);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducttypesPageModule", function() { return ProducttypesPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProducttypesPageModule = (function () {
    function ProducttypesPageModule() {
    }
    return ProducttypesPageModule;
}());
ProducttypesPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__producttypes__["a" /* ProducttypesPage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_producttype_filter_pipe__["a" /* ProductTypeFilter */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__producttypes__["a" /* ProducttypesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__producttypes__["a" /* ProducttypesPage */]
        ]
    })
], ProducttypesPageModule);

//# sourceMappingURL=producttypes.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducttypesPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProducttypesPage = (function () {
    function ProducttypesPage(navCtrl, navParams, navigationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.filter = [{ itemTypeId: '' }];
        var x = navParams.get('x');
        this.productTypes = this.navigationService.getProductTypes();
        this.filterSet(x);
    }
    ProducttypesPage.prototype.filterSet = function (x) {
        this.filter.splice(0, 1, { itemTypeId: x });
    };
    ProducttypesPage.prototype.goParams = function (x) {
        this.navCtrl.push('ParamsPage', { 'x': x });
    };
    return ProducttypesPage;
}());
ProducttypesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-producttypes',template:/*ion-inline-start:"H:\ionic\mall\src\pages\producttypes\producttypes.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>产品种类</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <button ion-button full *ngFor="let item of productTypes | producttypefilter:filter[0] ;let i = index" (click)=\'goParams(item._id)\'>\n        {{item.name}}\n      </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"H:\ionic\mall\src\pages\producttypes\producttypes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */]])
], ProducttypesPage);

//# sourceMappingURL=producttypes.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTypeFilter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductTypeFilter = (function () {
    function ProductTypeFilter() {
    }
    ProductTypeFilter.prototype.transform = function (items, filter) {
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
    ProductTypeFilter.prototype.applyFilter = function (product, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (product[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (product[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return ProductTypeFilter;
}());
ProductTypeFilter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Pipe */])({
        name: 'producttypefilter',
        pure: false
    })
], ProductTypeFilter);

//# sourceMappingURL=producttype-filter.pipe.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map