webpackJsonp([8],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problem__ = __webpack_require__(419);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemPageModule", function() { return ProblemPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProblemPageModule = (function () {
    function ProblemPageModule() {
    }
    return ProblemPageModule;
}());
ProblemPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__problem__["a" /* ProblemPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__problem__["a" /* ProblemPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__problem__["a" /* ProblemPage */]
        ]
    })
], ProblemPageModule);

//# sourceMappingURL=problem.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProblemPage = (function () {
    function ProblemPage(navCtrl, navParams, navigationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.initializeQuestion();
    }
    ProblemPage.prototype.initializeQuestion = function () {
        this.questions = this.navigationService.getQuestions();
    };
    ProblemPage.prototype.setItems = function (ev) {
        this.initializeQuestion();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.questions = this.questions.filter(function (item) {
                return (item.question.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.answer.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ProblemPage.prototype.onSetItem = function (en) {
        this.setItems(en);
    };
    return ProblemPage;
}());
ProblemPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-problem',template:/*ion-inline-start:"G:\ionic\mall\src\pages\problem\problem.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>知识库</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n<!--win10 google浏览器 微软中文输入法会造成文字重复输入 searchbar-->\n<ion-content padding>\n  <ion-searchbar (ionInput)="onSetItem($event)" [showCancelButton]="true" type=\'text\'></ion-searchbar>\n  <ion-card *ngFor="let item of questions">\n    <ion-item class="red">{{ item.question }}</ion-item>\n    <ion-card-content>\n      <p>{{ item.answer }}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"G:\ionic\mall\src\pages\problem\problem.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_navigation_service_navigation_service__["a" /* NavigationService */]])
], ProblemPage);

//# sourceMappingURL=problem.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map