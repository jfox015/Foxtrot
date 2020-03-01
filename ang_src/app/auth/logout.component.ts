import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, WalletService } from '../_services/index';

@Component({
  selector: 'app-logout',
  template: `<div class="logout"></div>`
})
export class LogoutComponent implements OnInit {

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthenticationService,
        private walletService: WalletService,       
        private alertService: AlertService) { }

  ngOnInit() {
  	// reset login status
      
      this.walletService.flushStorage();
      this.authService.logout();

      this.router.navigate(["/"]);
  }

}
