import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Currency } from '../_models/index';
import { AlertService, UserService, WalletService, AuthenticationService } from '../_services/index';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
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
    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.authService.announceRegistering(false);
                    this.model = {};
                    this.router.navigate(['login']);
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
