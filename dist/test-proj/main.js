(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./page/page.module": [
		"./src/app/page/page.module.ts",
		"page-page-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-common/app-common.module.ts":
/*!*************************************************!*\
  !*** ./src/app/app-common/app-common.module.ts ***!
  \*************************************************/
/*! exports provided: AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return AppCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_editor_enum_editor_enum_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/editor-enum/editor-enum.component */ "./src/app/app-common/components/editor-enum/editor-enum.component.ts");
/* harmony import */ var _components_editor_text_editor_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/editor-text/editor-text.component */ "./src/app/app-common/components/editor-text/editor-text.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppCommonModule = /** @class */ (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _components_editor_enum_editor_enum_component__WEBPACK_IMPORTED_MODULE_2__["EditorEnumComponent"],
                _components_editor_text_editor_text_component__WEBPACK_IMPORTED_MODULE_3__["EditorTextComponent"]
            ],
            exports: [
                _components_editor_enum_editor_enum_component__WEBPACK_IMPORTED_MODULE_2__["EditorEnumComponent"],
                _components_editor_text_editor_text_component__WEBPACK_IMPORTED_MODULE_3__["EditorTextComponent"]
            ]
        })
    ], AppCommonModule);
    return AppCommonModule;
}());



/***/ }),

/***/ "./src/app/app-common/components/editor-enum/editor-enum.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/app-common/components/editor-enum/editor-enum.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n\t<label [for]=\"name\">{{label}}</label>\r\n\t<div class=\"radio\">\r\n\t\t<label *ngFor=\"let item of enumValues\">\r\n\t\t\t<input [name]=\"name\" type=\"radio\" [checked]=\"item.value==value\" (change)=\"updateValue(item.value)\" />\r\n\t\t\t{{item.text}}\r\n\t\t</label>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-common/components/editor-enum/editor-enum.component.less":
/*!******************************************************************************!*\
  !*** ./src/app/app-common/components/editor-enum/editor-enum.component.less ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-common/components/editor-enum/editor-enum.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/app-common/components/editor-enum/editor-enum.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditorEnumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorEnumComponent", function() { return EditorEnumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditorEnumComponent = /** @class */ (function () {
    function EditorEnumComponent() {
        this._value = null;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(EditorEnumComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (x) {
            this._value = x;
            this.valueChange.emit(this.value);
        },
        enumerable: true,
        configurable: true
    });
    EditorEnumComponent.prototype.ngOnInit = function () {
    };
    EditorEnumComponent.prototype.ngOnChanges = function (changes) {
        var enumValues = this.enumValues;
        if (enumValues && !enumValues.length) {
            var keys = [];
            for (var enumMember in enumValues) {
                if (!enumValues.hasOwnProperty(enumMember))
                    continue;
                var isValueProperty = parseInt(enumMember, 10) > 0;
                if (isValueProperty) {
                    keys.push({ value: enumMember, text: enumValues[enumMember] });
                }
            }
            this.enumValues = keys;
        }
    };
    EditorEnumComponent.prototype.updateValue = function (v) {
        this.value = v;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditorEnumComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditorEnumComponent.prototype, "enumValues", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditorEnumComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditorEnumComponent.prototype, "valueChange", void 0);
    EditorEnumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor-enum',
            template: __webpack_require__(/*! ./editor-enum.component.html */ "./src/app/app-common/components/editor-enum/editor-enum.component.html"),
            styles: [__webpack_require__(/*! ./editor-enum.component.less */ "./src/app/app-common/components/editor-enum/editor-enum.component.less")]
        })
    ], EditorEnumComponent);
    return EditorEnumComponent;
}());



/***/ }),

/***/ "./src/app/app-common/components/editor-text/editor-text.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/app-common/components/editor-text/editor-text.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n\t<input [(ngModel)]=\"value\" name=\"name\" />\r\n</div>"

/***/ }),

/***/ "./src/app/app-common/components/editor-text/editor-text.component.less":
/*!******************************************************************************!*\
  !*** ./src/app/app-common/components/editor-text/editor-text.component.less ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-common/components/editor-text/editor-text.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/app-common/components/editor-text/editor-text.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditorTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorTextComponent", function() { return EditorTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditorTextComponent = /** @class */ (function () {
    function EditorTextComponent() {
        this.value = null;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditorTextComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditorTextComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditorTextComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditorTextComponent.prototype, "valueChange", void 0);
    EditorTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'editor-text',
            template: __webpack_require__(/*! ./editor-text.component.html */ "./src/app/app-common/components/editor-text/editor-text.component.html"),
            styles: [__webpack_require__(/*! ./editor-text.component.less */ "./src/app/app-common/components/editor-text/editor-text.component.less")]
        })
    ], EditorTextComponent);
    return EditorTextComponent;
}());



/***/ }),

/***/ "./src/app/app-config.ts":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.apiEndPoint = 'https://swapi.co/api/';
    }
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shell_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-shell/page-not-found/page-not-found.component */ "./src/app/app-shell/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'page',
        loadChildren: './page/page.module#PageModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _app_shell_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-shell/app-shell.module.ts":
/*!***********************************************!*\
  !*** ./src/app/app-shell/app-shell.module.ts ***!
  \***********************************************/
/*! exports provided: AppShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellModule", function() { return AppShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/app-shell/page-not-found/page-not-found.component.ts");
/* harmony import */ var _notification_area_notification_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-area/notification-area.component */ "./src/app/app-shell/notification-area/notification-area.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppShellModule = /** @class */ (function () {
    function AppShellModule() {
    }
    AppShellModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"],
                _notification_area_notification_area_component__WEBPACK_IMPORTED_MODULE_3__["NotificationAreaComponent"]
            ],
            exports: [
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"],
                _notification_area_notification_area_component__WEBPACK_IMPORTED_MODULE_3__["NotificationAreaComponent"]
            ]
        })
    ], AppShellModule);
    return AppShellModule;
}());



/***/ }),

/***/ "./src/app/app-shell/notification-area/notification-area.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/app-shell/notification-area/notification-area.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userNotificationService.messages.length>0\" class=\"alert-container\">\r\n\t<div *ngFor=\"let msg of userNotificationService.messages\"\r\n\t     class=\"alert\"\r\n\t     [class.error]=\"msg.type == ENotificationType.Error\"\r\n\t     [class.warning]=\"msg.type == ENotificationType.Warning\"\r\n\t     [class.info]=\"msg.type == ENotificationType.Information\"\r\n\t     [class.success]=\"msg.type == ENotificationType.Success\">\r\n\t\t<div>\r\n\t\t\t<a class=\"pull-right btn-close-dialog\" title=\"Close\" (click)=\"removeMessage(msg)\"></a>\r\n\t\t\t<span>{{msg.message}}</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-shell/notification-area/notification-area.component.less":
/*!******************************************************************************!*\
  !*** ./src/app/app-shell/notification-area/notification-area.component.less ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-shell/notification-area/notification-area.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/app-shell/notification-area/notification-area.component.ts ***!
  \****************************************************************************/
/*! exports provided: NotificationAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationAreaComponent", function() { return NotificationAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user-notification.service */ "./src/app/services/user-notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationAreaComponent = /** @class */ (function () {
    function NotificationAreaComponent(userNotificationService) {
        this.userNotificationService = userNotificationService;
        this.ENotificationType = _services_user_notification_service__WEBPACK_IMPORTED_MODULE_1__["ENotificationType"];
    }
    NotificationAreaComponent.prototype.ngOnInit = function () {
    };
    NotificationAreaComponent.prototype.removeMessage = function (message) {
        this.userNotificationService.remove(message);
    };
    NotificationAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-area',
            template: __webpack_require__(/*! ./notification-area.component.html */ "./src/app/app-shell/notification-area/notification-area.component.html"),
            styles: [__webpack_require__(/*! ./notification-area.component.less */ "./src/app/app-shell/notification-area/notification-area.component.less")]
        }),
        __metadata("design:paramtypes", [_services_user_notification_service__WEBPACK_IMPORTED_MODULE_1__["UserNotificationService"]])
    ], NotificationAreaComponent);
    return NotificationAreaComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/page-not-found/page-not-found.component.html":
/*!************************************************************************!*\
  !*** ./src/app/app-shell/page-not-found/page-not-found.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found \r\n</p>\r\n"

/***/ }),

/***/ "./src/app/app-shell/page-not-found/page-not-found.component.less":
/*!************************************************************************!*\
  !*** ./src/app/app-shell/page-not-found/page-not-found.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-shell/page-not-found/page-not-found.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/app-shell/page-not-found/page-not-found.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/app-shell/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.less */ "./src/app/app-shell/page-not-found/page-not-found.component.less")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>Welcome to {{ title }}!</h1>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<nav>\r\n\t<a routerLink=\"page/search\">page search</a>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_shell_app_shell_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-shell/app-shell.module */ "./src/app/app-shell/app-shell.module.ts");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-config */ "./src/app/app-config.ts");
/* harmony import */ var _services_user_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user-notification.service */ "./src/app/services/user-notification.service.ts");
/* harmony import */ var _services_user_progress_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user-progress.service */ "./src/app/services/user-progress.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _app_shell_app_shell_module__WEBPACK_IMPORTED_MODULE_6__["AppShellModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"]
            ],
            providers: [
                _app_config__WEBPACK_IMPORTED_MODULE_8__["AppConfig"],
                _services_user_notification_service__WEBPACK_IMPORTED_MODULE_9__["UserNotificationService"],
                _services_user_progress_service__WEBPACK_IMPORTED_MODULE_10__["UserProgressService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/user-notification.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/user-notification.service.ts ***!
  \*******************************************************/
/*! exports provided: ENotificationType, UserNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENotificationType", function() { return ENotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotificationService", function() { return UserNotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ENotificationType;
(function (ENotificationType) {
    ENotificationType[ENotificationType["Information"] = 0] = "Information";
    ENotificationType[ENotificationType["Warning"] = 1] = "Warning";
    ENotificationType[ENotificationType["Success"] = 2] = "Success";
    ENotificationType[ENotificationType["Error"] = 3] = "Error";
})(ENotificationType || (ENotificationType = {}));
var UserNotificationService = /** @class */ (function () {
    function UserNotificationService() {
        this.messages = [];
        this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserNotificationService.prototype.error = function (message) {
        this.show({ message: message, type: ENotificationType.Error });
    };
    UserNotificationService.prototype.warning = function (message) {
        this.show({ message: message, type: ENotificationType.Warning });
    };
    UserNotificationService.prototype.information = function (message) {
        this.show({ message: message, type: ENotificationType.Information });
    };
    UserNotificationService.prototype.success = function (message) {
        this.show({ message: message, type: ENotificationType.Success });
    };
    UserNotificationService.prototype.show = function (message) {
        if (message.canClose == undefined) {
            message.canClose = true;
        }
        this.messages.push(message);
        this.updated.emit();
    };
    UserNotificationService.prototype.remove = function (message) {
        var i = this.messages.indexOf(message);
        if (i >= 0) {
            this.messages.splice(i, 1);
            this.updated.emit();
        }
    };
    UserNotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], UserNotificationService);
    return UserNotificationService;
}());



/***/ }),

/***/ "./src/app/services/user-progress.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/user-progress.service.ts ***!
  \***************************************************/
/*! exports provided: UserProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProgressService", function() { return UserProgressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserProgressService = /** @class */ (function () {
    function UserProgressService() {
        this.running = false;
        this.loading = false;
    }
    UserProgressService.prototype.start = function (isLoading) {
        var _this = this;
        if (isLoading === void 0) { isLoading = false; }
        setTimeout(function () { return isLoading ? _this.loading = true : _this.running = true; }, 0);
    };
    UserProgressService.prototype.stop = function () {
        var _this = this;
        setTimeout(function () { return _this.loading = _this.running = false; }, 0);
    };
    UserProgressService.prototype.runProgress = function (obs, isLoading) {
        var _this = this;
        if (isLoading === void 0) { isLoading = false; }
        this.start(isLoading);
        return obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) { _this.stop(); throw e; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) { _this.stop(); return x; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
    };
    UserProgressService.prototype.runAsync = function (obs) {
        return this.run(obs.toPromise());
    };
    UserProgressService.prototype.run = function (promise) {
        var _this = this;
        this.start();
        return promise
            .then(function (data) {
            _this.stop();
            return data;
        })
            .catch(function (x) {
            _this.stop();
            throw x;
        });
    };
    UserProgressService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], UserProgressService);
    return UserProgressService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dev\StarWars\StarWars.Web.Js\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map