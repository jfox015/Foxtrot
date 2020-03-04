import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
    currentUser: User;
    user: User;
    errorMessage: string;

    constructor(private userService: UserService, private _authService: AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user = null;
    }

    ngOnInit() {
        //this.loadAllUsers();
        this.user = this._authService.getUserDetails();
    }

}