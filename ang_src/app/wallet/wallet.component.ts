import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import * as _ from "lodash";
import * as moment from "moment";

import { Alert, User, Coin, Wallet, Transaction, Currency, ExchangeTable, Rates } from '../_models/index';
import { WalletService, AlertService, AuthenticationService, ModalService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.css']
})

export class WalletComponent implements OnInit {
    model: any = {};
    currentUser: User;
    user: User;
    errorMessage: string;
    loading: boolean;
    valid: boolean;
    sending: boolean;
    coin: Coin;
    wallet: Wallet;
    wallets: Wallet[];
    coins: Array<Coin>;
    transactions: Array<Transaction>;
    transaction: Transaction;
    coinTitleClass: string;
    coinNameClass: string;
    coinNameSmallClass: string;
    smallCoinClass: string;
    sendAmount: number;
    sendValue: any;
    baseTransactPercent: number;
    currencyObj:Currency;
    exchange:ExchangeTable;
    rates: Rates;
    alrtMessage: Alert;
    baseCurrency:String;

    constructor(private walletService: WalletService, 
                private alertService: AlertService, 
                private changeDetector: ChangeDetectorRef,
                private authService: AuthenticationService,
                private modalService: ModalService) {
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
        this.transaction = new Transaction();
        this.transaction.cost = 0;
        this.transaction.coinCost = 0;
        this.coin = new Coin();
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
        this.walletService.getCoins().subscribe(
            data => {
                this._processCoins(data);
            },
            error => {
                this.alertService.error(error.errors);
                this.loading = false;
            });
    }
    loadExchangeRates() {
        this.walletService.getExchangeRates(this.coin.symbol).subscribe(
        data => {
            this._updateRates(data);
        },
        error => {
            this.alertService.error(error.errors);
        });
    }
    loadWallet(supressXchange = false) {
        this.loading = true;
        this.wallet = null;
        //this.wallet = this.walletService.getWallet(this.currentUser._id, this.coin.symbol);
        //if (this.wallets[this.coin.symbol] === null) {
            this.walletService.loadWallet(this.currentUser._id, this.coin.symbol).subscribe(
                data => {
                    this._processWallet(data);
                },
                error => {
                    this.alertService.error(error.errors);
                }
            );
        //} else {
        //    this._continueWalletLoad(supressXchange);
        //}
    }
    loadTransactions() {
        this.walletService.getTransactions(this.wallet.address).subscribe(
            data => {
                this._processTransactions(data);
            },
            error => {
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
        this.walletService.createWallet(this.currentUser._id, this.coin.symbol, data).subscribe(
            data => {
                this._processWallet(data, 'create', true);
                this.closeModal('create-wallet');
            },
            error => {
                this.alertService.error(error.errors);
                this.loading = false;
            });
    }

    registerModals() {
        this.modalService.add('create-wallet');
        this.modalService.add('send-coin');
    }
    openModal(id: string){
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }

    sendCoin() {
        this.sending = true;
        this.walletService.getBalance(this.currentUser._id, this.coin.symbol).subscribe(
            data => {
                this.postTransaction(data);
            },
            error => {
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
                     from: this.wallet.address,sendAmount: this.sendValue, coinAmount: this.model.sendAmount, 
                     signature: this.walletService.hashCode(this.model.to),
                     hash: this.walletService.hashCode(this.model.sendAmount) };
            this.walletService.sendCoin(this.currentUser._id, this.coin.symbol, data).subscribe(
                data => {
                    this.loadWallet(true);
                    //this.loadTransactions();
                    this.sending = false;
                    this.closeModal('send-coin');
                },
                error => {
                    this._showModalError('error', error);
                    this.sending = false;
            });
        } else {
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

    private _showModalError(type, message) {
        this.alrtMessage = new Alert();
        this.alrtMessage.type = type;
        this.alrtMessage.text = message;
    }

    _resetAlerts() {
        this.alrtMessage = null;
    }

    private _processWallet(result:any, refererr = null, supressXchange = false) {
        
        if (result.wallet !== null) {
            if (this.wallets == null) this.wallets = [];
            this.wallets[result.wallet.coin] = result.wallet;
            this.wallet = result.wallet;
            if (refererr != null && typeof result.message !== "undefined") 
            this.alertService.success(result.message);
            this._continueWalletLoad(supressXchange);
        } else {
           this.loading = false;
           this.changeDetector.detectChanges();
        }
        //this.walletService.setWallet(this.wallet, this.currentUser._id, this.coin.symbol);
    }

    private _continueWalletLoad(supressXchange = false) {
        
        this.loadTransactions();
        if (!supressXchange) this.loadExchangeRates();
        this.changeDetector.detectChanges();

    }

    private _processCoins(result:any) {
        this.coins = result.coins || {};
        this.loading = false;
        this.changeDetector.detectChanges();
    }
    private _processTransactions(result:any) {
        this.transactions = result.transactions || {};
        var that = this;
        _.forEach(this.transactions, function(trans, key) {
            trans.date = moment(trans.timestamp).format("MMM Do");
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
            } else {
                this._showModalError('error', "The amount entered exceeds the available amount of coin in the selected wallet.");
                this.valid = false;
                this.sendValue = 0;
            }
        } else {
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
        } else if (this.model.sendAmount !== '') {
            this.valid = true;
        }
    }

    private _updateRates(result:any) {
        this.rates = result.rates;
    }

    private _updateCost() {
        this.transaction.coinCost = this.model.sendAmount * this.baseTransactPercent;
        this.transaction.cost = this.transaction.coinCost * this.rates[this.wallet.baseCurrency];
    }

    private _getUserIdHash(userId) {
        return this.walletService.hashCode(userId);
    }

    private seed() {
        this.walletService.seed(this.currentUser._id).subscribe(
            data => {
                this.loadCoins();
            },
            error => {
                this.alertService.error(error.errors);
                this.loading = false;
            });
    }
    /*----------------------------------------------------
    /        DEPRECATED FUNCTIONS
    /---------------------------------------------------*/
    /*loadExchangeTable() {
        this.walletService.getExchangeTable(this.currentUser.baseCurrency, this.coin.symbol).subscribe(
        data => {
            this._updateExchange(data);
        },
        error => {
            this.alertService.error(error.errors);
        });
    }*/
    /*private _processWallet(result:any, refererr = null, supressXchange = false) {
        if (result.wallet !== null) this.wallet = result.wallet;
        if (refererr != null && typeof result.message !== "undefined") 
            this.alertService.success(result.message);
        this.walletService.setWallet(this.wallet, this.currentUser._id, this.coin.symbol);
        this.loadTransactions();
        if (!supressXchange) this.loadExchangeRates();
        this.changeDetector.detectChanges();
    }*/
    /*private _updateExchange(result:any) {
        console.log("calling _updateExchange(), result= ");
        console.log(result);
        console.log("this.exchange = ");

        this.exchange = result.xchange;
        console.log(this.exchange);
    }*/
    
}