
import {throwError as observableThrowError,  Observable,  Subject } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from "@angular/common/http";

import { Wallet, Portfolio } from '../_models/index';
import { LocStorage }  from './LocStorage';

@Injectable()
export class WalletService { 

    static wallets: Wallet[];
    static portfolio: Portfolio;

    private _portfolioUrl = '/api/:id/portfolio/:cache';
    private _walletUrl = '/api/:id/wallet/:currency';
    private _balanceUrl = '/api/:id/wallet/balance/:currency';
    private _transactionsUrl = '/api/transactions/:address';
    private _exchangeUrl = '/api/:id/exchange/post';
    private _sendCoinUrl = '/api/:id/transactions/post/:symbol';

    private _currenciestUrl = '/api/currencies';
    private _currencyUrl = '/api/currency/:symbol';
    private _convertUrl = '/api/convert/:amount/:from/:to';
    // private _exchangeTableUrl = '/api/exchange/:symbol/:from'; // deprecated
    private _exchangeAllRatesUrl = '/api/exchangerates';
    private _exchangeRatesUrl = '/api/exchangerates/:symbol/:cache';
    private _exchangeRateUrl = '/api/exchangerate/:symbol/:from';
    private _coinsUrl = '/api/coins';
    private _seedUrl = '/api/seed/:id';
    private _cachebuster = '';
    
    constructor(private http: HttpClient,
                private _locStorage:LocStorage) { 
        WalletService.wallets = [];
    }

    loadPortfolio(userId): Observable<any> {
        this.constructCacheBuster();
        return this.http.get(this._portfolioUrl.replace(':id',userId).replace(':cache',this._cachebuster))
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    loadWallet(userId, currency): Observable<any> {
        return this.http.get(this._walletUrl.replace(':id',userId).replace(':currency',currency))
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    getBalance(userId, currency): Observable<any> {
        return this.http.get(this._balanceUrl.replace(':id',userId).replace(':currency',currency))
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    createWallet(userId, currency, amountObj): Observable<any> {
        return this.http.post(this._walletUrl.replace(':id',userId).replace(':currency',currency), amountObj)
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    getTransactions(address): Observable<any> {
        return this.http.get(this._transactionsUrl.replace(':address',address))
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    getCurrencies(): Observable<any> {
        return this.http.get(this._currenciestUrl)
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    getCurrency(symbol): Observable<any> {
        return this.http.get(this._currencyUrl.replace(':symbol',symbol))
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    getAllExchangeRates(): Observable<any> {
        return this.http.get(this._exchangeAllRatesUrl)
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    getExchangeRates(symbol): Observable<any> {
        this.constructCacheBuster();
        return this.http.get(this._exchangeRatesUrl.replace(':symbol',symbol).replace(':cache',this._cachebuster))
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    getExchangeRate(symbol,from): Observable<any> {
        return this.http.get(this._exchangeRateUrl.replace(':symbol',symbol).replace(':from',from))
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    getCoins(): Observable<any> {
        return this.http.get(this._coinsUrl)
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    seed(userId): Observable<any> {
        return this.http.get(this._seedUrl.replace(':id',userId))
            .pipe(map(this.extractData), catchError(this.handleError));
    }
    sendCoin(userId, symbol, transObj): Observable<any> {
        return this.http.post(this._sendCoinUrl.replace(':id',userId).replace(':symbol',symbol), transObj)
            .pipe(map(this.extractData), catchError(this.handleError));
    }
    exchange(userId, transObj): Observable<any> {
        return this.http.post(this._exchangeUrl.replace(':id',userId), transObj)
            .pipe(map(this.extractData), catchError(this.handleError));
    }
    /*--------------------------------------------------
    /    STORED DATA OBJECT FUNCTIONS
    /-------------------------------------------------*/
    getWallet(userId, currency): Wallet {
        if (WalletService.wallets.length == 0) 
            WalletService.wallets[currency] = this._locStorage.getFromStorage("wallet_"+userId+"_"+currency).data;
        if (WalletService.wallets[currency]) {
            return WalletService.wallets[currency];
        } else {
            return null;
        }
    }

    setWallet(wallet, userId, currency) {
        WalletService.wallets[currency] = wallet;
        return this._locStorage.saveToStorage("wallet_"+userId+"_"+currency, wallet);
    }

    getPortfolio(userId): Portfolio {
        if (typeof WalletService.portfolio === "undefined") 
            WalletService.portfolio = this._locStorage.getFromStorage("portfolio_"+userId).data;
        if (WalletService.portfolio) {
            return WalletService.portfolio;
        } else {
            return null;
        }
    }

    setPortfolio(portfolio, userId) {
        WalletService.portfolio = portfolio;
        return this._locStorage.saveToStorage("portfolio_"+userId, portfolio);
    }

    flushStorage() {
        this._locStorage.deleteStorage();
    }
    /**-----------------------------------------
    /    UTILITY FUNCTIONS
    /-----------------------------------------*/
    convert(amount,conv) {
        var conversion = (amount * parseFloat(conv));
        if (isNaN(conversion)) conversion = 0;
        return conversion;
    }

    convertCoin(amount,conv) {
        var conversion = (parseFloat(amount) / parseFloat(conv));
        if (isNaN(conversion)) conversion = 0;
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
        } catch (e) {
            console.log(e)
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
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    private constructCacheBuster() {
        this._cachebuster = Math.round(new Date().getTime() / 1000).toString();
    }

    private _processWallet(result:any, userId:String, currency:String) {
        if (result.wallet !== null)
            this.setWallet(result.wallet, userId, currency);
    }
    private _processPortfolio(result:any, userId:String) {
        if (result.portfolio !== null)
            this.setPortfolio(result.portfolio, userId);
    }
    private extractData(res: HttpResponse<any>) {
        //console.log("extractData");
        //console.log(res);
        //let body = res.body;
        if (res.status < 200 || res.status >= 300)
            this.handleError(res);
        return res || { };
    }
    
    private handleError (res: any) {
        console.log("wallet Service -> handleError");
        console.log(res);
        let body = null, errMsg = '', genError = 'An unknown or unidentified error occured on the server error';
        if (res.body) {
            body = res.body;
        } else {
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
        return observableThrowError(errMsg);
    }

    /*----------------------------------------------------
    /        DEPRECATED FUNCTIONS
    /---------------------------------------------------*/
    /*getExchangeTable(symbol,from): Observable<any> {
        return this.http.get(this._exchangeTableUrl.replace(':symbol',symbol).replace(':from',from))
            .pipe(map(this.extractData), catchError(this.handleError));
    }*/
}