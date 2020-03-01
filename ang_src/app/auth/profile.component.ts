import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Currency, User } from '../_models/index';
import { AlertService, UserService, WalletService, AuthenticationService } from '../_services/index';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent {
    model: any = {};
    currentUser: User;
    user: User;
    baseCurrency:String;

    loading = false;
    currencies: Array<Currency>;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private walletService: WalletService,
        private authService: AuthenticationService) { }

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
        this.walletService.getCurrencies().subscribe(
            data => {
                this._processCurrencies(data);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
    updateProfile() {
        this.loading = true;
        this.userService.update(this.model)
            .subscribe(
                data => {
                    this.currentUser.firstName = this.model.firstName;
                    this.currentUser.lastName = this.model.lastName;
                    this.currentUser.email = this.model.email;
                    this.currentUser.baseCurrency = this.model.baseCurrency;
                    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                    this.alertService.success('Profile Update successful', true);
                    this.router.navigate(['home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    cancel() {
        this.authService.announceRegistering(false);
    }
    private _processCurrencies(result:any) {
        this.currencies = result.currencies;
        if (this.currencies.length == 0) {
            var curr = new Currency();
            curr.name = 'US Dollar';
            curr.symbol = 'usd';
            curr.char = '$';
            curr.charCode = '$';
            this.currencies.push(curr);
        }
        this.loading = false;
    }
}
