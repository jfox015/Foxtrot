(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ang_src/$$_lazy_route_resource lazy recursive":
/*!**************************************************************!*\
  !*** ./ang_src/$$_lazy_route_resource lazy namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ang_src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ang_src/app/_directives/alert.component.ts":
/*!****************************************************!*\
  !*** ./ang_src/app/_directives/alert.component.ts ***!
  \****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/index */ "./ang_src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0, a1, a2) { return { "alert": a0, "alert-success": a1, "alert-danger": a2 }; };
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r100.message, ctx_r100.message.type === "success", ctx_r100.message.type === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r100.message.text);
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        // subscribe to alert messages
        this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
    }
    ngOnDestroy() {
        // unsubscribe on destroy to prevent memory leaks
        this.subscription.unsubscribe();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'alert',
                templateUrl: 'alert.component.html'
            }]
    }], function () { return [{ type: _services_index__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/_directives/index.ts":
/*!******************************************!*\
  !*** ./ang_src/app/_directives/index.ts ***!
  \******************************************/
/*! exports provided: AlertComponent, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./ang_src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component */ "./ang_src/app/_directives/modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]; });





/***/ }),

/***/ "./ang_src/app/_directives/modal.component.ts":
/*!****************************************************!*\
  !*** ./ang_src/app/_directives/modal.component.ts ***!
  \****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/index */ "./ang_src/app/_services/index.ts");




const _c0 = ["*"];
class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = $(el.nativeElement);
    }
    ngOnInit() {
        let modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');
        // close modal on background click
        this.element.on('click', function (e) {
            var target = $(e.target);
            if (!target.closest('.modal-body').length) {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when directive is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.show();
        this.element.removeClass('hidden');
        $('body').addClass('modal-open');
    }
    // close modal
    close() {
        this.element.hide();
        this.element.addClass('hidden');
        $('body').removeClass('modal-open');
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["modal"]], inputs: { id: "id" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i.toString(),
                selector: 'modal',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: _services_index__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./ang_src/app/_guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./ang_src/app/_guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/_guards/index.ts":
/*!**************************************!*\
  !*** ./ang_src/app/_guards/index.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./ang_src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./ang_src/app/_models/alert.ts":
/*!**************************************!*\
  !*** ./ang_src/app/_models/alert.ts ***!
  \**************************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
class Alert {
}


/***/ }),

/***/ "./ang_src/app/_models/coin.ts":
/*!*************************************!*\
  !*** ./ang_src/app/_models/coin.ts ***!
  \*************************************/
/*! exports provided: Coin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coin", function() { return Coin; });
class Coin {
}


/***/ }),

/***/ "./ang_src/app/_models/currency.ts":
/*!*****************************************!*\
  !*** ./ang_src/app/_models/currency.ts ***!
  \*****************************************/
/*! exports provided: Currency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return Currency; });
class Currency {
}


/***/ }),

/***/ "./ang_src/app/_models/exchangeTable.ts":
/*!**********************************************!*\
  !*** ./ang_src/app/_models/exchangeTable.ts ***!
  \**********************************************/
/*! exports provided: ExchangeTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeTable", function() { return ExchangeTable; });
class ExchangeTable {
}
;


/***/ }),

/***/ "./ang_src/app/_models/index.ts":
/*!**************************************!*\
  !*** ./ang_src/app/_models/index.ts ***!
  \**************************************/
/*! exports provided: User, Currency, Wallet, Coin, Transaction, ExchangeTable, Portfolio, Rates, Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./ang_src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency */ "./ang_src/app/_models/currency.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return _currency__WEBPACK_IMPORTED_MODULE_1__["Currency"]; });

/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet */ "./ang_src/app/_models/wallet.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wallet", function() { return _wallet__WEBPACK_IMPORTED_MODULE_2__["Wallet"]; });

/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coin */ "./ang_src/app/_models/coin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coin", function() { return _coin__WEBPACK_IMPORTED_MODULE_3__["Coin"]; });

/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transaction */ "./ang_src/app/_models/transaction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return _transaction__WEBPACK_IMPORTED_MODULE_4__["Transaction"]; });

/* harmony import */ var _exchangeTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exchangeTable */ "./ang_src/app/_models/exchangeTable.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangeTable", function() { return _exchangeTable__WEBPACK_IMPORTED_MODULE_5__["ExchangeTable"]; });

/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio */ "./ang_src/app/_models/portfolio.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return _portfolio__WEBPACK_IMPORTED_MODULE_6__["Portfolio"]; });

/* harmony import */ var _rates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rates */ "./ang_src/app/_models/rates.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rates", function() { return _rates__WEBPACK_IMPORTED_MODULE_7__["Rates"]; });

/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alert */ "./ang_src/app/_models/alert.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_8__["Alert"]; });












/***/ }),

/***/ "./ang_src/app/_models/portfolio.ts":
/*!******************************************!*\
  !*** ./ang_src/app/_models/portfolio.ts ***!
  \******************************************/
/*! exports provided: Portfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return Portfolio; });
class Portfolio {
}


/***/ }),

/***/ "./ang_src/app/_models/rates.ts":
/*!**************************************!*\
  !*** ./ang_src/app/_models/rates.ts ***!
  \**************************************/
/*! exports provided: Rates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rates", function() { return Rates; });
class Rates {
}
;


/***/ }),

/***/ "./ang_src/app/_models/transaction.ts":
/*!********************************************!*\
  !*** ./ang_src/app/_models/transaction.ts ***!
  \********************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
class Transaction {
}
;


/***/ }),

/***/ "./ang_src/app/_models/user.ts":
/*!*************************************!*\
  !*** ./ang_src/app/_models/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./ang_src/app/_models/wallet.ts":
/*!***************************************!*\
  !*** ./ang_src/app/_models/wallet.ts ***!
  \***************************************/
/*! exports provided: Wallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wallet", function() { return Wallet; });
class Wallet {
}


/***/ }),

/***/ "./ang_src/app/_pipes/index.ts":
/*!*************************************!*\
  !*** ./ang_src/app/_pipes/index.ts ***!
  \*************************************/
/*! exports provided: TransactionTypePipe, TransactionStatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transactions_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions.pipe */ "./ang_src/app/_pipes/transactions.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionTypePipe", function() { return _transactions_pipe__WEBPACK_IMPORTED_MODULE_0__["TransactionTypePipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionStatusPipe", function() { return _transactions_pipe__WEBPACK_IMPORTED_MODULE_0__["TransactionStatusPipe"]; });




/***/ }),

/***/ "./ang_src/app/_pipes/transactions.pipe.ts":
/*!*************************************************!*\
  !*** ./ang_src/app/_pipes/transactions.pipe.ts ***!
  \*************************************************/
/*! exports provided: TransactionTypePipe, TransactionStatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionTypePipe", function() { return TransactionTypePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionStatusPipe", function() { return TransactionStatusPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TransactionTypePipe {
    transform(type) {
        if (type === "send")
            return "navigate-outline";
        else if (type === "receive")
            return "filing-outline";
        else if (type === "exchngeOut")
            return "upload-outline";
        else if (type === "exchngeIn")
            return "download-outline";
        else
            return "help-outline";
    }
}
TransactionTypePipe.ɵfac = function TransactionTypePipe_Factory(t) { return new (t || TransactionTypePipe)(); };
TransactionTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "transactionType", type: TransactionTypePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionTypePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'transactionType' }]
    }], null, null); })();
class TransactionStatusPipe {
    transform(type) {
        if (type === "pending")
            return "Pending";
        else if (type === "complete")
            return "Complete";
        else if (type === "rejected")
            return "Rejected";
        else
            return "Unknown";
    }
}
TransactionStatusPipe.ɵfac = function TransactionStatusPipe_Factory(t) { return new (t || TransactionStatusPipe)(); };
TransactionStatusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "transactionStatus", type: TransactionStatusPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionStatusPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'transactionStatus' }]
    }], null, null); })();


/***/ }),

/***/ "./ang_src/app/_services/LocStorage.ts":
/*!*********************************************!*\
  !*** ./ang_src/app/_services/LocStorage.ts ***!
  \*********************************************/
/*! exports provided: LocStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocStorage", function() { return LocStorage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WindowRef */ "./ang_src/app/_services/WindowRef.ts");




class LocStorage {
    constructor(winRef) {
        this.winRef = winRef;
        this._window = winRef.nativeWindow;
        this.currentDay = new Date().getUTCDate(); // get the current UTC(GMT) day in the current UTC(GMT) month
        this.currentMonth = new Date().getUTCMonth(); // get the current UTC(GMT) month
        this.currentYear = new Date().getFullYear(); // get the current UTC(GMT) month
        this.todayDate = new Date(Date.UTC(this.currentYear, this.currentMonth, this.currentDay)).getTime();
    }
    addDays(date, days) {
        let newDate = new Date(date);
        newDate.setDate(date.getDate() + days);
        return newDate;
    }
    // save value to localStorage
    saveToStorage(key, value) {
        if (key && value) {
            let objForStorage = {
                'data': value,
                'saveDate': this.todayDate
            };
            try {
                this._window.localStorage[key] = JSON.stringify(objForStorage);
            }
            catch (e) {
                console.log('Could not save data to localStorage! Error:', e);
                return false;
            }
        }
        return true;
    }
    // check if there is value saved for the given key
    isSaved(key) {
        if (this._window.localStorage[key]) {
            let savedDate = -1, dateObj = new Date(JSON.parse(this._window.localStorage[key]).saveDate);
            savedDate = this.addDays(dateObj, 15).getTime();
            return this.todayDate < savedDate ? true : false;
        }
        return false;
    }
    // retrive a saved  value
    getFromStorage(key) {
        if (this._window.localStorage[key])
            return JSON.parse(this._window.localStorage[key] || {});
        return false;
    }
    // deletes a value from localStorage
    deleteValue(key) {
        if (this._window.localStorage.removeItem(key))
            this._window.localStorage.removeItem(key);
    }
    ;
    // deletes the entire localStorage (use carefully)
    deleteStorage() {
        this._window.localStorage.clear();
    }
    ;
}
LocStorage.ɵfac = function LocStorage_Factory(t) { return new (t || LocStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_WindowRef__WEBPACK_IMPORTED_MODULE_1__["WindowRef"])); };
LocStorage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocStorage, factory: LocStorage.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _WindowRef__WEBPACK_IMPORTED_MODULE_1__["WindowRef"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/_services/WindowRef.ts":
/*!********************************************!*\
  !*** ./ang_src/app/_services/WindowRef.ts ***!
  \********************************************/
/*! exports provided: WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function _window() {
    // return the global native browser window object
    return window;
}
class WindowRef {
    get nativeWindow() {
        return _window();
    }
}
WindowRef.ɵfac = function WindowRef_Factory(t) { return new (t || WindowRef)(); };
WindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowRef, factory: WindowRef.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./ang_src/app/_services/alert.service.ts":
/*!************************************************!*\
  !*** ./ang_src/app/_services/alert.service.ts ***!
  \************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }
    success(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }
    clear() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/_services/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./ang_src/app/_services/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.userLoggedInSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.userLoggedIn$ = this.userLoggedInSource.asObservable();
        this.userRegistering$Source = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.registering$ = this.userRegistering$Source.asObservable();
    }
    announceUser(status) {
        this.userLoggedInSource.next(status);
    }
    announceRegistering(status) {
        this.userRegistering$Source.next(status);
    }
    login(email, password) {
        return this.http.post('/api/authenticate', { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            this.announceUser(true);
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this._handleError));
    }
    getUserDetails() {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
        if (typeof currUser !== 'undefined') {
            return currUser.user;
        }
        else {
            return null;
        }
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.announceUser(false);
    }
    _handleError(res) {
        console.log("AuthenticationService -> handleError");
        console.log(res);
        let error = res.error || {};
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.errors.msg || 'Unknown Server error';
        //console.error("An error occured! " + errMsg); // log to console instead
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/_services/exchange.service.ts":
/*!***************************************************!*\
  !*** ./ang_src/app/_services/exchange.service.ts ***!
  \***************************************************/
/*! exports provided: ExchangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeService", function() { return ExchangeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ExchangeService {
    constructor(http) {
        this.http = http;
        this._exchangeUrl = '/api/:id/exchange/:symbol';
    }
    /** ----------------------------------------
    /    UTILITY FUNCTIONS
    /-----------------------------------------*/
    exchange(userId, symbol, transObj) {
        return this.http.post(this._exchangeUrl.replace(':id', userId).replace(':symbol', symbol), transObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    /*--------------------------------------------------
    /    PRIVATE FUNCTIONS
    /-------------------------------------------------*/
    extractData(res) {
        console.log("extractData");
        console.log(res);
        //let body = res.body;
        if (res.status < 200 || res.status >= 300)
            this.handleError(res);
        return res || {};
    }
    handleError(res) {
        console.log("extractData");
        console.log(res);
        let body = res.body;
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = body.error || 'Server error';
        //console.error("An error occured! " + errMsg); // log to console instead
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    }
}
ExchangeService.ɵfac = function ExchangeService_Factory(t) { return new (t || ExchangeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ExchangeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ExchangeService, factory: ExchangeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ExchangeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/_services/index.ts":
/*!****************************************!*\
  !*** ./ang_src/app/_services/index.ts ***!
  \****************************************/
/*! exports provided: AlertService, AuthenticationService, UserService, WalletService, ModalService, ExchangeService, LocStorage, WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./ang_src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./ang_src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./ang_src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet.service */ "./ang_src/app/_services/wallet.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return _wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]; });

/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./ang_src/app/_services/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]; });

/* harmony import */ var _exchange_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exchange.service */ "./ang_src/app/_services/exchange.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangeService", function() { return _exchange_service__WEBPACK_IMPORTED_MODULE_5__["ExchangeService"]; });

/* harmony import */ var _LocStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LocStorage */ "./ang_src/app/_services/LocStorage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocStorage", function() { return _LocStorage__WEBPACK_IMPORTED_MODULE_6__["LocStorage"]; });

/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WindowRef */ "./ang_src/app/_services/WindowRef.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return _WindowRef__WEBPACK_IMPORTED_MODULE_7__["WindowRef"]; });











/***/ }),

/***/ "./ang_src/app/_services/modal.service.ts":
/*!************************************************!*\
  !*** ./ang_src/app/_services/modal.service.ts ***!
  \************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        let modalToRemove = underscore__WEBPACK_IMPORTED_MODULE_0__["findWhere"](this.modals, { id: id });
        this.modals = underscore__WEBPACK_IMPORTED_MODULE_0__["without"](this.modals, modalToRemove);
    }
    open(id) {
        // open modal specified by id
        let modal = underscore__WEBPACK_IMPORTED_MODULE_0__["findWhere"](this.modals, { id: id });
        modal.open();
    }
    close(id) {
        // close modal specified by id
        let modal = underscore__WEBPACK_IMPORTED_MODULE_0__["findWhere"](this.modals, { id: id });
        modal.close();
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./ang_src/app/_services/user.service.ts":
/*!***********************************************!*\
  !*** ./ang_src/app/_services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get('/api/users')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getById(id) {
        return this.http.get('/api/users/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    create(user) {
        return this.http.post('/api/users', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    update(user) {
        return this.http.put('/api/' + user._id + '/users/', user);
    }
    delete(id) {
        return this.http.delete('/api/users/' + id);
    }
    /*--------------------------------------------------
    /    PRIVATE FUNCTIONS
    /-------------------------------------------------*/
    extractData(res) {
        console.log("UserService -> extractData");
        console.log(res);
        //let body = res.body;
        if (res.status < 200 || res.status >= 300)
            this.handleError(res);
        return res || {};
    }
    handleError(res) {
        console.log("UserService -> handleError");
        console.log(res);
        let body = res.body;
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = body.errmsg || 'Server error';
        //console.error("An error occured! " + errMsg); // log to console instead
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/_services/wallet.service.ts":
/*!*************************************************!*\
  !*** ./ang_src/app/_services/wallet.service.ts ***!
  \*************************************************/
/*! exports provided: WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _LocStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LocStorage */ "./ang_src/app/_services/LocStorage.ts");








class WalletService {
    constructor(http, _locStorage) {
        this.http = http;
        this._locStorage = _locStorage;
        this._portfolioUrl = '/api/:id/portfolio/:cache';
        this._walletUrl = '/api/:id/wallet/:currency';
        this._balanceUrl = '/api/:id/wallet/balance/:currency';
        this._transactionsUrl = '/api/transactions/:address';
        this._exchangeUrl = '/api/:id/exchange/post';
        this._sendCoinUrl = '/api/:id/transactions/post/:symbol';
        this._currenciestUrl = '/api/currencies';
        this._currencyUrl = '/api/currency/:symbol';
        this._convertUrl = '/api/convert/:amount/:from/:to';
        // private _exchangeTableUrl = '/api/exchange/:symbol/:from'; // deprecated
        this._exchangeAllRatesUrl = '/api/exchangerates';
        this._exchangeRatesUrl = '/api/exchangerates/:symbol/:cache';
        this._exchangeRateUrl = '/api/exchangerate/:symbol/:from';
        this._coinsUrl = '/api/coins';
        this._seedUrl = '/api/seed/:id';
        this._cachebuster = '';
        WalletService.wallets = [];
    }
    loadPortfolio(userId) {
        this.constructCacheBuster();
        return this.http.get(this._portfolioUrl.replace(':id', userId).replace(':cache', this._cachebuster))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    loadWallet(userId, currency) {
        return this.http.get(this._walletUrl.replace(':id', userId).replace(':currency', currency))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getBalance(userId, currency) {
        return this.http.get(this._balanceUrl.replace(':id', userId).replace(':currency', currency))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    createWallet(userId, currency, amountObj) {
        return this.http.post(this._walletUrl.replace(':id', userId).replace(':currency', currency), amountObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getTransactions(address) {
        return this.http.get(this._transactionsUrl.replace(':address', address))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getCurrencies() {
        return this.http.get(this._currenciestUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getCurrency(symbol) {
        return this.http.get(this._currencyUrl.replace(':symbol', symbol))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getAllExchangeRates() {
        return this.http.get(this._exchangeAllRatesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getExchangeRates(symbol) {
        this.constructCacheBuster();
        return this.http.get(this._exchangeRatesUrl.replace(':symbol', symbol).replace(':cache', this._cachebuster))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getExchangeRate(symbol, from) {
        return this.http.get(this._exchangeRateUrl.replace(':symbol', symbol).replace(':from', from))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getCoins() {
        return this.http.get(this._coinsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    seed(userId) {
        return this.http.get(this._seedUrl.replace(':id', userId))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    sendCoin(userId, symbol, transObj) {
        return this.http.post(this._sendCoinUrl.replace(':id', userId).replace(':symbol', symbol), transObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    exchange(userId, transObj) {
        return this.http.post(this._exchangeUrl.replace(':id', userId), transObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    /*--------------------------------------------------
    /    STORED DATA OBJECT FUNCTIONS
    /-------------------------------------------------*/
    getWallet(userId, currency) {
        if (WalletService.wallets.length == 0)
            WalletService.wallets[currency] = this._locStorage.getFromStorage("wallet_" + userId + "_" + currency).data;
        if (WalletService.wallets[currency]) {
            return WalletService.wallets[currency];
        }
        else {
            return null;
        }
    }
    setWallet(wallet, userId, currency) {
        WalletService.wallets[currency] = wallet;
        return this._locStorage.saveToStorage("wallet_" + userId + "_" + currency, wallet);
    }
    getPortfolio(userId) {
        if (typeof WalletService.portfolio === "undefined")
            WalletService.portfolio = this._locStorage.getFromStorage("portfolio_" + userId).data;
        if (WalletService.portfolio) {
            return WalletService.portfolio;
        }
        else {
            return null;
        }
    }
    setPortfolio(portfolio, userId) {
        WalletService.portfolio = portfolio;
        return this._locStorage.saveToStorage("portfolio_" + userId, portfolio);
    }
    flushStorage() {
        this._locStorage.deleteStorage();
    }
    /**-----------------------------------------
    /    UTILITY FUNCTIONS
    /-----------------------------------------*/
    convert(amount, conv) {
        var conversion = (amount * parseFloat(conv));
        if (isNaN(conversion))
            conversion = 0;
        return conversion;
    }
    convertCoin(amount, conv) {
        var conversion = (parseFloat(amount) / parseFloat(conv));
        if (isNaN(conversion))
            conversion = 0;
        return conversion;
    }
    formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
        try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
            const negativeSign = amount < 0 ? "-" : "";
            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;
            var k = negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - parseFloat(i)).toFixed(decimalCount).slice(2) : "");
            return parseFloat(k);
        }
        catch (e) {
            console.log(e);
        }
    }
    /*--------------------------------------------------
    /    PRIVATE FUNCTIONS
    /-------------------------------------------------*/
    hashCode(str) {
        var hash = 0;
        if (str.length == 0) {
            return hash;
        }
        for (var i = 0; i < str.length; i++) {
            var char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
    constructCacheBuster() {
        this._cachebuster = Math.round(new Date().getTime() / 1000).toString();
    }
    _processWallet(result, userId, currency) {
        if (result.wallet !== null)
            this.setWallet(result.wallet, userId, currency);
    }
    _processPortfolio(result, userId) {
        if (result.portfolio !== null)
            this.setPortfolio(result.portfolio, userId);
    }
    extractData(res) {
        //console.log("extractData");
        //console.log(res);
        //let body = res.body;
        if (res.status < 200 || res.status >= 300)
            this.handleError(res);
        return res || {};
    }
    handleError(res) {
        console.log("wallet Service -> handleError");
        console.log(res);
        let body = null, errMsg = '', genError = 'An unknown or unidentified error occured on the server error';
        if (res.body) {
            body = res.body;
        }
        else {
            body = res;
        }
        console.log(body);
        // In a real world app, we might send the error to remote logging infrastructure
        if (body.error.errors.error)
            errMsg = body.error.errors.error;
        else if (body.error.errors)
            errMsg = body.error.errors;
        else if (body.error)
            errMsg = body.error;
        else
            errMsg = genError;
        console.error("An error occured! " + errMsg); // log to console instead
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    }
}
WalletService.ɵfac = function WalletService_Factory(t) { return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_LocStorage__WEBPACK_IMPORTED_MODULE_4__["LocStorage"])); };
WalletService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WalletService, factory: WalletService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WalletService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _LocStorage__WEBPACK_IMPORTED_MODULE_4__["LocStorage"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/about/about.component.ts":
/*!**********************************************!*\
  !*** ./ang_src/app/about/about.component.ts ***!
  \**********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/index */ "./ang_src/app/_services/index.ts");




class AboutComponent {
    constructor(userService, _authService) {
        this.userService = userService;
        this._authService = _authService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user = null;
    }
    ngOnInit() {
        //this.loadAllUsers();
        this.user = this._authService.getUserDetails();
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["ng-component"]], decls: 56, vars: 0, consts: [[1, "row"], [1, "col-md-12"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "panel-title"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne"], ["id", "collapseOne", "role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in"], [1, "panel-body"], ["href", "https://github.com/jfox015"], [1, "text-center"], ["src", "images/jfox_headshot.jpg", "width", "135", "height", "125", "border", "0", "alt", "Jeff Fox", "title", "Jeff Fox"], ["role", "tab", "id", "headingTwo", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "collapsed"], ["id", "collapseTwo", "role", "tabpanel", "aria-labelledby", "headingTwo", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingThree", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "collapsed"], ["id", "collapseThree", "role", "tabpanel", "aria-labelledby", "headingThree", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFour", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "collapsed"], ["id", "collapseFour", "role", "tabpanel", "aria-labelledby", "headingFour", 1, "panel-collapse", "collapse"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Foxtrot Version 1.0 (beta)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " About Foxtrot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Foxtrot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " is an example digital cryptocurrency wallet application written in Angular and built on top of the excellent Hackathon Starter Kit. This is an exploratory project to demonstrate using Angular to build a dynamic SPA interface. Foxtrot IS NOT intended to be used a live cryptocurrency wallet application nor to be connected to a digital currency exchange. It is free, open source and available for forking in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Created and maintained by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Jeff Fox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Fork and extend this project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Have an idea for a feature? Have a better way to execute the interface? Have a great piece fo code to add to the Node backend. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Fork the project on Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " and send a pull request with your changes! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " What does Foxtro do? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Foxtrot demonstrates how a digital crypto-currency wallet could be built using a combination of technologoes like Angular and NodeJs. It is NOT a \"LIVE\" digital wallet application. It is intended only for demonstration and personal development practice purposes and not to be used as a live trading interface. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " The prices of the cryptocurrencies featured in this app don't match the current price of these currencies on the trading market. Why is this? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Foxtrot is not connected to any active market exchange or price list. Foxtrot uses a static JSON list of cryptocurrency exchange rates within the application to perform coin to coin and coin to currency conversions. Maybe a connection to an active list of exchange rates might be added down the road, but for now, it is a static list. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".panel-heading[_ngcontent-%COMP%] {\r\n    color:#222;\r\n    background-color: #909090;\r\n    border-color: #606060;\r\n}\r\n.panel-title[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n}\r\n.panel[_ngcontent-%COMP%] {\r\n    color:#fff;\r\n    background-color: #222;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ19zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUIiLCJmaWxlIjoiYW5nX3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbC1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiMyMjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5MDkwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjA2MDYwO1xyXG59XHJcbi5wYW5lbC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG4ucGFuZWwge1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                templateUrl: 'about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/about/index.ts":
/*!************************************!*\
  !*** ./ang_src/app/about/index.ts ***!
  \************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ "./ang_src/app/about/about.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return _about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]; });




/***/ }),

/***/ "./ang_src/app/app.component.ts":
/*!**************************************!*\
  !*** ./ang_src/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/index */ "./ang_src/app/_services/index.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_directives/alert.component */ "./ang_src/app/_directives/alert.component.ts");
/* harmony import */ var _auth_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login.component */ "./ang_src/app/auth/login.component.ts");
/* harmony import */ var _auth_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register.component */ "./ang_src/app/auth/register.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./ang_src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class AppComponent {
    constructor(_authService) {
        this._authService = _authService;
        this.userLoggedIn = false;
        this.registering = false;
    }
    ngOnInit() {
        this.userSubscription = this._authService.userLoggedIn$.subscribe(message => {
            this.userLoggedIn = message;
        });
        this.signupSubscription = this._authService.registering$.subscribe(status => {
            this.registering = status;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 3, consts: [[1, "container", 3, "hidden"], [1, "row"], [1, "col-md-12"], [1, "col-sm-2"], [1, "col-sm-10"], [1, "container"], [1, "col-md-12", "text-center"], [1, "text-muted"], ["src", "/images/logo_foxex.png", "with", "35", "height", "32", "border", "0", "alt", "Foxex Exchange", "title", "Foxex Exchange", "align", "absmiddle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Powered by the Foxex International Crypto Currency Exchange.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.userLoggedIn || ctx.registering);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.registering);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.userLoggedIn || ctx.registering);
    } }, directives: [_directives_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"], _auth_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _auth_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'app-root',
                templateUrl: 'app.component.html'
            }]
    }], function () { return [{ type: _services_index__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/app.module.ts":
/*!***********************************!*\
  !*** ./ang_src/app/app.module.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./ang_src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./ang_src/app/app.routing.ts");
/* harmony import */ var _directives_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_directives/index */ "./ang_src/app/_directives/index.ts");
/* harmony import */ var _guards_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards/index */ "./ang_src/app/_guards/index.ts");
/* harmony import */ var _pipes_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_pipes/index */ "./ang_src/app/_pipes/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/index */ "./ang_src/app/_services/index.ts");
/* harmony import */ var _about_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/index */ "./ang_src/app/about/index.ts");
/* harmony import */ var _home_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/index */ "./ang_src/app/home/index.ts");
/* harmony import */ var _navbar_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/index */ "./ang_src/app/navbar/index.ts");
/* harmony import */ var _auth_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/index */ "./ang_src/app/auth/index.ts");
/* harmony import */ var _wallet_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wallet/index */ "./ang_src/app/wallet/index.ts");
/* harmony import */ var _exchange_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./exchange/index */ "./ang_src/app/exchange/index.ts");
/* harmony import */ var _portfolio_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./portfolio/index */ "./ang_src/app/portfolio/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




//import { HttpModule, JsonpModule }  from '@angular/http';









// used to create fake backend
//import { JwtInterceptor } from './_helpers/index';
//import { fakeBackendProvider } from './_helpers/index';










;
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _guards_index__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
        _services_index__WEBPACK_IMPORTED_MODULE_12__["AlertService"],
        _services_index__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
        _services_index__WEBPACK_IMPORTED_MODULE_12__["ModalService"],
        _services_index__WEBPACK_IMPORTED_MODULE_12__["UserService"],
        _services_index__WEBPACK_IMPORTED_MODULE_12__["WalletService"],
        _services_index__WEBPACK_IMPORTED_MODULE_12__["ExchangeService"],
        _services_index__WEBPACK_IMPORTED_MODULE_12__["WindowRef"],
        _services_index__WEBPACK_IMPORTED_MODULE_12__["LocStorage"]
        /*{
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },*/
        // provider used to create fake backend
        //fakeBackendProvider
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            //HttpModule, 
            //JsonpModule,
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
                cookieName: 'XSRF-TOKEN',
                headerName: 'X-XSRF-TOKEN',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_about_index__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _directives_index__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
        _home_index__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        _auth_index__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _auth_index__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
        _directives_index__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
        _navbar_index__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
        _wallet_index__WEBPACK_IMPORTED_MODULE_17__["WalletComponent"],
        _exchange_index__WEBPACK_IMPORTED_MODULE_18__["ExchangeComponent"],
        _portfolio_index__WEBPACK_IMPORTED_MODULE_19__["PortfolioComponent"],
        _auth_index__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
        _pipes_index__WEBPACK_IMPORTED_MODULE_11__["TransactionTypePipe"],
        _pipes_index__WEBPACK_IMPORTED_MODULE_11__["TransactionStatusPipe"],
        _auth_index__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        //HttpModule, 
        //JsonpModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    //HttpModule, 
                    //JsonpModule,
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN',
                    }),
                ],
                declarations: [
                    _about_index__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _directives_index__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
                    _home_index__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                    _auth_index__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _auth_index__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                    _directives_index__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                    _navbar_index__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                    _wallet_index__WEBPACK_IMPORTED_MODULE_17__["WalletComponent"],
                    _exchange_index__WEBPACK_IMPORTED_MODULE_18__["ExchangeComponent"],
                    _portfolio_index__WEBPACK_IMPORTED_MODULE_19__["PortfolioComponent"],
                    _auth_index__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                    _pipes_index__WEBPACK_IMPORTED_MODULE_11__["TransactionTypePipe"],
                    _pipes_index__WEBPACK_IMPORTED_MODULE_11__["TransactionStatusPipe"],
                    _auth_index__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"]
                ],
                providers: [
                    _guards_index__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                    _services_index__WEBPACK_IMPORTED_MODULE_12__["AlertService"],
                    _services_index__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
                    _services_index__WEBPACK_IMPORTED_MODULE_12__["ModalService"],
                    _services_index__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                    _services_index__WEBPACK_IMPORTED_MODULE_12__["WalletService"],
                    _services_index__WEBPACK_IMPORTED_MODULE_12__["ExchangeService"],
                    _services_index__WEBPACK_IMPORTED_MODULE_12__["WindowRef"],
                    _services_index__WEBPACK_IMPORTED_MODULE_12__["LocStorage"]
                    /*{
                        provide: HTTP_INTERCEPTORS,
                        useClass: JwtInterceptor,
                        multi: true
                    },*/
                    // provider used to create fake backend
                    //fakeBackendProvider
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./ang_src/app/app.routing.ts":
/*!************************************!*\
  !*** ./ang_src/app/app.routing.ts ***!
  \************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/index */ "./ang_src/app/about/index.ts");
/* harmony import */ var _home_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/index */ "./ang_src/app/home/index.ts");
/* harmony import */ var _auth_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/index */ "./ang_src/app/auth/index.ts");
/* harmony import */ var _wallet_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet/index */ "./ang_src/app/wallet/index.ts");
/* harmony import */ var _exchange_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exchange/index */ "./ang_src/app/exchange/index.ts");
/* harmony import */ var _portfolio_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/index */ "./ang_src/app/portfolio/index.ts");
/* harmony import */ var _guards_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards/index */ "./ang_src/app/_guards/index.ts");








const appRoutes = [
    { path: '', component: _home_index__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'login', component: _auth_index__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'logout', component: _auth_index__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"] },
    { path: 'register', component: _auth_index__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'about', component: _about_index__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'profile', component: _auth_index__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'wallet', component: _wallet_index__WEBPACK_IMPORTED_MODULE_4__["WalletComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'exchange', component: _exchange_index__WEBPACK_IMPORTED_MODULE_5__["ExchangeComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'portfolio', component: _portfolio_index__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./ang_src/app/auth/index.ts":
/*!***********************************!*\
  !*** ./ang_src/app/auth/index.ts ***!
  \***********************************/
/*! exports provided: LoginComponent, LogoutComponent, RegisterComponent, ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./ang_src/app/auth/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });

/* harmony import */ var _logout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.component */ "./ang_src/app/auth/logout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return _logout_component__WEBPACK_IMPORTED_MODULE_1__["LogoutComponent"]; });

/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./ang_src/app/auth/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]; });

/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./ang_src/app/auth/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]; });







/***/ }),

/***/ "./ang_src/app/auth/login.component.ts":
/*!*********************************************!*\
  !*** ./ang_src/app/auth/login.component.ts ***!
  \*********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/index */ "./ang_src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class LoginComponent {
    constructor(route, router, authService, alertService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    ngOnInit() {
        // reset login status
        this.authService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    register() {
        this.authService.announceRegistering(true);
    }
    login() {
        this.loading = true;
        this.authService.login(this.model.email, this.model.password)
            .subscribe(data => {
            this.reset();
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
    reset() {
        this.model = {};
        this.loading = false;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 25, vars: 12, consts: [[1, "text-center"], ["src", "/images/home_logo.png", "width", "242", "height", "250", "alt", "Foxtrot"], [1, "col-md-6", "col-md-offset-3"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", 3, "ngClass"], ["for", "email"], ["type", "text", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "help-block", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "form-group"], [1, "btn", "btn-primary", 3, "disabled"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==", 4, "ngIf"], [1, "btn", "btn-link", 3, "click"], [1, "help-block"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Foxtrot - Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r1.form.valid && ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_img_22_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_23_listener($event) { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, _r1.submitted && !_r2.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.submitted && !_r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, _r1.submitted && !_r4.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.submitted && !_r4.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'login',
                templateUrl: 'login.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/auth/logout.component.ts":
/*!**********************************************!*\
  !*** ./ang_src/app/auth/logout.component.ts ***!
  \**********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/index */ "./ang_src/app/_services/index.ts");






class LogoutComponent {
    constructor(route, router, authService, walletService, alertService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.walletService = walletService;
        this.alertService = alertService;
    }
    ngOnInit() {
        // reset login status
        this.walletService.flushStorage();
        this.authService.logout();
        this.router.navigate(["/"]);
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 1, vars: 0, consts: [[1, "logout"]], template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logout',
                template: `<div class="logout"></div>`
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["WalletService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/auth/profile.component.ts":
/*!***********************************************!*\
  !*** ./ang_src/app/auth/profile.component.ts ***!
  \***********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/index */ "./ang_src/app/_models/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/index */ "./ang_src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ProfileComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function ProfileComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r36 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, c_r36.symbol))("selected", c_r36.symbol == ctx_r33.currentUser.baseCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r36.name);
} }
function ProfileComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "base currency is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_img_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} }
const _c1 = function (a0) { return { "has-error": a0 }; };
class ProfileComponent {
    constructor(router, userService, alertService, walletService, authService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.walletService = walletService;
        this.authService = authService;
        this.model = {};
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.model = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).user;
        this.baseCurrency = this.currentUser.baseCurrency.toUpperCase();
        this.model.firstName = this.currentUser.firstName;
        this.model.lastName = this.currentUser.lastName;
        this.model.email = this.currentUser.email;
        this.model.baseCurrency = this.currentUser.baseCurrency;
        this.model._id = this.currentUser._id;
        this.loadCurrencies();
    }
    loadCurrencies() {
        this.walletService.getCurrencies().subscribe(data => {
            this._processCurrencies(data);
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
    updateProfile() {
        this.loading = true;
        this.userService.update(this.model)
            .subscribe(data => {
            this.currentUser.firstName = this.model.firstName;
            this.currentUser.lastName = this.model.lastName;
            this.currentUser.email = this.model.email;
            this.currentUser.baseCurrency = this.model.baseCurrency;
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            this.alertService.success('Profile Update successful', true);
            this.router.navigate(['home']);
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
    cancel() {
        this.authService.announceRegistering(false);
    }
    _processCurrencies(result) {
        this.currencies = result.currencies;
        if (this.currencies.length == 0) {
            var curr = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Currency"]();
            curr.name = 'US Dollar';
            curr.symbol = 'usd';
            curr.char = '$';
            curr.charCode = '$';
            this.currencies.push(curr);
        }
        this.loading = false;
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_3__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["profile"]], decls: 38, vars: 23, consts: [[1, "col-md-6", "col-md-offset-3"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", 3, "ngClass"], ["for", "firstName"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["class", "help-block", 4, "ngIf"], ["for", "lastName"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["for", "email"], ["type", "text", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "baseCurrency"], ["name", "baseCurrency", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["baseCurrency", "ngModel"], ["value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "form-group"], [1, "btn", "btn-primary", 3, "disabled"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==", 4, "ngIf"], [1, "btn", "btn-link", 3, "click"], [1, "help-block"], [3, "value", "selected"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r25.form.valid && ctx.updateProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_8_listener($event) { return ctx.model.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_14_listener($event) { return ctx.model.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_div_16_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_20_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_div_22_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Base Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_select_ngModelChange_26_listener($event) { return ctx.model.baseCurrency = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Select Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProfileComponent_option_30_Template, 2, 5, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProfileComponent_div_31_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProfileComponent_img_35_Template, 1, 0, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_36_listener($event) { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, _r25.submitted && !_r26.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.submitted && !_r26.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, _r25.submitted && !_r28.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.submitted && !_r28.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, _r25.submitted && !_r30.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.submitted && !_r30.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, _r25.submitted && !_r32.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.baseCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.submitted && !_r32.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading || !_r25.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'profile',
                templateUrl: 'profile.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["WalletService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/auth/register.component.ts":
/*!************************************************!*\
  !*** ./ang_src/app/auth/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/index */ "./ang_src/app/_models/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/index */ "./ang_src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function RegisterComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function RegisterComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, c_r23.symbol));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r23.name);
} }
function RegisterComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "base currency is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You must confirm your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_img_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} }
const _c1 = function (a0) { return { "has-error": a0 }; };
class RegisterComponent {
    constructor(router, userService, alertService, walletService, authService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.walletService = walletService;
        this.authService = authService;
        this.model = {};
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.model = {};
        this.loadCurrencies();
    }
    loadCurrencies() {
        this.walletService.getCurrencies().subscribe(data => {
            this._processCurrencies(data);
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(data => {
            this.alertService.success('Registration successful', true);
            this.authService.announceRegistering(false);
            this.model = {};
            this.router.navigate(['login']);
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
    cancel() {
        this.authService.announceRegistering(false);
    }
    _processCurrencies(result) {
        this.currencies = result.currencies;
        if (this.currencies.length == 0) {
            var curr = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Currency"]();
            curr.name = 'US Dollar';
            curr.symbol = 'usd';
            curr.char = '$';
            curr.charCode = '$';
            this.currencies.push(curr);
        }
        this.loading = false;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_3__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["register"]], decls: 50, vars: 33, consts: [[1, "col-md-6", "col-md-offset-3"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", 3, "ngClass"], ["for", "firstName"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["class", "help-block", 4, "ngIf"], ["for", "lastName"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["for", "email"], ["type", "text", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "currency"], ["name", "currency", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["currency", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "password"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "confirmPassword"], ["type", "password", "name", "confirmPassword", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], [1, "form-group"], [1, "btn", "btn-primary", 3, "disabled"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==", 4, "ngIf"], [1, "btn", "btn-link", 3, "click"], [1, "help-block"], [3, "value"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r8.form.valid && ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_8_listener($event) { return ctx.model.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegisterComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.model.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_div_16_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_div_22_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Base Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_select_ngModelChange_26_listener($event) { return ctx.model.currency = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Select Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegisterComponent_option_30_Template, 2, 4, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterComponent_div_31_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_35_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegisterComponent_div_37_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_41_listener($event) { return ctx.model.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RegisterComponent_div_43_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RegisterComponent_img_47_Template, 1, 0, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_48_listener($event) { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, _r8.submitted && !_r9.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.submitted && !_r9.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, _r8.submitted && !_r11.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.submitted && !_r11.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, _r8.submitted && !_r13.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.submitted && !_r13.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, _r8.submitted && !_r15.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.submitted && !_r15.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c1, _r8.submitted && !_r18.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.submitted && !_r18.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c1, _r8.submitted && !_r20.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.submitted && !_r20.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'register',
                templateUrl: 'register.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["WalletService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/exchange/exchange.component.ts":
/*!****************************************************!*\
  !*** ./ang_src/app/exchange/exchange.component.ts ***!
  \****************************************************/
/*! exports provided: ExchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeComponent", function() { return ExchangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/index */ "./ang_src/app/_models/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/index */ "./ang_src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ExchangeComponent_ng_container_16_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeComponent_ng_container_16_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const wallet_r85 = ctx.$implicit; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r88.selectCoin($event, wallet_r85.name); return false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wallet_r85 = ctx.$implicit;
    const i_r86 = ctx.index;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", i_r86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", wallet_r85.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/images/curr_icon_" + wallet_r85.name + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", wallet_r85.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, wallet_r85.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", wallet_r85.balance, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 9, wallet_r85.value, ctx_r84.baseCurrency, "symbol-narrow"), ") ");
} }
function ExchangeComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExchangeComponent_ng_container_16_li_1_Template, 13, 13, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r79.portfolio.wallets);
} }
function ExchangeComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "An opening coin amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExchangeComponent_ng_container_71_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeComponent_ng_container_71_ng_container_1_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const coin_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r95.selectExCoin($event, coin_r91.symbol); return false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r92 = ctx_r98.index;
    const coin_r91 = ctx_r98.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", i_r92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", coin_r91.coinName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/images/curr_icon_" + coin_r91.symbol + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", coin_r91.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, coin_r91.coinName));
} }
function ExchangeComponent_ng_container_71_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExchangeComponent_ng_container_71_ng_container_1_li_1_Template, 9, 7, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const coin_r91 = ctx.$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", coin_r91.symbol !== ctx_r90.selectedCoin.symbol);
} }
function ExchangeComponent_ng_container_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExchangeComponent_ng_container_71_ng_container_1_Template, 2, 1, "ng-container", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r82.coins);
} }
function ExchangeComponent_img_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 72);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class ExchangeComponent {
    constructor(walletService, alertService, changeDetector) {
        this.walletService = walletService;
        this.alertService = alertService;
        this.changeDetector = changeDetector;
        this.model = {};
    }
    ngOnInit() {
        this.loading = true;
        this.selecting = false;
        this.validSelection = false;
        this.sending = false;
        this.exchanging = false;
        this.completed = false;
        this.noCoinSelection = true;
        this.noCoinExSelection = true;
        this.fixedAmount = true;
        this.portfolio = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Portfolio"]();
        this.portfolio.wallets = [];
        this.rates = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Rates"]();
        this.wallet = null;
        this.exWallet = null;
        this.rate = null;
        this.transaction = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Transaction"]();
        this.transaction.cost = 0;
        this.transaction.coinCost = 0;
        this.selectedCoin = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Coin"]();
        this.selectedCoin.symbol = 'gen';
        this.selectedCoin.coinName = 'Generic';
        this.selectedExCoin = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Coin"]();
        this.selectedExCoin.symbol = 'gen';
        this.selectedExCoin.coinName = 'Generic';
        this.sendStepOne = 'sendStepsInactive';
        this.sendStepTwo = 'sendStepsInactive';
        this.selectedCoinStyle = 'gen';
        this.selectedExCoinStyle = 'gen';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).user;
        this.baseCurrency = this.currentUser.baseCurrency.toUpperCase();
        this.amountType = 'all';
        this.selectedExCoinAmount = 0;
        this.selectedCoinCurrencyAmount = 0;
        this.selectedExCurrencyAmount = 0;
        this.model.coinAmount = 0;
        this.baseTransactPercent = 0.0115;
        this.tmout = null;
        this.loadData();
    }
    loadData() {
        //this.portfolio = this.walletService.getPortfolio(this.currentUser._id);
        console.log("loadData(), this.portfolio = ");
        console.log(this.portfolio);
        //if (!this.portfolio || this.portfolio == null) {
        this.walletService.loadPortfolio(this.currentUser._id).subscribe(data => {
            this._processPortfolio(data);
        }, error => {
            this.alertService.error(error.errors);
            this.loading = false;
        });
        //} else {
        //    console.log("local portfolio exists, this.portfolio = ");
        //    console.log(this.portfolio);
        //    this.loadCoins();
        //}
    }
    loadCoins() {
        this.walletService.getCoins().subscribe(data => {
            this._processCoins(data);
        }, error => {
            this.alertService.error(error.errors);
            this.loading = false;
        });
    }
    selectCoin(e, selCoin) {
        this.alertService.clear();
        var that = this;
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.coins, function (coin) {
            if (coin.symbol === selCoin) {
                that.selectedCoin.symbol = coin.symbol;
                that.selectedCoin.coinName = coin.coinName;
            }
        }, that);
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.portfolio.wallets, function (wallet) {
            if (wallet.name === selCoin) {
                that.wallet = wallet;
                that.wallet.coinBalance = wallet.balance;
            }
        }, that);
        this.model.coinAmount = 0;
        this.selectedCoinStyle = selCoin;
        this.noCoinSelection = false;
        this.selectAmount(this.amountType);
        this.changeDetector.detectChanges();
        this.loadExchangeRate();
    }
    loadExchangeRate() {
        this.walletService.getExchangeRates(this.selectedCoin.symbol).subscribe(data => {
            this._updateRate(data);
        }, error => {
            this.alertService.error(error.errors);
        });
    }
    selectExCoin(e, selExCoin) {
        this.alertService.clear();
        var that = this;
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.coins, function (coin) {
            if (coin.symbol === selExCoin) {
                that.selectedExCoin.symbol = coin.symbol;
                that.selectedExCoin.coinName = coin.coinName;
            }
        }, that);
        this.exWallet = null;
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.portfolio.wallets, function (wallet) {
            if (wallet.name === selExCoin) {
                that.exWallet = wallet;
                that.exWallet.coinBalance = wallet.balance;
            }
        }, that);
        console.log("this.exWallet = ");
        console.log(this.exWallet);
        if (this.exWallet === null) {
            this.alertService.error("You do not have wallet yet for this coin. Please create a Wallet for this coin to continue with the exchange.");
            this.selectedExCoin.symbol = 'gen';
            this.selectedExCoin.coinName = 'Generic';
            this.selectedExCoinStyle = 'gen';
            this.noCoinExSelection = true;
            this._exchangeError();
        }
        else {
            this.selectedExCoinStyle = selExCoin;
            this.noCoinExSelection = false;
        }
        this._updateValues();
        this.changeDetector.detectChanges();
    }
    selectAmount(amountType) {
        this.alertService.clear();
        if (amountType === 'all') {
            this.fixedAmount = true;
            if (this.selectedCoin.symbol !== 'gen') {
                this.model.coinAmount = this.wallet.coinBalance;
            }
        }
        else if (amountType === 'half') {
            this.fixedAmount = true;
            if (this.selectedCoin.symbol !== 'gen') {
                this.model.coinAmount = (this.wallet.coinBalance / 2);
            }
        }
        else {
            this.fixedAmount = false;
        }
        this.amountType = amountType;
        if (this.rate !== null) {
            this._calculateValues();
        }
    }
    runExchange() {
        this.selecting = false;
        this.sending = true;
        var that = this;
        this.sendStepOne = 'sendStepsActive';
        this.tmout = setTimeout(function () {
            console.log("runExchange"); // Will result in undefined;
            that._calculateExchange(); // Here, this, reference to context of the function wrapper
        }, 4000);
    }
    _calculateExchange() {
        clearTimeout(this.tmout);
        this.exchanging = true;
        var that = this;
        this.sendStepOne = 'sendStepsInactive';
        this.sendStepTwo = 'sendStepsActive';
        this.tmout = setTimeout(function () {
            console.log("_calculateExchange"); // Will result in undefined;
            that._completeSend(); // Here, this, reference to context of the function wrapper
        }, 4000);
    }
    _completeSend() {
        clearTimeout(this.tmout);
        this.walletService.getBalance(this.currentUser._id, this.selectedCoin.symbol).subscribe(data => {
            this.postTransaction(data);
        }, error => {
            this.alertService.error(error.errors);
            this._exchangeError();
        });
    }
    postTransaction(dataLoad) {
        var sendAmtPlusCost = parseFloat(this.model.coinAmount) + (this.model.coinAmount * this.baseTransactPercent);
        var suffBalance = (parseFloat(dataLoad.balance) > sendAmtPlusCost);
        if (suffBalance) {
            var date = new Date();
            var data = {
                addressFrom: this.wallet.address,
                addressTo: this.exWallet.address,
                coinFrom: this.selectedCoin.symbol,
                coinTo: this.selectedExCoin.symbol,
                coinAmount: this.model.coinAmount,
                coinCost: this.transaction.coinCost,
                cost: this.transaction.cost,
                signature: this.walletService.hashCode(this.wallet.address + date.toUTCString()),
                hash: this.walletService.hashCode(this.model.coinAmount + date.toUTCString())
            };
            this.walletService.exchange(this.currentUser._id, data).subscribe(data => {
                this._exchangeComplete();
            }, error => {
                this.alertService.error(error);
                this._exchangeError();
            });
        }
        else {
            this.alertService.error("Insufficient coin balance for this transaction.");
            this._exchangeError();
        }
    }
    _exchangeError() {
        this.selecting = true;
        this.validSelection = false;
        this.sending = false;
        this.exchanging = false;
        this.completed = false;
    }
    _exchangeComplete() {
        this.sending = false;
        this.validSelection = false;
        this.exchanging = false;
        this.completed = true;
        this.sendStepOne = 'sendStepsInactive';
        this.sendStepTwo = 'sendStepsInactive';
    }
    _calculateValues() {
        var reg = new RegExp('^[0-9][0-9,]*[0-9]*\.?[0-9]*$');
        if (reg.test(this.model.coinAmount)) {
            //TEST IF ENTERED VALUE IS WITHIN AMOUNT OF CURRENT PORTFOLIO
            var enteredAmount = parseFloat(this.model.coinAmount), portAmount = this.wallet.coinBalance;
            this.transaction.coinCost = this.model.coinAmount * this.baseTransactPercent;
            this.transaction.cost = this.transaction.coinCost * this.rate[this.wallet.baseCurrency];
            var adjustedCoinAmount = (this.model.coinAmount - this.transaction.coinCost);
            if (adjustedCoinAmount <= portAmount) {
                var money = this.model.coinAmount * this.rate[this.wallet.baseCurrency];
                this.selectedCoinCurrencyAmount = money;
            }
            else {
                this.alertService.error("The amount entered exceeds the available amount of coin in the selected wallet. Please Note, transaction fees are deducted form you available balance at the time of exchange.");
                this.validSelection = false;
            }
        }
        else {
            this.selectedCoinCurrencyAmount = 0;
            this.validSelection = false;
        }
        this._updateValues();
    }
    _updateValues() {
        if ((this.model.coinAmount !== '' && this.model.coinAmount > 0) && this.selectedExCoin.symbol !== 'gen') {
            var adjustedCoinAmount = (this.model.coinAmount - this.transaction.coinCost);
            this.selectedExCoinAmount = this.walletService.convert(adjustedCoinAmount, this.rate[this.selectedExCoin.symbol]);
            this.selectedExCurrencyAmount = adjustedCoinAmount * this.rate[this.wallet.baseCurrency];
            this.validSelection = true;
        }
        else {
            this.selectedExCoinAmount = 0;
            this.selectedExCurrencyAmount = 0;
            this.validSelection = false;
        }
        this.changeDetector.detectChanges();
    }
    _processPortfolio(result) {
        this.portfolio = result.portfolio;
        //this.walletService.setPortfolio(this.portfolio, this.currentUser._id);
        this.loadCoins();
    }
    _processCoins(result) {
        this.coins = result.coins || {};
        this.loading = false;
        this.selecting = true;
        this.changeDetector.detectChanges();
    }
    _updateRate(result) {
        this.rate = result.rates;
        this._calculateValues();
        this.changeDetector.detectChanges();
    }
}
ExchangeComponent.ɵfac = function ExchangeComponent_Factory(t) { return new (t || ExchangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_3__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ExchangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExchangeComponent, selectors: [["ng-component"]], decls: 211, vars: 78, consts: [["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "row", 3, "hidden"], [1, "col-md-6", "col-med-offset-1", "leftCol"], [1, "col-md-12", "text-center"], [1, "secTitle"], [1, "col-md-10", "leftCol"], [1, "dropdown"], ["type", "button", "id", "dropdownMenu1", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", 1, "exchangeDropDownBtn", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "dropdownMenu1", 1, "dropdown-menu"], [4, "ngIf"], [1, "col-md-12"], ["id", "coinAmountGrp", "role", "group", "aria-label", "...", 1, "btn-group"], ["type", "button", "data-toggle", "button", "aria-pressed", "false", 1, "btn", "btn-default", 3, "click"], ["type", "button", "data-toggle", "button", "aria-pressed", "true", 1, "btn", "btn-default", 3, "click"], [1, "coinAmount"], [1, "controlGroup"], [1, "col-md-8"], [1, "form-group", 3, "hidden", "ngClass"], ["type", "text", "name", "coinAmount", "placeholder", "0.00", "required", "", 1, "form-control", "col-md-6", "coinAmountInput", 3, "ngModel", "ngModelChange", "change"], ["coinAmount", "ngModel"], ["class", "help-block", 4, "ngIf"], [3, "hidden"], ["type", "text", 1, "currencyAmount"], [1, "col-md-4", "coinLabel"], [3, "ngClass"], [1, "col-md-12", "dividerLine"], [1, "currAmount"], [1, "col-md-4", "currLabel"], [1, "col-md-1", "middleDivider", "text-center"], [1, "arrow1"], ["src", "/images/two-arrows.png", "width", "45", "height", "25", "alt", "Exchange", "title", "Exchange", "border", "0"], [1, "col-md-5", "rightCol", 3, "hidden"], ["type", "button", "id", "dropdownMenu2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", 1, "exchangeDropDownBtn", "dropdown-toggle"], ["aria-labelledby", "dropdownMenu2", 1, "dropdown-menu"], [1, "col-md-12", "selectorSpoofer"], [1, "coinEx"], [1, "col-md-8", "coinExAmount"], [1, "currencyAmount"], [1, "currExAmount"], ["id", "stepOne", 1, "col-md-4", "col-md-offset-2", "text-center"], [1, "circle-wrapper"], [1, "circle-wrapper__circle", 3, "hidden"], [1, "circle-wrapper__content", 3, "ngClass"], [1, "stepCont"], [1, "stepTitle"], ["data-pack", "default", 1, "icon", "ion-paper-airplane", "sendIcons"], [1, "sendTitle"], ["id", "stepTwo", 1, "col-md-5", "col-md-offset-1", "text-center"], ["width", "105", "height", "105", 3, "src", "alt"], [1, "sendingLine"], [1, "selectionText", 3, "ngClass"], [1, "btn", "btn-primary", "btn-lg"], [1, "col-md-6", "col-med-offset-1", "leftCol", "text-right"], [1, "media-body"], ["clear", "all"], [1, "media-right"], ["width", "60", "height", "60", 3, "src", "alt"], ["src", "/images/arrow.png", "width", "45", "height", "31", "alt", "Send Arrow", "title", "Send Arrow", "border", "0"], [1, "col-md-5", "rightCol", "text-left"], [1, "media-left"], [1, "col-md-12", "text-center", 3, "hidden"], [1, "form-group"], [1, "btn", "btn-primary", "btn-lg", 3, "disabled", "click"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["href", "#", 3, "click"], ["width", "50", "height", "50", 1, "media-object", 3, "src", "alt"], [1, "coinListLabel"], [1, "help-block"], ["width", "50", "height", "50", 3, "src", "alt"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="]], template: function ExchangeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ExchangeComponent_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r78.form.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Select... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExchangeComponent_ng_container_16_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeComponent_Template_button_click_21_listener($event) { return ctx.selectAmount("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeComponent_Template_button_click_23_listener($event) { return ctx.selectAmount("half"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Half");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeComponent_Template_button_click_25_listener($event) { return ctx.selectAmount("min"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExchangeComponent_Template_input_ngModelChange_34_listener($event) { return ctx.model.coinAmount = $event; })("change", function ExchangeComponent_Template_input_change_34_listener($event) { return ctx._calculateValues(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ExchangeComponent_div_36_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Receive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Select... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ExchangeComponent_ng_container_71_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "STEP 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "SENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "STEP 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "EXCHANGING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Your exchange is now in progress!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " In 30 minutes or less your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " will arrive. You can safely leave this screen or quit Foxtrot while this transaction is in progress. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Watch Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " \u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Exchange Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "YOU ARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " EXCHANGING:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](169, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](172, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "YOU WILL RECEIVE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "RECEIVING:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](192, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](195, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeComponent_Template_button_click_205_listener($event) { return ctx.runExchange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](207, ExchangeComponent_img_207_Template, 1, 0, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "LOADING EXHANCGE SCREEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loading || ctx.sending || ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.portfolio !== null && ctx.portfolio.wallets !== null && ctx.portfolio.wallets.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.fixedAmount)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](76, _c0, _r78.submitted && !_r80.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.coinAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r78.submitted && !_r80.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.fixedAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.coinAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedCoinStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 52, ctx.selectedCoin.symbol));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](51, 54, ctx.selectedCoinCurrencyAmount, ctx.baseCurrency, "symbol-narrow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.baseCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.noCoinSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coins != null && ctx.coins.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedExCoinAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedExCoinStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 58, ctx.selectedExCoin.symbol));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](95, 60, ctx.selectedExCurrencyAmount, ctx.baseCurrency, "symbol-narrow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.baseCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loading || ctx.selecting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.exchanging || ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.sendStepOne);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.exchanging);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.sendStepTwo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.selectedCoin.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/images/curr_icon_" + ctx.selectedCoin.symbol + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.sending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sending ", ctx.selectedCoin.coinName, " to FoxEx...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedExCoinStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedExCoin.coinName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.noCoinSelection && ctx.noCoinExSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.selecting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedCoinStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.model.coinAmount, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](169, 64, ctx.selectedCoin.coinName), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](172, 66, ctx.selectedCoinCurrencyAmount, ctx.baseCurrency, "symbol-narrow"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.selectedCoin.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/images/curr_icon_" + ctx.selectedCoin.symbol + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.selectedExCoin.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/images/curr_icon_" + ctx.selectedExCoin.symbol + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.selecting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.selecting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedExCoinStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.selectedExCoinAmount, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](192, 70, ctx.selectedExCoin.coinName), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](195, 72, ctx.selectedExCurrencyAmount, ctx.baseCurrency, "symbol-narrow"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.validSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.noCoinSelection && ctx.noCoinExSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.validSelection || ctx.sending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".exchangeDropDownBtn[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n    touch-action: manipulation;\r\n    cursor: pointer;\r\n    background-color: #222;\r\n    background-image: none;\r\n    border: 1px solid #999;\r\n    white-space: nowrap;\r\n    padding: 15px 15px;\r\n    font-size: 18px;\r\n    line-height: 1.42857;\r\n    border-radius: 4px;\r\n\tcolor: #fff;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.secTitle[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    line-height: 1.42857;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n}\r\n.sendingLine[_ngcontent-%COMP%] {\r\n    font-size: 42px;\r\n    line-height: 1.42857;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n}\r\n.stepTitle[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n.sendTitle[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n}\r\n.sendStepsActive[_ngcontent-%COMP%] {\r\n    color: #eeeeee;\r\n}\r\n.sendStepsActive[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    opacity: 1.0;\r\n}\r\n.sendStepsInactive[_ngcontent-%COMP%] {\r\n    color: #606060;\r\n}\r\n.sendStepsInactive[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    opacity: 0.5;\r\n}\r\n.leftCol[_ngcontent-%COMP%] {\r\n    padding-right:6px;\r\n    margin-right:0px;\r\n}\r\n.rightCol[_ngcontent-%COMP%] {\r\n    padding-left:0px;\r\n    margin-left:0px;\r\n}\r\n.middleDivider[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height:100%;\r\n    float: left;\r\n    min-height: 1px;\r\n    min-width:50px;\r\n    padding-left: 6px;\r\n    padding-right: 0px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n}\r\n.arrow1[_ngcontent-%COMP%] {\r\n    border:0px;\r\n    padding:0px;\r\n    display: inline-block;\r\n}\r\n.coinList[_ngcontent-%COMP%] {\r\n\tlist-style-type: none;\r\n    width:100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    float: left;\r\n}\r\n.coinListLabel[_ngcontent-%COMP%] {\r\n    padding-top: 3px;\r\n    font-size: 18px;\r\n}\r\n.coinLabel[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    text-align: right;\r\n    padding-right: 0px;\r\n}\r\n.currLabel[_ngcontent-%COMP%] {\r\n    font-size: 21px;\r\n    color: #fff;\r\n    text-align: right;\r\n    padding-right: 0px;\r\n}\r\n.currencyAmount[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    text-align: right;\r\n}\r\n.currAmount[_ngcontent-%COMP%], .currExAmount[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n}\r\n.coinAmount[_ngcontent-%COMP%] {\r\n    padding: 6px;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n.coinAmountInput[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    border:0px;\r\n    padding: 6px;\r\n}\r\n.selectorSpoofer[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 35.5px;\r\n}\r\n.dividerLine[_ngcontent-%COMP%] {\r\n    height: 2px;\r\n    width: 100%;\r\n    display: inline-block;\r\n    background-color: #fff;\r\n}\r\n.no-gutters[_ngcontent-%COMP%] {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n  > [class*=\"col-sm\"] {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n.selectionText[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n.sendIcons[_ngcontent-%COMP%] {\r\n    font-size:90px;\r\n}\r\n.gen[_ngcontent-%COMP%] {\r\n    color:#fff;\r\n}\r\n.fcs[_ngcontent-%COMP%] {\r\n\tcolor:#ffc73a;\r\n}\r\n.btc[_ngcontent-%COMP%] {\r\n    color:#f7931b;\r\n}\r\n.eth[_ngcontent-%COMP%] {\r\n    color:#c1cef6;\r\n}\r\n.xrp[_ngcontent-%COMP%] {\r\n    color:#1bb4fe;\r\n}\r\n.ltc[_ngcontent-%COMP%] {\r\n    color:#c3c5c6;\r\n}\r\n.baseCurrencyTitle[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tcolor: #fff;\r\n}\r\n.smallCoin[_ngcontent-%COMP%] {\r\n\tfont-size: 12px;\r\n}\r\n.coinNameSmall[_ngcontent-%COMP%] {\r\n\tfont-size: 12px;\r\n\tcolor: #fff;\r\n}\r\n.circle-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: block;\r\n    height: 250px;\r\n    width: 250px;\r\n    border-radius: 50%;\r\n}\r\n.circle-wrapper__circle[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-animation: rotate 3.33s linear infinite;\r\n    animation: rotate 3.33s linear infinite;\r\n}\r\n.circle-wrapper__circle[_ngcontent-%COMP%]:before, .circle-wrapper__circle[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 50%;\r\n}\r\n.circle-wrapper__circle[_ngcontent-%COMP%]:before {\r\n    border-radius: 200px 200px 0 0;\r\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(92, 167, 255, 0.5)), to(#5ca7ff));\r\n    background-image: linear-gradient(to right, rgba(92, 167, 255, 0.5), #5ca7ff);\r\n}\r\n.circle-wrapper__circle[_ngcontent-%COMP%]:after {\r\n    top: 50%;\r\n    border-radius: 0 0 200px 200px;\r\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(92, 167, 255, 0.5)), to(transparent));\r\n    background-image: linear-gradient(to right, rgba(92, 167, 255, 0.5), transparent);\r\n}\r\n.circle-wrapper__content[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    z-index: 2;\r\n    height: 90%;\r\n    width: 90%;\r\n    background: #222;\r\n    border-radius: 50%;\r\n}\r\n.stepCont[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 1;\r\n}\r\n@-webkit-keyframes rotate {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes rotate {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ19zcmMvYXBwL2V4Y2hhbmdlL2V4Y2hhbmdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0lBQ1IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDckIsV0FBVztBQUNaO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFDQTtDQUNDLHFCQUFxQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDRjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0NBQStDO0lBQy9DLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSw4QkFBOEI7SUFFOUIsMkdBQTZFO0lBQTdFLDZFQUE2RTtBQUNqRjtBQUNBO0lBQ0ksUUFBUTtJQUNSLDhCQUE4QjtJQUU5QiwrR0FBaUY7SUFBakYsaUZBQWlGO0FBQ3JGO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBd0M7SUFDeEMsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBRUE7SUFDSTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7SUFDN0I7QUFDSjtBQVJBO0lBQ0k7UUFDSSwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGlDQUF5QjtnQkFBekIseUJBQXlCO0lBQzdCO0FBQ0o7QUFFQTs7RUFFRTtBQUNGO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFuZ19zcmMvYXBwL2V4Y2hhbmdlL2V4Y2hhbmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhjaGFuZ2VEcm9wRG93bkJ0biB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5zZWNUaXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zZW5kaW5nTGluZSB7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zdGVwVGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnNlbmRUaXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uc2VuZFN0ZXBzQWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZWVlZWVlO1xyXG59IFxyXG4uc2VuZFN0ZXBzQWN0aXZlIGltZyB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuLnNlbmRTdGVwc0luYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNjA2MDYwO1xyXG59XHJcbi5zZW5kU3RlcHNJbmFjdGl2ZSBpbWcge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5sZWZ0Q29sIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6NnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjBweDtcclxufVxyXG4ucmlnaHRDb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjBweDtcclxufVxyXG4ubWlkZGxlRGl2aWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgbWluLXdpZHRoOjUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmFycm93MSB7XHJcbiAgICBib3JkZXI6MHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmNvaW5MaXN0IHtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jb2luTGlzdExhYmVsIHtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmNvaW5MYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbi5jdXJyTGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4uY3VycmVuY3lBbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY3VyckFtb3VudCwgLmN1cnJFeEFtb3VudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvaW5BbW91bnQge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNvaW5BbW91bnRJbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjowcHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuLnNlbGVjdG9yU3Bvb2ZlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUuNXB4O1xyXG59XHJcbi5kaXZpZGVyTGluZSB7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4ubm8tZ3V0dGVycyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gID4gW2NsYXNzKj1cImNvbC1zbVwiXSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG4uc2VsZWN0aW9uVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnNlbmRJY29ucyB7XHJcbiAgICBmb250LXNpemU6OTBweDtcclxufVxyXG4uZ2VuIHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLmZjcyB7XHJcblx0Y29sb3I6I2ZmYzczYTtcclxufVxyXG4uYnRjIHtcclxuICAgIGNvbG9yOiNmNzkzMWI7XHJcbn1cclxuLmV0aCB7XHJcbiAgICBjb2xvcjojYzFjZWY2O1xyXG59XHJcbi54cnAge1xyXG4gICAgY29sb3I6IzFiYjRmZTtcclxufVxyXG4ubHRjIHtcclxuICAgIGNvbG9yOiNjM2M1YzY7XHJcbn1cclxuXHJcbi5iYXNlQ3VycmVuY3lUaXRsZSB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc21hbGxDb2luIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNvaW5OYW1lU21hbGwge1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNpcmNsZS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uY2lyY2xlLXdyYXBwZXJfX2NpcmNsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgMy4zM3MgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMy4zM3MgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5jaXJjbGUtd3JhcHBlcl9fY2lyY2xlOmJlZm9yZSwgLmNpcmNsZS13cmFwcGVyX19jaXJjbGU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5jaXJjbGUtd3JhcHBlcl9fY2lyY2xlOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweCAyMDBweCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbShyZ2JhKDkyLCAxNjcsIDI1NSwgMC41KSksIHRvKCM1Y2E3ZmYpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg5MiwgMTY3LCAyNTUsIDAuNSksICM1Y2E3ZmYpO1xyXG59XHJcbi5jaXJjbGUtd3JhcHBlcl9fY2lyY2xlOmFmdGVyIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwMHB4IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20ocmdiYSg5MiwgMTY3LCAyNTUsIDAuNSkpLCB0byh0cmFuc3BhcmVudCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDkyLCAxNjcsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQpO1xyXG59XHJcbi5jaXJjbGUtd3JhcHBlcl9fY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc3RlcENvbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZGl0aW9uYWwgc3R5bGVzLlxyXG4gKi9cclxuLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                templateUrl: './exchange.component.html',
                styleUrls: ['./exchange.component.css']
            }]
    }], function () { return [{ type: _services_index__WEBPACK_IMPORTED_MODULE_3__["WalletService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/exchange/index.ts":
/*!***************************************!*\
  !*** ./ang_src/app/exchange/index.ts ***!
  \***************************************/
/*! exports provided: ExchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exchange_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange.component */ "./ang_src/app/exchange/exchange.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangeComponent", function() { return _exchange_component__WEBPACK_IMPORTED_MODULE_0__["ExchangeComponent"]; });




/***/ }),

/***/ "./ang_src/app/home/home.component.ts":
/*!********************************************!*\
  !*** ./ang_src/app/home/home.component.ts ***!
  \********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/index */ "./ang_src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HomeComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Hi, ", ctx_r0.user.firstName, " ", ctx_r0.user.lastName, ". ");
} }
class HomeComponent {
    constructor(userService, _authService) {
        this.userService = userService;
        this._authService = _authService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user = null;
    }
    ngOnInit() {
        //this.loadAllUsers();
        this.user = this._authService.getUserDetails();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 8, vars: 1, consts: [[1, "text-center"], ["src", "/images/home_splash.png", "width", "845", "height", "481", "alt", "FoxyCash", "title", "Foxycash", "border", "0"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to Foxtrot!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_span_7_Template, 2, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user !== null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                templateUrl: 'home.component.html'
            }]
    }], function () { return [{ type: _services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/home/index.ts":
/*!***********************************!*\
  !*** ./ang_src/app/home/index.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./ang_src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./ang_src/app/navbar/index.ts":
/*!*************************************!*\
  !*** ./ang_src/app/navbar/index.ts ***!
  \*************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component */ "./ang_src/app/navbar/navbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return _navbar_component__WEBPACK_IMPORTED_MODULE_0__["NavbarComponent"]; });




/***/ }),

/***/ "./ang_src/app/navbar/navbar.component.ts":
/*!************************************************!*\
  !*** ./ang_src/app/navbar/navbar.component.ts ***!
  \************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/portfolio"]; };
const _c2 = function () { return ["/wallet"]; };
const _c3 = function () { return ["/exchange"]; };
const _c4 = function () { return ["/profile"]; };
const _c5 = function () { return ["/about"]; };
const _c6 = function () { return ["/logout"]; };
class NavbarComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 30, vars: 14, consts: [[1, "main-nav", "navBar"], [1, "main-nav-brand", 3, "routerLink"], ["src", "/images/main_logo.png", "width", "121", "height", "125", "alt", "Foxtrot", "title", "Foxtrot", "border", "0"], [1, "main-nav-cntr"], [1, "nav-button"], [1, "nav-link", 3, "routerLink"], ["data-pack", "ios", "data-tags", "cog, settings, options", 1, "ion-ios-pie-outline"], ["data-pack", "ios", "data-tags", "shopping, price, cart, money, container, $", 1, "ion-ios-bookmarks-outline"], ["data-pack", "ios", "data-tags", "competition, compete, win, lose, award", 1, "ion-ios-loop"], [1, "bottomdiv"], ["data-pack", "ios", "data-tags", "delete, remove, trash, end, stop, x", 1, "ion-ios-toggle-outline"], ["data-pack", "ios", "data-tags", "marker, favorite", 1, "ion-ios-information-outline"], ["data-pack", "ios", "data-tags", "delete, remove, trash, end, stop, x", 1, "ion-ios-close-outline"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c6));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".main-nav[_ngcontent-%COMP%] {\r\n\theight: 100%; \r\n    overflow-x: hidden; \r\n    padding-top: 60px; \r\n    margin: 0;\r\n}\r\n.main-nav-brand[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\twidth:100%;\r\n\tborder: 0;\r\n\tclear: all;\r\n}\r\n.navBar[_ngcontent-%COMP%] {\r\n\tmin-height: 750px;\r\n}\r\n.main-nav-cntr[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    width:100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    float: left;\r\n}\r\n.bottomdiv[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position:absolute;\r\n    left:15px;\r\n    bottom:0;\r\n}\r\nli.nav-button[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n    padding: 25px 0px 25px 0px;\r\n    font-size: 25px;\r\n    display: inline-block;\r\n    list-style-type: none;\r\n    width:100%;\r\n}\r\n.bottomdiv[_ngcontent-%COMP%]   li.nav-button[_ngcontent-%COMP%] {\r\n    font-size: 21px;\r\n}\r\nli.nav-button[_ngcontent-%COMP%]:hover {\r\n\tbackground-color: #111;\r\n}\r\nli.nav-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #eeeeee;\r\n\ttext-decoration: none;\r\n}\r\nli.nav-button[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\nli.nav-button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\nli.nav-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\tcolor: #eeeeee;\r\n}\r\nli.nav-button[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n}\r\nli.nav-button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .main-nav[_ngcontent-%COMP%] {padding-top: 15px;}\r\n    .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 18px;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ19zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVksRUFBRSxxQkFBcUI7SUFDaEMsa0JBQWtCLEVBQUUsOEJBQThCO0lBQ2xELGlCQUFpQixFQUFFLG9DQUFvQztJQUN2RCxTQUFTO0FBQ2I7QUFDQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsU0FBUztDQUNULFVBQVU7QUFDWDtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7QUFDQTtDQUNDLFNBQVM7SUFDTiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFHQSxnSUFBZ0k7QUFDaEk7SUFDSSxXQUFXLGlCQUFpQixDQUFDO0lBQzdCLGFBQWEsZUFBZSxDQUFDO0FBQ2pDIiwiZmlsZSI6ImFuZ19zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLW5hdiB7XHJcblx0aGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICAgIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLm1haW4tbmF2LWJyYW5kIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGJvcmRlcjogMDtcclxuXHRjbGVhcjogYWxsO1xyXG59XHJcbi5uYXZCYXIge1xyXG5cdG1pbi1oZWlnaHQ6IDc1MHB4O1xyXG59XHJcbi5tYWluLW5hdi1jbnRyIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmJvdHRvbWRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDoxNXB4O1xyXG4gICAgYm90dG9tOjA7XHJcbn1cclxubGkubmF2LWJ1dHRvbiB7XHJcblx0bWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMjVweCAwcHggMjVweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi5ib3R0b21kaXYgbGkubmF2LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxubGkubmF2LWJ1dHRvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxufVxyXG5saS5uYXYtYnV0dG9uIGEge1xyXG5cdGNvbG9yOiAjZWVlZWVlO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5saS5uYXYtYnV0dG9uIGEuYWN0aXZlIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxubGkubmF2LWJ1dHRvbjpob3ZlciBhIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxubGkubmF2LWJ1dHRvbiBhIGkge1xyXG5cdGNvbG9yOiAjZWVlZWVlO1xyXG59XHJcbmxpLm5hdi1idXR0b24gYS5hY3RpdmUgaSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxubGkubmF2LWJ1dHRvbjpob3ZlciBhIGkge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogT24gc21hbGxlciBzY3JlZW5zLCB3aGVyZSBoZWlnaHQgaXMgbGVzcyB0aGFuIDQ1MHB4LCBjaGFuZ2UgdGhlIHN0eWxlIG9mIHRoZSBzaWRlbmF2IChsZXNzIHBhZGRpbmcgYW5kIGEgc21hbGxlciBmb250IHNpemUpICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLm1haW4tbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XHJcbiAgICAubWFpbi1uYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/portfolio/index.ts":
/*!****************************************!*\
  !*** ./ang_src/app/portfolio/index.ts ***!
  \****************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.component */ "./ang_src/app/portfolio/portfolio.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return _portfolio_component__WEBPACK_IMPORTED_MODULE_0__["PortfolioComponent"]; });




/***/ }),

/***/ "./ang_src/app/portfolio/portfolio.component.ts":
/*!******************************************************!*\
  !*** ./ang_src/app/portfolio/portfolio.component.ts ***!
  \******************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/index */ "./ang_src/app/_services/index.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");





class PortfolioComponent {
    constructor(walletService, alertService, changeDetector) {
        this.walletService = walletService;
        this.alertService = alertService;
        this.changeDetector = changeDetector;
        this.view = [];
        this.single = [];
        this.gradient = true;
        this.showLegend = true;
        this.showLabels = true;
        this.isDoughnut = false;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
    }
    ngOnInit() {
        this.loading = true;
        this.view = [800, 600];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).user;
        this._loadPortfolio();
        this.wallets = [];
    }
    onSelect(event) {
        console.log(event);
    }
    _loadPortfolio() {
        this.portfolio = this.walletService.getPortfolio(this.currentUser._id);
        if (this.portfolio == null) {
            this.walletService.loadPortfolio(this.currentUser._id).subscribe(data => {
                this._processPortfolio(data);
            }, error => {
                this.alertService.error(error.errors);
            });
        }
        else {
            this._completeInit();
        }
    }
    _processPortfolio(result) {
        this.portfolio = result.portfolio;
        this.walletService.setPortfolio(this.portfolio, this.currentUser._id);
        this._completeInit();
    }
    _completeInit() {
        this.wallets = this.portfolio.wallets;
        Object.assign(this, { single: this.wallets });
        this.loading = false;
        this.changeDetector.detectChanges();
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 1, vars: 4, consts: [[3, "view", "scheme", "results", "gradient", "select"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-charts-advanced-pie-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function PortfolioComponent_Template_ngx_charts_advanced_pie_chart_select_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.single)("gradient", ctx.gradient);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["AdvancedPieChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmdfc3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MifQ== */", ".bootstrap-select[_ngcontent-%COMP%] > select.bs-select-hidden[_ngcontent-%COMP%], select.bs-select-hidden[_ngcontent-%COMP%], select.selectpicker[_ngcontent-%COMP%]{display:none!important}.bootstrap-select[_ngcontent-%COMP%]{width:220px\\0}.bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle[_ngcontent-%COMP%]{position:relative;width:100%;z-index:1;text-align:right;white-space:nowrap}.bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder[_ngcontent-%COMP%], .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder[_ngcontent-%COMP%]:active, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder[_ngcontent-%COMP%]:focus, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder[_ngcontent-%COMP%]:hover{color:#999}.bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-danger[_ngcontent-%COMP%], .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-danger[_ngcontent-%COMP%]:active, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-danger[_ngcontent-%COMP%]:focus, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-danger[_ngcontent-%COMP%]:hover, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-dark[_ngcontent-%COMP%], .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-dark[_ngcontent-%COMP%]:active, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-dark[_ngcontent-%COMP%]:focus, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-dark[_ngcontent-%COMP%]:hover, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-info[_ngcontent-%COMP%], .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-info[_ngcontent-%COMP%]:active, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-info[_ngcontent-%COMP%]:focus, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-info[_ngcontent-%COMP%]:hover, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-primary[_ngcontent-%COMP%], .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-primary[_ngcontent-%COMP%]:active, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-primary[_ngcontent-%COMP%]:focus, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-primary[_ngcontent-%COMP%]:hover, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-secondary[_ngcontent-%COMP%], .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-secondary[_ngcontent-%COMP%]:active, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-secondary[_ngcontent-%COMP%]:focus, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-secondary[_ngcontent-%COMP%]:hover, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-success[_ngcontent-%COMP%], .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-success[_ngcontent-%COMP%]:active, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-success[_ngcontent-%COMP%]:focus, .bootstrap-select[_ngcontent-%COMP%] > .dropdown-toggle.bs-placeholder.btn-success[_ngcontent-%COMP%]:hover{color:rgba(255,255,255,.5)}.bootstrap-select[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{position:absolute!important;bottom:0;left:50%;display:block!important;width:.5px!important;height:100%!important;padding:0!important;opacity:0!important;border:none}.bootstrap-select[_ngcontent-%COMP%] > select.mobile-device[_ngcontent-%COMP%]{top:0;left:0;display:block!important;width:100%!important;z-index:2}.bootstrap-select.is-invalid[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%], .error[_ngcontent-%COMP%]   .bootstrap-select[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%], .has-error[_ngcontent-%COMP%]   .bootstrap-select[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .bootstrap-select[_ngcontent-%COMP%]   .selectpicker[_ngcontent-%COMP%]:invalid + .dropdown-toggle[_ngcontent-%COMP%]{border-color:#b94a48}.bootstrap-select.is-valid[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .bootstrap-select[_ngcontent-%COMP%]   .selectpicker[_ngcontent-%COMP%]:valid + .dropdown-toggle[_ngcontent-%COMP%]{border-color:#28a745}.bootstrap-select.fit-width[_ngcontent-%COMP%]{width:auto!important}.bootstrap-select[_ngcontent-%COMP%]:not([class*=col-]):not([class*=form-control]):not(.input-group-btn){width:220px}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus{outline:thin dotted #333!important;outline:5px auto -webkit-focus-ring-color!important;outline-offset:-2px}.bootstrap-select.form-control[_ngcontent-%COMP%]{margin-bottom:0;padding:0;border:none}[_ngcontent-%COMP%]:not(.input-group) > .bootstrap-select.form-control[_ngcontent-%COMP%]:not([class*=col-]){width:100%}.bootstrap-select.form-control.input-group-btn[_ngcontent-%COMP%]{z-index:auto}.bootstrap-select.form-control.input-group-btn[_ngcontent-%COMP%]:not(:first-child):not(:last-child) > .btn[_ngcontent-%COMP%]{border-radius:0}.bootstrap-select[_ngcontent-%COMP%]:not(.input-group-btn), .bootstrap-select[class*=col-][_ngcontent-%COMP%]{float:none;display:inline-block;margin-left:0}.bootstrap-select.dropdown-menu-right[_ngcontent-%COMP%], .bootstrap-select[class*=col-].dropdown-menu-right[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   .bootstrap-select[class*=col-].dropdown-menu-right[_ngcontent-%COMP%]{float:right}.form-group[_ngcontent-%COMP%]   .bootstrap-select[_ngcontent-%COMP%], .form-horizontal[_ngcontent-%COMP%]   .bootstrap-select[_ngcontent-%COMP%], .form-inline[_ngcontent-%COMP%]   .bootstrap-select[_ngcontent-%COMP%]{margin-bottom:0}.form-group-lg[_ngcontent-%COMP%]   .bootstrap-select.form-control[_ngcontent-%COMP%], .form-group-sm[_ngcontent-%COMP%]   .bootstrap-select.form-control[_ngcontent-%COMP%]{padding:0}.form-group-lg[_ngcontent-%COMP%]   .bootstrap-select.form-control[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%], .form-group-sm[_ngcontent-%COMP%]   .bootstrap-select.form-control[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{height:100%;font-size:inherit;line-height:inherit;border-radius:inherit}.bootstrap-select.form-control-lg[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%], .bootstrap-select.form-control-sm[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{font-size:inherit;line-height:inherit;border-radius:inherit}.bootstrap-select.form-control-sm[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{padding:.25rem .5rem}.bootstrap-select.form-control-lg[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{padding:.5rem 1rem}.form-inline[_ngcontent-%COMP%]   .bootstrap-select[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:100%}.bootstrap-select.disabled[_ngcontent-%COMP%], .bootstrap-select[_ngcontent-%COMP%] > .disabled[_ngcontent-%COMP%]{cursor:not-allowed}.bootstrap-select.disabled[_ngcontent-%COMP%]:focus, .bootstrap-select[_ngcontent-%COMP%] > .disabled[_ngcontent-%COMP%]:focus{outline:0!important}.bootstrap-select.bs-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:0!important;padding:0!important}.bootstrap-select.bs-container[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{z-index:1060}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{content:'';display:inline-block}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]{position:absolute;top:0;left:0;padding-top:inherit;padding-right:inherit;padding-bottom:inherit;padding-left:inherit;height:100%;width:100%;text-align:left}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option-inner[_ngcontent-%COMP%]{padding-right:inherit}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option-inner-inner[_ngcontent-%COMP%]{overflow:hidden}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%]{position:absolute;top:50%;right:12px;margin-top:-2px;vertical-align:middle}.input-group[_ngcontent-%COMP%]   .bootstrap-select.form-control[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{border-radius:inherit}.bootstrap-select[class*=col-][_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{width:100%}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{min-width:100%;box-sizing:border-box}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] > .inner[_ngcontent-%COMP%]:focus{outline:0!important}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu.inner[_ngcontent-%COMP%]{position:static;float:none;border:0;padding:0;margin:0;border-radius:0;box-shadow:none}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)!important}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:not-allowed}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.opt[_ngcontent-%COMP%]{position:relative;padding-left:2.25em}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.check-mark[_ngcontent-%COMP%]{display:none}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.text[_ngcontent-%COMP%]{display:inline-block}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{padding-left:.5em}.bootstrap-select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .notify[_ngcontent-%COMP%]{position:absolute;bottom:5px;width:96%;margin:0 2%;min-height:26px;padding:3px 5px;background:#f5f5f5;border:1px solid #e3e3e3;box-shadow:inset 0 1px 1px rgba(0,0,0,.05);pointer-events:none;opacity:.9;box-sizing:border-box}.bootstrap-select[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]{padding:3px;background:#f5f5f5;margin:0 5px;white-space:nowrap}.bootstrap-select.fit-width[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]{position:static;display:inline;padding:0}.bootstrap-select.fit-width[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option-inner[_ngcontent-%COMP%], .bootstrap-select.fit-width[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option-inner-inner[_ngcontent-%COMP%]{display:inline}.bootstrap-select.fit-width[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%]{position:static;top:auto;margin-top:-1px}.bootstrap-select.show-tick[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   span.check-mark[_ngcontent-%COMP%]{position:absolute;display:inline-block;right:15px;top:5px}.bootstrap-select.show-tick[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.text[_ngcontent-%COMP%]{margin-right:34px}.bootstrap-select[_ngcontent-%COMP%]   .bs-ok-default[_ngcontent-%COMP%]:after{content:'';display:block;width:.5em;height:1em;border-style:solid;border-width:0 .26em .26em 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.bootstrap-select.show-menu-arrow.open[_ngcontent-%COMP%] > .dropdown-toggle[_ngcontent-%COMP%], .bootstrap-select.show-menu-arrow.show[_ngcontent-%COMP%] > .dropdown-toggle[_ngcontent-%COMP%]{z-index:1061}.bootstrap-select.show-menu-arrow[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:before{content:'';border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid rgba(204,204,204,.2);position:absolute;bottom:-4px;left:9px;display:none}.bootstrap-select.show-menu-arrow[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:after{content:'';border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;position:absolute;bottom:-4px;left:10px;display:none}.bootstrap-select.show-menu-arrow.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:before{bottom:auto;top:-4px;border-top:7px solid rgba(204,204,204,.2);border-bottom:0}.bootstrap-select.show-menu-arrow.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:after{bottom:auto;top:-4px;border-top:6px solid #fff;border-bottom:0}.bootstrap-select.show-menu-arrow.pull-right[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:before{right:12px;left:auto}.bootstrap-select.show-menu-arrow.pull-right[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:after{right:13px;left:auto}.bootstrap-select.show-menu-arrow.open[_ngcontent-%COMP%] > .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:after, .bootstrap-select.show-menu-arrow.open[_ngcontent-%COMP%] > .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:before, .bootstrap-select.show-menu-arrow.show[_ngcontent-%COMP%] > .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:after, .bootstrap-select.show-menu-arrow.show[_ngcontent-%COMP%] > .dropdown-toggle[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:before{display:block}.bs-actionsbox[_ngcontent-%COMP%], .bs-donebutton[_ngcontent-%COMP%], .bs-searchbox[_ngcontent-%COMP%]{padding:4px 8px}.bs-actionsbox[_ngcontent-%COMP%]{width:100%;box-sizing:border-box}.bs-actionsbox[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}.bs-donebutton[_ngcontent-%COMP%]{float:left;width:100%;box-sizing:border-box}.bs-donebutton[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.bs-searchbox[_ngcontent-%COMP%] + .bs-actionsbox[_ngcontent-%COMP%]{padding:0 8px 4px}.bs-searchbox[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{margin-bottom:0;width:100%;float:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ19zcmMvYXBwL3BvcnRmb2xpby9ib290c3RyYXAtc2VsZWN0Lm1pbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0VBS0UsQ0FBQyxzRkFBc0Ysc0JBQXNCLENBQUMsa0JBQWtCLGFBQWEsQ0FBQyxtQ0FBbUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQywyTkFBMk4sVUFBVSxDQUFDLDhpREFBOGlELDBCQUEwQixDQUFDLHlCQUF5QiwyQkFBMkIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyx1Q0FBdUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsOE1BQThNLG9CQUFvQixDQUFDLGtIQUFrSCxvQkFBb0IsQ0FBQyw0QkFBNEIsb0JBQW9CLENBQUMsc0ZBQXNGLFdBQVcsQ0FBQyx5Q0FBeUMsa0NBQWtDLENBQUMsbURBQW1ELENBQUMsbUJBQW1CLENBQUMsK0JBQStCLGVBQWUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLHFFQUFxRSxVQUFVLENBQUMsK0NBQStDLFlBQVksQ0FBQyx1RkFBdUYsZUFBZSxDQUFDLHVFQUF1RSxVQUFVLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLGlKQUFpSixXQUFXLENBQUMsZ0dBQWdHLGVBQWUsQ0FBQyw0RkFBNEYsU0FBUyxDQUFDLDhIQUE4SCxXQUFXLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsc0dBQXNHLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLG1EQUFtRCxvQkFBb0IsQ0FBQyxtREFBbUQsa0JBQWtCLENBQUMsNkNBQTZDLFVBQVUsQ0FBQyx1REFBdUQsa0JBQWtCLENBQUMsbUVBQW1FLG1CQUFtQixDQUFDLCtCQUErQixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLDhDQUE4QyxZQUFZLENBQUMsMENBQTBDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxrREFBa0QsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyx3REFBd0QscUJBQXFCLENBQUMsOERBQThELGVBQWUsQ0FBQywwQ0FBMEMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsNkRBQTZELHFCQUFxQixDQUFDLGdEQUFnRCxVQUFVLENBQUMsaUNBQWlDLGNBQWMsQ0FBMEQscUJBQXFCLENBQUMsOENBQThDLG1CQUFtQixDQUFDLHVDQUF1QyxlQUFlLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBeUIsZUFBZSxDQUFDLG9DQUFvQyxpQkFBaUIsQ0FBQyxpREFBaUQsb0NBQW9DLENBQUMsK0NBQStDLGtCQUFrQixDQUFDLHNDQUFzQyxjQUFjLENBQUMsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsMENBQTBDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLHNEQUFzRCxZQUFZLENBQUMsZ0RBQWdELG9CQUFvQixDQUFDLDBDQUEwQyxpQkFBaUIsQ0FBQyx5Q0FBeUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBb0QsMENBQTBDLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUEwRCxxQkFBcUIsQ0FBQyw4QkFBOEIsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyw0REFBNEQsZUFBZSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsMElBQTBJLGNBQWMsQ0FBQyxvREFBb0QsZUFBZSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMscUVBQXFFLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsMERBQTBELGlCQUFpQixDQUFDLHVDQUF1QyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsK0JBQStCLENBQXdELHVCQUF1QixDQUFDLGdIQUFnSCxZQUFZLENBQUMseUVBQXlFLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxrQ0FBa0MsQ0FBQyw0Q0FBNEMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyx3RUFBd0UsVUFBVSxDQUFDLGlDQUFpQyxDQUFDLGtDQUFrQyxDQUFDLDRCQUE0QixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGdGQUFnRixXQUFXLENBQUMsUUFBUSxDQUFDLHlDQUF5QyxDQUFDLGVBQWUsQ0FBQywrRUFBK0UsV0FBVyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxlQUFlLENBQUMsb0ZBQW9GLFVBQVUsQ0FBQyxTQUFTLENBQUMsbUZBQW1GLFVBQVUsQ0FBQyxTQUFTLENBQUMsc1RBQXNULGFBQWEsQ0FBQyw0Q0FBNEMsZUFBZSxDQUFDLGVBQWUsVUFBVSxDQUEwRCxxQkFBcUIsQ0FBQyxpQ0FBaUMsU0FBUyxDQUFDLGVBQWUsVUFBVSxDQUFDLFVBQVUsQ0FBMEQscUJBQXFCLENBQUMsaUNBQWlDLFVBQVUsQ0FBQyw2QkFBNkIsaUJBQWlCLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSIsImZpbGUiOiJhbmdfc3JjL2FwcC9wb3J0Zm9saW8vYm9vdHN0cmFwLXNlbGVjdC5taW4uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIEJvb3RzdHJhcC1zZWxlY3QgdjEuMTMuMiAoaHR0cHM6Ly9kZXZlbG9wZXIuc25hcGFwcG9pbnRtZW50cy5jb20vYm9vdHN0cmFwLXNlbGVjdClcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTItMjAxOCBTbmFwQXBwb2ludG1lbnRzLCBMTENcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vc25hcGFwcG9pbnRtZW50cy9ib290c3RyYXAtc2VsZWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqLy5ib290c3RyYXAtc2VsZWN0PnNlbGVjdC5icy1zZWxlY3QtaGlkZGVuLHNlbGVjdC5icy1zZWxlY3QtaGlkZGVuLHNlbGVjdC5zZWxlY3RwaWNrZXJ7ZGlzcGxheTpub25lIWltcG9ydGFudH0uYm9vdHN0cmFwLXNlbGVjdHt3aWR0aDoyMjBweFxcMH0uYm9vdHN0cmFwLXNlbGVjdD4uZHJvcGRvd24tdG9nZ2xle3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7ei1pbmRleDoxO3RleHQtYWxpZ246cmlnaHQ7d2hpdGUtc3BhY2U6bm93cmFwfS5ib290c3RyYXAtc2VsZWN0Pi5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIsLmJvb3RzdHJhcC1zZWxlY3Q+LmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlcjphY3RpdmUsLmJvb3RzdHJhcC1zZWxlY3Q+LmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlcjpmb2N1cywuYm9vdHN0cmFwLXNlbGVjdD4uZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyOmhvdmVye2NvbG9yOiM5OTl9LmJvb3RzdHJhcC1zZWxlY3Q+LmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tZGFuZ2VyLC5ib290c3RyYXAtc2VsZWN0Pi5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLWRhbmdlcjphY3RpdmUsLmJvb3RzdHJhcC1zZWxlY3Q+LmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tZGFuZ2VyOmZvY3VzLC5ib290c3RyYXAtc2VsZWN0Pi5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLWRhbmdlcjpob3ZlciwuYm9vdHN0cmFwLXNlbGVjdD4uZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1kYXJrLC5ib290c3RyYXAtc2VsZWN0Pi5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLWRhcms6YWN0aXZlLC5ib290c3RyYXAtc2VsZWN0Pi5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLWRhcms6Zm9jdXMsLmJvb3RzdHJhcC1zZWxlY3Q+LmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tZGFyazpob3ZlciwuYm9vdHN0cmFwLXNlbGVjdD4uZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1pbmZvLC5ib290c3RyYXAtc2VsZWN0Pi5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLWluZm86YWN0aXZlLC5ib290c3RyYXAtc2VsZWN0Pi5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLWluZm86Zm9jdXMsLmJvb3RzdHJhcC1zZWxlY3Q+LmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4taW5mbzpob3ZlciwuYm9vdHN0cmFwLXNlbGVjdD4uZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1wcmltYXJ5LC5ib290c3RyYXAtc2VsZWN0Pi5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLXByaW1hcnk6YWN0aXZlLC5ib290c3RyYXAtc2VsZWN0Pi5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLXByaW1hcnk6Zm9jdXMsLmJvb3RzdHJhcC1zZWxlY3Q+LmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tcHJpbWFyeTpob3ZlciwuYm9vdHN0cmFwLXNlbGVjdD4uZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1zZWNvbmRhcnksLmJvb3RzdHJhcC1zZWxlY3Q+LmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tc2Vjb25kYXJ5OmFjdGl2ZSwuYm9vdHN0cmFwLXNlbGVjdD4uZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1zZWNvbmRhcnk6Zm9jdXMsLmJvb3RzdHJhcC1zZWxlY3Q+LmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tc2Vjb25kYXJ5OmhvdmVyLC5ib290c3RyYXAtc2VsZWN0Pi5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLXN1Y2Nlc3MsLmJvb3RzdHJhcC1zZWxlY3Q+LmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tc3VjY2VzczphY3RpdmUsLmJvb3RzdHJhcC1zZWxlY3Q+LmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tc3VjY2Vzczpmb2N1cywuYm9vdHN0cmFwLXNlbGVjdD4uZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1zdWNjZXNzOmhvdmVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpfS5ib290c3RyYXAtc2VsZWN0PnNlbGVjdHtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7Ym90dG9tOjA7bGVmdDo1MCU7ZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7d2lkdGg6LjVweCFpbXBvcnRhbnQ7aGVpZ2h0OjEwMCUhaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnQ7b3BhY2l0eTowIWltcG9ydGFudDtib3JkZXI6bm9uZX0uYm9vdHN0cmFwLXNlbGVjdD5zZWxlY3QubW9iaWxlLWRldmljZXt0b3A6MDtsZWZ0OjA7ZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7d2lkdGg6MTAwJSFpbXBvcnRhbnQ7ei1pbmRleDoyfS5ib290c3RyYXAtc2VsZWN0LmlzLWludmFsaWQgLmRyb3Bkb3duLXRvZ2dsZSwuZXJyb3IgLmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZSwuaGFzLWVycm9yIC5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUsLndhcy12YWxpZGF0ZWQgLmJvb3RzdHJhcC1zZWxlY3QgLnNlbGVjdHBpY2tlcjppbnZhbGlkKy5kcm9wZG93bi10b2dnbGV7Ym9yZGVyLWNvbG9yOiNiOTRhNDh9LmJvb3RzdHJhcC1zZWxlY3QuaXMtdmFsaWQgLmRyb3Bkb3duLXRvZ2dsZSwud2FzLXZhbGlkYXRlZCAuYm9vdHN0cmFwLXNlbGVjdCAuc2VsZWN0cGlja2VyOnZhbGlkKy5kcm9wZG93bi10b2dnbGV7Ym9yZGVyLWNvbG9yOiMyOGE3NDV9LmJvb3RzdHJhcC1zZWxlY3QuZml0LXdpZHRoe3dpZHRoOmF1dG8haW1wb3J0YW50fS5ib290c3RyYXAtc2VsZWN0Om5vdChbY2xhc3MqPWNvbC1dKTpub3QoW2NsYXNzKj1mb3JtLWNvbnRyb2xdKTpub3QoLmlucHV0LWdyb3VwLWJ0bil7d2lkdGg6MjIwcHh9LmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZTpmb2N1c3tvdXRsaW5lOnRoaW4gZG90dGVkICMzMzMhaW1wb3J0YW50O291dGxpbmU6NXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIWltcG9ydGFudDtvdXRsaW5lLW9mZnNldDotMnB4fS5ib290c3RyYXAtc2VsZWN0LmZvcm0tY29udHJvbHttYXJnaW4tYm90dG9tOjA7cGFkZGluZzowO2JvcmRlcjpub25lfTpub3QoLmlucHV0LWdyb3VwKT4uYm9vdHN0cmFwLXNlbGVjdC5mb3JtLWNvbnRyb2w6bm90KFtjbGFzcyo9Y29sLV0pe3dpZHRoOjEwMCV9LmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sLmlucHV0LWdyb3VwLWJ0bnt6LWluZGV4OmF1dG99LmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sLmlucHV0LWdyb3VwLWJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpPi5idG57Ym9yZGVyLXJhZGl1czowfS5ib290c3RyYXAtc2VsZWN0Om5vdCguaW5wdXQtZ3JvdXAtYnRuKSwuYm9vdHN0cmFwLXNlbGVjdFtjbGFzcyo9Y29sLV17ZmxvYXQ6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tbGVmdDowfS5ib290c3RyYXAtc2VsZWN0LmRyb3Bkb3duLW1lbnUtcmlnaHQsLmJvb3RzdHJhcC1zZWxlY3RbY2xhc3MqPWNvbC1dLmRyb3Bkb3duLW1lbnUtcmlnaHQsLnJvdyAuYm9vdHN0cmFwLXNlbGVjdFtjbGFzcyo9Y29sLV0uZHJvcGRvd24tbWVudS1yaWdodHtmbG9hdDpyaWdodH0uZm9ybS1ncm91cCAuYm9vdHN0cmFwLXNlbGVjdCwuZm9ybS1ob3Jpem9udGFsIC5ib290c3RyYXAtc2VsZWN0LC5mb3JtLWlubGluZSAuYm9vdHN0cmFwLXNlbGVjdHttYXJnaW4tYm90dG9tOjB9LmZvcm0tZ3JvdXAtbGcgLmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sLC5mb3JtLWdyb3VwLXNtIC5ib290c3RyYXAtc2VsZWN0LmZvcm0tY29udHJvbHtwYWRkaW5nOjB9LmZvcm0tZ3JvdXAtbGcgLmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sIC5kcm9wZG93bi10b2dnbGUsLmZvcm0tZ3JvdXAtc20gLmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sIC5kcm9wZG93bi10b2dnbGV7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdDtib3JkZXItcmFkaXVzOmluaGVyaXR9LmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sLWxnIC5kcm9wZG93bi10b2dnbGUsLmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sLXNtIC5kcm9wZG93bi10b2dnbGV7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdDtib3JkZXItcmFkaXVzOmluaGVyaXR9LmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sLXNtIC5kcm9wZG93bi10b2dnbGV7cGFkZGluZzouMjVyZW0gLjVyZW19LmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sLWxnIC5kcm9wZG93bi10b2dnbGV7cGFkZGluZzouNXJlbSAxcmVtfS5mb3JtLWlubGluZSAuYm9vdHN0cmFwLXNlbGVjdCAuZm9ybS1jb250cm9se3dpZHRoOjEwMCV9LmJvb3RzdHJhcC1zZWxlY3QuZGlzYWJsZWQsLmJvb3RzdHJhcC1zZWxlY3Q+LmRpc2FibGVke2N1cnNvcjpub3QtYWxsb3dlZH0uYm9vdHN0cmFwLXNlbGVjdC5kaXNhYmxlZDpmb2N1cywuYm9vdHN0cmFwLXNlbGVjdD4uZGlzYWJsZWQ6Zm9jdXN7b3V0bGluZTowIWltcG9ydGFudH0uYm9vdHN0cmFwLXNlbGVjdC5icy1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2hlaWdodDowIWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50fS5ib290c3RyYXAtc2VsZWN0LmJzLWNvbnRhaW5lciAuZHJvcGRvd24tbWVudXt6LWluZGV4OjEwNjB9LmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZTpiZWZvcmV7Y29udGVudDonJztkaXNwbGF5OmlubGluZS1ibG9ja30uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtwYWRkaW5nLXRvcDppbmhlcml0O3BhZGRpbmctcmlnaHQ6aW5oZXJpdDtwYWRkaW5nLWJvdHRvbTppbmhlcml0O3BhZGRpbmctbGVmdDppbmhlcml0O2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpsZWZ0fS5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb24taW5uZXJ7cGFkZGluZy1yaWdodDppbmhlcml0fS5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb24taW5uZXItaW5uZXJ7b3ZlcmZsb3c6aGlkZGVufS5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUgLmNhcmV0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MTJweDttYXJnaW4tdG9wOi0ycHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5pbnB1dC1ncm91cCAuYm9vdHN0cmFwLXNlbGVjdC5mb3JtLWNvbnRyb2wgLmRyb3Bkb3duLXRvZ2dsZXtib3JkZXItcmFkaXVzOmluaGVyaXR9LmJvb3RzdHJhcC1zZWxlY3RbY2xhc3MqPWNvbC1dIC5kcm9wZG93bi10b2dnbGV7d2lkdGg6MTAwJX0uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tbWVudXttaW4td2lkdGg6MTAwJTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLW1lbnU+LmlubmVyOmZvY3Vze291dGxpbmU6MCFpbXBvcnRhbnR9LmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLW1lbnUuaW5uZXJ7cG9zaXRpb246c3RhdGljO2Zsb2F0Om5vbmU7Ym9yZGVyOjA7cGFkZGluZzowO21hcmdpbjowO2JvcmRlci1yYWRpdXM6MDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLW1lbnUgbGl7cG9zaXRpb246cmVsYXRpdmV9LmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLW1lbnUgbGkuYWN0aXZlIHNtYWxse2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpIWltcG9ydGFudH0uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tbWVudSBsaS5kaXNhYmxlZCBhe2N1cnNvcjpub3QtYWxsb3dlZH0uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tbWVudSBsaSBhe2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tbWVudSBsaSBhLm9wdHtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6Mi4yNWVtfS5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi1tZW51IGxpIGEgc3Bhbi5jaGVjay1tYXJre2Rpc3BsYXk6bm9uZX0uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tbWVudSBsaSBhIHNwYW4udGV4dHtkaXNwbGF5OmlubGluZS1ibG9ja30uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tbWVudSBsaSBzbWFsbHtwYWRkaW5nLWxlZnQ6LjVlbX0uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tbWVudSAubm90aWZ5e3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTo1cHg7d2lkdGg6OTYlO21hcmdpbjowIDIlO21pbi1oZWlnaHQ6MjZweDtwYWRkaW5nOjNweCA1cHg7YmFja2dyb3VuZDojZjVmNWY1O2JvcmRlcjoxcHggc29saWQgI2UzZTNlMzstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5Oi45Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uYm9vdHN0cmFwLXNlbGVjdCAubm8tcmVzdWx0c3twYWRkaW5nOjNweDtiYWNrZ3JvdW5kOiNmNWY1ZjU7bWFyZ2luOjAgNXB4O3doaXRlLXNwYWNlOm5vd3JhcH0uYm9vdHN0cmFwLXNlbGVjdC5maXQtd2lkdGggLmRyb3Bkb3duLXRvZ2dsZSAuZmlsdGVyLW9wdGlvbntwb3NpdGlvbjpzdGF0aWM7ZGlzcGxheTppbmxpbmU7cGFkZGluZzowfS5ib290c3RyYXAtc2VsZWN0LmZpdC13aWR0aCAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uLWlubmVyLC5ib290c3RyYXAtc2VsZWN0LmZpdC13aWR0aCAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uLWlubmVyLWlubmVye2Rpc3BsYXk6aW5saW5lfS5ib290c3RyYXAtc2VsZWN0LmZpdC13aWR0aCAuZHJvcGRvd24tdG9nZ2xlIC5jYXJldHtwb3NpdGlvbjpzdGF0aWM7dG9wOmF1dG87bWFyZ2luLXRvcDotMXB4fS5ib290c3RyYXAtc2VsZWN0LnNob3ctdGljayAuZHJvcGRvd24tbWVudSAuc2VsZWN0ZWQgc3Bhbi5jaGVjay1tYXJre3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3JpZ2h0OjE1cHg7dG9wOjVweH0uYm9vdHN0cmFwLXNlbGVjdC5zaG93LXRpY2sgLmRyb3Bkb3duLW1lbnUgbGkgYSBzcGFuLnRleHR7bWFyZ2luLXJpZ2h0OjM0cHh9LmJvb3RzdHJhcC1zZWxlY3QgLmJzLW9rLWRlZmF1bHQ6YWZ0ZXJ7Y29udGVudDonJztkaXNwbGF5OmJsb2NrO3dpZHRoOi41ZW07aGVpZ2h0OjFlbTtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjAgLjI2ZW0gLjI2ZW0gMDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstby10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uYm9vdHN0cmFwLXNlbGVjdC5zaG93LW1lbnUtYXJyb3cub3Blbj4uZHJvcGRvd24tdG9nZ2xlLC5ib290c3RyYXAtc2VsZWN0LnNob3ctbWVudS1hcnJvdy5zaG93Pi5kcm9wZG93bi10b2dnbGV7ei1pbmRleDoxMDYxfS5ib290c3RyYXAtc2VsZWN0LnNob3ctbWVudS1hcnJvdyAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uOmJlZm9yZXtjb250ZW50OicnO2JvcmRlci1sZWZ0OjdweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6N3B4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206N3B4IHNvbGlkIHJnYmEoMjA0LDIwNCwyMDQsLjIpO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTotNHB4O2xlZnQ6OXB4O2Rpc3BsYXk6bm9uZX0uYm9vdHN0cmFwLXNlbGVjdC5zaG93LW1lbnUtYXJyb3cgLmRyb3Bkb3duLXRvZ2dsZSAuZmlsdGVyLW9wdGlvbjphZnRlcntjb250ZW50OicnO2JvcmRlci1sZWZ0OjZweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6NnB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206NnB4IHNvbGlkICNmZmY7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi00cHg7bGVmdDoxMHB4O2Rpc3BsYXk6bm9uZX0uYm9vdHN0cmFwLXNlbGVjdC5zaG93LW1lbnUtYXJyb3cuZHJvcHVwIC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb246YmVmb3Jle2JvdHRvbTphdXRvO3RvcDotNHB4O2JvcmRlci10b3A6N3B4IHNvbGlkIHJnYmEoMjA0LDIwNCwyMDQsLjIpO2JvcmRlci1ib3R0b206MH0uYm9vdHN0cmFwLXNlbGVjdC5zaG93LW1lbnUtYXJyb3cuZHJvcHVwIC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb246YWZ0ZXJ7Ym90dG9tOmF1dG87dG9wOi00cHg7Ym9yZGVyLXRvcDo2cHggc29saWQgI2ZmZjtib3JkZXItYm90dG9tOjB9LmJvb3RzdHJhcC1zZWxlY3Quc2hvdy1tZW51LWFycm93LnB1bGwtcmlnaHQgLmRyb3Bkb3duLXRvZ2dsZSAuZmlsdGVyLW9wdGlvbjpiZWZvcmV7cmlnaHQ6MTJweDtsZWZ0OmF1dG99LmJvb3RzdHJhcC1zZWxlY3Quc2hvdy1tZW51LWFycm93LnB1bGwtcmlnaHQgLmRyb3Bkb3duLXRvZ2dsZSAuZmlsdGVyLW9wdGlvbjphZnRlcntyaWdodDoxM3B4O2xlZnQ6YXV0b30uYm9vdHN0cmFwLXNlbGVjdC5zaG93LW1lbnUtYXJyb3cub3Blbj4uZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uOmFmdGVyLC5ib290c3RyYXAtc2VsZWN0LnNob3ctbWVudS1hcnJvdy5vcGVuPi5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb246YmVmb3JlLC5ib290c3RyYXAtc2VsZWN0LnNob3ctbWVudS1hcnJvdy5zaG93Pi5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb246YWZ0ZXIsLmJvb3RzdHJhcC1zZWxlY3Quc2hvdy1tZW51LWFycm93LnNob3c+LmRyb3Bkb3duLXRvZ2dsZSAuZmlsdGVyLW9wdGlvbjpiZWZvcmV7ZGlzcGxheTpibG9ja30uYnMtYWN0aW9uc2JveCwuYnMtZG9uZWJ1dHRvbiwuYnMtc2VhcmNoYm94e3BhZGRpbmc6NHB4IDhweH0uYnMtYWN0aW9uc2JveHt3aWR0aDoxMDAlOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uYnMtYWN0aW9uc2JveCAuYnRuLWdyb3VwIGJ1dHRvbnt3aWR0aDo1MCV9LmJzLWRvbmVidXR0b257ZmxvYXQ6bGVmdDt3aWR0aDoxMDAlOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uYnMtZG9uZWJ1dHRvbiAuYnRuLWdyb3VwIGJ1dHRvbnt3aWR0aDoxMDAlfS5icy1zZWFyY2hib3grLmJzLWFjdGlvbnNib3h7cGFkZGluZzowIDhweCA0cHh9LmJzLXNlYXJjaGJveCAuZm9ybS1jb250cm9se21hcmdpbi1ib3R0b206MDt3aWR0aDoxMDAlO2Zsb2F0Om5vbmV9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                //templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.css', './bootstrap-select.min.css'],
                template: `
    <ngx-charts-advanced-pie-chart
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="gradient"
      (select)="onSelect($event)">
    </ngx-charts-advanced-pie-chart>
  `
            }]
    }], function () { return [{ type: _services_index__WEBPACK_IMPORTED_MODULE_1__["WalletService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/app/wallet/index.ts":
/*!*************************************!*\
  !*** ./ang_src/app/wallet/index.ts ***!
  \*************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wallet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet.component */ "./ang_src/app/wallet/wallet.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return _wallet_component__WEBPACK_IMPORTED_MODULE_0__["WalletComponent"]; });




/***/ }),

/***/ "./ang_src/app/wallet/wallet.component.ts":
/*!************************************************!*\
  !*** ./ang_src/app/wallet/wallet.component.ts ***!
  \************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/index */ "./ang_src/app/_models/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/index */ "./ang_src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_directives/modal.component */ "./ang_src/app/_directives/modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pipes_transactions_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_pipes/transactions.pipe */ "./ang_src/app/_pipes/transactions.pipe.ts");











function WalletComponent_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_ul_1_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const coin_r63 = ctx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.setCoin(coin_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coin_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coin_r63.coinName);
} }
function WalletComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WalletComponent_ul_1_li_1_Template, 3, 1, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r38.coins);
} }
function WalletComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_div_2_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.seed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Seed Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_ng_container_7_ng_container_21_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "transactionType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "transactionStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trans_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trans_r71.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ion-ios-", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, trans_r71.type), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trans_r71.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, trans_r71.status));
} }
function WalletComponent_ng_container_7_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Amnt.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WalletComponent_ng_container_7_ng_container_21_tr_12_Template, 13, 10, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r68.transactions);
} }
function WalletComponent_ng_container_7_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No transactions were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_ng_container_7_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.openSendWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_ng_container_7_Template_button_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.openReceiveWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Recieve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WalletComponent_ng_container_7_ng_container_21_Template, 13, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WalletComponent_ng_container_7_tr_22_Template, 3, 0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r40.coinTitleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r40.wallet.coinBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r40.coinNameClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx_r40.coin.symbol));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 12, ctx_r40.wallet.balance, ctx_r40.baseCurrency, "symbol-narrow"), " ", ctx_r40.baseCurrency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.transactions && ctx_r40.transactions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r40.transactions || ctx_r40.transactions.length == 0);
} }
function WalletComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to Foxtrot Wallet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Select a coin type to start managing your wallet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_div_9_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.openCreateWallet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You do not yet have a wallet created for ", ctx_r42.coin.coinName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Create ", ctx_r42.coin.coinName, " Wallet");
} }
function WalletComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "An opening amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A funding source is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "alert": a0, "alert-success": a1, "alert-danger": a2 }; };
function WalletComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r50.alrtMessage, ctx_r50.alrtMessage.type === "success", ctx_r50.alrtMessage.type === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r50.alrtMessage.text);
} }
function WalletComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A recipiet address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "An amount to send is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You are sending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r56.wallet.coin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r56.model.sendAmount, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx_r56.coin.symbol), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 7, ctx_r56.sendValue, ctx_r56.baseCurrency, "symbol-narrow"), " ", ctx_r56.baseCurrency, ")");
} }
function WalletComponent_img_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
} }
function WalletComponent_span_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r58.wallet.coin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r58.wallet.coinBalance, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r58.coin.symbol), "");
} }
function WalletComponent_span_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u00A0\u00A0(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx_r59.wallet.balance, ctx_r59.baseCurrency, "symbol-narrow"), " ", ctx_r59.baseCurrency, ")");
} }
function WalletComponent_span_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r60.wallet.coin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r60.transaction.coinCost, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r60.coin.symbol), "");
} }
function WalletComponent_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx_r61.transaction.cost, ctx_r61.baseCurrency, "symbol-narrow"), " ", ctx_r61.baseCurrency, ")");
} }
const _c1 = function (a0) { return { "has-error": a0 }; };
class WalletComponent {
    constructor(walletService, alertService, changeDetector, authService, modalService) {
        this.walletService = walletService;
        this.alertService = alertService;
        this.changeDetector = changeDetector;
        this.authService = authService;
        this.modalService = modalService;
        this.model = {};
    }
    ngOnInit() {
        this.loading = true;
        this.valid = false;
        this.sending = false;
        this.wallet = null;
        this.wallets = null;
        this.alrtMessage = null;
        this.currencyObj = null;
        this.exchange = null;
        this.rates = null;
        this.transaction = new _models_index__WEBPACK_IMPORTED_MODULE_3__["Transaction"]();
        this.transaction.cost = 0;
        this.transaction.coinCost = 0;
        this.coin = new _models_index__WEBPACK_IMPORTED_MODULE_3__["Coin"]();
        this.coin.symbol = 'gen';
        this.coin.coinName = 'Generic';
        this.sendAmount = 0;
        this.sendValue = 0;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).user;
        this.baseCurrency = this.currentUser.baseCurrency.toUpperCase();
        this.model.sendAmount = 0;
        this.baseTransactPercent = 0.0437;
        this.loadCoins();
    }
    setCoin(coin) {
        this.loading = true;
        if (coin.symbol !== this.coin.symbol) {
            this.coin = coin;
            this.coinTitleClass = "coinTitle " + this.coin.symbol;
            this.coinNameClass = "coinName " + this.coin.symbol;
            this.coinNameSmallClass = "coinNameSmall " + this.coin.symbol;
            this.smallCoinClass = "smallCoin " + this.coin.symbol;
            this.changeDetector.detectChanges();
            this.loadWallet();
        }
    }
    loadCoins() {
        this.walletService.getCoins().subscribe(data => {
            this._processCoins(data);
        }, error => {
            this.alertService.error(error.errors);
            this.loading = false;
        });
    }
    loadExchangeRates() {
        this.walletService.getExchangeRates(this.coin.symbol).subscribe(data => {
            this._updateRates(data);
        }, error => {
            this.alertService.error(error.errors);
        });
    }
    loadWallet(supressXchange = false) {
        this.loading = true;
        this.wallet = null;
        //this.wallet = this.walletService.getWallet(this.currentUser._id, this.coin.symbol);
        //if (this.wallets[this.coin.symbol] === null) {
        this.walletService.loadWallet(this.currentUser._id, this.coin.symbol).subscribe(data => {
            this._processWallet(data);
        }, error => {
            this.alertService.error(error.errors);
        });
        //} else {
        //    this._continueWalletLoad(supressXchange);
        //}
    }
    loadTransactions() {
        this.walletService.getTransactions(this.wallet.address).subscribe(data => {
            this._processTransactions(data);
        }, error => {
            this.alertService.error(error.errors);
            this.loading = false;
        });
    }
    openCreateWallet() {
        this.model.amount = '';
        this.model.source = '';
        this.openModal('create-wallet');
    }
    createWallet() {
        var data = { amount: (this.model.amount), source: this.model.source };
        this.walletService.createWallet(this.currentUser._id, this.coin.symbol, data).subscribe(data => {
            this._processWallet(data, 'create', true);
            this.closeModal('create-wallet');
        }, error => {
            this.alertService.error(error.errors);
            this.loading = false;
        });
    }
    registerModals() {
        this.modalService.add('create-wallet');
        this.modalService.add('send-coin');
    }
    openModal(id) {
        this.modalService.open(id);
    }
    closeModal(id) {
        this.modalService.close(id);
    }
    sendCoin() {
        this.sending = true;
        this.walletService.getBalance(this.currentUser._id, this.coin.symbol).subscribe(data => {
            this.postTransaction(data);
        }, error => {
            this.alertService.error(error.errors);
            this.sending = false;
        });
    }
    postTransaction(dataLoad) {
        this.alrtMessage = null;
        var sendAmtPlusCost = parseFloat(this.model.sendAmount) + this.transaction.coinCost;
        var suffBalance = (parseFloat(dataLoad.balance) > sendAmtPlusCost);
        if (suffBalance) {
            var data = { coinCost: this.transaction.coinCost, cost: this.transaction.cost, to: this.model.to,
                from: this.wallet.address, sendAmount: this.sendValue, coinAmount: this.model.sendAmount,
                signature: this.walletService.hashCode(this.model.to),
                hash: this.walletService.hashCode(this.model.sendAmount) };
            this.walletService.sendCoin(this.currentUser._id, this.coin.symbol, data).subscribe(data => {
                this.loadWallet(true);
                //this.loadTransactions();
                this.sending = false;
                this.closeModal('send-coin');
            }, error => {
                this._showModalError('error', error);
                this.sending = false;
            });
        }
        else {
            this._showModalError('error', "Insufficient coin balance for this transaction.");
            this.sending = false;
        }
    }
    openSendWindow() {
        this.model.sendAmount = '';
        this.model.to = '';
        this.openModal('send-coin');
    }
    openReceiveWindow() {
        this.model.userIdHash = this.wallet.address;
        this.openModal('receive-coin');
    }
    _showModalError(type, message) {
        this.alrtMessage = new _models_index__WEBPACK_IMPORTED_MODULE_3__["Alert"]();
        this.alrtMessage.type = type;
        this.alrtMessage.text = message;
    }
    _resetAlerts() {
        this.alrtMessage = null;
    }
    _processWallet(result, refererr = null, supressXchange = false) {
        if (result.wallet !== null) {
            if (this.wallets == null)
                this.wallets = [];
            this.wallets[result.wallet.coin] = result.wallet;
            this.wallet = result.wallet;
            if (refererr != null && typeof result.message !== "undefined")
                this.alertService.success(result.message);
            this._continueWalletLoad(supressXchange);
        }
        else {
            this.loading = false;
            this.changeDetector.detectChanges();
        }
        //this.walletService.setWallet(this.wallet, this.currentUser._id, this.coin.symbol);
    }
    _continueWalletLoad(supressXchange = false) {
        this.loadTransactions();
        if (!supressXchange)
            this.loadExchangeRates();
        this.changeDetector.detectChanges();
    }
    _processCoins(result) {
        this.coins = result.coins || {};
        this.loading = false;
        this.changeDetector.detectChanges();
    }
    _processTransactions(result) {
        this.transactions = result.transactions || {};
        var that = this;
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.transactions, function (trans, key) {
            trans.date = moment__WEBPACK_IMPORTED_MODULE_2__(trans.timestamp).format("MMM Do");
        });
        this.loading = false;
        this.changeDetector.detectChanges();
    }
    _calculateValue(e) {
        this.alrtMessage = null;
        var reg = new RegExp('^[0-9][0-9,]*[0-9]*\.?[0-9]*$');
        if (reg.test(this.model.sendAmount)) {
            //TEST IF ENTERED VALUE IS WITHIN AMOUNT OF CURRENT PORTFOLIO
            var enteredAmount = parseFloat(this.model.sendAmount), walletAmount = this.wallet.coinBalance;
            if (enteredAmount <= walletAmount) {
                this.sendValue = this.model.sendAmount * this.rates[this.wallet.baseCurrency];
                if (this.model.to !== '')
                    this.valid = true;
            }
            else {
                this._showModalError('error', "The amount entered exceeds the available amount of coin in the selected wallet.");
                this.valid = false;
                this.sendValue = 0;
            }
        }
        else {
            this._showModalError('error', "the amount entered is not a valid amount.");
            this.valid = false;
            this.sendValue = 0;
        }
        this._updateCost();
    }
    _validateRecipient() {
        this.alrtMessage = null;
        var reg = new RegExp('^[A-Za-z0-9]*$');
        if (!reg.test(this.model.to)) {
            this._showModalError('error', "The recipiet address is not valid. Only letters and numbers are allowed in recipet addresses.");
            this.valid = false;
        }
        else if (this.model.sendAmount !== '') {
            this.valid = true;
        }
    }
    _updateRates(result) {
        this.rates = result.rates;
    }
    _updateCost() {
        this.transaction.coinCost = this.model.sendAmount * this.baseTransactPercent;
        this.transaction.cost = this.transaction.coinCost * this.rates[this.wallet.baseCurrency];
    }
    _getUserIdHash(userId) {
        return this.walletService.hashCode(userId);
    }
    seed() {
        this.walletService.seed(this.currentUser._id).subscribe(data => {
            this.loadCoins();
        }, error => {
            this.alertService.error(error.errors);
            this.loading = false;
        });
    }
}
WalletComponent.ɵfac = function WalletComponent_Factory(t) { return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_4__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_4__["ModalService"])); };
WalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalletComponent, selectors: [["ng-component"]], decls: 137, vars: 49, consts: [[1, "col-md-3"], ["class", "coinList", 4, "ngIf"], [4, "ngIf"], [1, "col-md-9"], [1, "text-center", 3, "hidden"], ["width", "75", "height", "75", 3, "src", "alt"], ["id", "create-wallet", 1, "hidden"], [1, "modal"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-title"], [1, "modal-body"], [1, "modal-form"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", 3, "ngClass"], ["for", "amount"], [1, "text-muted"], ["type", "text", "name", "amount", "required", "", 1, "form-control", "col-md-6", 3, "ngModel", "ngModelChange"], ["amount", "ngModel"], ["class", "help-block", 4, "ngIf"], ["for", "source"], [1, "radio-group"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "source1", "name", "source", "checked", "", "value", "creditcard", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["source", "ngModel"], ["for", "source", 1, "custom-control-label"], ["type", "radio", "id", "source2", "name", "source", "value", "paypal", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customRadio2", 1, "custom-control-label"], ["type", "radio", "id", "source3", "name", "source", "value", "internal", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customRadio3", 1, "custom-control-label"], [1, "form-group"], ["type", "hidden", "name", "coin", 3, "value"], [1, "btn", "btn-primary", 3, "click"], [1, "modal-background"], ["id", "send-coin", 1, "hidden"], [3, "ngClass", 4, "ngIf"], ["for", "to"], ["type", "text", "name", "to", "required", "", 1, "form-control", "col-md-6", 3, "ngModel", "ngModelChange", "change"], ["to", "ngModel"], ["for", "sendAmount"], ["type", "text", "name", "sendAmount", "required", "", 1, "form-control", "col-md-6", 3, "ngModel", "ngModelChange", "change"], ["sendAmount", "ngModel"], ["class", "text-center", 4, "ngIf"], [1, "col-md-12", "walletRow"], ["type", "button", 1, "btn", "btn-warning", "btn-lg", 3, "disabled", "click"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==", 4, "ngIf"], [1, "modal-footer"], [1, "col-md-6", "text-left"], ["class", "coinNameSmall", 3, "ngClass", 4, "ngIf"], ["class", "currLabelSmall", 4, "ngIf"], [1, "col-md-6", "text-right"], ["id", "receive-coin", 1, "hidden"], [1, "col-md-2"], [1, "col-md-8", "text-center"], ["src", "/images/qr_code_generic.png", "width", "185", "height", "185", "border", "0", "alt", "User QA Code", "title", "User QA Code"], [1, "address", "fcs"], [1, "linkbar"], ["href", "#"], ["data-pack", "default", 1, "icon", "ion-ios-copy"], ["data-pack", "default", 1, "icon", "ion-ios-printer"], ["data-pack", "default", 1, "icon", "ion-ios-email"], ["data-pack", "default", 1, "icon", "ion-link"], [1, "coinList"], ["class", "currItem", 4, "ngFor", "ngForOf"], [1, "currItem"], [1, "currLink", 3, "click"], [3, "click"], [1, "ion-edit"], [1, "baseCurrencyTitle"], ["type", "button", 1, "btn", "btn-warning", "btn-lg", 3, "click"], [1, "transactionsList"], [1, "table", "table-striped"], ["width", "15%"], ["width", "40%"], [4, "ngFor", "ngForOf"], [1, "transactionIcon"], ["data-pack", "default"], ["colspan", "5", 1, "text-center"], [1, "help-block"], [3, "ngClass"], [1, "text-center"], [1, "currLabelSmall"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="], [1, "coinNameSmall", 3, "ngClass"]], template: function WalletComponent_Template(rf, ctx) { if (rf & 1) {
        const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WalletComponent_ul_1_Template, 2, 1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WalletComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WalletComponent_ng_container_7_Template, 23, 16, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WalletComponent_div_8_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WalletComponent_div_9_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "modal", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_13_listener($event) { return ctx.closeModal("create-wallet"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Create Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WalletComponent_Template_form_ngSubmit_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r43.form.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enter Wallet Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WalletComponent_Template_input_ngModelChange_30_listener($event) { return ctx.model.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, WalletComponent_div_32_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Funding Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WalletComponent_Template_input_ngModelChange_38_listener($event) { return ctx.model.source = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Credit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 28, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WalletComponent_Template_input_ngModelChange_43_listener($event) { return ctx.model.source = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "PayPal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 30, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WalletComponent_Template_input_ngModelChange_48_listener($event) { return ctx.model.source = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Acount Balanace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, WalletComponent_div_52_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_55_listener($event) { return ctx.createWallet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Create Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "modal", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_61_listener($event) { return ctx.closeModal("send-coin"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, WalletComponent_div_67_Template, 2, 6, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "form", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WalletComponent_Template_form_ngSubmit_69_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r43.form.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WalletComponent_Template_input_ngModelChange_74_listener($event) { return ctx.model.to = $event; })("change", function WalletComponent_Template_input_change_74_listener($event) { return ctx._validateRecipient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, WalletComponent_div_76_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Coin Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WalletComponent_Template_input_ngModelChange_80_listener($event) { return ctx.model.sendAmount = $event; })("change", function WalletComponent_Template_input_change_80_listener($event) { return ctx._calculateValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, WalletComponent_div_82_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, WalletComponent_div_83_Template, 9, 11, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_85_listener($event) { return ctx.sendCoin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, WalletComponent_img_87_Template, 1, 0, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " AVAILABLE BALANCE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, WalletComponent_span_92_Template, 3, 5, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, WalletComponent_span_93_Template, 3, 6, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " COST TO SEND:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, WalletComponent_span_97_Template, 3, 5, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, WalletComponent_span_99_Template, 3, 6, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "modal", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_104_listener($event) { return ctx.closeModal("receive-coin"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](117, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75);
        const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coins && ctx.coins.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.coins || ctx.coins.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.coin.coinName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/images/curr_icon_" + ctx.coin.symbol + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coin.symbol != "gen" && ctx.wallet != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coin.symbol == "gen" && ctx.wallet == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coin.symbol != "gen" && ctx.wallet == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("New ", ctx.coin.coinName, " Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c1, _r43.submitted && !_r44.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("In ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 37, ctx.baseCurrency), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.submitted && !_r44.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c1, _r43.submitted && !_r46.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.submitted && !_r46.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.coin.symbol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Send ", ctx.coin.coinName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alrtMessage != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c1, _r43.submitted && !_r52.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.to);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.submitted && !_r52.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c1, _r43.submitted && !_r54.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.sendAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.submitted && !_r54.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wallet != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.valid || ctx.sending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wallet != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wallet != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wallet != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transaction != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Receive ", ctx.coin.coinName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" YOUR ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](117, 39, ctx.coin.coinName), " ADDRESS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.userIdHash);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _directives_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"], _pipes_transactions_pipe__WEBPACK_IMPORTED_MODULE_8__["TransactionTypePipe"], _pipes_transactions_pipe__WEBPACK_IMPORTED_MODULE_8__["TransactionStatusPipe"]], styles: [".coinList[_ngcontent-%COMP%] {\r\n\tlist-style-type: none;\r\n    width:100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    float: left;\r\n}\r\n.currItem[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n    padding: 25px 0px 25px 0px;\r\n    font-size: 25px;\r\n    display: inline-block;\r\n    list-style-type: none;\r\n    width:100%;\r\n}\r\n.currItem[_ngcontent-%COMP%]:hover {\r\n\tbackground-color: #111;\r\n}\r\n.currLink[_ngcontent-%COMP%] {\r\n\tcolor: #eeeeee;\r\n\ttext-decoration: none;\r\n}\r\n.walletRow[_ngcontent-%COMP%] {\r\n\tmargin:15px 0 15px 0;\r\n\tpadding: 5px 0 5px 0;\r\n}\r\n.transactionIcon[_ngcontent-%COMP%] {\r\n\tfont-size: 36px;\r\n}\r\n.coinTitle[_ngcontent-%COMP%] {\r\n\tfont-size: 54px;\r\n\tcolor: #fff;\r\n}\r\n.coinName[_ngcontent-%COMP%] {\r\n\tfont-size: 42px;\r\n\tcolor: #fff;\r\n}\r\n.address[_ngcontent-%COMP%] {\r\n\tfont-size: 28px;\r\n\tcolor: #fff;\r\n}\r\n.baseCurrencyTitle[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tcolor: #fff;\r\n}\r\n.smallCoin[_ngcontent-%COMP%] {\r\n\tfont-size: 12px;\r\n}\r\n.coinNameSmall[_ngcontent-%COMP%] {\r\n\tfont-size: 14px;\r\n\tcolor: #fff;\r\n}\r\n.currLabelSmall[_ngcontent-%COMP%] {\r\n\tfont-size: 12px;\r\n\tcolor: #fff;\r\n}\r\n.linkbar[_ngcontent-%COMP%] {\r\n\tfont-size:50px;\r\n}\r\n.transactionsList[_ngcontent-%COMP%] {\r\n\tmax-height: 450px;\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden; \r\n\tborder: 1px solid #e0e0e0;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #909090; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #333; \r\n}\r\n.gen[_ngcontent-%COMP%] {\r\n    color:#fff;\r\n}\r\n.fcs[_ngcontent-%COMP%] {\r\n\tcolor:#ffc73a;\r\n}\r\n.btc[_ngcontent-%COMP%] {\r\n    color:#f7931b;\r\n}\r\n.eth[_ngcontent-%COMP%] {\r\n    color:#c1cef6;\r\n}\r\n.xrp[_ngcontent-%COMP%] {\r\n    color:#1bb4fe;\r\n}\r\n.ltc[_ngcontent-%COMP%] {\r\n    color:#c3c5c6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ19zcmMvYXBwL3dhbGxldC93YWxsZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHFCQUFxQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7QUFDQTtDQUNDLFNBQVM7SUFDTiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBQ0E7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxxQkFBcUI7QUFDdEI7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixvQkFBb0I7QUFDckI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFDQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFFQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFFQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFDQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixrQkFBa0IsRUFBRSw4QkFBOEI7Q0FDbEQseUJBQXlCO0FBQzFCO0FBQ0EsVUFBVTtBQUNWO0VBQ0UsVUFBVTtBQUNaO0FBRUEsVUFBVTtBQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUEsV0FBVztBQUNYO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJhbmdfc3JjL2FwcC93YWxsZXQvd2FsbGV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29pbkxpc3Qge1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmN1cnJJdGVtIHtcclxuXHRtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDBweCAyNXB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLmN1cnJJdGVtOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG59XHJcbi5jdXJyTGluayB7XHJcblx0Y29sb3I6ICNlZWVlZWU7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ud2FsbGV0Um93IHtcclxuXHRtYXJnaW46MTVweCAwIDE1cHggMDtcclxuXHRwYWRkaW5nOiA1cHggMCA1cHggMDtcclxufVxyXG4udHJhbnNhY3Rpb25JY29uIHtcclxuXHRmb250LXNpemU6IDM2cHg7XHJcbn1cclxuLmNvaW5UaXRsZSB7XHJcblx0Zm9udC1zaXplOiA1NHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jb2luTmFtZSB7XHJcblx0Zm9udC1zaXplOiA0MnB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYWRkcmVzcyB7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmFzZUN1cnJlbmN5VGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNtYWxsQ29pbiB7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jb2luTmFtZVNtYWxsIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLmN1cnJMYWJlbFNtYWxsIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLmxpbmtiYXIge1xyXG5cdGZvbnQtc2l6ZTo1MHB4O1xyXG59XHJcbi50cmFuc2FjdGlvbnNMaXN0IHtcclxuXHRtYXgtaGVpZ2h0OiA0NTBweDtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0b3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxufVxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxufVxyXG4gXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjOTA5MDkwOyBcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7IFxyXG59XHJcblxyXG4uZ2VuIHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLmZjcyB7XHJcblx0Y29sb3I6I2ZmYzczYTtcclxufVxyXG4uYnRjIHtcclxuICAgIGNvbG9yOiNmNzkzMWI7XHJcbn1cclxuLmV0aCB7XHJcbiAgICBjb2xvcjojYzFjZWY2O1xyXG59XHJcbi54cnAge1xyXG4gICAgY29sb3I6IzFiYjRmZTtcclxufVxyXG4ubHRjIHtcclxuICAgIGNvbG9yOiNjM2M1YzY7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                templateUrl: './wallet.component.html',
                styleUrls: ['./wallet.component.css']
            }]
    }], function () { return [{ type: _services_index__WEBPACK_IMPORTED_MODULE_4__["WalletService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _services_index__WEBPACK_IMPORTED_MODULE_4__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "./ang_src/environments/environment.ts":
/*!*********************************************!*\
  !*** ./ang_src/environments/environment.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "./ang_src/main.ts":
/*!*************************!*\
  !*** ./ang_src/main.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./ang_src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ang_src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./ang_src/main.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\My Web Sites\Foxtrot\public_html\ang_src\main.ts */"./ang_src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map