import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import * as _ from "lodash";
import * as moment from "moment";

import { Coin, ExchangeTable, User, Portfolio, Rates, Wallet, Transaction } from '../_models/index';
import { WalletService, AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: './exchange.component.html',
    styleUrls: ['./exchange.component.css']
})

export class ExchangeComponent implements OnInit {
    model: any = {};
    errorMessage: string;
    loading: boolean;
    selecting: boolean;
    validSelection: boolean;
    sending: boolean;
    exchanging: boolean;
    completed: boolean;
    noCoinSelection: boolean;
    noCoinExSelection: boolean;
    fixedAmount:boolean;
    portfolio: Portfolio;
    rates:Rates;
    rate:ExchangeTable;
    transaction: Transaction;
    
    currentUser: User;
    coins: Array<Coin>;
    wallet: Wallet;
    exWallet: Wallet;

    genericCoin:Coin;
    selectedCoin:Coin;
    selectedCoinStyle:String;
    selectedExCoin:Coin;
    selectedExCoinStyle:String;
    selectedExCoinAmount:Number;
    baseCurrency:String;
    selectedCoinCurrencyAmount:Number;
    selectedExCurrencyAmount:Number;
    amountType:String;
    baseTransactPercent: number;

    sendStepOne:String;
    sendStepTwo:String;

    tmout:any;
    
    
    constructor(private walletService: WalletService, 
                private alertService: AlertService, 
                private changeDetector: ChangeDetectorRef) {
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

        this.portfolio = new Portfolio();
        this.portfolio.wallets = [];
        this.rates = new Rates();
        this.wallet = null;
        this.exWallet = null;
        this.rate = null;
        this.transaction = new Transaction();
        this.transaction.cost = 0;
        this.transaction.coinCost = 0;
        
        this.selectedCoin = new Coin();
        this.selectedCoin.symbol = 'gen';
        this.selectedCoin.coinName = 'Generic';
        
        this.selectedExCoin = new Coin();
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
            this.walletService.loadPortfolio(this.currentUser._id).subscribe(
                data => {
                    this._processPortfolio(data);
                },
                error => {
                    this.alertService.error(error.errors);
                    this.loading = false;
                }
            );
        //} else {
        //    console.log("local portfolio exists, this.portfolio = ");
        //    console.log(this.portfolio);
        //    this.loadCoins();
        //}
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

    selectCoin(e, selCoin) {
        this.alertService.clear();
        var that = this;
        _.forEach(this.coins, function(coin) {
            if (coin.symbol === selCoin) {
                that.selectedCoin.symbol = coin.symbol;
                that.selectedCoin.coinName = coin.coinName;
            }
        }, that);
        _.forEach(this.portfolio.wallets, function(wallet) {
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
        this.walletService.getExchangeRates(this.selectedCoin.symbol).subscribe(
        data => {
            this._updateRate(data);
        },
        error => {
            this.alertService.error(error.errors);
        });
    }

    selectExCoin(e, selExCoin) {
        this.alertService.clear();
        var that = this;
        _.forEach(this.coins, function(coin) {
            if (coin.symbol === selExCoin) {
                that.selectedExCoin.symbol = coin.symbol;
                that.selectedExCoin.coinName = coin.coinName;
            }
        }, that);
        this.exWallet = null;
        _.forEach(this.portfolio.wallets, function(wallet) {
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
        } else {
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
        } else if (amountType === 'half') {
            this.fixedAmount = true;
            if (this.selectedCoin.symbol !== 'gen') {
                this.model.coinAmount = (this.wallet.coinBalance / 2);
            }
        } else {
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
        this.tmout = setTimeout(function() {
          console.log("runExchange"); // Will result in undefined;
          that._calculateExchange() // Here, this, reference to context of the function wrapper
        }, 4000);
    }

    _calculateExchange() {
        clearTimeout(this.tmout);
        this.exchanging = true;
        var that = this;
        this.sendStepOne = 'sendStepsInactive';
        this.sendStepTwo = 'sendStepsActive';
        this.tmout = setTimeout(function() {
          console.log("_calculateExchange"); // Will result in undefined;
          that._completeSend() // Here, this, reference to context of the function wrapper
        }, 4000);
    }

    _completeSend() {
        clearTimeout(this.tmout);
        this.walletService.getBalance(this.currentUser._id, this.selectedCoin.symbol).subscribe(
            data => {
                this.postTransaction(data);
            },
            error => {
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
            this.walletService.exchange(this.currentUser._id, data).subscribe(
                data => {
                    this._exchangeComplete();
                },
                error => {
                    this.alertService.error(error);
                    this._exchangeError();
            });
        } else {
            this.alertService.error("Insufficient coin balance for this transaction.");
            this._exchangeError();
        }
        
    }

    private _exchangeError() {
        this.selecting = true;
        this.validSelection = false;
        this.sending = false;
        this.exchanging = false;
        this.completed = false;
    }

    private _exchangeComplete() {
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
            } else {
                this.alertService.error("The amount entered exceeds the available amount of coin in the selected wallet. Please Note, transaction fees are deducted form you available balance at the time of exchange.");
                this.validSelection = false;
            }
        } else {
            this.selectedCoinCurrencyAmount = 0;
            this.validSelection = false;
        }
        this._updateValues();
    }

    private _updateValues() {
        
        if ((this.model.coinAmount !== '' && this.model.coinAmount > 0) && this.selectedExCoin.symbol !== 'gen') {
            var adjustedCoinAmount = (this.model.coinAmount - this.transaction.coinCost);
            this.selectedExCoinAmount = this.walletService.convert(adjustedCoinAmount, this.rate[this.selectedExCoin.symbol]);
            this.selectedExCurrencyAmount = adjustedCoinAmount*this.rate[this.wallet.baseCurrency];
            this.validSelection = true;
        } else {
            this.selectedExCoinAmount = 0;
            this.selectedExCurrencyAmount = 0;
            this.validSelection = false;
        }

        this.changeDetector.detectChanges();
    }

    private _processPortfolio(result:any) {
        this.portfolio = result.portfolio;
        //this.walletService.setPortfolio(this.portfolio, this.currentUser._id);
        this.loadCoins();
    }

    private _processCoins(result:any) {
        this.coins = result.coins || {};
        this.loading = false;
        this.selecting = true;
        this.changeDetector.detectChanges();
    }

    private _updateRate(result:any) {
        this.rate = result.rates;
        this._calculateValues();
        this.changeDetector.detectChanges();
    }

}