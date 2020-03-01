import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { User, Portfolio, Wallet } from '../_models/index';
import { WalletService, AlertService } from '../_services/index';


@Component({
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
})
export class PortfolioComponent implements OnInit {

	currentUser: User;
    loading: boolean;
    portfolio: Portfolio;
    wallets: Wallet[];	  
	view: any[] = [];
    single: any[] = [];
    gradient: boolean = true;
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;

	colorScheme = {
	  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	constructor(private walletService: WalletService, 
                private alertService: AlertService, 
                private changeDetector: ChangeDetectorRef) {		
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
		
	private _loadPortfolio() {
        this.portfolio = this.walletService.getPortfolio(this.currentUser._id);
        if (this.portfolio == null) {
            this.walletService.loadPortfolio(this.currentUser._id).subscribe(
                data => {
                    this._processPortfolio(data);
                },
                error => {
                    this.alertService.error(error.errors);
                }
            );
        } else {
            this._completeInit();
        }

    }

    private _processPortfolio(result:any) {
        this.portfolio = result.portfolio;
        this.walletService.setPortfolio(this.portfolio, this.currentUser._id);
        this._completeInit();
    }

    private _completeInit() {
        this.wallets = this.portfolio.wallets;
        Object.assign(this, { single: this.wallets });
        this.loading = false;
        this.changeDetector.detectChanges();
    }
	
}