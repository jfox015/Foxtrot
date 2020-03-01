import { Component } from '@angular/core';
import { Subscription }   from 'rxjs'; 

import { AuthenticationService } from './_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent { 

    userSubscription:Subscription;
	signupSubscription:Subscription;
    userLoggedIn: boolean;
    registering: boolean;

    constructor(private _authService: AuthenticationService) {
        this.userLoggedIn = false;
        this.registering = false;
    }

    ngOnInit() {
		this.userSubscription = this._authService.userLoggedIn$.subscribe(
	  		message => {
	    		this.userLoggedIn = message;
	    	}
		);
        this.signupSubscription = this._authService.registering$.subscribe(
              status => {
                this.registering = status;
            }
        );
	}
}